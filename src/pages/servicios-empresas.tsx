import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


const ServiciosEmpresasPage: React.FC = () => {
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
      {/* Elegant Fixed Background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Subtle Decorative Elements */}
        <div className="absolute top-1/4 right-1/3 w-32 h-32 border border-blue-400/10 rounded-full opacity-30"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-cyan-400/15 rounded-lg rotate-45 opacity-20"></div>
        <div className="absolute top-3/4 left-1/2 w-16 h-16 border border-indigo-400/10 rounded-full opacity-25"></div>
        
        {/* Gradient Overlays for Depth */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/20"></div>

        {/* Mouse Following Light Effect */}
        {mounted && (
          <div
            className="absolute pointer-events-none z-10 w-96 h-96 rounded-full transition-all duration-700 ease-out"
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
              background: `radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(14, 165, 233, 0.1) 30%, transparent 70%)`,
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
              {/* Elegant Main Title */}
              <div className="mb-12">
                <h1 className="text-7xl lg:text-8xl font-bold leading-tight mb-6">
                  <span className="block text-white font-light tracking-wide">Servicios</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 font-black tracking-tighter">
                    Empresariales
                  </span>
                  <span className="block text-slate-200 text-4xl font-medium tracking-wide mt-4">
                    con IA Generativa
                  </span>
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
              </div>
              
              <p className="text-xl lg:text-2xl text-slate-200 mb-12 max-w-5xl mx-auto leading-relaxed font-medium">
                Soluciones tecnológicas integrales para potenciar su empresa con inteligencia artificial, 
                automatización y transformación digital completa.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#servicios" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
                >
                  Explorar Servicios
                </a>
                <a 
                  href="#contacto" 
                  className="bg-white/20 backdrop-blur-lg text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/30 transition-all duration-300 border border-white/30"
                >
                  Consulta Gratuita
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Elegant Section Separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>

        {/* Enhanced Services Grid - Dark Theme */}
        <section id="servicios" className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 relative">
          {/* Subtle Background Effects */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/20 rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-blue-400/20 rounded-lg rotate-45"></div>
            <div className="absolute top-3/4 left-1/2 w-16 h-16 border border-indigo-400/20 rounded-full"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-white mb-8">
                Nuestros Servicios <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Especializados</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
                Desde capacitación hasta implementación completa de soluciones de IA
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Capacitaciones */}
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
                <div className="h-40 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-600/20"></div>
                  <svg className="w-16 h-16 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z"/>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">Capacitaciones Corporativas</h3>
                  <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                    Programas de formación en IA para equipos ejecutivos y técnicos.
                  </p>
                  <a 
                    href="/servicios-empresas/capacitaciones" 
                    className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 text-sm font-bold"
                  >
                    Ver Capacitaciones
                  </a>
                </div>
              </div>

              {/* Machine Learning */}
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
                <div className="h-40 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-600/20"></div>
                  <svg className="w-16 h-16 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">Machine Learning</h3>
                  <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                    Modelos predictivos, análisis de datos y business intelligence.
                  </p>
                  <a 
                    href="/servicios-empresas/machine-learning" 
                    className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 text-sm font-bold"
                  >
                    Ver Servicios ML
                  </a>
                </div>
              </div>

              {/* Chatbots */}
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
                <div className="h-40 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20"></div>
                  <svg className="w-16 h-16 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7.27C13.4,7.61 14,8.26 14,9A2,2 0 0,1 12,11A2,2 0 0,1 10,9C10,8.26 10.4,7.61 11,7.27V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M12,15A2,2 0 0,1 14,17C14,17.74 13.6,18.39 13,18.73V20.27C13.4,20.61 14,21.26 14,22A2,2 0 0,1 12,24A2,2 0 0,1 10,22C10,21.26 10.4,20.61 11,20.27V18.73C10.4,18.39 10,17.74 10,17A2,2 0 0,1 12,15Z"/>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">Chatbots Empresariales</h3>
                  <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                    Asistentes virtuales inteligentes para atención y ventas.
                  </p>
                  <a 
                    href="/servicios-empresas/chatbots" 
                    className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-sm font-bold"
                  >
                    Ver Chatbots
                  </a>
                </div>
              </div>

              {/* Páginas Web IA */}
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
                <div className="h-40 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-600/20"></div>
                  <svg className="w-16 h-16 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8Z"/>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">Páginas Web con IA</h3>
                  <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                    Sitios web inteligentes con personalización y analytics.
                  </p>
                  <a 
                    href="/servicios-empresas/paginas-web-ia" 
                    className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 text-sm font-bold"
                  >
                    Ver Desarrollo Web
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Process Section - Dark Theme */}
        <section className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 relative">
          {/* Subtle Background Effects */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-400/20 rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-cyan-400/20 rounded-lg rotate-45"></div>
            <div className="absolute top-3/4 left-1/2 w-16 h-16 border border-indigo-400/20 rounded-full"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-5xl font-bold text-center mb-16 text-white">
              Nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Proceso</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="font-bold mb-3 text-white text-xl">Consulta Inicial</h3>
                <p className="text-slate-300 leading-relaxed">Analizamos sus necesidades y objetivos empresariales</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="font-bold mb-3 text-white text-xl">Propuesta Técnica</h3>
                <p className="text-slate-300 leading-relaxed">Diseñamos una solución personalizada a medida</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="font-bold mb-3 text-white text-xl">Implementación</h3>
                <p className="text-slate-300 leading-relaxed">Desarrollamos y desplegamos la solución</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="font-bold mb-3 text-white text-xl">Soporte Continuo</h3>
                <p className="text-slate-300 leading-relaxed">Mantenimiento y optimización permanente</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-24 bg-gradient-to-r from-cyan-600 to-blue-700 relative overflow-hidden">
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl font-bold text-white mb-8">
              ¿Listo para Transformar su Empresa?
            </h2>
            <p className="text-xl text-cyan-100 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Contáctenos para una consulta gratuita y descubra cómo nuestros servicios 
              pueden impulsar su negocio al siguiente nivel.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a 
                href="#contacto" 
                className="bg-white text-cyan-700 px-10 py-5 rounded-2xl font-bold hover:bg-cyan-50 transition-all duration-300 hover:scale-105 shadow-2xl"
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

            <div className="text-cyan-200 text-sm font-medium">
              💼 Consulta inicial gratuita • 🔒 Confidencialidad garantizada • ⚡ Implementación rápida
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiciosEmpresasPage; 