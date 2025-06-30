import React, { useState, useRef, useEffect } from 'react';
import { FaWhatsapp, FaTimes, FaRobot, FaPaperPlane } from 'react-icons/fa';

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
  email: string;
  consulta: string;
}

const WhatsAppAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [leadInfo, setLeadInfo] = useState<LeadInfo>({ nombre: '', empresa: '', email: '', consulta: '' });
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mensajes del bot
  const botMessages = [
    {
      text: '¡Hola! 👋 Soy el asistente de IA para minería de AIGS.\n\n¿En qué podemos ayudarte hoy?',
      options: ['Consultar servicios', 'Solicitar demo', 'Ver precios', 'Casos de éxito', 'Hablar con especialista']
    },
    {
      text: '¡Perfecto! Para poder ayudarte mejor, necesito algunos datos.\n\n¿Cuál es tu nombre? 👤',
      options: []
    },
    {
      text: '¡Excelente! ¿Cuál es el nombre de tu empresa? 🏭',
      options: []
    },
    {
      text: '¿Cuál es tu email de contacto? 📧',
      options: []
    },
    {
      text: '¿En qué específicamente podemos ayudarte con IA para minería? 🤔\n\nEjemplos:\n• Optimización de planta\n• Mantenimiento predictivo\n• Análisis geológico\n• Geometalurgia\n• Otro tema específico',
      options: []
    }
  ];

  // Respuestas FAQ
  const faqResponses = {
    servicios: 'Ofrecemos dos tipos de soluciones:\n\n🎯 **Capacitación y Adopción Estratégica**\n• Workshop ejecutivo en IA\n• Hoja de ruta personalizada\n\n⚡ **Soluciones de Alto Impacto**\n• Optimización de recuperación\n• Mantenimiento predictivo\n• Asistente geológico inteligente\n\n¿Te interesa alguna en particular?',
    precios: 'Nuestros precios varían según el tipo de proyecto:\n\n💡 **Workshops**: Desde $5,000 USD\n📊 **Hoja de Ruta**: $8,000 - $15,000 USD\n🚀 **Proyectos de IA**: $25,000 - $200,000 USD\n\n*Los precios dependen del alcance y complejidad*\n\n¿Quieres una cotización personalizada?',
    resultados: '📈 **Resultados comprobados**:\n\n• +15% recuperación promedio\n• -30% downtime no planificado\n• 10x ROI promedio\n• $2.5M ahorro anual promedio\n\n*Casos reales en operaciones de cobre, oro y hierro*\n\n¿Te gustaría conocer un caso específico?',
    demo: '🎯 **Demo personalizada de 30 minutos**\n\nTe mostraremos cómo nuestras soluciones se aplican a tu operación específica.\n\n¿Procedemos con tu información de contacto?'
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(botMessages[0]);
      }, 500);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
      timestamp: new Date(),
      options: []
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleOptionClick = (option: string) => {
    addUserMessage(option);
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

    if (lowerOption.includes('hablar') || lowerOption.includes('especialista') || lowerOption.includes('llamada') || lowerOption.includes('cotización')) {
      setCurrentStep(1);
      setIsTyping(true);
      setTimeout(() => {
        addBotMessage(botMessages[1]);
        setIsTyping(false);
      }, 1000);
      return;
    }

    if (lowerOption.includes('cerrar')) {
      setIsOpen(false);
      setTimeout(() => {
        setMessages([]);
        setCurrentStep(0);
        setLeadInfo({ nombre: '', empresa: '', email: '', consulta: '' });
      }, 500);
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
      setLeadInfo(prev => ({ ...prev, email: userInput }));
      setCurrentStep(4);
      setIsTyping(true);
      setTimeout(() => {
        addBotMessage(botMessages[4]);
        setIsTyping(false);
      }, 1000);
    } else if (currentStep === 4) {
      const finalLeadInfo = { ...leadInfo, consulta: userInput };
      setLeadInfo(finalLeadInfo);
      sendContactEmail(finalLeadInfo);
    }

    setUserInput('');
  };

  const sendContactEmail = (info: LeadInfo) => {
    setIsTyping(true);
    setTimeout(() => {
      addBotMessage({
        text: `¡Perfecto, ${info.nombre}! 🎯\n\nHemos registrado tu consulta sobre "${info.consulta}" para ${info.empresa}.\n\n✅ Tu solicitud ha sido enviada por email\n📧 Recibirás respuesta en: ${info.email}\n⏱️ Tiempo estimado: 24-48 horas\n📋 Incluiremos análisis preliminar personalizado\n\n¡Gracias por tu interés en nuestras soluciones de IA para minería!`,
        options: ['Cerrar chat', 'Hacer otra consulta']
      });
      setIsTyping(false);
      
      // Aquí podrías enviar el email real o guardarlo en una base de datos
      console.log('Nueva consulta de contacto:', info);
      
    }, 2000);
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
            💬 Consulta por Email
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
                <p className="text-sm opacity-90">
                  💌 Contacto por Email
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
                      : 'bg-green-500 text-gray-900 font-medium'
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
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm text-gray-900 placeholder-gray-500"
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