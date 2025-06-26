import React, { useState, useEffect } from 'react';

interface CasoExito {
  titulo: string;
  desafio: string;
  solucion: string;
  resultado: string;
  resultadoDestacado: string;
  roi: string;
  icon: React.ReactNode;
  gradientColor: string;
}

interface CasosExitoProps {
  title?: string;
  subtitle?: string;
}

const CasosExito: React.FC<CasosExitoProps> = ({
  title = 'Aplicaciones de Impacto Real',
  subtitle = 'Ejemplos concretos de cómo nuestras soluciones de IA transforman operaciones mineras y generan valor medible.'
}) => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const casos: CasoExito[] = [
    {
      titulo: 'Optimización de Recuperación en Planta de Oro',
      desafio: 'Una minera de oro enfrentaba una recuperación inestable por la variabilidad en la dureza del mineral, generando pérdidas significativas en producción.',
      solucion: 'Implementamos un modelo predictivo que anticipa la dureza del mineral que alimenta la planta, recomendando ajustes en tiempo real en la velocidad del molino SAG y dosificación de reactivos.',
      resultado: 'Recuperación sostenida mejorada en 1.5%, reducción del 12% en el consumo de energía y optimización de reactivos.',
      resultadoDestacado: '+1.5% de recuperación sostenida',
      roi: 'ROI de 10x en 6 meses',
      gradientColor: 'from-yellow-500 to-orange-600',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      titulo: 'Mantenimiento Predictivo de Flota Minera',
      desafio: 'Una operación de cobre experimentaba paradas no planificadas frecuentes en su flota de camiones, generando costos elevados y pérdida de productividad.',
      solucion: 'Desarrollamos un sistema de mantenimiento predictivo usando datos de sensores IoT para anticipar fallas en transmisiones, frenos y sistemas hidráulicos de la flota de 45 camiones.',
      resultado: 'Reducción del 35% en downtime no planificado, aumento del 22% en disponibilidad de flota y optimización del inventario de repuestos.',
      resultadoDestacado: '-35% downtime no planificado',
      roi: 'ROI de 8x en 8 meses',
      gradientColor: 'from-blue-500 to-teal-600',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      titulo: 'Asistente Geológico Inteligente',
      desafio: 'Un equipo de exploración tardaba semanas en revisar décadas de informes geológicos y sondajes para identificar zonas prometedoras, ralentizando las decisiones de perforación.',
      solucion: 'Creamos un asistente de IA basado en LLM que procesa 25 años de reportes geológicos, permitiendo consultas en lenguaje natural para encontrar patrones, anomalías y recomendaciones de targets.',
      resultado: 'Reducción del 70% en tiempo de análisis geológico, aumento del 40% en precisión de targets y preservación del conocimiento institucional.',
      resultadoDestacado: '-70% tiempo de análisis',
      roi: 'ROI de 15x en 4 meses',
      gradientColor: 'from-green-500 to-emerald-600',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
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
            }, cardIndex * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.caso-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="casos-exito" className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements con la imagen */}
      <div className="absolute inset-0">
        {/* Imagen de fondo con overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/Gemini_Generated_Image_c39w3ac39w3ac39w.png')`,
            filter: 'blur(2px) brightness(0.15)'
          }}
        />
        
        {/* Overlay gradiente para mejor legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
      </div>
      
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-80 h-80 bg-yellow-500/4 rounded-full blur-3xl animate-subtle-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/4 rounded-full blur-3xl animate-subtle-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-green-500/3 rounded-full blur-2xl animate-subtle-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="title-gradient">{title.split('Impacto')[0]}</span>
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-extrabold">Impacto Real</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          {/* Decorative Line */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full"></div>
          </div>
        </div>

        {/* Casos Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {casos.map((caso, index) => (
            <div
              key={index}
              data-index={index}
              className={`caso-card glass-card group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                background: `linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.6))`,
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Header with Icon */}
              <div className={`p-6 bg-gradient-to-r ${caso.gradientColor} rounded-t-2xl relative overflow-hidden`}>
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <div className="text-white">
                      {caso.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {caso.titulo}
                  </h3>
                </div>
                
                {/* Resultado Destacado */}
                <div className="bg-white/10 rounded-lg p-3 mb-4 relative z-10">
                  <p className="text-white font-bold text-lg text-center">
                    {caso.resultadoDestacado}
                  </p>
                  <p className="text-white/80 text-center text-sm">
                    {caso.roi}
                  </p>
                </div>

                {/* Subtle pattern overlay solo en hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-white/10 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* El Desafío */}
                <div>
                  <h4 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    El Desafío
                  </h4>
                  <p className="text-slate-300 leading-relaxed text-sm group-hover:text-slate-200 transition-colors duration-300">
                    {caso.desafio}
                  </p>
                </div>

                {/* Nuestra Solución */}
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Nuestra Solución
                  </h4>
                  <p className="text-slate-300 leading-relaxed text-sm group-hover:text-slate-200 transition-colors duration-300">
                    {caso.solucion}
                  </p>
                </div>

                {/* El Resultado */}
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    El Resultado
                  </h4>
                  <p className="text-slate-200 leading-relaxed text-sm font-medium group-hover:text-white transition-colors duration-300">
                    {caso.resultado}
                  </p>
                </div>
              </div>

              {/* Hover Border sutil */}
              <div 
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                style={{
                  border: `2px solid transparent`,
                  background: `linear-gradient(135deg, ${caso.gradientColor.split(' ')[1]}, ${caso.gradientColor.split(' ')[3]}) border-box`,
                  mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude'
                }}
              ></div>

              {/* Hover Indicator sutil */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-70 transition-all duration-500">
                <div className="w-3 h-3 bg-white/60 rounded-full animate-subtle-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Summary */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center glass-card p-6 bg-gradient-to-b from-orange-500/10 to-yellow-500/10 border border-orange-400/20 backdrop-blur-sm">
            <div className="text-4xl font-bold text-orange-400 mb-2">95%</div>
            <div className="text-slate-300">de nuestros proyectos</div>
            <div className="text-sm text-slate-400">superan las expectativas de ROI</div>
          </div>
          <div className="text-center glass-card p-6 bg-gradient-to-b from-blue-500/10 to-teal-500/10 border border-blue-400/20 backdrop-blur-sm">
            <div className="text-4xl font-bold text-blue-400 mb-2">6 meses</div>
            <div className="text-slate-300">tiempo promedio</div>
            <div className="text-sm text-slate-400">para generar ROI positivo</div>
          </div>
          <div className="text-center glass-card p-6 bg-gradient-to-b from-green-500/10 to-emerald-500/10 border border-green-400/20 backdrop-blur-sm">
            <div className="text-4xl font-bold text-green-400 mb-2">$2.5M</div>
            <div className="text-slate-300">ahorro promedio anual</div>
            <div className="text-sm text-slate-400">por proyecto implementado</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glass-card p-8 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-400/30 max-w-4xl mx-auto backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Su operación podría ser el próximo caso de éxito?
            </h3>
            <p className="text-slate-300 mb-6 text-lg">
              Cada proyecto es único. Conversemos sobre los desafíos específicos de su operación minera.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contacto');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-orange-500 to-yellow-600 text-slate-900 font-semibold text-lg px-8 py-4 rounded-xl hover:from-orange-400 hover:to-yellow-500 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <span className="flex items-center gap-2">
                Analicemos su Caso
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

export default CasosExito; 