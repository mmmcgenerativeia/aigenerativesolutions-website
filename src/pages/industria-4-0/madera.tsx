import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { industryThemes } from '@/data/design-tokens';

const MaderaPage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const theme = industryThemes.madera;

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
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900">
        {/* Subtle Decorative Elements Only */}
        <div className="absolute top-1/4 right-1/3 w-32 h-32 border border-teal-400/10 rounded-full opacity-30"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-emerald-400/15 rounded-lg rotate-45 opacity-20"></div>
        <div className="absolute top-3/4 left-1/2 w-16 h-16 border border-green-400/10 rounded-full opacity-25"></div>
        
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
                  <span className="block text-white font-light tracking-wide">Industria</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-400 to-green-300 font-black tracking-tighter">
                    Maderera 4.0
                  </span>
                  <span className="block text-slate-200 text-4xl font-medium tracking-wide mt-4">
                    Sostenible e Inteligente
                  </span>
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full"></div>
              </div>
              
              <p className="text-xl lg:text-2xl text-slate-200 mb-12 max-w-5xl mx-auto leading-relaxed font-medium">
                Revolucionamos la industria maderera con gestión forestal sostenible, 
                optimización de aserraderos y trazabilidad blockchain.
              </p>
              
              {/* Animated Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                {[
                  { value: '35%', label: 'Menos Desperdicio', icon: '🌿' },
                  { value: '95%', label: 'Trazabilidad', icon: '📋' },
                  { value: '50%', label: 'Más Eficiencia', icon: '⚡' },
                  { value: '100%', label: 'Sostenible', icon: '🌍' }
                ].map((metric, index) => (
                  <div key={index} className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/25 transition-all duration-300 group border border-white/20">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {metric.icon}
                    </div>
                    <div className="text-3xl font-bold text-emerald-300 mb-1">{metric.value}</div>
                    <div className="text-slate-200 text-sm">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#soluciones" 
                  className={`bg-gradient-to-r ${theme.gradient} text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25`}
                >
                  Explorar Soluciones
                </a>
                <a 
                  href="#contacto" 
                  className="bg-white/20 backdrop-blur-lg text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/30 transition-all duration-300 border border-white/30"
                >
                  Consulta Forestal
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Elegant Section Separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"></div>

        {/* Enhanced Soluciones Específicas - Dark Theme */}
        <section id="soluciones" className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 relative">
          {/* Subtle Background Effects */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-emerald-400/20 rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-teal-400/20 rounded-lg rotate-45"></div>
            <div className="absolute top-3/4 left-1/2 w-16 h-16 border border-green-400/20 rounded-full"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-white mb-8">
                Soluciones IA para <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Silvicultura 4.0</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
                Tecnologías avanzadas para gestión forestal sostenible y optimización de procesos
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Gestión Forestal - Fixed Icon Position */}
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                  </svg>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-white text-center">Gestión Forestal IA</h3>
                  <p className="text-slate-300 leading-relaxed font-medium text-center">
                    Monitoreo inteligente de bosques con drones y sensores IoT 
                    para gestión sostenible y certificación automática.
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    'Inventario forestal automatizado',
                    'Detección temprana de enfermedades',
                    'Planificación de cortes sostenibles'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-slate-200 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-white/20">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">95%</div>
                  <div className="text-xs text-slate-300 font-medium">Precisión</div>
                </div>
              </div>

              {/* Optimización Aserraderos - Fixed Icon Position */}
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.71,20.29L20.29,21.71A1,1 0 0,1 18.88,21.71L7,9.85A3.81,3.81 0 0,1 6,10A4,4 0 0,1 2,6A4,4 0 0,1 6,2A4,4 0 0,1 10,6C10,6.42 9.95,6.83 9.85,7.22L18.29,15.66C18.66,16.03 19.21,16.03 19.58,15.66L21.71,13.53C22.1,13.14 22.1,12.5 21.71,12.11L13.03,3.44L14.44,2.03L23.11,10.7C23.5,11.09 23.5,11.72 23.11,12.11L20.29,14.93C20.29,14.93 20.29,14.93 20.29,14.93L21.71,16.35C22.1,16.74 22.1,17.37 21.71,17.76L21.71,20.29M1.39,4.22L4.22,1.39L5.64,2.81L2.81,5.64L1.39,4.22Z"/>
                  </svg>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-white text-center">Optimización Aserraderos</h3>
                  <p className="text-slate-300 leading-relaxed font-medium text-center">
                    IA para maximizar aprovechamiento de troncos, 
                    minimizar desperdicio y optimizar cortes automáticos.
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    'Análisis 3D de troncos',
                    'Optimización de cortes automática',
                    'Control de calidad inteligente'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <span className="text-slate-200 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-white/20">
                  <div className="text-2xl font-bold text-teal-400 mb-1">35%</div>
                  <div className="text-xs text-slate-300 font-medium">Menos Desperdicio</div>
                </div>
              </div>

              {/* Trazabilidad Blockchain - Fixed Icon Position */}
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.8C8,12.2 8.6,11.6 9.2,11.6V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z"/>
                  </svg>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-white text-center">Trazabilidad Blockchain</h3>
                  <p className="text-slate-300 leading-relaxed font-medium text-center">
                    Registro inmutable desde el bosque hasta el consumidor 
                    final para certificación de sostenibilidad completa.
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    'Origen forestal verificable',
                    'Certificaciones automáticas',
                    'Cadena de custodia completa'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-slate-200 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-white/20">
                  <div className="text-2xl font-bold text-green-400 mb-1">100%</div>
                  <div className="text-xs text-slate-300 font-medium">Trazabilidad</div>
                </div>
              </div>

              {/* Calidad Inteligente - Fixed Icon Position */}
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M6,2H18A2,2 0 0,1 20,4V12.5C19.36,12.18 18.7,12 18,12V8H12V12.05C11.16,12.22 10.39,12.54 9.71,13H6V11H10V9H6V7H14V5H6V2Z"/>
                  </svg>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-white text-center">Control de Calidad IA</h3>
                  <p className="text-slate-300 leading-relaxed font-medium text-center">
                    Inspección automática con visión artificial para 
                    clasificación y control de calidad en tiempo real.
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    'Clasificación automática de madera',
                    'Detección de defectos',
                    'Estándares internacionales'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-slate-200 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-white/20">
                  <div className="text-2xl font-bold text-blue-400 mb-1">98%</div>
                  <div className="text-xs text-slate-300 font-medium">Precisión</div>
                </div>
              </div>

              {/* Mantenimiento Predictivo - Fixed Icon Position */}
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
                  </svg>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-white text-center">Mantenimiento Predictivo</h3>
                  <p className="text-slate-300 leading-relaxed font-medium text-center">
                    Predicción de fallas en maquinaria de aserradero 
                    para minimizar downtime y maximizar productividad.
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    'Sensores IoT avanzados',
                    'Predicción de mantenimiento',
                    'Optimización de vida útil'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-slate-200 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-white/20">
                  <div className="text-2xl font-bold text-orange-400 mb-1">75%</div>
                  <div className="text-xs text-slate-300 font-medium">Menos Downtime</div>
                </div>
              </div>

              {/* Sostenibilidad IA - Fixed Icon Position */}
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.8,20C17.4,21.2 16.3,22 15,22H5C3.3,22 2,20.7 2,19V18C2,16.7 3.3,15.4 5,15.4H6V12C6,8.7 8.7,6 12,6C15.3,6 18,8.7 18,12V15.4H19C20.7,15.4 22,16.7 22,18V19C22,19.4 21.8,19.7 21.5,20H17.8M16,12C16,9.8 14.2,8 12,8C9.8,8 8,9.8 8,12V15.4H16V12M11,10.1C11,9.5 11.4,9 12,9C12.6,9 13,9.4 13,10.1V13.9C13,14.5 12.6,15 12,15C11.4,15 11,14.6 11,13.9V10.1Z"/>
                  </svg>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-white text-center">Sostenibilidad IA</h3>
                  <p className="text-slate-300 leading-relaxed font-medium text-center">
                    Optimización de recursos y reducción de huella de carbono 
                    con algoritmos de eficiencia energética.
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    'Huella de carbono optimizada',
                    'Eficiencia energética',
                    'Certificaciones automáticas'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                      <span className="text-slate-200 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-white/20">
                  <div className="text-2xl font-bold text-lime-400 mb-1">50%</div>
                  <div className="text-xs text-slate-300 font-medium">Menos CO2</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Casos de Éxito - Enhanced */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-white mb-6">
                Casos de Éxito en <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Silvicultura 4.0</span>
              </h2>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto font-medium">
                Transformaciones reales que demuestran el poder de la IA en gestión forestal
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌲</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Forestal del Norte - Chile</h3>
                    <p className="text-slate-300 font-medium">15,000 hectáreas, gestión sostenible</p>
                  </div>
                </div>
                
                <p className="text-slate-200 mb-8 leading-relaxed font-medium">
                  Implementación completa de forestería 4.0: redujo desperdicios en 35%, 
                  mejoró la trazabilidad al 100% y aumentó la eficiencia operacional 
                  manteniendo certificaciones ambientales internacionales.
                </p>
                
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="text-3xl font-bold text-emerald-300">35%</div>
                    <div className="text-sm text-slate-300 font-medium">Menos Desperdicio</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="text-3xl font-bold text-green-300">100%</div>
                    <div className="text-sm text-slate-300 font-medium">Trazabilidad</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="text-3xl font-bold text-blue-300">ISO</div>
                    <div className="text-sm text-slate-300 font-medium">Certificación</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🪚</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Aserradero Tecnológico - Brasil</h3>
                    <p className="text-slate-300 font-medium">Smart sawmill, optimización total</p>
                  </div>
                </div>
                
                <p className="text-slate-200 mb-8 leading-relaxed font-medium">
                  Transformación digital completa del aserradero: optimizó cortes 
                  aumentando aprovechamiento en 30%, redujo downtime en 60% 
                  y alcanzó certificación de sostenibilidad completa.
                </p>
                
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="text-3xl font-bold text-teal-300">30%</div>
                    <div className="text-sm text-slate-300 font-medium">Mejor Aprovechamiento</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="text-3xl font-bold text-cyan-300">60%</div>
                    <div className="text-sm text-slate-300 font-medium">Menos Downtime</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="text-3xl font-bold text-blue-300">A+</div>
                    <div className="text-sm text-slate-300 font-medium">Sostenibilidad</div>
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
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-emerald-400/20 rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-teal-400/20 rounded-lg rotate-45"></div>
            <div className="absolute top-3/4 left-1/2 w-16 h-16 border border-green-400/20 rounded-full"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-5xl font-bold text-center mb-16 text-white">
              Tecnologías y <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Estándares</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: '🌲', title: 'FSC Certified', desc: 'Certificación automática de sostenibilidad', color: 'from-emerald-500 to-green-600' },
                { icon: '📡', title: 'IoT Forestal', desc: 'Sensores inteligentes en tiempo real', color: 'from-teal-500 to-cyan-600' },
                { icon: '🔗', title: 'Blockchain', desc: 'Trazabilidad inmutable completa', color: 'from-blue-500 to-indigo-600' },
                { icon: '🤖', title: 'Computer Vision', desc: 'Análisis visual automatizado', color: 'from-purple-500 to-pink-600' }
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

        {/* Certificaciones y Sostenibilidad */}
        <section className={`py-24 bg-gradient-to-br ${theme.background.primary} relative`}>
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold text-center mb-16 text-slate-900">
              Sostenibilidad y <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.gradient}`}>Certificaciones</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: '🌿', title: 'FSC Certified', desc: 'Cumplimiento automático de estándares forestales', color: 'green' },
                { icon: '🏆', title: 'PEFC Standards', desc: 'Trazabilidad según estándares internacionales', color: 'blue' },
                { icon: '🌍', title: 'Carbon Neutral', desc: 'Cálculo preciso de huella de carbono', color: 'emerald' },
                { icon: '📊', title: 'Smart Reporting', desc: 'Reportes automáticos para auditores', color: 'amber' }
              ].map((cert, index) => (
                <div key={index} className="group bg-white/95 backdrop-blur-lg rounded-2xl p-8 hover:bg-white transition-all duration-500 hover:scale-105 border border-teal-100 shadow-lg">
                  <div className={`w-16 h-16 bg-${cert.color}-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{cert.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 text-center">{cert.title}</h3>
                  <p className="text-slate-700 text-center leading-relaxed font-medium">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced */}
        <section className={`py-24 bg-gradient-to-r ${theme.gradient} relative overflow-hidden`}>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl font-bold text-white mb-8">
              Haga su Operación Maderera más Sostenible e Inteligente
            </h2>
            <p className="text-xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Únase a las empresas madereras líderes que están aprovechando la IA 
              para optimizar operaciones, maximizar sostenibilidad y garantizar trazabilidad completa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a 
                href="#contacto" 
                className="bg-white text-teal-700 px-10 py-5 rounded-2xl font-bold hover:bg-teal-50 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Solicitar Consulta Forestal
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
              🌲 Consulta inicial gratuita • 🔒 Confidencialidad garantizada • ⚡ Resultados en 60 días
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MaderaPage; 