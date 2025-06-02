import React from 'react';

interface WhyUsItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface WhyUsProps {
  title?: string;
  subtitle?: string;
  reasons?: WhyUsItem[];
}

const WhyUs: React.FC<WhyUsProps> = ({
  title = '¿Por Qué AIGS?',
  subtitle = 'Somos su socio estratégico en el viaje hacia la excelencia impulsada por la IA.',
  reasons = [
    {
      icon: (
        <svg className="w-10 h-10 accent-color" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-4.5A3.75 3.75 0 0 0 12 9.75V15m-3 0V9.75A3.75 3.75 0 0 1 12 6v3.75m-3 5.25V15m6-15v3.75" />
        </svg>
      ),
      title: 'Experiencia Comprobada',
      description: 'Liderazgo y trayectoria en la vanguardia de la IA generativa.'
    },
    {
      icon: (
        <svg className="w-10 h-10 accent-color" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.354a15.057 15.057 0 0 1-4.5 0M3 16.5v-1.5A2.25 2.25 0 0 1 5.25 12.75h13.5A2.25 2.25 0 0 1 21 15v1.5m-18 0h18M12 6.75A2.25 2.25 0 1 1 12 2.25a2.25 2.25 0 0 1 0 4.5Z" />
        </svg>
      ),
      title: 'Innovación Constante',
      description: 'Comprometidos con la investigación y aplicación de las últimas tecnologías.'
    },
    {
      icon: (
        <svg className="w-10 h-10 accent-color" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-3.741-5.588M14.25 10.5h.008v.008h-.008V10.5Zm.158 3.248a.75.75 0 0 1-.316.632l-1.249.833a.75.75 0 0 1-1.114-.445l-.843-2.53a.75.75 0 0 1 .106-.734l3.714-3.713a.75.75 0 0 1 1.06 0l.884.883a.75.75 0 0 1 0 1.06l-3.713 3.713ZM12 21a9.094 9.094 0 0 1-3.741-.479 3 3 0 1 1 3.741-5.588" />
        </svg>
      ),
      title: 'Enfoque Personalizado',
      description: 'Soluciones adaptadas a sus necesidades y objetivos únicos.'
    },
    {
      icon: (
        <svg className="w-10 h-10 accent-color" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
        </svg>
      ),
      title: 'Resultados Medibles',
      description: 'Nos enfocamos en generar un impacto tangible y un ROI claro.'
    }
  ]
}) => {
  return (
    <section id="porque-elegirnos" className="py-20 px-4 section-gradient-2 relative">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl section-title mb-4">
            {title.split('AIGS').map((part, index, array) => 
              index < array.length - 1 ? (
                <React.Fragment key={index}>
                  {part}
                  <span className="accent-color">AIGS</span>
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center p-6">
              <div className="p-3 inline-flex items-center justify-center rounded-full bg-teal-500 bg-opacity-20 mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-400">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs; 