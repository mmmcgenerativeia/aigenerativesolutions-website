import React from 'react';
import Logo from './Logo';

interface HeroProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = 'Transformando Negocios con',
  subtitle = 'En AIGS, fusionamos estrategia y tecnología de vanguardia para potenciar su empresa con soluciones de IA generativa a medida, abriendo nuevas fronteras de innovación y eficiencia.',
  primaryButtonText = 'Descubre Nuestras Soluciones',
  secondaryButtonText = 'Hablemos de tu Proyecto'
}) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero-gradient min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden relative">
      <div className="relative z-10 container mx-auto text-center">
        {/* Logo Animado Grande */}
        <div className="mb-8 flex justify-center">
          <Logo size="xl" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          {title}
          <span className="block accent-color">Inteligencia Artificial Generativa</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
          {subtitle}
        </p>
        
        <div className="space-x-0 md:space-x-4 space-y-4 md:space-y-0">
          <button 
            onClick={() => scrollToSection('servicios')}
            className="btn-primary px-10 py-4 rounded-lg text-xl font-semibold inline-block w-full md:w-auto"
          >
            {primaryButtonText}
          </button>
          <button 
            onClick={() => scrollToSection('contacto')}
            className="btn-secondary px-10 py-4 rounded-lg text-xl font-semibold inline-block w-full md:w-auto"
          >
            {secondaryButtonText}
          </button>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-br from-primary-500/10 via-transparent to-primary-500/5"></div>
      </div>
    </section>
  );
};

export default Hero; 