import React, { useState, useEffect, useRef } from 'react';
import { FaWhatsapp, FaTimes, FaRobot, FaUser, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { io, Socket } from 'socket.io-client';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
  options?: string[];
}

interface LeadInfo {
  nombre: string;
  empresa: string;
  consulta: string;
  telefono?: string;
}

interface ExecutiveMessage {
  conversationId: string;
  message: string;
  timestamp: Date;
  from: string;
}

const WhatsAppAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [leadInfo, setLeadInfo] = useState<LeadInfo>({
    nombre: '',
    empresa: '',
    consulta: ''
  });
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'disconnected' | 'connecting' | 'connected'>('disconnected');
  const [conversationId, setConversationId] = useState<string | null>(null);
  
  const socketRef = useRef<Socket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const whatsappNumber = '+56951723625';

  const faqResponses = {
    'servicios': 'Ofrecemos dos categorías principales:\n\n🎯 **Capacitación Estratégica**\n• Workshop Ejecutivo IA\n• Hoja de Ruta Personalizada\n\n⚡ **Soluciones Alto Impacto**\n• Optimización Geometalúrgica\n• Mantenimiento Predictivo\n• Asistente Geológico LLM\n\n¿Te interesa algún servicio específico?',
    'precios': 'Nuestros precios varían según el alcance del proyecto. Ofrecemos:\n\n💰 **Workshop Ejecutivo**: Desde $5,000 USD\n🚀 **Proyectos Piloto**: $15,000 - $50,000 USD\n🏭 **Implementación Completa**: $50,000+ USD\n\n*ROI promedio: 10x en 6 meses*\n\n¿Te gustaría una cotización personalizada?',
    'resultados': 'Nuestros casos de éxito incluyen:\n\n🥇 **Planta de Oro**: +1.5% recuperación ($2.8M/año)\n🏗️ **Flota de Cobre**: -35% downtime ($5.2M ahorro)\n🔬 **Análisis Geológico**: -70% tiempo análisis\n\n📊 **Stats generales**:\n• 95% proyectos exitosos\n• $2.5M ahorro promedio\n• 25+ operaciones optimizadas',
    'empresa': 'Somos especialistas en IA para el sector minero 🏭\n\n👥 **Nuestro equipo**:\n• Científicos de datos especializados\n• Expertos en recursos naturales\n• Especialistas en geometalurgia\n\n📈 **Experiencia**:\n• 25+ Operaciones optimizadas\n• 150+ Modelos implementados\n• $50M+ Valor generado',
    'demo': '¡Excelente! Ofrecemos demos gratuitas personalizadas 🎯\n\nEn la demo verás:\n✅ Análisis de tu operación actual\n✅ Identificación de oportunidades\n✅ ROI estimado para tu caso\n✅ Hoja de ruta de implementación\n\n¿Te gustaría agendar una demo ahora?'
  };

  const botMessages = [
    {
      text: '¡Hola! 👋 Soy el asistente de AI Generative Solutions. Estoy aquí para ayudarte con todo sobre IA para minería.',
      options: ['Ver servicios', 'Precios', 'Casos de éxito', 'Solicitar demo']
    },
    {
      text: '¿Cuál es tu nombre? 👤',
      options: []
    },
    {
      text: '¿De qué empresa o proyecto minero eres? 🏭',
      options: []
    },
    {
      text: '¿Cuál es tu consulta específica sobre IA para minería? 💬',
      options: ['Optimización de procesos', 'Mantenimiento predictivo', 'Análisis geológico', 'Capacitación ejecutiva', 'Otro tema']
    }
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        addBotMessage(botMessages[0]);
        setIsTyping(false);
      }, 1000);
    }
  }, [isOpen]);

  // Scroll automático al final cuando se agregan mensajes
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Limpiar socket al cerrar
  useEffect(() => {
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  const addBotMessage = (message: { text: string; options: string[] }) => {
    const newMessage: Message = {
      id: Date.now(),
      text: message.text,
      isBot: true,
      timestamp: new Date(),
      options: message.options
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleOptionClick = (option: string) => {
    addUserMessage(option);
    
    // Handle FAQ responses
    const lowerOption = option.toLowerCase();
    if (lowerOption.includes('servicios')) {
      setIsTyping(true);
      setTimeout(() => {
        addBotMessage({ text: faqResponses.servicios, options: ['Solicitar demo', 'Ver precios', 'Hablar con especialista'] });
        setIsTyping(false);
      }, 1500);
      return;
    }
    
    if (lowerOption.includes('precios')) {
      setIsTyping(true);
      setTimeout(() => {
        addBotMessage({ text: faqResponses.precios, options: ['Solicitar cotización', 'Ver casos de éxito', 'Agendar llamada'] });
        setIsTyping(false);
      }, 1500);
      return;
    }
    
    if (lowerOption.includes('casos') || lowerOption.includes('éxito')) {
      setIsTyping(true);
      setTimeout(() => {
        addBotMessage({ text: faqResponses.resultados, options: ['Solicitar demo', 'Ver más detalles', 'Hablar con especialista'] });
        setIsTyping(false);
      }, 1500);
      return;
    }
    
    if (lowerOption.includes('demo')) {
      setIsTyping(true);
      setTimeout(() => {
        addBotMessage({ text: faqResponses.demo, options: [] });
        setCurrentStep(1);
        setTimeout(() => {
          addBotMessage(botMessages[1]);
          setIsTyping(false);
        }, 1000);
      }, 1500);
      return;
    }

    if (lowerOption.includes('hablar') || lowerOption.includes('especialista') || lowerOption.includes('llamada')) {
      setCurrentStep(1);
      setIsTyping(true);
      setTimeout(() => {
        addBotMessage(botMessages[1]);
        setIsTyping(false);
      }, 1000);
      return;
    }

    // Handle form steps
    if (currentStep === 3) {
      setLeadInfo(prev => ({ ...prev, consulta: option }));
      connectToExecutive({ ...leadInfo, consulta: option });
      return;
    }

    // Handle waiting for agent options
    if (currentStep === 4) {
      if (lowerOption.includes('pregunta')) {
        setIsTyping(true);
        setTimeout(() => {
          addBotMessage({
            text: '¡Por supuesto! 🤔\n\nPuedes hacer tu pregunta adicional y nuestro especialista la tendrá en cuenta cuando se conecte.\n\n¿Cuál es tu pregunta adicional?',
            options: []
          });
          setCurrentStep(5); // Pregunta adicional
          setIsTyping(false);
        }, 1000);
      } else if (lowerOption.includes('email')) {
        setIsTyping(true);
        setTimeout(() => {
          addBotMessage({
            text: `Perfecto, ${leadInfo.nombre}! 📧\n\nHemos registrado tu preferencia de contacto por email.\n\n✅ Recibirás una respuesta en: contacto@aigenerativesolutions.com\n⏱️ Tiempo estimado: 24-48 horas\n📋 Incluiremos análisis preliminar de tu consulta\n\n¡Gracias por tu interés en nuestras soluciones de IA para minería!`,
            options: ['Cerrar chat']
          });
          setIsTyping(false);
        }, 1500);
      } else if (lowerOption.includes('esperaré') || lowerOption.includes('bien')) {
        setIsTyping(true);
        setTimeout(() => {
          addBotMessage({
            text: '¡Excelente actitud! 👍\n\nMantén esta ventana abierta. Nuestro especialista aparecerá aquí mismo cuando esté disponible.\n\n⚡ *Estado: Esperando especialista*\n🕐 *Tiempo estimado: 2-5 minutos*\n\n💡 *Tip: Mientras esperas, puedes navegar por nuestra página para conocer más casos de éxito.*',
            options: ['Cancelar y cerrar', 'Cambiar a contacto por email']
          });
          setIsTyping(false);
        }, 1500);
      } else if (lowerOption.includes('cancelar') || lowerOption.includes('cerrar')) {
        setIsOpen(false);
        setTimeout(() => {
          setMessages([]);
          setCurrentStep(0);
          setLeadInfo({ nombre: '', empresa: '', consulta: '' });
          setConversationId(null);
          if (socketRef.current) {
            socketRef.current.disconnect();
            socketRef.current = null;
          }
        }, 500);
      }
      return;
    }

    // Handle conversación activa (paso 6)
    if (currentStep === 6) {
      if (lowerOption.includes('otra pregunta')) {
        setCurrentStep(7); // Modo pregunta libre
        setIsTyping(true);
        setTimeout(() => {
          addBotMessage({
            text: '¿Cuál es tu pregunta adicional? 🤔\n\nEscríbela abajo y el especialista la recibirá inmediatamente.',
            options: []
          });
          setIsTyping(false);
        }, 1000);
      } else if (lowerOption.includes('cotización')) {
        if (socketRef.current && conversationId) {
          sendMessageToExecutive('Solicito cotización formal para mi proyecto de IA en minería', leadInfo);
          addUserMessage(option);
        }
      } else if (lowerOption.includes('reunión')) {
        if (socketRef.current && conversationId) {
          sendMessageToExecutive('Me gustaría agendar una reunión para discutir mi proyecto en detalle', leadInfo);
          addUserMessage(option);
        }
      } else if (lowerOption.includes('finalizar')) {
        setIsTyping(true);
        setTimeout(() => {
          addBotMessage({
            text: `¡Gracias por contactarnos, ${leadInfo.nombre}! 🙏\n\n✅ Tu conversación ha sido guardada\n📧 Recibirás seguimiento por email\n🤝 Esperamos poder ayudarte con tu proyecto de IA para minería\n\n¡Hasta pronto!`,
            options: ['Cerrar chat']
          });
          setIsTyping(false);
        }, 1000);
      }
      return;
    }
  };

  const handleUserInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    addUserMessage(userInput);
    
    if (currentStep === 1) {
      setLeadInfo(prev => ({ ...prev, nombre: userInput }));
      setCurrentStep(2);
      setIsTyping(true);
      setTimeout(() => {
        addBotMessage(botMessages[2]);
        setIsTyping(false);
      }, 1000);
    } else if (currentStep === 2) {
      setLeadInfo(prev => ({ ...prev, empresa: userInput }));
      setCurrentStep(3);
      setIsTyping(true);
      setTimeout(() => {
        addBotMessage(botMessages[3]);
        setIsTyping(false);
      }, 1000);
    } else if (currentStep === 3) {
      const finalLeadInfo = { ...leadInfo, consulta: userInput };
      setLeadInfo(finalLeadInfo);
      connectToExecutive(finalLeadInfo);
    } else if (currentStep === 5) {
      // Pregunta adicional
      setIsTyping(true);
      setTimeout(() => {
        addBotMessage({
          text: `Pregunta adicional registrada: "${userInput}"\n\n✅ Nuestro especialista tendrá toda esta información cuando se conecte:\n\n👤 Cliente: ${leadInfo.nombre}\n🏭 Empresa: ${leadInfo.empresa}\n💬 Consulta principal: ${leadInfo.consulta}\n❓ Pregunta adicional: ${userInput}\n\n⚡ *Estado: Esperando especialista*`,
          options: ['Está bien, esperaré', 'Cambiar a contacto por email']
        });
        setCurrentStep(4); // Volver a estado de espera
        setIsTyping(false);
      }, 1500);
    } else if (currentStep === 6 || currentStep === 7) {
      // Conversación activa - enviar mensaje al ejecutivo
      if (socketRef.current && conversationId) {
        sendMessageToExecutive(userInput, leadInfo);
        
        // Confirmar que el mensaje fue enviado
        setIsTyping(true);
        setTimeout(() => {
          addBotMessage({
            text: '📤 Mensaje enviado al especialista. Recibirás la respuesta aquí mismo.',
            options: []
          });
          setIsTyping(false);
        }, 500);
      }
    }

    setUserInput('');
  };

  // Inicializar conexión Socket.io
  const initializeSocket = () => {
    if (socketRef.current) return;
    
    setConnectionStatus('connecting');
    
    // Usar la URL del entorno o localhost para desarrollo
    const socketUrl = process.env.NODE_ENV === 'production' 
      ? window.location.origin // En producción, usar el mismo dominio
      : 'http://localhost:3001'; // En desarrollo, usar localhost
    
    socketRef.current = io(socketUrl, {
      transports: ['websocket', 'polling'],
      timeout: 20000,
      forceNew: true
    });

    socketRef.current.on('connect', () => {
      console.log('Conectado al servidor');
      setConnectionStatus('connected');
    });

    socketRef.current.on('disconnect', () => {
      console.log('Desconectado del servidor');
      setConnectionStatus('disconnected');
    });

    socketRef.current.on('conversation-joined', (data) => {
      console.log('Unido a conversación:', data);
      addBotMessage({
        text: `🔗 Conexión establecida exitosamente!\n\nID de conversación: ${data.conversationId}\n\n✅ El sistema está listo para recibir respuestas del especialista en tiempo real.`,
        options: []
      });
    });

    socketRef.current.on('executive-message', (data: ExecutiveMessage) => {
      console.log('Mensaje del ejecutivo recibido:', data);
      
      // Agregar mensaje del ejecutivo al chat
      const executiveMessage: Message = {
        id: Date.now(),
        text: data.message,
        isBot: false, // Será mostrado como mensaje del ejecutivo
        timestamp: new Date(data.timestamp),
        options: []
      };
      
      setMessages(prev => [...prev, executiveMessage]);
      
      // Mostrar confirmación de que el ejecutivo se conectó
      setTimeout(() => {
        addBotMessage({
          text: `✅ ${data.from} ha respondido tu consulta.\n\nPuedes continuar la conversación escribiendo tu respuesta abajo. El especialista recibirá tus mensajes en tiempo real.`,
          options: ['Hacer otra pregunta', 'Solicitar cotización', 'Agendar reunión', 'Finalizar chat']
        });
        setCurrentStep(6); // Nuevo paso: conversación activa
      }, 1000);
    });

    socketRef.current.on('message-sent', (data) => {
      console.log('Mensaje enviado:', data);
      addBotMessage({
        text: `📤 ${data.message}`,
        options: []
      });
    });

    socketRef.current.on('message-error', (data) => {
      console.error('Error de mensaje:', data);
      addBotMessage({
        text: `❌ Error: ${data.error}\n\nPor favor intenta nuevamente o contacta por email: contacto@aigenerativesolutions.com`,
        options: ['Reintentar', 'Contacto por email']
      });
    });
  };

  // Función para enviar mensaje al ejecutivo
  const sendMessageToExecutive = (message: string, userInfo: LeadInfo) => {
    if (!socketRef.current || !conversationId) return;

    socketRef.current.emit('client-message', {
      conversationId,
      message,
      userInfo
    });
  };

  // Generar ID único para la conversación
  const generateConversationId = () => {
    return `conv-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };

  const connectToExecutive = (info: LeadInfo) => {
    const newConversationId = generateConversationId();
    setConversationId(newConversationId);
    
    // Inicializar socket si no existe
    if (!socketRef.current) {
      initializeSocket();
    }
    
    setIsTyping(true);
    setTimeout(() => {
      addBotMessage({
        text: `¡Perfecto, ${info.nombre}! 🎯\n\nTu consulta sobre "${info.consulta}" para ${info.empresa} ha sido registrada.\n\n✅ Conectando con especialista en tiempo real\n🔄 Estableciendo comunicación segura\n💬 Mantén esta ventana abierta\n\n*Inicializando sistema...*`,
        options: []
      });
      setIsTyping(false);
      
      setTimeout(() => {
        if (socketRef.current) {
          // Unirse a la conversación
          socketRef.current.emit('join-conversation', {
            conversationId: newConversationId,
            userInfo: info
          });
          
          // Enviar mensaje inicial
          sendMessageToExecutive(
            `Solicito información sobre: ${info.consulta}`,
            info
          );
          
          setIsTyping(true);
          setTimeout(() => {
            addBotMessage({
              text: `🔔 ¡Especialista notificado!\n\n👨‍💼 Un experto en IA para minería ha recibido tu consulta y responderá en breve.\n\n⚡ Tiempo estimado: 2-5 minutos\n🔄 Estado: Esperando conexión\n📱 El especialista puede responder desde su WhatsApp\n\n*Conversación en tiempo real activada*`,
              options: ['Tengo una pregunta adicional', 'Prefiero ser contactado por email', 'Está bien, esperaré']
            });
            setIsTyping(false);
            setCurrentStep(4); // Esperando agente
          }, 2000);
        }
      }, 3000);
    }, 1500);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 ${
            isOpen ? 'rotate-45' : 'hover:rotate-12'
          }`}
        >
          {isOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaWhatsapp className="h-6 w-6" />
          )}
          
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-25"></div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            💬 Asistente IA Minería
          </div>
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-[480px] bg-white rounded-2xl shadow-2xl z-[9999] border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <FaRobot className="h-8 w-8" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-bold">Asistente IA Minería</h3>
                <p className="text-sm opacity-90 flex items-center gap-2">
                  {connectionStatus === 'connected' && currentStep >= 4 ? (
                    <>
                      <FaCheckCircle className="h-3 w-3 text-green-300" />
                      Conectado en tiempo real
                    </>
                  ) : connectionStatus === 'connecting' ? (
                    <>
                      <div className="h-3 w-3 bg-yellow-300 rounded-full animate-pulse"></div>
                      Conectando...
                    </>
                  ) : (
                    <>
                      <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
                      En línea
                    </>
                  )}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <FaTimes className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-green-500 text-white'
                  }`}
                >
                  <div className="whitespace-pre-wrap text-sm">{message.text}</div>
                  {message.options && message.options.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {message.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleOptionClick(option)}
                          className="block w-full text-left px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <div className="border-t border-gray-200 p-4">
            <form onSubmit={handleUserInput} className="flex space-x-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                disabled={currentStep === 0 || isTyping}
              />
              <button
                type="submit"
                disabled={!userInput.trim() || currentStep === 0 || isTyping}
                className="bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
              >
                <FaPaperPlane className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppAgent; 