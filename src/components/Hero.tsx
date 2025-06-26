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
  title = 'Inteligencia Artificial para la',
  highlight = 'Minería del Futuro',
  subtitle = 'Desde la exploración hasta la planta, aplicamos IA y analítica avanzada para optimizar operaciones, aumentar la recuperación de mineral y potenciar la seguridad de su faena.',
  primaryButton = 'Descubra Nuestras Soluciones',
  primaryButtonHref = '#servicios',
  secondaryButton = 'Agende una Demostración',
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
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 140, 0, 0.1) 0%, transparent 50%),
          radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, rgba(0, 100, 150, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(139, 69, 19, 0.05) 0%, transparent 70%),
          linear-gradient(135deg, rgba(2, 6, 23, 0.95) 0%, rgba(20, 25, 45, 0.9) 50%, rgba(40, 35, 25, 0.85) 100%)
        `
      }}
    >
      {/* Animated Background Elements - Temática minera */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Efectos sutiles con colores mineros */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl animate-subtle-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/3 rounded-full blur-3xl animate-subtle-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-yellow-600/2 rounded-full blur-2xl animate-subtle-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
          
          {/* Texto introductorio */}
          <h2 className={`text-3xl md:text-4xl font-semibold mb-6 text-slate-200 opacity-90 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {title}
          </h2>

          {/* Logo Principal con tagline minero */}
          <div className={`w-full max-w-4xl mb-4 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative flex justify-center">
              <Logo size="xl" className="drop-shadow-2xl transform scale-150 md:scale-175" />
              
              {/* Glow Effects con temática minera */}
              <div className="absolute inset-0 -m-32 bg-gradient-radial from-orange-400/8 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
              <div className="absolute inset-0 -m-40 bg-gradient-radial from-blue-500/5 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Highlight principal */}
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-blue-400 bg-clip-text text-transparent font-extrabold">
              {highlight}
            </span>
          </h1>

          {/* Tagline de valor */}
          <div className={`text-lg md:text-xl font-semibold mb-8 text-orange-300/90 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Más Eficiencia • Menos Incertidumbre • Minería 4.0
          </div>

          {/* Subtítulo */}
          <p className={`text-xl md:text-2xl text-slate-300 mb-10 max-w-5xl mx-auto leading-relaxed opacity-90 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {subtitle}
          </p>

          {/* Botones CTA */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <button
              onClick={() => handleButtonClick(primaryButtonHref)}
              className="btn-primary-modern text-lg px-10 py-4 group relative overflow-hidden bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-400 hover:to-yellow-500"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 text-slate-900 font-semibold">
                {primaryButton}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            
            <button
              onClick={() => handleButtonClick(secondaryButtonHref)}
              className="btn-secondary-modern text-lg px-10 py-4 group border-2 border-orange-400 text-orange-400 hover:bg-orange-400/10"
            >
              <span className="flex items-center justify-center gap-2">
                {secondaryButton}
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </button>
          </div>

          {/* Stats mineros */}
          <div className={`grid grid-cols-3 gap-8 max-w-3xl mx-auto transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">+15%</div>
              <div className="text-sm text-slate-400">Recuperación Promedio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">-30%</div>
              <div className="text-sm text-slate-400">Downtime No Planificado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">10x</div>
              <div className="text-sm text-slate-400">ROI Promedio</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('#servicios')}
          className="p-2 rounded-full glass-card hover:scale-110 transition-transform duration-300"
          aria-label="Scroll to next section"
        >
          <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero; 