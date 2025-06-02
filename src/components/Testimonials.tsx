import React from 'react';

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  company: string;
  avatar?: string;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({
  title = 'Lo Que Dicen Nuestros Clientes',
  subtitle = 'La confianza y el éxito de nuestros clientes son nuestro mayor aval.',
  testimonials = [
    {
      quote: 'AIGS transformó nuestra aproximación a los datos. Su experticia en IA generativa nos ha dado una ventaja competitiva increíble.',
      name: 'Ana Pérez',
      position: 'CEO',
      company: 'Innovatech Solutions',
      avatar: 'https://placehold.co/50x50/20C997/0D1117?text=AP'
    },
    {
      quote: 'El equipo de AIGS no solo es técnicamente brillante, sino que también entiende profundamente las necesidades del negocio. ¡Altamente recomendados!',
      name: 'Carlos López',
      position: 'Director de Operaciones',
      company: 'Future Dynamics',
      avatar: 'https://placehold.co/50x50/20C997/0D1117?text=CL'
    },
    {
      quote: 'Desde la estrategia hasta la implementación, AIGS ha sido un socio invaluable. Sus soluciones de IA han optimizado nuestros procesos significativamente.',
      name: 'Sofía Martínez',
      position: 'Gerente de Innovación',
      company: 'Quantum Leap Inc.',
      avatar: 'https://placehold.co/50x50/20C997/0D1117?text=SM'
    }
  ]
}) => {
  const handleAvatarError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://placehold.co/50x50/20C997/0D1117?text=C';
  };

  return (
    <section id="testimonios" className="py-20 px-4 section-solid-bg relative">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl section-title mb-4">
            {title.split('Nuestros Clientes').map((part, index, array) => 
              index < array.length - 1 ? (
                <React.Fragment key={index}>
                  {part}
                  <span className="accent-color">Nuestros Clientes</span>
                </React.Fragment>
              ) : (
                part
              )
            )}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-8 rounded-xl shadow-xl">
              <p className="text-gray-300 italic mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar || 'https://placehold.co/50x50/20C997/0D1117?text=C'}
                  alt={`${testimonial.name} avatar`}
                  className="w-12 h-12 rounded-full mr-4"
                  onError={handleAvatarError}
                />
                <div>
                  <h4 className="font-semibold text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 