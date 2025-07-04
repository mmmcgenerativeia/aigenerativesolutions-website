import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { industryThemes } from '@/data/design-tokens';

const AgriculturaPage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const theme = industryThemes.agricultura;

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
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-900 via-green-900 to-lime-800">
        {/* Subtle Decorative Elements Only */}
        <div className="absolute top-1/4 right-1/3 w-32 h-32 border border-lime-400/10 rounded-full opacity-30"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-green-400/15 rounded-lg rotate-45 opacity-20"></div>
        <div className="absolute top-3/4 left-1/2 w-16 h-16 border border-emerald-400/10 rounded-full opacity-25"></div>
        
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
                  <span className="block text-white font-light tracking-wide">Agricultura</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-green-400 to-emerald-300 font-black tracking-tighter">
                    4.0
                  </span>
                  <span className="block text-slate-200 text-4xl font-medium tracking-wide mt-4">
                    Inteligente y Sostenible
                  </span>
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-lime-400 to-green-500 mx-auto rounded-full"></div>
              </div>
              
              <p className="text-xl lg:text-2xl text-slate-200 mb-12 max-w-5xl mx-auto leading-relaxed font-medium">
                Transformamos la agricultura con precisión, drones autónomos 
                y gestión inteligente de cultivos para máxima sostenibilidad.
              </p>
              
              {/* Animated Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                {[
                  { value: '35%', label: 'Más Rendimiento', icon: '🌾' },
                  { value: '45%', label: 'Menos Agua', icon: '💧' },
                  { value: '90%', label: 'Precisión', icon: '🎯' },
                  { value: '100%', label: 'Sostenible', icon: '🌍' }
                ].map((metric, index) => (
                  <div key={index} className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/25 transition-all duration-300 group border border-white/20">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {metric.icon}
                    </div>
                    <div className="text-3xl font-bold text-lime-300 mb-1">{metric.value}</div>
                    <div className="text-slate-200 text-sm">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#soluciones" 
                  className={`bg-gradient-to-r ${theme.gradient} text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-lime-500/25`}
                >
                  Explorar AgTech
                </a>
                <a 
                  href="#contacto" 
                  className="bg-white/20 backdrop-blur-lg text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/30 transition-all duration-300 border border-white/30"
                >
                  Consulta Agrícola
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Elegant Section Separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent"></div>

        {/* Enhanced Soluciones Específicas - Dark Theme */}
        <section id="soluciones" className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 relative">
          {/* Subtle Background Effects */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-lime-400/20 rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-green-400/20 rounded-lg rotate-45"></div>
            <div className="absolute top-3/4 left-1/2 w-16 h-16 border border-emerald-400/20 rounded-full"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-white mb-8">
                Soluciones IA para <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500">Agricultura Inteligente</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
                Tecnologías de precisión que revolucionan desde la siembra hasta la cosecha
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Agricultura de Precisión - Fixed Icon Position */}
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17,17H7V14L10.5,9.5L9.08,8.08L12,5.16L14.92,8.08L13.5,9.5L17,14V17M12,1L21,5V11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1Z"/>
                  </svg>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-white text-center">Agricultura de Precisión</h3>
                  <p className="text-slate-300 leading-relaxed font-medium text-center">
                    Tecnología GPS y sensores IoT para siembra, riego 
                    y aplicación de fertilizantes con precisión centimétrica.
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    'Siembra automatizada de precisión',
                    'Mapeo de fertilidad de suelos',
                    'Aplicación variable de insumos'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                      <span className="text-slate-200 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-white/20">
                  <div className="text-2xl font-bold text-lime-400 mb-1">90%</div>
                  <div className="text-xs text-slate-300 font-medium">Precisión</div>
                </div>
              </div>

              {/* Drones Autónomos - Fixed Icon Position */}
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5.5 1C4.67 1 4 1.67 4 2.5S4.67 4 5.5 4 7 3.33 7 2.5 6.33 1 5.5 1M18.5 1C17.67 1 17 1.67 17 2.5S17.67 4 18.5 4 20 3.33 20 2.5 19.33 1 18.5 1M5.5 20C4.67 20 4 20.67 4 21.5S4.67 23 5.5 23 7 22.33 7 21.5 6.33 20 5.5 20M18.5 20C17.67 20 17 20.67 17 21.5S17.67 23 18.5 23 20 22.33 20 21.5 19.33 20 18.5 20M9 4C8.45 4 8 4.45 8 5V8H5C4.45 8 4 8.45 4 9S4.45 10 5 10H8V14H5C4.45 14 4 14.45 4 15S4.45 16 5 16H8V19C8 19.55 8.45 20 9 20S10 19.55 10 19V16H14V19C14 19.55 14.45 20 15 20S16 19.55 16 19V16H19C19.55 16 20 15.55 20 15S19.55 14 19 14H16V10H19C19.55 10 20 9.55 20 9S19.55 8 19 8H16V5C16 4.45 15.55 4 15 4S14 4.45 14 5V8H10V5C10 4.45 9.55 4 9 4M10 10H14V14H10V10Z"/>
                  </svg>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-white text-center">Drones Autónomos</h3>
                  <p className="text-slate-300 leading-relaxed font-medium text-center">
                    Monitoreo aéreo con análisis multispectral para 
                    detección temprana de plagas y estrés hídrico.
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    'Imágenes multiespectrales',
                    'Detección de plagas y enfermedades',
                    'Mapeo de vigor de cultivos'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-slate-200 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-white/20">
                  <div className="text-2xl font-bold text-green-400 mb-1">95%</div>
                  <div className="text-xs text-slate-300 font-medium">Detección Temprana</div>
                </div>
              </div>

              {/* Sensores IoT - Fixed Icon Position */}
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.8,20C17.4,21.2 16.3,22 15,22H5C3.3,22 2,20.7 2,19V18C2,16.7 3.3,15.4 5,15.4H6V12C6,8.7 8.7,6 12,6C15.3,6 18,8.7 18,12V15.4H19C20.7,15.4 22,16.7 22,18V19C22,19.4 21.8,19.7 21.5,20H17.8M16,12C16,9.8 14.2,8 12,8C9.8,8 8,9.8 8,12V15.4H16V12M11,10.1C11,9.5 11.4,9 12,9C12.6,9 13,9.4 13,10.1V13.9C13,14.5 12.6,15 12,15C11.4,15 11,14.6 11,13.9V10.1Z"/>
                  </svg>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-white text-center">Sensores IoT</h3>
                  <p className="text-slate-300 leading-relaxed font-medium text-center">
                    Red de sensores inteligentes para monitoreo continuo 
                    de humedad, temperatura y nutrientes del suelo.
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    'Monitoreo de humedad del suelo',
                    'Condiciones microclimáticas',
                    'Alertas automáticas'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-slate-200 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-white/20">
                  <div className="text-2xl font-bold text-blue-400 mb-1">24/7</div>
                  <div className="text-xs text-slate-300 font-medium">Monitoreo</div>
                </div>
              </div>

              {/* IA Predictiva - Fixed Icon Position */}
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7.27C13,7.27 13,7.27 13,7.27C13.6,7.61 14,8.26 14,9A2,2 0 0,1 12,11A2,2 0 0,1 10,9C10,8.26 10.4,7.61 11,7.27V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M12,15A2,2 0 0,1 14,17C14,17.74 13.6,18.39 13,18.73V20.27C13.6,20.61 14,21.26 14,22A2,2 0 0,1 12,24A2,2 0 0,1 10,22C10,21.26 10.4,20.61 11,20.27V18.73C10.4,18.39 10,17.74 10,17A2,2 0 0,1 12,15M19,9A2,2 0 0,1 21,11C21,11.74 20.6,12.39 20,12.73V14.27C20.6,14.61 21,15.26 21,16A2,2 0 0,1 19,18A2,2 0 0,1 17,16C17,15.26 17.4,14.61 18,14.27V12.73C17.4,12.39 17,11.74 17,11A2,2 0 0,1 19,9M5,9A2,2 0 0,1 7,11C7,11.74 6.6,12.39 6,12.73V14.27C6.6,14.61 7,15.26 7,16A2,2 0 0,1 5,18A2,2 0 0,1 3,16C3,15.26 3.4,14.61 4,14.27V12.73C3.4,12.39 3,11.74 3,11A2,2 0 0,1 5,9Z"/>
                  </svg>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-white text-center">IA Predictiva</h3>
                  <p className="text-slate-300 leading-relaxed font-medium text-center">
                    Modelos de machine learning para predicción de 
                    rendimientos, clima y optimización de recursos.
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    'Predicción de rendimientos',
                    'Análisis climático avanzado',
                    'Optimización de recursos'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-slate-200 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-white/20">
                  <div className="text-2xl font-bold text-purple-400 mb-1">85%</div>
                  <div className="text-xs text-slate-300 font-medium">Precisión Predictiva</div>
                </div>
              </div>

              {/* Riego Inteligente - Fixed Icon Position */}
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,3.77L11.25,4.61C11.25,4.61 9.97,6.06 8.68,7.94C7.39,9.82 6.25,12.07 6.25,14.61C6.25,18.93 9.32,22 13.64,22C14.22,22 14.78,21.94 15.31,21.82C19.04,21.05 22,17.81 22,14.61C22,12.07 20.86,9.82 19.57,7.94C18.28,6.06 17,4.61 17,4.61L12,3.77Z"/>
                  </svg>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-white text-center">Riego Inteligente</h3>
                  <p className="text-slate-300 leading-relaxed font-medium text-center">
                    Sistema automatizado de riego por goteo con IA 
                    para optimizar el uso del agua y nutrientes.
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    'Riego automatizado por zonas',
                    'Optimización del uso de agua',
                    'Fertirrigación inteligente'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-slate-200 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-white/20">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">45%</div>
                  <div className="text-xs text-slate-300 font-medium">Ahorro de Agua</div>
                </div>
              </div>

              {/* Gestión de Cultivos - Fixed Icon Position */}
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
                  </svg>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-white text-center">Gestión de Cultivos</h3>
                  <p className="text-slate-300 leading-relaxed font-medium text-center">
                    Plataforma integral para planificación, seguimiento 
                    y optimización de todas las actividades agrícolas.
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    'Planificación de siembra',
                    'Seguimiento de desarrollo',
                    'Optimización de cosecha'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-slate-200 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-white/20">
                  <div className="text-2xl font-bold text-orange-400 mb-1">35%</div>
                  <div className="text-xs text-slate-300 font-medium">Más Rendimiento</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Casos de Éxito - Enhanced */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-green-900 to-lime-800 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-white mb-6">
                Casos de Éxito en <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500">Agricultura Inteligente</span>
              </h2>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto font-medium">
                Transformaciones reales que demuestran el poder de la IA en agricultura moderna
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌾</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AgroTech Valle - Colombia</h3>
                    <p className="text-slate-300 font-medium">2,500 hectáreas, agricultura de precisión</p>
                  </div>
                </div>
                
                <p className="text-slate-200 mb-8 leading-relaxed font-medium">
                  Implementación completa de agricultura 4.0: aumentó rendimientos en 35%, 
                  redujo el consumo de agua en 45% y mejoró la calidad de cultivos 
                  con certificación orgánica internacional.
                </p>
                
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="text-3xl font-bold text-lime-300">35%</div>
                    <div className="text-sm text-slate-300 font-medium">Más Rendimiento</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="text-3xl font-bold text-blue-300">45%</div>
                    <div className="text-sm text-slate-300 font-medium">Ahorro Agua</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="text-3xl font-bold text-green-300">A+</div>
                    <div className="text-sm text-slate-300 font-medium">Calidad</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚁</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Finca Inteligente - Chile</h3>
                    <p className="text-slate-300 font-medium">Drones autónomos, monitoreo 24/7</p>
                  </div>
                </div>
                
                <p className="text-slate-200 mb-8 leading-relaxed font-medium">
                  Sistema avanzado de drones con IA: mejoró la detección temprana 
                  de plagas en 95%, optimizó aplicaciones de pesticidas en 60% 
                  y alcanzó sostenibilidad ambiental completa.
                </p>
                
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="text-3xl font-bold text-emerald-300">95%</div>
                    <div className="text-sm text-slate-300 font-medium">Detección Plagas</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="text-3xl font-bold text-cyan-300">60%</div>
                    <div className="text-sm text-slate-300 font-medium">Menos Pesticidas</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="text-3xl font-bold text-blue-300">Zero</div>
                    <div className="text-sm text-slate-300 font-medium">Emisiones</div>
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
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-lime-400/20 rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-green-400/20 rounded-lg rotate-45"></div>
            <div className="absolute top-3/4 left-1/2 w-16 h-16 border border-emerald-400/20 rounded-full"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-5xl font-bold text-center mb-16 text-white">
              Tecnologías y <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500">Estándares</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: '🛰️', title: 'GPS-RTK', desc: 'Navegación centimétrica de precisión', color: 'from-lime-500 to-green-600' },
                { icon: '📡', title: 'LoRaWAN', desc: 'Conectividad IoT de largo alcance', color: 'from-green-500 to-emerald-600' },
                { icon: '🌱', title: 'Organic Certified', desc: 'Certificación orgánica automática', color: 'from-emerald-500 to-teal-600' },
                { icon: '🤖', title: 'Machine Learning', desc: 'Algoritmos predictivos avanzados', color: 'from-blue-500 to-indigo-600' }
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
              Transforme su Operación Agrícola con IA Inteligente
            </h2>
            <p className="text-xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Únase a los agricultores líderes que están aprovechando la IA para maximizar 
              rendimientos, optimizar recursos y garantizar sostenibilidad ambiental.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a 
                href="#contacto" 
                className="bg-white text-lime-700 px-10 py-5 rounded-2xl font-bold hover:bg-lime-50 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Solicitar Consulta Agrícola
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
              🌾 Consulta inicial gratuita • 🔒 Confidencialidad garantizada • ⚡ Resultados en 30 días
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AgriculturaPage; 