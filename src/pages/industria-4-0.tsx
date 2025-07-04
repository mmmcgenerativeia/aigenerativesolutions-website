import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


const Industria40Page: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Simplified Background - No Icons */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900">
        {/* Subtle Decorative Elements Only */}
        <div className="absolute top-1/4 right-1/3 w-32 h-32 border border-cyan-400/10 rounded-full opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border border-orange-400/10 rounded-lg rotate-45 opacity-20"></div>
        <div className="absolute top-3/4 right-1/4 w-16 h-16 border border-blue-400/10 rounded-full opacity-40"></div>

        {/* Mouse Following Light Effect */}
        {mounted && (
          <div
            className="absolute pointer-events-none z-10 w-96 h-96 rounded-full transition-all duration-700 ease-out"
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
              background: `radial-gradient(circle, #06b6d415 0%, #f59e0b10 30%, transparent 70%)`,
            }}
          />
        )}
      </div>

      <Header />
      
      <main className="relative z-10">
        {/* Enhanced Hero Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6 text-center relative">
            <div className="absolute inset-0 bg-black/30 rounded-3xl backdrop-blur-sm"></div>
            <div className="relative z-10 py-16">
              <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                <span className="block">Industria 4.0 con</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-blue-400">
                  Inteligencia Artificial
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-200 mb-12 max-w-5xl mx-auto leading-relaxed font-medium">
                Transformamos sectores industriales tradicionales con tecnologías de IA generativa, 
                IoT y automatización inteligente para la nueva era digital.
              </p>
              
              {/* Industry Impact Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                {[
                  { value: '3', label: 'Sectores', icon: '🏭' },
                  { value: '40%', label: 'Más Eficiencia', icon: '⚡' },
                  { value: '24/7', label: 'Monitoreo', icon: '📊' },
                  { value: '95%', label: 'Precisión IA', icon: '🎯' }
                ].map((metric, index) => (
                  <div key={index} className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/25 transition-all duration-300 group border border-white/20">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {metric.icon}
                    </div>
                    <div className="text-3xl font-bold text-cyan-300 mb-1">{metric.value}</div>
                    <div className="text-slate-200 text-sm font-medium">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#sectores" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
                >
                  Explorar Sectores
                </a>
                <a 
                  href="#contacto" 
                  className="bg-white/20 backdrop-blur-lg text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/30 transition-all duration-300 border border-white/30"
                >
                  Consulta Personalizada
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Industry Sectors Grid - Dark Theme */}
        <section id="sectores" className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 relative">
          {/* Subtle Background Effects */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/20 rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-orange-400/20 rounded-lg rotate-45"></div>
            <div className="absolute top-3/4 left-1/2 w-16 h-16 border border-blue-400/20 rounded-full"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-white mb-6">
                Sectores <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400">Especializados</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto font-medium">
                Soluciones de IA específicamente diseñadas para revolucionar cada industria
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Minería Enhanced - Single Icon */}
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
                <div className="h-64 bg-gradient-to-br from-amber-500 via-orange-600 to-stone-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/40"></div>
                  {/* Single Minimalist Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L1 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-11-5z"/>
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold mb-2">Minería</h3>
                      <p className="text-xl font-medium opacity-90">4.0</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-slate-800/50 backdrop-blur-lg">
                  <h3 className="text-2xl font-bold mb-4 text-white">Minería 4.0</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed font-medium">
                    Optimización de flotas autónomas, mantenimiento predictivo de equipos 
                    pesados y análisis geológico con IA avanzada para máxima productividad.
                  </p>
                  
                  <div className="flex justify-between items-center mb-6 text-sm">
                    <div className="text-center">
                      <div className="text-lg font-bold text-amber-400">40%</div>
                      <div className="text-slate-400">Más Eficiencia</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">95%</div>
                      <div className="text-slate-400">Precisión</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-400">24/7</div>
                      <div className="text-slate-400">Operación</div>
                    </div>
                  </div>
                  
                  <a 
                    href="/industria-4-0/mineria" 
                    className="block text-center bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-4 rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl"
                  >
                    Explorar Minería 4.0 →
                  </a>
                </div>
              </div>

              {/* Madera Enhanced - Single Icon */}
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
                <div className="h-64 bg-gradient-to-br from-emerald-600 via-teal-700 to-green-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/40"></div>
                  {/* Single Minimalist Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold mb-2">Silvicultura</h3>
                      <p className="text-xl font-medium opacity-90">4.0</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-slate-800/50 backdrop-blur-lg">
                  <h3 className="text-2xl font-bold mb-4 text-white">Sector Maderero 4.0</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed font-medium">
                    Gestión forestal sostenible con drones, optimización de aserraderos 
                    y trazabilidad blockchain para máxima eficiencia y certificación.
                  </p>
                  
                  <div className="flex justify-between items-center mb-6 text-sm">
                    <div className="text-center">
                      <div className="text-lg font-bold text-emerald-400">35%</div>
                      <div className="text-slate-400">Menos Desperdicio</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">95%</div>
                      <div className="text-slate-400">Trazabilidad</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-400">100%</div>
                      <div className="text-slate-400">Sostenible</div>
                    </div>
                  </div>
                  
                  <a 
                    href="/industria-4-0/madera" 
                    className="block text-center bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-4 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl"
                  >
                    Explorar Sector Maderero →
                  </a>
                </div>
              </div>

              {/* Agricultura Enhanced - Single Icon */}
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
                <div className="h-64 bg-gradient-to-br from-lime-500 via-green-600 to-emerald-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/40"></div>
                  {/* Single Minimalist Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17,17H7V14L10.5,9.5L9.08,8.08L12,5.16L14.92,8.08L13.5,9.5L17,14V17M12,1L21,5V11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1Z"/>
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold mb-2">Agricultura</h3>
                      <p className="text-xl font-medium opacity-90">4.0</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-slate-800/50 backdrop-blur-lg">
                  <h3 className="text-2xl font-bold mb-4 text-white">AgTech Inteligente</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed font-medium">
                    Agricultura de precisión con drones autónomos, sensores IoT 
                    y gestión inteligente de cultivos para máxima sostenibilidad.
                  </p>
                  
                  <div className="flex justify-between items-center mb-6 text-sm">
                    <div className="text-center">
                      <div className="text-lg font-bold text-lime-400">35%</div>
                      <div className="text-slate-400">Más Rendimiento</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">90%</div>
                      <div className="text-slate-400">Precisión</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-400">45%</div>
                      <div className="text-slate-400">Menos Agua</div>
                    </div>
                  </div>
                  
                  <a 
                    href="/industria-4-0/agricultura" 
                    className="block text-center bg-gradient-to-r from-lime-500 to-green-600 text-white px-6 py-4 rounded-xl hover:from-lime-600 hover:to-green-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl"
                  >
                    Explorar AgTech →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Technologies Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-white mb-6">
                Tecnologías de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400">Vanguardia</span>
              </h2>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto font-medium">
                Stack tecnológico de última generación para revolucionar la industria
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { 
                  icon: '🤖', 
                  title: 'IA Generativa', 
                  desc: 'Modelos avanzados para análisis predictivo y automatización', 
                  color: 'cyan',
                  gradient: 'from-cyan-400 to-blue-500'
                },
                { 
                  icon: '📡', 
                  title: 'IoT Industrial', 
                  desc: 'Sensores inteligentes conectados para monitoreo 24/7', 
                  color: 'orange',
                  gradient: 'from-orange-400 to-amber-500'
                },
                { 
                  icon: '🚁', 
                  title: 'Drones Autónomos', 
                  desc: 'Monitoreo aéreo automatizado con visión artificial', 
                  color: 'blue',
                  gradient: 'from-blue-400 to-indigo-500'
                },
                { 
                  icon: '📊', 
                  title: 'Analytics Avanzado', 
                  desc: 'Inteligencia de negocios en tiempo real con ML', 
                  color: 'emerald',
                  gradient: 'from-emerald-400 to-teal-500'
                }
              ].map((tech, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 border border-white/20">
                  <div className={`w-20 h-20 bg-gradient-to-br ${tech.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{tech.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white text-center">{tech.title}</h3>
                  <p className="text-slate-200 text-center leading-relaxed font-medium">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Matched with Technologies Section */}
        <section className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 relative overflow-hidden">
          {/* Background Effects matching Technologies section */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/20 rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-orange-400/20 rounded-lg rotate-45"></div>
            <div className="absolute top-3/4 left-1/2 w-16 h-16 border border-blue-400/20 rounded-full"></div>
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl font-bold text-white mb-8">
              Transforme su <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400">Industria</span> con IA
            </h2>
            <p className="text-xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Únase a las empresas líderes que están revolucionando sus sectores 
              con tecnologías de Industria 4.0 y soluciones de IA personalizadas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a 
                href="#contacto" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-2xl font-bold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Solicitar Consulta Industrial
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
              🏭 Consulta inicial gratuita • 🔒 Confidencialidad garantizada • ⚡ ROI en 90 días
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Industria40Page; 