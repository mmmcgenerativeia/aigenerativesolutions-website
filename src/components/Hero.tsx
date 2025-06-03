import React, { useEffect, useState } from 'react';
import Logo from './Logo';

interface HeroProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  primaryButton?: string;
  primaryButtonHref?: string;
  secondaryButton?: string;
  secondaryButtonHref?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = 'Transformando Negocios con',
  highlight = 'Inteligencia Artificial Generativa',
  subtitle = 'En AIGS, fusionamos estrategia y tecnología de vanguardia para potenciar su empresa con soluciones de IA generativa a medida, abriendo nuevas fronteras de innovación y eficiencia.',
  primaryButton = 'Descubre Nuestras Soluciones',
  primaryButtonHref = '#servicios',
  secondaryButton = 'Hablemos de tu Proyecto',
  secondaryButtonHref = '#contacto'
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleButtonClick = (href: string) => {
    if (href.startsWith('#')) {
      scrollToSection(href);
    }
  };

  return (
    <section 
      id="inicio" 
      className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
          radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, rgba(255, 77, 166, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.05) 0%, transparent 70%),
          linear-gradient(135deg, rgba(2, 6, 23, 0.95) 0%, rgba(15, 23, 42, 0.9) 100%)
        `
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent-cyan/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Radial Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-magenta/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content Section */}
          <div className={`lg:w-1/2 text-center lg:text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Logo Integration */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <Logo size="lg" className="animate-float" />
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
              <span className="title-gradient">{title}</span>
              <br />
              <span className="title-accent bg-gradient-to-r from-accent-cyan via-accent-magenta to-accent-yellow bg-clip-text text-transparent animate-gradient-x">
                {highlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center lg:justify-start transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <button
                onClick={() => handleButtonClick(primaryButtonHref)}
                className="btn-primary-modern text-lg px-8 py-4 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {primaryButton}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              
              <button
                onClick={() => handleButtonClick(secondaryButtonHref)}
                className="btn-secondary-modern text-lg px-8 py-4 group"
              >
                <span className="flex items-center justify-center gap-2">
                  {secondaryButton}
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Stats or Key Points */}
            <div className={`mt-16 grid grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold title-accent mb-2">15+</div>
                <div className="text-sm text-slate-400">Años de Experiencia</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold title-accent mb-2">100+</div>
                <div className="text-sm text-slate-400">Proyectos Exitosos</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold title-accent mb-2">24/7</div>
                <div className="text-sm text-slate-400">Soporte Técnico</div>
              </div>
            </div>
          </div>

          {/* Visual Section */}
          <div className={`lg:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative">
              {/* Main Logo */}
              <div className="relative z-10">
                <Logo size="xl" className="animate-float drop-shadow-2xl" />
              </div>

              {/* Surrounding Effects */}
              <div className="absolute inset-0 -m-20">
                {/* Orbiting Elements */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 rounded-full animate-spin"
                    style={{
                      background: `linear-gradient(45deg, ${
                        ['#00d4ff', '#ff4da6', '#ffd700', '#00ff88', '#ff8533', '#8b5cf6'][i]
                      }, transparent)`,
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      animation: `spin ${8 + i * 2}s linear infinite reverse`
                    }}
                  >
                    <div 
                      className="w-2 h-2 rounded-full absolute"
                      style={{
                        background: ['#00d4ff', '#ff4da6', '#ffd700', '#00ff88', '#ff8533', '#8b5cf6'][i],
                        boxShadow: `0 0 10px ${['#00d4ff', '#ff4da6', '#ffd700', '#00ff88', '#ff8533', '#8b5cf6'][i]}`,
                        top: `${-150 - i * 20}px`,
                        left: '50%',
                        transform: 'translateX(-50%)'
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Glow Effects */}
              <div className="absolute inset-0 -m-32 bg-gradient-radial from-accent-cyan/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
              <div className="absolute inset-0 -m-40 bg-gradient-radial from-accent-magenta/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('#nosotros')}
          className="p-2 rounded-full glass-card hover:scale-110 transition-transform duration-300"
          aria-label="Scroll to next section"
        >
          <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero; 