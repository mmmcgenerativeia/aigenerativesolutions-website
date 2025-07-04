import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CapacitacionesPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section - Enhanced */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 min-h-[70vh] flex items-center relative">
          {/* Subtle Background Effects */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/20 rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-blue-400/20 rounded-lg rotate-45"></div>
            <div className="absolute top-3/4 left-1/2 w-16 h-16 border border-indigo-400/20 rounded-full"></div>
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-7xl lg:text-8xl font-bold mb-8">
              <span className="text-white">Capacitaciones Corporativas en</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">IA Generativa</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-8"></div>
            <p className="text-2xl text-slate-300 mb-12 max-w-5xl mx-auto leading-relaxed font-medium">
              Programas de formación especializados para equipos ejecutivos y técnicos. 
              Desde fundamentos hasta implementación avanzada de IA en su organización.
            </p>
          </div>
        </section>

        {/* Programas de Capacitación - Dark Theme */}
        <section className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6 text-white">
                Programas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Capacitación Especializados</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Ejecutivos y Líderes */}
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-2xl">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white text-center">IA para Ejecutivos y Líderes</h3>
                <p className="text-slate-300 mb-8 text-center leading-relaxed text-lg">
                  Programa estratégico para líderes empresariales sobre el impacto transformador 
                  de la IA en sus organizaciones y mercados.
                </p>
                
                <div className="mb-8">
                  <h4 className="font-bold text-blue-300 mb-4 text-xl">Módulos del Programa:</h4>
                  <ul className="text-slate-300 space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Visión estratégica de IA en los negocios</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>ROI y métricas de proyectos de IA</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Gestión del cambio organizacional</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Ética y responsabilidad en IA</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Casos de éxito y lecciones aprendidas</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-3xl font-bold text-blue-400">16</div>
                    <div className="text-sm text-slate-400">Horas</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-2xl font-bold text-green-400">Virtual</div>
                    <div className="text-sm text-slate-400">Modalidad</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">C-Level</div>
                    <div className="text-sm text-slate-400">Dirigido a</div>
                  </div>
                </div>
              </div>

              {/* Equipos Técnicos */}
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-2xl">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white text-center">IA Técnica y Desarrollo</h3>
                <p className="text-slate-300 mb-8 text-center leading-relaxed text-lg">
                  Formación práctica para desarrolladores, ingenieros y equipos técnicos 
                  en implementación de soluciones de IA generativa.
                </p>
                
                <div className="mb-8">
                  <h4 className="font-bold text-purple-300 mb-4 text-xl">Módulos del Programa:</h4>
                  <ul className="text-slate-300 space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Fundamentos de Machine Learning</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>APIs de IA generativa (OpenAI, Claude, etc.)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Ingeniería de prompts avanzada</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Fine-tuning de modelos personalizados</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Desarrollo de aplicaciones con IA</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-3xl font-bold text-purple-400">40</div>
                    <div className="text-sm text-slate-400">Horas</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-2xl font-bold text-green-400">Hands-on</div>
                    <div className="text-sm text-slate-400">Práctica</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-2xl font-bold text-blue-400">Devs</div>
                    <div className="text-sm text-slate-400">Dirigido a</div>
                  </div>
                </div>
              </div>

              {/* Ingeniería de Prompts */}
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-2xl">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white text-center">Ingeniería de Prompts</h3>
                <p className="text-slate-300 mb-8 text-center leading-relaxed text-lg">
                  Especialización en técnicas avanzadas de prompt engineering para 
                  maximizar la efectividad de modelos de IA generativa.
                </p>
                
                <div className="mb-8">
                  <h4 className="font-bold text-cyan-300 mb-4 text-xl">Contenido Especializado:</h4>
                  <ul className="text-slate-300 space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>Técnicas de prompting efectivo</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>Chain-of-thought y reasoning</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>Few-shot y zero-shot learning</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>Prompt chaining y workflows</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>Evaluación y optimización de prompts</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-3xl font-bold text-cyan-400">24</div>
                    <div className="text-sm text-slate-400">Horas</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-2xl font-bold text-green-400">Práctico</div>
                    <div className="text-sm text-slate-400">Enfoque</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-2xl font-bold text-orange-400">Mixed</div>
                    <div className="text-sm text-slate-400">Audiencia</div>
                  </div>
                </div>
              </div>

              {/* Automatización de Procesos */}
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-2xl">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white text-center">Automatización con IA</h3>
                <p className="text-slate-300 mb-8 text-center leading-relaxed text-lg">
                  Aprenda a automatizar procesos empresariales utilizando IA generativa 
                  y herramientas de automatización inteligente.
                </p>
                
                <div className="mb-8">
                  <h4 className="font-bold text-emerald-300 mb-4 text-xl">Casos Prácticos:</h4>
                  <ul className="text-slate-300 space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span>Automatización de documentos y reportes</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span>Chatbots y asistentes virtuales</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span>Análisis automático de datos</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span>Workflows inteligentes</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span>Integración con sistemas existentes</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-3xl font-bold text-emerald-400">32</div>
                    <div className="text-sm text-slate-400">Horas</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-2xl font-bold text-green-400">Proyecto</div>
                    <div className="text-sm text-slate-400">Final</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-2xl font-bold text-blue-400">Ops</div>
                    <div className="text-sm text-slate-400">Dirigido a</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modalidades y Certificaciones - Dark Theme */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-slate-900">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Modalidades */}
              <div>
                <h2 className="text-4xl font-bold mb-12 text-white">
                  Modalidades de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Capacitación</span>
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-6 bg-white/5 rounded-2xl p-6 backdrop-blur-lg border border-white/10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-white">Presencial In-Company</h3>
                      <p className="text-slate-300 leading-relaxed">
                        Capacitaciones en sus instalaciones con casos específicos de su industria 
                        y desafíos particulares de su organización.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 bg-white/5 rounded-2xl p-6 backdrop-blur-lg border border-white/10">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-white">Virtual Interactiva</h3>
                      <p className="text-slate-300 leading-relaxed">
                        Sesiones en línea con laboratorios prácticos, breakout rooms y 
                        proyectos colaborativos en tiempo real.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 bg-white/5 rounded-2xl p-6 backdrop-blur-lg border border-white/10">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-white">Híbrida Flexible</h3>
                      <p className="text-slate-300 leading-relaxed">
                        Combinación de sesiones presenciales para workshops prácticos 
                        y virtuales para contenido teórico y seguimiento.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificaciones */}
              <div>
                <h2 className="text-4xl font-bold mb-12 text-white">
                  Certificaciones <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">AIGS</span>
                </h2>
                
                <div className="space-y-8">
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-amber-400">Certified AI Leader</h3>
                    </div>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      Certificación ejecutiva en liderazgo estratégico de IA para directivos 
                      y gerentes de alto nivel.
                    </p>
                    <div className="text-sm text-blue-400 font-medium">
                      Duración: 16 horas • Examen: Online • Vigencia: 2 años
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-blue-400">AI Technical Specialist</h3>
                    </div>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      Certificación técnica en desarrollo e implementación de soluciones 
                      de IA generativa para profesionales IT.
                    </p>
                    <div className="text-sm text-blue-400 font-medium">
                      Duración: 40 horas • Proyecto: Práctico • Vigencia: 2 años
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-green-400">Prompt Engineering Expert</h3>
                    </div>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      Especialización avanzada en ingeniería de prompts y optimización 
                      de modelos de lenguaje para casos de uso específicos.
                    </p>
                    <div className="text-sm text-blue-400 font-medium">
                      Duración: 24 horas • Portfolio: Requerido • Vigencia: 1 año
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios - Dark Theme */}
        <section className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6 text-white">
                Lo que dicen nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">participantes</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">MR</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xl">Miguel Rodríguez</h4>
                    <p className="text-slate-400">CTO, TechCorp</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  "La capacitación técnica de AIGS transformó completamente cómo nuestro equipo 
                  aborda la IA. Los proyectos prácticos nos dieron confianza para implementar 
                  soluciones reales inmediatamente."
                </p>
                <div className="flex text-yellow-400 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">AL</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xl">Ana López</h4>
                    <p className="text-slate-400">CEO, InnovateCorp</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  "El programa ejecutivo me dio la visión estratégica que necesitaba para liderar 
                  la transformación digital de nuestra empresa. ROI medible desde el primer mes."
                </p>
                <div className="flex text-yellow-400 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold text-white mb-8">
              Impulse a su Equipo con <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-200">IA Generativa</span>
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              Únase a más de 500 profesionales que ya han transformado sus carreras 
              con nuestras capacitaciones especializadas en IA.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="#contacto" 
                className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Solicitar Información Detallada
              </a>
              <a 
                href="https://github.com/aigenerativesolutions" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-lg text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center justify-center space-x-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.239 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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

export default CapacitacionesPage; 