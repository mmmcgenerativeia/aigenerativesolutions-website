import React from 'react';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServicesProps {
  title?: string;
  subtitle?: string;
  services?: ServiceItem[];
}

const Services: React.FC<ServicesProps> = ({
  title = 'Nuestros Servicios de Consultoría en IA Generativa',
  subtitle = 'Ofrecemos un abanico completo de servicios para integrar la IA generativa en el núcleo de su estrategia empresarial.',
  services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 accent-color mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-7.5h12c.621 0 1.125-.504 1.125-1.125V12c0-.621-.504-1.125-1.125-1.125h-12c-.621 0-1.125.504-1.125 1.125v.75c0 .621.504 1.125 1.125 1.125Z" />
        </svg>
      ),
      title: 'Estrategia de IA Generativa',
      description: 'Diseñamos hojas de ruta estratégicas para la adopción e implementación efectiva de la IA generativa.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 accent-color mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h12A2.25 2.25 0 0 0 20.25 14.25V3M3.75 21h16.5M16.5 3.75h.008v.008H16.5V3.75Z" />
        </svg>
      ),
      title: 'Desarrollo de Modelos Personalizados',
      description: 'Creamos y entrenamos modelos de IA generativa a medida, optimizados para sus datos y casos de uso.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 accent-color mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
      ),
      title: 'Integración de Soluciones AI',
      description: 'Integramos herramientas y plataformas de IA generativa en sus sistemas y flujos de trabajo.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 accent-color mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.17 48.17 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </svg>
      ),
      title: 'Capacitación y Workshops',
      description: 'Empoderamos a su equipo con el conocimiento y las habilidades para aprovechar la IA generativa.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 accent-color mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      ),
      title: 'IA Ética y Responsable',
      description: 'Asesoramos en la implementación de prácticas de IA generativa éticas, transparentes y responsables.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 accent-color mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
        </svg>
      ),
      title: 'Optimización y Escalado',
      description: 'Ayudamos a optimizar y escalar sus soluciones de IA para un rendimiento sostenido y ROI máximo.'
    }
  ]
}) => {
  return (
    <section id="servicios" className="py-20 px-4 section-solid-bg relative">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl section-title mb-4">
            {title.split('IA Generativa').join('')}
            <span className="accent-color">IA Generativa</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card p-8 rounded-xl shadow-xl text-center flex flex-col items-center">
              {service.icon}
              <h3 className="text-2xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 