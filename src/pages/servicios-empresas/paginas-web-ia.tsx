import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PaginasWebIAPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section - Enhanced */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 min-h-[70vh] flex items-center relative">
          {/* Subtle Background Effects */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-indigo-400/20 rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-purple-400/20 rounded-lg rotate-45"></div>
            <div className="absolute top-3/4 left-1/2 w-16 h-16 border border-pink-400/20 rounded-full"></div>
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-7xl lg:text-8xl font-bold mb-8">
              <span className="text-white">Páginas Web con</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">IA Integrada</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-2xl text-slate-300 mb-12 max-w-5xl mx-auto leading-relaxed font-medium">
              Desarrollamos sitios web inteligentes que se adaptan, aprenden y mejoran 
              automáticamente la experiencia de sus usuarios con IA generativa.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-300">100%</div>
                <div className="text-sm text-indigo-100">Personalizada</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-300">3x</div>
                <div className="text-sm text-indigo-100">Más Conversiones</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-300">40%</div>
                <div className="text-sm text-indigo-100">Menos Rebote</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-300">24/7</div>
                <div className="text-sm text-indigo-100">Optimización</div>
              </div>
            </div>
          </div>
        </section>

        {/* Características de IA - Dark Theme */}
        <section className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6 text-white">
                Características <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Inteligentes</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto"></div>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-2xl">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white text-center">Personalización Automática</h3>
                <p className="text-slate-300 mb-8 text-center leading-relaxed text-lg">
                  Contenido que se adapta automáticamente según el comportamiento, 
                  preferencias y ubicación de cada visitante.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-2xl">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white text-center">Asistentes Virtuales</h3>
                <p className="text-slate-300 mb-8 text-center leading-relaxed text-lg">
                  Chatbots inteligentes integrados que guían a los usuarios 
                  y responden preguntas en tiempo real.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-2xl">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white text-center">Optimización Continua</h3>
                <p className="text-slate-300 mb-8 text-center leading-relaxed text-lg">
                  La IA analiza métricas y optimiza automáticamente la conversión 
                  y experiencia del usuario.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio - Dark Theme */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-slate-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6 text-white">
                Portfolio de <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Proyectos</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 hover:bg-white/10 transition-all duration-500">
                <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-indigo-900/50 rounded-2xl mb-8 flex items-center justify-center border border-white/10">
                  <svg className="w-20 h-20 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">Portal Inmobiliario IA</h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Plataforma que recomienda propiedades automáticamente según preferencias 
                  del usuario y analiza tendencias del mercado.
                </p>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-2xl font-bold text-blue-400">45%</div>
                    <div className="text-sm text-slate-400">Más leads</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-2xl font-bold text-green-400">60%</div>
                    <div className="text-sm text-slate-400">Más tiempo en sitio</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">3x</div>
                    <div className="text-sm text-slate-400">Conversiones</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 hover:bg-white/10 transition-all duration-500">
                <div className="aspect-video bg-gradient-to-br from-green-900/50 to-emerald-900/50 rounded-2xl mb-8 flex items-center justify-center border border-white/10">
                  <svg className="w-20 h-20 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">E-commerce Fashion IA</h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Tienda online con IA que sugiere outfits completos, analiza tendencias 
                  y predice demanda de productos.
                </p>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-2xl font-bold text-green-400">35%</div>
                    <div className="text-sm text-slate-400">Más ventas</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-2xl font-bold text-blue-400">50%</div>
                    <div className="text-sm text-slate-400">Ticket promedio</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">85%</div>
                    <div className="text-sm text-slate-400">Satisfacción</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-700">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold text-white mb-8">
              ¿Listo para una Web que <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-pink-200">Piensa por Usted</span>?
            </h2>
            <p className="text-xl text-indigo-100 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              Nuestras páginas web con IA no solo se ven increíbles, sino que mejoran 
              automáticamente sus conversiones cada día.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="#contacto" 
                className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold hover:bg-indigo-50 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Ver Demo Interactiva
              </a>
              <a 
                href="https://github.com/aigenerativesolutions" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-lg text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center justify-center space-x-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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

export default PaginasWebIAPage; 