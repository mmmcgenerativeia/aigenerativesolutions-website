import React, { useState, useEffect } from 'react';

interface Service {
  title: string;
  description: string;
  keyResult?: string;
  icon: React.ReactNode;
  color: string;
}

interface ServiceCategory {
  title: string;
  subtitle: string;
  description: string;
  services: Service[];
  bgColor: string;
  borderColor: string;
}

interface ServicesProps {
  title?: string;
  subtitle?: string;
}

const Services: React.FC<ServicesProps> = ({
  title = 'Nuestras Soluciones para Minería 4.0',
  subtitle = 'Transformamos su operación minera con IA, desde la capacitación estratégica hasta soluciones de alto impacto que maximizan la eficiencia y el ROI.'
}) => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const categories: ServiceCategory[] = [
    {
      title: 'Capacitación y Adopción Estratégica de IA',
      subtitle: 'El punto de entrada perfecto para gerentes',
      description: 'Empoderamos a su equipo directivo con las herramientas y conocimientos necesarios para liderar la transformación digital minera.',
      bgColor: 'from-orange-500/10 to-yellow-500/10',
      borderColor: 'border-orange-400/30',
      services: [
        {
          title: 'Workshop Ejecutivo "IA para la Toma de Decisiones"',
          description: 'Capacitación intensiva para equipos gerenciales. Enseñamos a su equipo a utilizar la IA para interpretar dashboards de forma avanzada, aplicar prompt engineering para generar reportes automáticos y detectar oportunidades de optimización en sus propios datos. No requiere conocimientos técnicos.',
          keyResult: 'Equipos gerenciales capacitados en IA aplicada en 2 semanas',
          color: '#f97316',
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          )
        },
        {
          title: 'Hoja de Ruta de IA Personalizada',
          description: 'Analizamos sus operaciones y objetivos de negocio para entregarle una hoja de ruta estratégica y priorizada. Identificamos los proyectos de IA de mayor impacto y ROI para su faena, desde victorias rápidas hasta transformaciones a largo plazo.',
          keyResult: 'Roadmap estratégico con priorización por ROI en 4 semanas',
          color: '#eab308',
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          )
        }
      ]
    },
    {
      title: 'Soluciones de Alto Impacto y Analítica Avanzada',
      subtitle: 'Transformaciones que generan valor inmediato',
      description: 'Implementamos soluciones de IA avanzada que optimizan operaciones críticas y generan ROI medible en el corto plazo.',
      bgColor: 'from-blue-600/10 to-teal-500/10',
      borderColor: 'border-blue-400/30',
      services: [
        {
          title: 'Optimización Geometalúrgica Predictiva',
          description: 'Utilizamos sus datos geológicos y de planta para predecir el comportamiento del mineral (dureza, ley, recuperación). Nuestros modelos permiten optimizar el blending y los parámetros de la planta en tiempo real para maximizar la producción.',
          keyResult: 'Aumento de la recuperación, reducción de costos de energía y reactivos',
          color: '#0284c7',
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
          )
        },
        {
          title: 'Mantenimiento Predictivo de Flota y Activos Críticos',
          description: 'Analizamos los datos de sensores de sus camiones, palas y molinos para predecir fallas antes de que ocurran. Transforme su mantenimiento reactivo en una estrategia proactiva que aumenta la disponibilidad de equipos.',
          keyResult: 'Reducción del downtime no planificado, optimización de inventario de repuestos',
          color: '#0891b2',
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          )
        },
        {
          title: 'Asistente de Conocimiento Geológico (Basado en LLM)',
          description: 'Convertimos décadas de informes geológicos, sondajes y reportes en PDF en una base de conocimiento interactiva. Su equipo podrá "conversar" con sus datos históricos, haciendo preguntas en lenguaje natural para encontrar información clave en segundos.',
          keyResult: 'Aceleración de la exploración, preservación del conocimiento institucional',
          color: '#0d9488',
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          )
        }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number(entry.target.getAttribute('data-index'));
            setTimeout(() => {
              setVisibleCards(prev => [...prev, cardIndex]);
            }, cardIndex * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [activeCategory]);

  return (
    <section id="servicios" className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="title-gradient">{title.split('Minería 4.0')[0]}</span>
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-blue-400 bg-clip-text text-transparent">Minería 4.0</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          {/* Decorative Line */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 via-yellow-500 to-blue-400 rounded-full"></div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-col md:flex-row justify-center mb-12 gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-orange-500 to-yellow-600 text-slate-900 shadow-lg'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="mb-16">
          <div className={`glass-card p-8 mb-12 bg-gradient-to-r ${categories[activeCategory].bgColor} border ${categories[activeCategory].borderColor}`}>
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {categories[activeCategory].title}
              </h3>
              <p className="text-lg text-orange-300 mb-4">
                {categories[activeCategory].subtitle}
              </p>
              <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed">
                {categories[activeCategory].description}
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories[activeCategory].services.map((service, index) => (
              <div
                key={index}
                data-index={index}
                className={`service-card glass-card p-8 group cursor-pointer transition-all duration-700 ${
                  visibleCards.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  background: `linear-gradient(135deg, rgba(30, 41, 59, 0.4), rgba(30, 41, 59, 0.2))`
                }}
              >
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 relative group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                      border: `1px solid ${service.color}30`
                    }}
                  >
                    <div style={{ color: service.color }}>
                      {service.icon}
                    </div>
                    
                    {/* Glow Effect */}
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-md"
                      style={{ background: service.color }}
                    ></div>
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h4>
                
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300 mb-4">
                  {service.description}
                </p>

                {/* Key Result */}
                {service.keyResult && (
                  <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/20">
                    <p className="text-sm font-semibold text-green-400 mb-1">Resultado Clave:</p>
                    <p className="text-sm text-green-300">{service.keyResult}</p>
                  </div>
                )}

                {/* Interactive Border */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}20, transparent 50%, ${service.color}10)`,
                    border: `1px solid ${service.color}40`
                  }}
                ></div>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <svg 
                    className="w-5 h-5" 
                    style={{ color: service.color }} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-400/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para dar el siguiente paso en Minería 4.0?
            </h3>
            <p className="text-slate-300 mb-6 text-lg">
              Permítanos mostrarle en una demostración de 30 minutos cómo estas soluciones pueden aplicarse a los desafíos específicos de su operación.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contacto');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-orange-500 to-yellow-600 text-slate-900 font-semibold text-lg px-8 py-4 rounded-xl hover:from-orange-400 hover:to-yellow-500 hover:scale-105 hover:shadow-lg transition-all duration-300 group"
            >
              <span className="flex items-center gap-2">
                Solicitar una Demo Gratuita
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 