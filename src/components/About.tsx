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
  subtitle = 'Pioneros en la integración de inteligencia artificial generativa para impulsar la transformación digital y el crecimiento empresarial.',
  mainTitle = 'Nuestra Misión: Innovación y Resultados',
  description1 = 'En AIGS, combinamos una profunda experiencia en inteligencia artificial con un enfoque estratégico para ofrecer soluciones generativas que no solo resuelven los desafíos actuales de su empresa, sino que también anticipan las oportunidades del mañana.',
  description2 = 'Nuestro equipo está compuesto por expertos apasionados por la tecnología y comprometidos con la excelencia. Trabajamos de la mano con nuestros clientes para entender sus necesidades únicas y co-crear soluciones que marquen la diferencia.',
  features = [
    'Experiencia Comprobada y Liderazgo',
    'Soluciones a Medida y Escalables',
    'Compromiso con la Ética y la Transparencia'
  ],
  imageUrl = 'https://placehold.co/600x400/1A202C/C9D1D9?text=Equipo+AIGS',
  imageAlt = 'Equipo AIGS trabajando en soluciones de IA',
  stats = [
    {
      number: '50+',
      label: 'Clientes Satisfechos',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      number: '200+',
      label: 'Proyectos Completados',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      number: '15+',
      label: 'Años de Experiencia',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      number: '24/7',
      label: 'Soporte Disponible',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 3v6m0 6v6m6-12h-6m-6 0h6" />
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
      <div className="absolute inset-0 section-glass"></div>
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-accent-magenta/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-accent-green/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Floating Elements */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent-cyan/10 rounded-full animate-float"
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
            <span className="title-accent">AIGS</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          {/* Decorative Element */}
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-accent-magenta via-accent-green to-accent-cyan rounded-full"></div>
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
                <div className="absolute inset-2 rounded-2xl bg-gradient-to-tr from-accent-cyan/20 via-transparent to-accent-magenta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 glass-card rounded-2xl flex items-center justify-center animate-float">
                <svg className="w-8 h-8 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 glass-card rounded-2xl flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <svg className="w-8 h-8 text-accent-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`about-content transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 title-gradient">
              {mainTitle}
            </h3>
            
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>{description1}</p>
              <p>{description2}</p>
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
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-accent-green to-accent-cyan flex items-center justify-center mr-4 flex-shrink-0">
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
                className="btn-secondary-modern text-lg px-8 py-4 group"
              >
                <span className="flex items-center gap-2">
                  Conoce Nuestros Servicios
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
              className={`stat-item text-center glass-card p-6 rounded-2xl group cursor-pointer transition-all duration-700 hover:scale-105 ${
                visibleStats.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-magenta/20 flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
              </div>
              
              {/* Number */}
              <div className="text-3xl font-bold title-accent mb-2 group-hover:scale-110 transition-transform duration-300">
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