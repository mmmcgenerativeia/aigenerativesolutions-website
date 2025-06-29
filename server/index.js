const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const twilio = require('twilio');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración Twilio
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

console.log('🔧 Configuración Twilio:');
console.log('Account SID:', accountSid ? `${accountSid.substring(0, 10)}...` : '❌ NO CONFIGURADO');
console.log('Auth Token:', authToken ? `${authToken.substring(0, 10)}...` : '❌ NO CONFIGURADO');

let client = null;
if (accountSid && authToken) {
  try {
    client = twilio(accountSid, authToken);
    console.log('✅ Cliente Twilio inicializado correctamente');
  } catch (error) {
    console.error('❌ Error inicializando Twilio:', error.message);
  }
} else {
  console.log('⚠️  Twilio no configurado - funcionará en modo simulación');
}

// Almacenamiento en memoria para conversaciones activas
const activeConversations = new Map();
const connectedClients = new Map();

// Configuración WhatsApp Business
const WHATSAPP_BUSINESS_NUMBER = '+56951723625'; // Tu número de WhatsApp Business
const TWILIO_WHATSAPP_NUMBER = process.env.TWILIO_WHATSAPP_NUMBER || 'whatsapp:+14155238886';

// Socket.io Connection
io.on('connection', (socket) => {
  console.log('Cliente conectado:', socket.id);

  // Cliente se une a una conversación
  socket.on('join-conversation', (data) => {
    const { conversationId, userInfo } = data;
    
    socket.join(conversationId);
    connectedClients.set(socket.id, { conversationId, userInfo });
    
    console.log(`Cliente ${socket.id} se unió a conversación ${conversationId}`);
    
    // Confirmar conexión
    socket.emit('conversation-joined', { 
      conversationId, 
      status: 'connected',
      message: 'Conectado al sistema de chat en tiempo real'
    });
  });

  // Mensaje desde el cliente web
  socket.on('client-message', async (data) => {
    const { conversationId, message, userInfo } = data;
    
    console.log('Mensaje del cliente:', { conversationId, message, userInfo });
    
    // Guardar en conversación activa
    if (!activeConversations.has(conversationId)) {
      activeConversations.set(conversationId, {
        id: conversationId,
        userInfo,
        messages: [],
        status: 'active',
        createdAt: new Date()
      });
    }
    
    const conversation = activeConversations.get(conversationId);
    conversation.messages.push({
      id: Date.now(),
      from: 'client',
      message,
      timestamp: new Date()
    });
    
    // Enviar mensaje al ejecutivo vía WhatsApp
    try {
      const whatsappMessage = `🔔 NUEVA CONSULTA WEB - AI Generative Solutions

👤 Cliente: ${userInfo.nombre}
🏭 Empresa: ${userInfo.empresa}
💬 Mensaje: ${message}
🆔 ID Conversación: ${conversationId}

---
INSTRUCCIONES PARA RESPONDER:
1. Responde a este WhatsApp con el formato:
   ID:${conversationId} [tu respuesta]

2. Ejemplo: "ID:${conversationId} Hola ${userInfo.nombre}, gracias por contactarnos. Te ayudo con tu consulta sobre IA para minería..."

⚠️ IMPORTANTE: Incluye siempre "ID:${conversationId}" al inicio de tu respuesta para que se envíe al cliente correcto.

🌐 El cliente está esperando en: ${process.env.FRONTEND_URL || 'localhost:3000'}`;

      if (client) {
        await client.messages.create({
          body: whatsappMessage,
          from: TWILIO_WHATSAPP_NUMBER,
          to: `whatsapp:${WHATSAPP_BUSINESS_NUMBER}`
        });
        console.log('✅ Notificación enviada al ejecutivo por WhatsApp');
      } else {
        console.log('📱 MODO SIMULACIÓN - Mensaje que se enviaría:');
        console.log(whatsappMessage);
        console.log('📞 Destinatario:', WHATSAPP_BUSINESS_NUMBER);
      }
      
      // Confirmar al cliente que su mensaje fue enviado
      socket.emit('message-sent', {
        conversationId,
        status: 'delivered',
        message: client ? 'Mensaje enviado al especialista. Esperando respuesta...' : 'Mensaje registrado (modo simulación). Configurar Twilio para envío real.'
      });

    } catch (error) {
      console.error('❌ Error enviando WhatsApp:', error);
      socket.emit('message-error', {
        conversationId,
        error: 'Error enviando mensaje al especialista'
      });
    }
  });

  // Desconexión del cliente
  socket.on('disconnect', () => {
    const clientData = connectedClients.get(socket.id);
    if (clientData) {
      console.log(`Cliente ${socket.id} desconectado de conversación ${clientData.conversationId}`);
      connectedClients.delete(socket.id);
    }
  });
});

