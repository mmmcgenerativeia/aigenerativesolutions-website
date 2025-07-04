import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* New Hero Section with Two Main Paths */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 min-h-screen flex items-center">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-6xl font-bold text-white mb-6">
                Transformando el Futuro con <span className="text-cyan-400">IA Generativa</span>
              </h1>
              <p className="text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
                En AIGS, fusionamos estrategia y tecnología de vanguardia para potenciar empresas 
                e industrias con soluciones de inteligencia artificial generativa a medida.
              </p>
              
              {/* Strategic "3 clicks" message */}
              <div className="inline-flex items-center bg-cyan-500/20 backdrop-blur-lg border border-cyan-400/30 rounded-full px-6 py-3 mb-8">
                <span className="text-cyan-300 font-medium text-lg">
                  ⚡ Lo que buscas a sólo 3 clicks
                </span>
              </div>
            </div>

            {/* Two Main CTA Buttons */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Industria 4.0 */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">Industria 4.0</h2>
                  <p className="text-slate-300 mb-8">
                    Revolucione sectores tradicionales como <strong>Minería 4.0</strong>, <strong>Silvicultura 4.0</strong> y <strong>Agricultura 4.0</strong> 
                    con tecnologías de IA, IoT y automatización inteligente.
                  </p>
                  <a 
                    href="/industria-4-0" 
                    className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 group-hover:scale-105"
                  >
                    Explorar Industria 4.0
                  </a>
                </div>
              </div>

              {/* Servicios Empresariales */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">Servicios Empresariales</h2>
                  <p className="text-slate-300 mb-8">
                    Capacitaciones, desarrollo de chatbots, machine learning y sitios web 
                    inteligentes para impulsar su transformación digital.
                  </p>
                  <a 
                    href="/servicios-empresas" 
                    className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group-hover:scale-105"
                  >
                    Ver Servicios
                  </a>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="text-center mt-16">
              <p className="text-lg text-slate-400 mb-8">
                Más de 50 empresas confían en nuestras soluciones de IA generativa
              </p>
              <div className="flex justify-center space-x-8 text-cyan-400">
                <div className="text-center">
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-sm text-slate-400">Eficiencia Mejorada</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">40%</div>
                  <div className="text-sm text-slate-400">Reducción de Costos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm text-slate-400">Soporte Continuo</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced About AIGS Section - Dark Theme */}
        <section className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 relative">
          {/* Subtle Background Effects */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/20 rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-blue-400/20 rounded-lg rotate-45"></div>
            <div className="absolute top-3/4 left-1/2 w-16 h-16 border border-indigo-400/20 rounded-full"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6 text-white">
                ¿Por qué elegir <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">AIGS</span>?
              </h2>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-medium">
                Somos pioneros en la integración de inteligencia artificial generativa 
                para impulsar la transformación digital y el crecimiento empresarial.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 border border-white/10">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Innovación Constante</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Aplicamos las últimas tecnologías de IA generativa para crear soluciones disruptivas 
                    que mantienen a su empresa a la vanguardia del mercado.
                  </p>
                </div>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 border border-white/10">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Enfoque Personalizado</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Cada solución se diseña específicamente para las necesidades únicas de su industria, 
                    garantizando resultados óptimos y medibles.
                  </p>
                </div>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 border border-white/10">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Resultados Medibles</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Nos enfocamos en generar un impacto tangible y un ROI claro para su empresa, 
                    con métricas transparentes y seguimiento continuo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Contact CTA */}
        <section className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold text-white mb-8">
              ¿Listo para Revolucionar su <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Negocio</span>?
            </h2>
            <p className="text-xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Contáctenos hoy mismo para una consulta gratuita y descubra cómo AIGS 
              puede ayudarle a alcanzar sus metas más ambiciosas con IA generativa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a 
                href="#contacto" 
                className="bg-white text-blue-700 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Solicitar Consulta Gratuita
              </a>
              <a 
                href="https://github.com/aigenerativesolutions" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-lg text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center space-x-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>Ver Código Fuente</span>
              </a>
            </div>

            <div className="text-slate-300 text-sm font-medium">
              🚀 Consulta inicial gratuita • 🔒 Confidencialidad garantizada • ⚡ Resultados garantizados
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage; 