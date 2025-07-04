import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ChatbotsPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section - Enhanced */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 min-h-[70vh] flex items-center relative">
          {/* Subtle Background Effects */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-emerald-400/20 rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-teal-400/20 rounded-lg rotate-45"></div>
            <div className="absolute top-3/4 left-1/2 w-16 h-16 border border-green-400/20 rounded-full"></div>
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-7xl lg:text-8xl font-bold mb-8">
              <span className="text-white">Chatbots Empresariales con</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">IA Avanzada</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-400 mx-auto mb-8"></div>
            <p className="text-2xl text-slate-300 mb-12 max-w-5xl mx-auto leading-relaxed font-medium">
              Automatice la atención al cliente 24/7 con chatbots inteligentes que entienden, 
              aprenden y resuelven consultas de manera natural y eficiente.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-300">24/7</div>
                <div className="text-sm text-green-100">Disponibilidad</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-300">85%</div>
                <div className="text-sm text-green-100">Satisfacción Cliente</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-300">60%</div>
                <div className="text-sm text-green-100">Reducción Costos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-300">3 seg</div>
                <div className="text-sm text-green-100">Tiempo Respuesta</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tipos de Chatbots - Dark Theme */}
        <section className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6 text-white">
                Chatbots Inteligentes para <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">cada Necesidad</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-teal-400 mx-auto"></div>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Atención al Cliente */}
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-2xl">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white text-center">Atención al Cliente</h3>
                <p className="text-slate-300 mb-8 text-center leading-relaxed text-lg">
                  Chatbots que manejan consultas frecuentes, soporte técnico básico 
                  y escalamiento inteligente a agentes humanos.
                </p>
                
                <div className="mb-8">
                  <h4 className="font-bold text-blue-300 mb-4 text-xl">Funcionalidades:</h4>
                  <ul className="text-slate-300 space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Respuestas instantáneas 24/7</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Base de conocimiento dinámica</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Escalamiento inteligente</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Análisis de sentimientos</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Métricas de satisfacción</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-3xl font-bold text-blue-400">85%</div>
                    <div className="text-sm text-slate-400">Resolución</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-3xl font-bold text-green-400">60%</div>
                    <div className="text-sm text-slate-400">Menos costos</div>
                  </div>
                </div>
              </div>

              {/* Ventas y Marketing */}
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-2xl">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white text-center">Ventas y Marketing</h3>
                <p className="text-slate-300 mb-8 text-center leading-relaxed text-lg">
                  Asistentes virtuales que califican leads, programan citas 
                  y guían a los prospectos en el proceso de compra.
                </p>
                
                <div className="mb-8">
                  <h4 className="font-bold text-purple-300 mb-4 text-xl">Capacidades:</h4>
                  <ul className="text-slate-300 space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Calificación automática de leads</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Programación de citas</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Recomendaciones de productos</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Follow-up automatizado</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Integración con CRM</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-3xl font-bold text-purple-400">40%</div>
                    <div className="text-sm text-slate-400">Más leads</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-3xl font-bold text-green-400">25%</div>
                    <div className="text-sm text-slate-400">Más ventas</div>
                  </div>
                </div>
              </div>

              {/* Recursos Humanos */}
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-2xl">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white text-center">Recursos Humanos</h3>
                <p className="text-slate-300 mb-8 text-center leading-relaxed text-lg">
                  Automatización de consultas de empleados, gestión de permisos 
                  y onboarding de nuevo personal.
                </p>
                
                <div className="mb-8">
                  <h4 className="font-bold text-cyan-300 mb-4 text-xl">Servicios:</h4>
                  <ul className="text-slate-300 space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>Consultas de políticas internas</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>Solicitud de permisos y vacaciones</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>Onboarding automatizado</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>Evaluaciones de desempeño</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>FAQ de beneficios</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-3xl font-bold text-cyan-400">70%</div>
                    <div className="text-sm text-slate-400">Menos consultas</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-3xl font-bold text-green-400">50%</div>
                    <div className="text-sm text-slate-400">Tiempo HR</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Remaining sections would continue... */}
        {/* CTA Final */}
        <section className="py-24 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-700">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold text-white mb-8">
              Revolucione su Atención al Cliente con <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-green-200">IA Avanzada</span>
            </h2>
            <p className="text-xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              Implemente chatbots inteligentes que trabajan 24/7 y reducen costos operativos 
              hasta en un 60%. ¿Listo para automatizar su atención al cliente?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="#contacto" 
                className="bg-white text-green-600 px-10 py-5 rounded-2xl font-bold hover:bg-green-50 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Demo Personalizada Gratuita
              </a>
              <a 
                href="https://github.com/aigenerativesolutions" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-lg text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center justify-center space-x-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>Ver Proyectos</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ChatbotsPage; 