// Webhook para recibir respuestas del ejecutivo desde WhatsApp
app.post('/webhook/whatsapp', (req, res) => {
  console.log('Webhook WhatsApp recibido:', req.body);
  
  const { Body, From } = req.body;
  
  // Verificar que el mensaje viene del ejecutivo
  if (From !== `whatsapp:${WHATSAPP_BUSINESS_NUMBER}`) {
    return res.status(200).send('OK');
  }
  
  // Extraer ID de conversación y mensaje
  const idMatch = Body.match(/^ID:([a-zA-Z0-9-]+)\s+(.*)/s);
  
  if (!idMatch) {
    // Enviar instrucciones al ejecutivo si no usa el formato correcto
    if (client) {
      client.messages.create({
        body: `❌ FORMATO INCORRECTO
        
Para responder a un cliente, usa este formato:
ID:[código-conversación] [tu respuesta]

Ejemplo:
ID:conv-123abc Hola Juan, gracias por contactarnos...

🔍 Verifica el último mensaje que recibiste para obtener el ID correcto.`,
        from: TWILIO_WHATSAPP_NUMBER,
        to: `whatsapp:${WHATSAPP_BUSINESS_NUMBER}`
      });
    } else {
      console.log('📱 MODO SIMULACIÓN - Formato incorrecto del ejecutivo');
    }
    
    return res.status(200).send('OK');
  }
  
  const conversationId = idMatch[1];
  const executiveMessage = idMatch[2].trim();
  
  // Buscar conversación activa
  if (!activeConversations.has(conversationId)) {
    // Notificar al ejecutivo que la conversación no existe o expiró
    if (client) {
      client.messages.create({
        body: `⚠️ CONVERSACIÓN NO ENCONTRADA

El ID "${conversationId}" no existe o la conversación ya expiró.

🔍 Verifica el ID de conversación en el mensaje original.`,
        from: TWILIO_WHATSAPP_NUMBER,
        to: `whatsapp:${WHATSAPP_BUSINESS_NUMBER}`
      });
    } else {
      console.log('📱 MODO SIMULACIÓN - Conversación no encontrada:', conversationId);
    }
    
    return res.status(200).send('OK');
  }
  
  const conversation = activeConversations.get(conversationId);
  
  // Agregar mensaje del ejecutivo a la conversación
  conversation.messages.push({
    id: Date.now(),
    from: 'executive',
    message: executiveMessage,
    timestamp: new Date()
  });
  
  // Enviar mensaje al cliente en tiempo real
  io.to(conversationId).emit('executive-message', {
    conversationId,
    message: executiveMessage,
    timestamp: new Date(),
    from: 'Especialista IA Minería'
  });
  
  console.log(`Mensaje del ejecutivo enviado a conversación ${conversationId}:`, executiveMessage);
  
  // Confirmar recepción al ejecutivo
  if (client) {
    client.messages.create({
      body: `✅ MENSAJE ENVIADO

Tu respuesta fue entregada al cliente exitosamente.

💬 Mensaje: "${executiveMessage.substring(0, 100)}${executiveMessage.length > 100 ? '...' : ''}"
🆔 Conversación: ${conversationId}

El cliente puede responder y recibirás notificación automáticamente.`,
      from: TWILIO_WHATSAPP_NUMBER,
      to: `whatsapp:${WHATSAPP_BUSINESS_NUMBER}`
    });
  } else {
    console.log('📱 MODO SIMULACIÓN - Confirmación de mensaje enviado al ejecutivo');
  }
  
  res.status(200).send('OK');
});

