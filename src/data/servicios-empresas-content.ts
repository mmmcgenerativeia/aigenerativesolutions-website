// Contenido para Servicios Empresariales
// Estructura modular para facilitar mantenimiento y escalabilidad

export const serviciosEmpresasConfig = {
  meta: {
    title: 'Servicios Empresariales - AIGS',
    description: 'Transforme su empresa con capacitaciones en IA, desarrollo de chatbots, machine learning y páginas web inteligentes.',
    keywords: ['servicios empresariales IA', 'capacitaciones IA', 'chatbots', 'machine learning', 'desarrollo web IA']
  },
  
  hero: {
    title: 'Servicios Empresariales',
    subtitle: 'Especializados en IA Generativa',
    description: 'Transforme su empresa con soluciones completas de inteligencia artificial: capacitaciones especializadas, desarrollo de chatbots inteligentes, machine learning personalizado y páginas web que aprenden.',
    cta: {
      primary: 'Explorar Servicios',
      secondary: 'Solicitar Consulta'
    },
    metrics: [
      { value: '200+', label: 'Empresas Capacitadas' },
      { value: '500+', label: 'Profesionales Certificados' },
      { value: '95%', label: 'Satisfacción Cliente' },
      { value: '6 meses', label: 'ROI Promedio' }
    ]
  }
};

export const serviciosEmpresariales = [
  {
    id: 'capacitaciones',
    title: 'Capacitaciones Corporativas en IA',
    slug: 'capacitaciones',
    subtitle: 'Programas Especializados y Certificaciones',
    description: 'Empodera a tu equipo con conocimientos prácticos de IA generativa mediante programas de capacitación diseñados específicamente para diferentes roles empresariales.',
    icon: '🎓',
    color: 'emerald',
    gradient: 'from-emerald-500 to-teal-600',
    features: [
      'Programas para ejecutivos y técnicos',
      'Certificaciones AIGS reconocidas',
      'Modalidades presencial, virtual e híbrida',
      'Currículo actualizado constantemente'
    ],
    benefits: [
      { metric: '95%', description: 'Aplicación inmediata' },
      { metric: '40%', description: 'Mejora productividad' },
      { metric: '100+', description: 'Horas de contenido' }
    ],
    url: '/servicios-empresas/capacitaciones'
  },
  {
    id: 'machine-learning',
    title: 'Servicios de Machine Learning',
    slug: 'machine-learning',
    subtitle: 'Modelos Personalizados y Análisis Predictivo',
    description: 'Desarrollamos modelos de ML a medida que transforman sus datos en ventaja competitiva, con análisis predictivo y automatización inteligente.',
    icon: '🤖',
    color: 'purple',
    gradient: 'from-purple-500 to-indigo-600',
    features: [
      'Análisis predictivo avanzado',
      'Procesamiento de lenguaje natural',
      'Computer vision y reconocimiento',
      'Integración con sistemas existentes'
    ],
    benefits: [
      { metric: '85%', description: 'Precisión promedio' },
      { metric: '40%', description: 'Reducción costos' },
      { metric: '6 meses', description: 'Tiempo implementación' }
    ],
    url: '/servicios-empresas/machine-learning'
  },
  {
    id: 'chatbots',
    title: 'Chatbots Empresariales',
    slug: 'chatbots',
    subtitle: 'Automatización Inteligente 24/7',
    description: 'Chatbots con IA avanzada que comprenden contexto, aprenden de interacciones y se integran perfectamente con WhatsApp, Telegram y Slack.',
    icon: '💬',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-600',
    features: [
      'Integración WhatsApp Business API',
      'Procesamiento lenguaje natural',
      'Escalamiento inteligente a humanos',
      'Analytics y reportes detallados'
    ],
    benefits: [
      { metric: '24/7', description: 'Disponibilidad' },
      { metric: '85%', description: 'Satisfacción cliente' },
      { metric: '60%', description: 'Reducción costos soporte' }
    ],
    url: '/servicios-empresas/chatbots'
  },
  {
    id: 'paginas-web-ia',
    title: 'Páginas Web con IA',
    slug: 'paginas-web-ia',
    subtitle: 'Desarrollo Web Inteligente',
    description: 'Sitios web que se adaptan automáticamente a cada usuario, optimizan conversiones en tiempo real y aprenden de cada interacción.',
    icon: '🌐',
    color: 'pink',
    gradient: 'from-pink-500 to-rose-600',
    features: [
      'Personalización automática',
      'Optimización continua de conversiones',
      'Chatbots integrados nativamente',
      'Analytics predictivos avanzados'
    ],
    benefits: [
      { metric: '3x', description: 'Más conversiones' },
      { metric: '40%', description: 'Menos rebote' },
      { metric: '100%', description: 'Personalizada' }
    ],
    url: '/servicios-empresas/paginas-web-ia'
  }
];

