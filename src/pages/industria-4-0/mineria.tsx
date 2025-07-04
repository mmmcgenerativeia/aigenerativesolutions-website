import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { industryThemes } from '@/data/design-tokens';

const MineriaPage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const theme = industryThemes.mineria;

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
      {/* Elegant Fixed Background - No Icons */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-900 via-amber-900 to-stone-800">
        {/* Subtle Decorative Elements Only */}
        <div className="absolute top-1/4 right-1/3 w-32 h-32 border border-amber-400/10 rounded-full opacity-30"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-orange-400/15 rounded-lg rotate-45 opacity-20"></div>
        <div className="absolute top-3/4 left-1/2 w-16 h-16 border border-stone-400/10 rounded-full opacity-25"></div>
        
        {/* Gradient Overlays for Depth */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/20"></div>

        {/* Mouse Following Light Effect */}
        {mounted && (
          <div
            className="absolute pointer-events-none z-10 w-96 h-96 rounded-full transition-all duration-700 ease-out"
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
              background: `radial-gradient(circle, ${theme.primary}15 0%, ${theme.secondary}10 30%, transparent 70%)`,
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
                  <span className="block text-white font-light tracking-wide">Minería</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-yellow-300 font-black tracking-tighter">
                    4.0
                  </span>
                  <span className="block text-slate-200 text-4xl font-medium tracking-wide mt-4">
                    Inteligente y Autónoma
                  </span>
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
              </div>
              
              <p className="text-xl lg:text-2xl text-slate-200 mb-12 max-w-5xl mx-auto leading-relaxed font-medium">
                Transformamos las operaciones mineras con IA generativa, flotas autónomas 
                y mantenimiento predictivo para máxima productividad y seguridad.
              </p>
              
              {/* Animated Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                {[
                  { value: '40%', label: 'Más Eficiencia', icon: '⚡' },
                  { value: '60%', label: 'Menos Downtime', icon: '⏱️' },
                  { value: '35%', label: 'Menos Costos', icon: '💰' },
                  { value: '95%', label: 'Precisión IA', icon: '🎯' }
                ].map((metric, index) => (
                  <div key={index} className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/25 transition-all duration-300 group border border-white/20">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {metric.icon}
                    </div>
                    <div className="text-3xl font-bold text-amber-300 mb-1">{metric.value}</div>
                    <div className="text-slate-200 text-sm">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#soluciones" 
                  className={`bg-gradient-to-r ${theme.gradient} text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25`}
                >
                  Explorar Smart Mining
                </a>
                <a 
                  href="#contacto" 
                  className="bg-white/20 backdrop-blur-lg text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/30 transition-all duration-300 border border-white/30"
                >
                  Consulta Minera
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Elegant Section Separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>

        {/* Enhanced Soluciones Específicas - Dark Theme */}
        <section id="soluciones" className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 relative">
          {/* Subtle Background Effects */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-amber-400/20 rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-orange-400/20 rounded-lg rotate-45"></div>
            <div className="absolute top-3/4 left-1/2 w-16 h-16 border border-stone-400/20 rounded-full"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-white mb-8">
                Soluciones IA para <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Minería 4.0</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
                Tecnologías avanzadas que revolucionan desde la extracción hasta el transporte
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Flotas Autónomas - Fixed Icon Position */}
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
                {/* Fixed Icon at Top */}
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18,18.5A1.5,1.5 0 0,1 16.5,20A1.5,1.5 0 0,1 15,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,18.5M19.5,9.5L21.46,12H17V18H19C19.57,18 20.09,18.21 20.47,18.58C20.86,18.95 21.03,19.47 21,20H15C13.89,20 13,19.1 13,18V14H11L6,18.5H1.5L5,12L1.5,5.5H6L11,10H13V6C13,4.89 13.89,4 15,4H21L19.5,9.5M7.5,18.5A1.5,1.5 0 0,1 6,20A1.5,1.5 0 0,1 4.5,18.5A1.5,1.5 0 0,1 6,17A1.5,1.5 0 0,1 7.5,18.5Z"/>
                  </svg>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-white text-center">Flotas Autónomas</h3>
                  <p className="text-slate-300 leading-relaxed font-medium text-center">
                    Camiones autónomos y equipos de carga con IA para operaciones 
                    24/7 sin conductor, optimizando rutas y combustible.
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    'Navegación autónoma GPS-IA',
                    'Optimización de rutas en tiempo real',
                    'Operación continua 24/7'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span className="text-slate-200 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-white/20">
                  <div className="text-2xl font-bold text-amber-400 mb-1">40%</div>
                  <div className="text-xs text-slate-300 font-medium">Más Eficiencia</div>
                </div>
              </div>

              {/* Mantenimiento Predictivo - Fixed Icon Position */}
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.71,20.29L20.29,21.71A1,1 0 0,1 18.88,21.71L7,9.85A3.81,3.81 0 0,1 6,10A4,4 0 0,1 2,6A4,4 0 0,1 6,2A4,4 0 0,1 10,6C10,6.42 9.95,6.83 9.85,7.22L18.29,15.66C18.66,16.03 19.21,16.03 19.58,15.66L21.71,13.53C22.1,13.14 22.1,12.5 21.71,12.11L13.03,3.44L14.44,2.03L23.11,10.7C23.5,11.09 23.5,11.72 23.11,12.11L20.29,14.93C20.29,14.93 20.29,14.93 20.29,14.93L21.71,16.35C22.1,16.74 22.1,17.37 21.71,17.76L21.71,20.29M1.39,4.22L4.22,1.39L5.64,2.81L2.81,5.64L1.39,4.22Z"/>
                  </svg>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-white text-center">Mantenimiento Predictivo</h3>
                  <p className="text-slate-300 leading-relaxed font-medium text-center">
                    Sensores IoT y machine learning para predecir fallas de equipos 
                    pesados antes que ocurran, minimizando downtime.
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    'Sensores vibración y temperatura',
                    'Predicción de fallas con 95% precisión',
                    'Programación óptima de mantenimiento'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-slate-200 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-white/20">
                  <div className="text-2xl font-bold text-orange-400 mb-1">60%</div>
                  <div className="text-xs text-slate-300 font-medium">Menos Downtime</div>
                </div>
              </div>

              {/* Análisis Geológico IA - Fixed Icon Position */}
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-stone-500 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M6,2H18A2,2 0 0,1 20,4V12.5C19.36,12.18 18.7,12 18,12V8H12V12.05C11.16,12.22 10.39,12.54 9.71,13H6V11H10V9H6V7H14V5H6V2Z"/>
                  </svg>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-white text-center">Análisis Geológico IA</h3>
                  <p className="text-slate-300 leading-relaxed font-medium text-center">
                    Algoritmos de machine learning para análisis de muestras geológicas 
                    y identificación de yacimientos con precisión superior.
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    'Análisis automático de muestras',
                    'Identificación de minerales con IA',
                    'Mapeo 3D de yacimientos'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
                      <span className="text-slate-200 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-white/20">
                  <div className="text-2xl font-bold text-stone-400 mb-1">95%</div>
                  <div className="text-xs text-slate-300 font-medium">Precisión</div>
                </div>
              </div>

              {/* Seguridad Inteligente - Fixed Icon Position */}
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.8C8,12.2 8.6,11.6 9.2,11.6V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z"/>
                  </svg>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-white text-center">Seguridad Inteligente</h3>
                  <p className="text-slate-300 leading-relaxed font-medium text-center">
                    Sistemas de visión artificial para monitoreo de seguridad, 
                    detección de riesgos y protección del personal minero.
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    'Detección automática de riesgos',
                    'Monitoreo de EPP con cámaras',
                    'Alertas en tiempo real'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-slate-200 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-white/20">
                  <div className="text-2xl font-bold text-red-400 mb-1">85%</div>
                  <div className="text-xs text-slate-300 font-medium">Menos Accidentes</div>
                </div>
              </div>

              {/* Optimización de Procesos - Fixed Icon Position */}
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
                  </svg>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-white text-center">Optimización de Procesos</h3>
                  <p className="text-slate-300 leading-relaxed font-medium text-center">
                    IA para optimización de procesos de extracción, beneficio 
                    y transporte, maximizando productividad y reduciendo costos.
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    'Optimización de voladura',
                    'Control automático de molinos',
                    'Gestión inteligente de inventarios'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-slate-200 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-white/20">
                  <div className="text-2xl font-bold text-blue-400 mb-1">35%</div>
                  <div className="text-xs text-slate-300 font-medium">Menos Costos</div>
                </div>
              </div>

              {/* Monitoreo Ambiental - Fixed Icon Position */}
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.8,20C17.4,21.2 16.3,22 15,22H5C3.3,22 2,20.7 2,19V18C2,16.7 3.3,15.4 5,15.4H6V12C6,8.7 8.7,6 12,6C15.3,6 18,8.7 18,12V15.4H19C20.7,15.4 22,16.7 22,18V19C22,19.4 21.8,19.7 21.5,20H17.8M16,12C16,9.8 14.2,8 12,8C9.8,8 8,9.8 8,12V15.4H16V12M11,10.1C11,9.5 11.4,9 12,9C12.6,9 13,9.4 13,10.1V13.9C13,14.5 12.6,15 12,15C11.4,15 11,14.6 11,13.9V10.1Z"/>
                  </svg>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-white text-center">Monitoreo Ambiental</h3>
                  <p className="text-slate-300 leading-relaxed font-medium text-center">
                    Sensores IA para monitoreo continuo de calidad del aire, agua 
                    y suelo, garantizando cumplimiento ambiental automático.
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    'Monitoreo calidad del aire',
                    'Análisis de aguas residuales',
                    'Compliance automático'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-slate-200 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-white/20">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">100%</div>
                  <div className="text-xs text-slate-300 font-medium">Compliance</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Casos de Éxito - Enhanced */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-amber-900 to-stone-800 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-white mb-6">
                Casos de Éxito en <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Minería 4.0</span>
              </h2>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto font-medium">
                Transformaciones reales que demuestran el poder de la IA en minería moderna
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⛏️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Minera Cobre - Chile</h3>
                    <p className="text-slate-300 font-medium">500,000 toneladas/año, operación autónoma</p>
                  </div>
                </div>
                
                <p className="text-slate-200 mb-8 leading-relaxed font-medium">
                  Implementación completa de minería 4.0 que revolucionó la operación: 
                  aumentó productividad en 40%, redujo costos operativos en 35% y mejoró 
                  la seguridad operacional con cero accidentes graves.
                </p>
                
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="text-3xl font-bold text-amber-300">40%</div>
                    <div className="text-sm text-slate-300 font-medium">Más Productividad</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="text-3xl font-bold text-green-300">35%</div>
                    <div className="text-sm text-slate-300 font-medium">Menos Costos</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="text-3xl font-bold text-blue-300">Zero</div>
                    <div className="text-sm text-slate-300 font-medium">Accidentes</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚛</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Minera Oro - Perú</h3>
                    <p className="text-slate-300 font-medium">Flota autónoma, mantenimiento predictivo</p>
                  </div>
                </div>
                
                <p className="text-slate-200 mb-8 leading-relaxed font-medium">
                  Sistema avanzado de flotas autónomas que transformó el transporte: 
                  mejoró la eficiencia operativa en 45%, redujo downtime en 60% 
                  y alcanzó ROI positivo en el primer año de implementación.
                </p>
                
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="text-3xl font-bold text-orange-300">45%</div>
                    <div className="text-sm text-slate-300 font-medium">Más Eficiencia</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="text-3xl font-bold text-red-300">60%</div>
                    <div className="text-sm text-slate-300 font-medium">Menos Downtime</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="text-3xl font-bold text-blue-300">1 Año</div>
                    <div className="text-sm text-slate-300 font-medium">ROI Positivo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Tecnologías y Estándares - Dark Theme */}
        <section className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 relative">
          {/* Subtle Background Effects */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-amber-400/20 rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-orange-400/20 rounded-lg rotate-45"></div>
            <div className="absolute top-3/4 left-1/2 w-16 h-16 border border-stone-400/20 rounded-full"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-5xl font-bold text-center mb-16 text-white">
              Tecnologías y <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Estándares</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: '🤖', title: 'IA Predictiva', desc: 'Algoritmos avanzados para mantenimiento', color: 'from-amber-500 to-orange-600' },
                { icon: '🛰️', title: 'GPS Centimétrico', desc: 'Navegación autónoma de alta precisión', color: 'from-blue-500 to-indigo-600' },
                { icon: '🏆', title: 'ISO 45001', desc: 'Cumplimiento automático de seguridad', color: 'from-red-500 to-pink-600' },
                { icon: '📊', title: 'Digital Twin', desc: 'Gemelos digitales de operaciones', color: 'from-emerald-500 to-teal-600' }
              ].map((tech, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 border border-white/20 shadow-lg">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl text-white">{tech.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white text-center">{tech.title}</h3>
                  <p className="text-slate-300 text-center leading-relaxed font-medium">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced */}
        <section className={`py-24 bg-gradient-to-r ${theme.gradient} relative overflow-hidden`}>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl font-bold text-white mb-8">
              Transforme su Operación Minera con IA Autónoma
            </h2>
            <p className="text-xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Únase a las mineras líderes que están aprovechando la IA para maximizar 
              productividad, reducir costos y garantizar operaciones 100% seguras.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a 
                href="#contacto" 
                className="bg-white text-amber-700 px-10 py-5 rounded-2xl font-bold hover:bg-amber-50 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Solicitar Consulta Minera
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

            <div className="text-slate-200 text-sm font-medium">
              ⛏️ Consulta inicial gratuita • 🔒 Confidencialidad garantizada • ⚡ Resultados en 120 días
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MineriaPage; 