// Webhook para fallback cuando el endpoint principal falla
app.post('/webhook/fallback', (req, res) => {
  console.log('⚠️ Webhook fallback activado:', req.body);
  
  // Log del error para debugging
  console.error('Error en webhook principal, usando fallback');
  
  // Notificar al administrador sobre el problema
  if (client) {
    client.messages.create({
      body: `🚨 ALERTA SISTEMA

El webhook principal de WhatsApp ha fallado. Se activó el endpoint de fallback.

🔧 Revisar servidor y conectividad.
⏰ Timestamp: ${new Date().toISOString()}

El sistema continuará operando con funcionalidad limitada.`,
      from: TWILIO_WHATSAPP_NUMBER,
      to: `whatsapp:${WHATSAPP_BUSINESS_NUMBER}`
    });
  }
  
  res.status(200).send('Fallback OK');
});

// Webhook para recibir updates de estado de mensajes
app.post('/webhook/status', (req, res) => {
  console.log('📊 Status update recibido:', req.body);
  
  const { MessageSid, MessageStatus, ErrorCode, ErrorMessage } = req.body;
  
  // Log del estado del mensaje
  console.log(`Mensaje ${MessageSid}: ${MessageStatus}`);
  
  // Si hay errores, notificar
  if (ErrorCode) {
    console.error(`Error en mensaje ${MessageSid}: ${ErrorCode} - ${ErrorMessage}`);
    
    // Opcional: notificar al administrador sobre errores críticos
    if (ErrorCode === '21211' || ErrorCode === '21614') { // Errores críticos de Twilio
      if (client) {
        client.messages.create({
          body: `⚠️ ERROR DE ENTREGA

Mensaje ID: ${MessageSid}
Error: ${ErrorCode} - ${ErrorMessage}
Estado: ${MessageStatus}

🔧 Revisar configuración de WhatsApp Business.`,
          from: TWILIO_WHATSAPP_NUMBER,
          to: `whatsapp:${WHATSAPP_BUSINESS_NUMBER}`
        });
      }
    }
  }
  
  res.status(200).send('Status OK');
});

// Endpoint para obtener estado de conversaciones (opcional, para dashboard)
app.get('/api/conversations', (req, res) => {
  const conversations = Array.from(activeConversations.values());
  res.json({
    total: conversations.length,
    conversations: conversations.map(conv => ({
      id: conv.id,
      userInfo: conv.userInfo,
      messageCount: conv.messages.length,
      status: conv.status,
      createdAt: conv.createdAt,
      lastMessage: conv.messages[conv.messages.length - 1]
    }))
  });
});

// Endpoint de salud
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date(),
    activeConversations: activeConversations.size,
    connectedClients: connectedClients.size
  });
});

// Limpieza de conversaciones inactivas (cada 30 minutos)
setInterval(() => {
  const now = new Date();
  const thirtyMinutesAgo = new Date(now.getTime() - 30 * 60 * 1000);
  
  for (const [conversationId, conversation] of activeConversations.entries()) {
    if (conversation.createdAt < thirtyMinutesAgo) {
      activeConversations.delete(conversationId);
      console.log(`Conversación ${conversationId} eliminada por inactividad`);
    }
  }
}, 30 * 60 * 1000);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en puerto ${PORT}`);
  console.log(`📱 WhatsApp Business: ${WHATSAPP_BUSINESS_NUMBER}`);
  console.log(`🔗 Webhook disponible en: http://localhost:${PORT}/webhook/whatsapp`);
});

module.exports = { app, server, io }; 