// Proceso general de trabajo
export const procesoTrabajo = {
  title: 'Nuestro Proceso de Trabajo',
  description: 'Metodología probada para garantizar el éxito de cada proyecto',
  steps: [
    {
      number: 1,
      title: 'Diagnóstico y Análisis',
      description: 'Evaluamos sus necesidades específicas y definimos objetivos claros.',
      duration: '1-2 semanas',
      deliverable: 'Plan de proyecto detallado'
    },
    {
      number: 2,
      title: 'Diseño de Solución',
      description: 'Creamos la arquitectura y diseño de la solución personalizada.',
      duration: '2-3 semanas',
      deliverable: 'Prototipo y documentación técnica'
    },
    {
      number: 3,
      title: 'Desarrollo e Implementación',
      description: 'Desarrollamos y configuramos la solución según especificaciones.',
      duration: '4-8 semanas',
      deliverable: 'Solución funcional completa'
    },
    {
      number: 4,
      title: 'Pruebas y Optimización',
      description: 'Realizamos pruebas exhaustivas y optimizamos el rendimiento.',
      duration: '1-2 semanas',
      deliverable: 'Sistema validado y optimizado'
    },
    {
      number: 5,
      title: 'Capacitación y Lanzamiento',
      description: 'Capacitamos a su equipo y realizamos el lanzamiento oficial.',
      duration: '1 semana',
      deliverable: 'Equipo capacitado y sistema en producción'
    },
    {
      number: 6,
      title: 'Soporte y Mejora Continua',
      description: 'Brindamos soporte continuo y mejoras basadas en datos.',
      duration: 'Continuo',
      deliverable: 'Reportes mensuales y actualizaciones'
    }
  ]
};

// Testimonios específicos para servicios empresariales
export const testimoniosServicios = [
  {
    quote: 'La capacitación en IA de AIGS transformó completamente la forma en que nuestro equipo aborda los proyectos. ROI visible desde el primer mes.',
    name: 'María González',
    position: 'Directora de Innovación',
    company: 'TechCorp Solutions',
    service: 'Capacitaciones',
    avatar: 'MG',
    rating: 5
  },
  {
    quote: 'El sistema de ML que desarrollaron aumentó nuestra eficiencia operativa en un 45%. Resultados que superaron todas nuestras expectativas.',
    name: 'Carlos Mendoza',
    position: 'CEO',
    company: 'DataDriven Industries',
    service: 'Machine Learning',
    avatar: 'CM',
    rating: 5
  },
  {
    quote: 'Nuestro chatbot maneja el 80% de las consultas automáticamente. El equipo de soporte ahora se enfoca en casos complejos de mayor valor.',
    name: 'Ana Rodríguez',
    position: 'Gerente de Atención al Cliente',
    company: 'CustomerFirst Ltd',
    service: 'Chatbots',
    avatar: 'AR',
    rating: 5
  },
  {
    quote: 'La página web con IA triplicó nuestras conversiones. Es increíble ver cómo se optimiza automáticamente cada día.',
    name: 'Luis Fernández',
    position: 'Director de Marketing',
    company: 'Growth Agency',
    service: 'Páginas Web IA',
    avatar: 'LF',
    rating: 5
  }
];

// FAQ específicas para servicios empresariales
export const faqServicios = [
  {
    question: '¿Cuánto tiempo toma implementar una solución de IA?',
    answer: 'Depende del tipo de servicio: las capacitaciones pueden iniciarse en 1 semana, los chatbots toman 2-4 semanas, ML 6-8 semanas, y sitios web 4-6 semanas.'
  },
  {
    question: '¿Necesitamos conocimientos técnicos previos?',
    answer: 'No. Nuestras soluciones están diseñadas para ser user-friendly y proporcionamos toda la capacitación necesaria para su equipo.'
  },
  {
    question: '¿Las soluciones se integran con nuestros sistemas actuales?',
    answer: 'Sí, todas nuestras soluciones están diseñadas para integrarse seamlessly con sistemas existentes como CRM, ERP, y bases de datos.'
  },
  {
    question: '¿Qué tipo de soporte incluyen los servicios?',
    answer: 'Incluimos soporte técnico 24/7, actualizaciones regulares, mantenimiento preventivo y capacitación continua del equipo.'
  },
  {
    question: '¿Cómo miden el ROI de las implementaciones?',
    answer: 'Establecemos KPIs específicos antes de iniciar y proporcionamos dashboards con métricas en tiempo real para trackear el retorno de inversión.'
  }
];

// Paquetes y precios
export const paquetesServicios = {
  capacitaciones: {
    basico: {
      name: 'Programa Básico',
      price: 1500,
      currency: 'USD',
      participants: '5-10',
      duration: '20 horas',
      features: [
        'Fundamentos de IA generativa',
        'Herramientas básicas',
        'Certificado de participación',
        'Material descargable'
      ]
    },
    profesional: {
      name: 'Programa Profesional',
      price: 3500,
      currency: 'USD',
      participants: '10-20',
      duration: '40 horas',
      features: [
        'Todo del básico +',
        'Workshops prácticos',
        'Casos de uso específicos',
        'Certificación AIGS',
        'Seguimiento 3 meses'
      ],
      popular: true
    },
    enterprise: {
      name: 'Programa Enterprise',
      price: 'Personalizado',
      participants: '20+',
      duration: 'Flexible',
      features: [
        'Programa completamente customizado',
        'Instructores dedicados',
        'Implementación práctica',
        'Soporte continuo',
        'ROI garantizado'
      ]
    }
  }
};

export default {
  serviciosEmpresasConfig,
  serviciosEmpresariales,
  procesoTrabajo,
  testimoniosServicios,
  faqServicios,
  paquetesServicios
}; 