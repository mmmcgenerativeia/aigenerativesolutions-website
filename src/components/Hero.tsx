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
      className="hero-section min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
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
        {/* Radial Glow Effects - Solo efectos sutiles de fondo */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/3 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-magenta/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
          
          {/* Texto introductorio pequeño */}
          <h2 className={`text-3xl md:text-4xl font-semibold mb-8 text-slate-300 opacity-90 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {title}
          </h2>

          {/* Logo Principal - El protagonista */}
          <div className={`w-full max-w-4xl mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative flex justify-center">
              <Logo size="xl" className="drop-shadow-2xl transform scale-150 md:scale-175" />
              
              {/* Glow Effects sutiles alrededor del logo */}
              <div className="absolute inset-0 -m-32 bg-gradient-radial from-accent-cyan/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
              <div className="absolute inset-0 -m-40 bg-gradient-radial from-accent-magenta/5 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Subtítulo */}
          <p className={`text-xl md:text-2xl text-slate-300 mb-10 max-w-4xl mx-auto leading-relaxed opacity-90 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {subtitle}
          </p>

          {/* Botones CTA */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <button
              onClick={() => handleButtonClick(primaryButtonHref)}
              className="btn-primary-modern text-lg px-10 py-4 group relative overflow-hidden"
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
              className="btn-secondary-modern text-lg px-10 py-4 group"
            >
              <span className="flex items-center justify-center gap-2">
                {secondaryButton}
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </button>
          </div>

          {/* Stats - Centradas */}
          <div className={`grid grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="text-center">
              <div className="text-3xl font-bold title-accent mb-2">15+</div>
              <div className="text-sm text-slate-400">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold title-accent mb-2">100+</div>
              <div className="text-sm text-slate-400">Proyectos Exitosos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold title-accent mb-2">24/7</div>
              <div className="text-sm text-slate-400">Soporte Técnico</div>
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