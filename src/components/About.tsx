import React, { useState, useEffect } from 'react';

interface AboutProps {
  title?: string;
  subtitle?: string;
  mainTitle?: string;
  description1?: string;
  description2?: string;
  features?: string[];
  imageUrl?: string;
  imageAlt?: string;
  stats?: Array<{
    number: string;
    label: string;
    icon: React.ReactNode;
  }>;
}

const About: React.FC<AboutProps> = ({
  title = 'Sobre AIGS',
  subtitle = 'Especialistas en IA para el sector minero. Combinamos expertise técnico en machine learning con profundo conocimiento de los desafíos operativos de la minería moderna.',
  mainTitle = 'Experiencia Técnica que Habla su Idioma',
  description1 = 'Somos un equipo híbrido de científicos de datos, ingenieros y especialistas en recursos naturales. Nuestra ventaja radica en que no solo dominamos el machine learning y la estadística avanzada (espacial, bayesiana), sino que entendemos los desafíos geológicos, metalúrgicos y operativos de la minería.',
  description2 = 'Hablamos su idioma y estamos comprometidos con generar resultados medibles. Nuestro enfoque se basa en la comprensión profunda de sus procesos, desde la exploración hasta la planta, para implementar soluciones de IA que realmente impacten en su operación.',
  features = [
    'Experiencia Comprobada en Operaciones Mineras',
    'Dominio de Estadística Espacial y Geoestadística',
    'Especialización en Geometalurgia y Procesamiento'
  ],
  imageUrl = 'https://placehold.co/600x400/2D1B69/FFB366?text=Equipo+AIGS+Minería',
  imageAlt = 'Equipo AIGS especializado en IA para minería',
  stats = [
    {
      number: '25+',
      label: 'Operaciones Mineras',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      number: '150+',
      label: 'Modelos Implementados',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      number: '12+',
      label: 'Años en Minería',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: '$50M+',
      label: 'Valor Generado',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ]
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleStats, setVisibleStats] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('about-content')) {
              setIsVisible(true);
            }
            if (entry.target.classList.contains('stat-item')) {
              const statIndex = Number(entry.target.getAttribute('data-index'));
              setTimeout(() => {
                setVisibleStats(prev => [...prev, statIndex]);
              }, statIndex * 200);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const aboutContent = document.querySelector('.about-content');
    const statItems = document.querySelectorAll('.stat-item');
    
    if (aboutContent) observer.observe(aboutContent);
    statItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="nosotros" className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-subtle-pulse"></div>
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl animate-subtle-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Floating Elements */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-500/10 rounded-full animate-gentle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="title-gradient">{title.split('AIGS')[0]}</span>
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-blue-400 bg-clip-text text-transparent font-extrabold">AIGS</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          {/* Decorative Element */}
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-orange-400 via-yellow-500 to-blue-400 rounded-full"></div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Section */}
          <div className={`about-content transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="relative group">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl glass-card p-2">
                <img 
                  src={imageUrl} 
                  alt={imageAlt}
                  className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Effects */}
                <div className="absolute inset-2 rounded-2xl bg-gradient-to-tr from-orange-400/20 via-transparent to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating Mining Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 glass-card rounded-2xl flex items-center justify-center animate-float bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-400/30">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 glass-card rounded-2xl flex items-center justify-center animate-float bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-400/30" style={{ animationDelay: '1s' }}>
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`about-content transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-blue-400 bg-clip-text text-transparent">
                {mainTitle}
              </span>
            </h3>
            
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>{description1}</p>
              <p>{description2}</p>
            </div>

            {/* Mining Expertise */}
            <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-400/20">
              <h4 className="text-xl font-semibold text-orange-300 mb-4">Nuestra Especialización Minera:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
                <div>• Geometalurgia Predictiva</div>
                <div>• Estadística Espacial</div>
                <div>• Optimización de Planta</div>
                <div>• Análisis Geoestadístico</div>
                <div>• Mantenimiento Predictivo</div>
                <div>• Procesamiento de Minerales</div>
              </div>
            </div>

            {/* Features List */}
            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <li 
                  key={index} 
                  className={`flex items-center text-lg transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: `${600 + index * 200}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-yellow-600 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-200">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="mt-10">
              <button
                onClick={() => {
                  const element = document.getElementById('servicios');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-orange-500 to-yellow-600 text-slate-900 font-semibold text-lg px-8 py-4 rounded-xl hover:from-orange-400 hover:to-yellow-500 transition-all duration-300 group"
              >
                <span className="flex items-center gap-2">
                  Descubra Nuestras Soluciones
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-index={index}
              className={`stat-item text-center glass-card p-6 rounded-2xl group cursor-pointer transition-all duration-700 hover:scale-105 bg-gradient-to-b from-orange-500/5 to-yellow-500/5 border border-orange-400/20 ${
                visibleStats.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400/20 to-yellow-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
              </div>
              
              {/* Number */}
              <div className="text-3xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              
              {/* Label */}
              <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 