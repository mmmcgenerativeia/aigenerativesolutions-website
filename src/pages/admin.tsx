import React, { useState, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

interface UserInfo {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
}

interface Message {
  id: number;
  from: 'client' | 'executive';
  message: string;
  timestamp: Date;
}

interface Conversation {
  id: string;
  userInfo: UserInfo;
  messages: Message[];
  status: 'active' | 'closed';
  messageCount: number;
  createdAt: Date;
  lastMessage?: Message;
  unreadCount?: number;
}

const AdminDashboard: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Contraseña simple para acceso (en producción usar autenticación real)
  const ADMIN_PASSWORD = 'aigs2024';

  useEffect(() => {
    if (!isAuthenticated) return;

    // Conectar a Socket.IO
    const serverUrl = process.env.NODE_ENV === 'production' 
      ? process.env.NEXT_PUBLIC_SERVER_URL || 'https://tu-servidor-railway.railway.app'
      : 'http://localhost:3003';
    const newSocket = io(serverUrl);
    setSocket(newSocket);

    newSocket.on('connect', () => {
      console.log('Conectado al servidor');
      setIsConnected(true);
      
      // Unirse como administrador
      newSocket.emit('admin-connect', { role: 'admin' });
    });

    newSocket.on('disconnect', () => {
      console.log('Desconectado del servidor');
      setIsConnected(false);
    });

    // Escuchar conversaciones existentes del servidor
    newSocket.on('conversations-update', (conversations: Conversation[]) => {
      console.log('Conversaciones recibidas del servidor:', conversations);
      setConversations(conversations);
    });

    // Escuchar nuevas conversaciones
    newSocket.on('new-conversation', (conversation: Conversation) => {
      console.log('Nueva conversación:', conversation);
      setConversations(prev => {
        const exists = prev.find(c => c.id === conversation.id);
        if (exists) {
          return prev.map(c => c.id === conversation.id ? conversation : c);
        }
        return [...prev, conversation];
      });
    });

    // Escuchar nuevos mensajes de clientes
    newSocket.on('client-message-admin', (data: { conversationId: string; message: Message; conversation?: Conversation }) => {
      console.log('Mensaje de cliente para admin:', data);
      
      setConversations(prev => {
        const exists = prev.find(c => c.id === data.conversationId);
        
        if (!exists && data.conversation) {
          // Nueva conversación
          return [...prev, {
            ...data.conversation,
            messages: [...data.conversation.messages],
            unreadCount: 1
          }];
        } else {
          // Conversación existente, agregar mensaje
          return prev.map(conv => 
            conv.id === data.conversationId 
              ? { 
                  ...conv, 
                  messages: [...conv.messages, data.message],
                  lastMessage: data.message,
                  unreadCount: (conv.unreadCount || 0) + 1
                }
              : conv
          );
        }
      });
    });

    // Cargar conversaciones existentes
    loadConversations();

    return () => {
      newSocket.disconnect();
    };
  }, [isAuthenticated]);

  useEffect(() => {
    scrollToBottom();
  }, [selectedConversation, conversations]);

  const loadConversations = async () => {
    try {
      const serverUrl = process.env.NODE_ENV === 'production' 
        ? process.env.NEXT_PUBLIC_SERVER_URL || 'https://tu-servidor-railway.railway.app'
        : 'http://localhost:3003';
      const response = await fetch(`${serverUrl}/api/conversations`);
      const data = await response.json();
      setConversations(data.conversations || []);
    } catch (error) {
      console.error('Error cargando conversaciones:', error);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendMessage = () => {
    if (!newMessage.trim() || !selectedConversation || !socket) return;

    const messageData = {
      conversationId: selectedConversation,
      message: newMessage,
      from: 'executive'
    };

    socket.emit('admin-message', messageData);
    
    // Actualizar localmente
    setConversations(prev => prev.map(conv => 
      conv.id === selectedConversation 
        ? { 
            ...conv, 
            messages: [...conv.messages, {
              id: Date.now(),
              from: 'executive',
              message: newMessage,
              timestamp: new Date()
            }]
          }
        : conv
    ));

    setNewMessage('');
  };

  const markAsRead = (conversationId: string) => {
    setConversations(prev => prev.map(conv => 
      conv.id === conversationId 
        ? { ...conv, unreadCount: 0 }
        : conv
    ));
  };

  const formatTime = (date: Date | string) => {
    return new Date(date).toLocaleTimeString('es-CL', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString('es-CL', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const selectedConv = conversations.find(c => c.id === selectedConversation);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="bg-slate-800 p-8 rounded-xl border border-slate-600 max-w-md w-full mx-4">
          <h1 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
            Admin Dashboard - AIGS
          </h1>
          <div className="space-y-4">
            <input
              type="password"
              placeholder="Contraseña de administrador"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && setIsAuthenticated(password === ADMIN_PASSWORD)}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-orange-400"
            />
            <button
              onClick={() => setIsAuthenticated(password === ADMIN_PASSWORD)}
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-600 text-slate-900 py-3 rounded-lg font-semibold hover:from-orange-400 hover:to-yellow-500 transition-all duration-300"
            >
              Acceder
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
            Dashboard WhatsApp - AIGS
          </h1>
          <div className="flex items-center gap-4">
            <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-400' : 'bg-red-400'}`}></div>
            <span className="text-slate-300 text-sm">
              {isConnected ? 'Conectado' : 'Desconectado'}
            </span>
            <div className="text-slate-400 text-sm">
              {conversations.length} conversaciones activas
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Lista de Conversaciones */}
        <div className="w-1/3 bg-slate-800 border-r border-slate-700 overflow-y-auto">
          <div className="p-4 border-b border-slate-700">
            <h2 className="text-lg font-semibold text-slate-200">Conversaciones</h2>
          </div>
          
          {conversations.length === 0 ? (
            <div className="p-6 text-center text-slate-400">
              <svg className="w-12 h-12 mx-auto mb-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <p>No hay conversaciones activas</p>
            </div>
          ) : (
            conversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => {
                  setSelectedConversation(conv.id);
                  markAsRead(conv.id);
                }}
                className={`p-4 border-b border-slate-700 cursor-pointer hover:bg-slate-700 transition-colors duration-200 ${
                  selectedConversation === conv.id ? 'bg-slate-700 border-l-4 border-orange-400' : ''
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="font-semibold text-slate-200 truncate">
                    {conv.userInfo.nombre}
                  </div>
                  <div className="flex items-center gap-2">
                    {conv.unreadCount && conv.unreadCount > 0 && (
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                        {conv.unreadCount}
                      </span>
                    )}
                    <span className="text-xs text-slate-400">
                      {formatTime(conv.createdAt)}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-slate-400 truncate">
                  {conv.userInfo.empresa}
                </div>
                {conv.lastMessage && (
                  <div className="text-sm text-slate-500 truncate mt-1">
                    {conv.lastMessage.message}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Área de Chat */}
        <div className="flex-1 flex flex-col">
          {selectedConv ? (
            <>
              {/* Header del Chat */}
              <div className="bg-slate-800 border-b border-slate-700 p-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center text-slate-900 font-bold">
                    {selectedConv.userInfo.nombre.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-200">
                      {selectedConv.userInfo.nombre}
                    </div>
                    <div className="text-sm text-slate-400">
                      {selectedConv.userInfo.empresa} • {selectedConv.userInfo.email}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mensajes */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {selectedConv.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.from === 'executive' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.from === 'executive'
                          ? 'bg-gradient-to-r from-orange-500 to-yellow-600 text-slate-900'
                          : 'bg-slate-700 text-slate-200'
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.message}</p>
                      <p className={`text-xs mt-1 ${
                        message.from === 'executive' ? 'text-slate-800' : 'text-slate-400'
                      }`}>
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input de Respuesta */}
              <div className="bg-slate-800 border-t border-slate-700 p-4">
                <div className="flex gap-3">
                  <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        sendMessage();
                      }
                    }}
                    placeholder="Escribe tu respuesta..."
                    className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:border-orange-400 resize-none"
                    rows={2}
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!newMessage.trim()}
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-600 text-slate-900 rounded-lg font-semibold hover:from-orange-400 hover:to-yellow-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Enviar
                  </button>
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  Presiona Enter para enviar, Shift+Enter para nueva línea
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-slate-400">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <p className="text-lg">Selecciona una conversación para empezar</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 