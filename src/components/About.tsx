import React from 'react';

interface AboutProps {
  title?: string;
  subtitle?: string;
  mainTitle?: string;
  description1?: string;
  description2?: string;
  features?: string[];
  imageUrl?: string;
  imageAlt?: string;
}

const About: React.FC<AboutProps> = ({
  title = 'Sobre AIGS',
  subtitle = 'Pioneros en la integración de inteligencia artificial generativa para impulsar la transformación digital y el crecimiento empresarial.',
  mainTitle = 'Nuestra Misión: Innovación y Resultados',
  description1 = 'En AIGS, combinamos una profunda experiencia en inteligencia artificial con un enfoque estratégico para ofrecer soluciones generativas que no solo resuelven los desafíos actuales de su empresa, sino que también anticipan las oportunidades del mañana. Creemos en el poder de la IA para democratizar la innovación y crear un valor tangible.',
  description2 = 'Nuestro equipo está compuesto por expertos apasionados por la tecnología y comprometidos con la excelencia. Trabajamos de la mano con nuestros clientes para entender sus necesidades únicas y co-crear soluciones que marquen la diferencia.',
  features = [
    'Experiencia Comprobada y Liderazgo',
    'Soluciones a Medida y Escalables',
    'Compromiso con la Ética y la Transparencia'
  ],
  imageUrl = 'https://placehold.co/600x400/1A202C/C9D1D9?text=Equipo+AIGS',
  imageAlt = 'Equipo AIGS o concepto abstracto'
}) => {
  const CheckIcon = () => (
    <svg 
      className="w-5 h-5 accent-color mr-3 flex-shrink-0" 
      fill="currentColor" 
      viewBox="0 0 20 20"
    >
      <path 
        fillRule="evenodd" 
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
        clipRule="evenodd"
      />
    </svg>
  );

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://placehold.co/600x400/111827/FFFFFF?text=Imagen+No+Disponible';
  };

  return (
    <section id="nosotros" className="py-20 px-4 section-gradient-1 relative">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl section-title mb-4">
            {title.split(' ').map((word, index) => 
              word === 'AIGS' ? (
                <span key={index} className="accent-color">{word}</span>
              ) : (
                <span key={index}>{word} </span>
              )
            )}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
              onError={handleImageError}
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold mb-4">
              {mainTitle}
            </h3>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              {description1}
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              {description2}
            </p>
            
            <ul className="space-y-3 mt-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-lg">
                  <CheckIcon />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 