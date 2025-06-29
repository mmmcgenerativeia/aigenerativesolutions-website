# 🎯 Dashboard Administrativo WhatsApp - AIGS

## 📋 **Resumen del Sistema**

Ahora tienes un sistema completo para gestionar conversaciones de WhatsApp a través de Twilio:

### ✅ **Lo que ya funciona:**
1. **Formulario web** en tu sitio que conecta con clientes
2. **Servidor Twilio** que maneja webhooks y mensajes
3. **Dashboard administrativo** para responder desde el navegador
4. **Notificaciones en tiempo real** de nuevos mensajes

---

## 🚀 **Cómo usar el Dashboard**

### **1. Acceder al Dashboard:**
- Ve a: `http://localhost:3000/admin`
- Contraseña: `aigs2024`
- También hay un enlace discreto "Admin" en el footer del sitio

### **2. Ver conversaciones:**
- **Lista izquierda**: Todas las conversaciones activas
- **Badges naranjas**: Número de mensajes no leídos
- **Click en conversación**: Se abre el chat completo

### **3. Responder mensajes:**
- **Área derecha**: Chat completo con historial
- **Caja de texto**: Escribe tu respuesta
- **Enter**: Envía mensaje
- **Shift+Enter**: Nueva línea

### **4. Notificaciones en tiempo real:**
- **Punto verde/rojo**: Estado de conexión
- **Contador**: Conversaciones activas
- **Actualizaciones automáticas** cuando llegan mensajes

---

## ⚙️ **Configuración de Producción**

### **Variables de entorno necesarias (.env):**
```env
TWILIO_ACCOUNT_SID=tu_account_sid
TWILIO_AUTH_TOKEN=tu_auth_token
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
PORT=3001
FRONTEND_URL=https://tu-dominio.com
```

### **Para Railway/Vercel:**
1. **Servidor (Railway)**: Despliega la carpeta `server/`
2. **Frontend (Vercel)**: Despliega automáticamente
3. **Webhook URL**: Configura en Twilio: `https://tu-servidor.railway.app/webhook/whatsapp`

---

## 🔄 **Flujo Completo del Sistema**

### **Cuando un cliente envía un mensaje:**

1. **Cliente completa formulario** en sitio web → 
2. **Socket.IO envía mensaje** al servidor → 
3. **Servidor guarda conversación** → 
4. **Dashboard recibe notificación** en tiempo real →
5. **Twilio envía WhatsApp** a tu número (opcional) →
6. **Respondes desde dashboard** →
7. **Cliente recibe respuesta** instantáneamente

### **Ventajas del nuevo sistema:**
- ✅ **No necesitas WhatsApp Business** en tu teléfono
- ✅ **Respuestas más rápidas** desde computadora
- ✅ **Historial completo** de conversaciones
- ✅ **Múltiples agentes** pueden acceder
- ✅ **Interfaz profesional** para atención al cliente

---

## 📱 **Comandos para iniciar:**

### **Desarrollo:**
```bash
# Terminal 1: Frontend
npm run dev

# Terminal 2: Servidor
cd server
node index.js
```

### **Producción:**
```bash
# Frontend
npm run build && npm start

# Servidor
cd server
node index.js
```

---

## 🎛️ **Endpoints disponibles:**

- **`GET /api/conversations`**: Lista todas las conversaciones
- **`GET /api/health`**: Estado del servidor
- **`POST /webhook/whatsapp`**: Webhook principal de Twilio
- **`POST /webhook/fallback`**: Webhook de respaldo
- **`POST /webhook/status`**: Estado de mensajes

---

## 🔧 **Configuración Twilio Webhook:**

En tu cuenta Twilio:
1. Ve a **Programmable Messaging → WhatsApp → Sandbox** (o número productivo)
2. Configura webhook: `https://tu-servidor.railway.app/webhook/whatsapp`
3. Método: **POST**
4. Eventos: **Incoming messages**

---

## 🚨 **Solución de problemas:**

### **No recibo mensajes en el dashboard:**
- Verifica que el servidor esté corriendo
- Revisa la conexión Socket.IO (punto verde en dashboard)
- Confirma que el webhook esté configurado en Twilio

### **Los mensajes no se envían a clientes:**
- Verifica variables de entorno Twilio
- Revisa logs del servidor para errores
- Confirma que el número de WhatsApp esté verificado

### **Dashboard no carga:**
- Verifica que Next.js esté corriendo en puerto 3000
- Confirma que la contraseña sea `aigs2024`
- Revisa la consola del navegador para errores

---

¡Todo listo! 🎉 **Ahora puedes gestionar todas las consultas de IA para minería directamente desde tu navegador.** 