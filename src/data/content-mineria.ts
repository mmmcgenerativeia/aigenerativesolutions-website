// Contenido especializado para Minería 4.0
// Casos de uso, soluciones y métricas específicas del sector minero

export const mineriaContent = {
  // Hero Section
  hero: {
    title: "Minería 4.0 con",
    highlight: "Inteligencia Artificial",
    subtitle: "Revolucionamos la industria minera con IA generativa, automatización inteligente y análisis predictivo para optimizar operaciones, maximizar la seguridad y reducir el impacto ambiental.",
    primaryCTA: {
      text: "Explorar Soluciones IA",
      href: "#soluciones"
    },
    secondaryCTA: {
      text: "Solicitar Demo",
      href: "#contacto"
    },
    backgroundImage: "/images/mineria-hero-bg.jpg", // Imagen de mina con equipos
    metrics: [
      { value: '45%', label: 'Reducción Inactividad' },
      { value: '23%', label: 'Aumento Producción' },
      { value: '$2.1M', label: 'Ahorro Anual Promedio' },
      { value: '60%', label: 'Menos Accidentes' }
    ]
  },

  // Soluciones específicas para minería
  soluciones: {
    title: "Soluciones IA para la Industria Minera",
    subtitle: "Tecnologías de vanguardia diseñadas específicamente para los desafíos únicos de la minería moderna.",
    items: [
      {
        id: "mantenimiento-predictivo",
        title: "Mantenimiento Predictivo",
        description: "IA que predice fallas en maquinaria pesada antes de que ocurran, reduciendo tiempo de inactividad y costos de mantenimiento hasta un 45%.",
        icon: "⚙️",
        features: [
          "Análisis de vibraciones y temperatura en tiempo real",
          "Alertas tempranas automáticas con 95% de precisión",
          "Optimización de inventario de repuestos",
          "Integración con sistemas ERP existentes",
          "Dashboard de salud de equipos"
        ],
        benefits: [
          "Reducción 45% tiempo de inactividad",
          "Ahorro 30% en costos de mantenimiento", 
          "Incremento 20% vida útil equipos",
          "ROI 300% primer año"
        ],
        technologies: ["Machine Learning", "IoT Sensors", "Edge Computing", "Digital Twins"],
        caseStudy: {
          client: "Mina de Cobre Los Andes - Chile",
          challenge: "Fallas inesperadas en excavadoras causaban pérdidas de $50K por día",
          solution: "Implementación de IA predictiva con 200+ sensores IoT",
          results: [
            "45% reducción tiempo inactividad",
            "23% aumento producción",
            "$2.1M ahorro anual",
            "Zero accidentes relacionados con fallas"
          ]
        }
      },
      {
        id: "optimizacion-flotas",
        title: "Optimización de Flotas",
        description: "Gestión inteligente de flotas mineras con rutas optimizadas, consumo de combustible reducido y mayor productividad operacional.",
        icon: "🚛",
        features: [
          "Rutas optimizadas en tiempo real con algoritmos genéticos",
          "Monitoreo de eficiencia de combustible por vehículo",
          "Asignación automática de recursos basada en prioridades",
          "Predicción de mantenimiento por kilometraje",
          "Geofencing inteligente para zonas de riesgo"
        ],
        benefits: [
          "Reducción 25% consumo combustible",
          "Incremento 18% productividad flota",
          "Optimización 35% tiempos de ciclo",
          "Reducción 40% emisiones CO2"
        ],
        technologies: ["GPS Tracking", "AI Optimization", "Fleet Management", "Carbon Monitoring"],
        caseStudy: {
          client: "Minera Gold Valley - Perú",
          challenge: "Costos operativos elevados y rutas ineficientes de 120 vehículos",
          solution: "IA de optimización con tracking GPS y sensores de combustible",
          results: [
            "25% menos consumo combustible",
            "18% más productividad",
            "$1.2M ahorro anual",
            "40% reducción emisiones"
          ]
        }
      },
      {
        id: "analisis-geologico",
        title: "Análisis Geológico con IA",
        description: "Procesamiento de datos geológicos con machine learning para identificar yacimientos, optimizar la extracción y predecir calidad mineral.",
        icon: "🏔️",
        features: [
          "Modelado 3D de yacimientos con precisión submétrica",
          "Predicción de calidad mineral con 92% precisión",
          "Optimización de patrones de perforación",
          "Análisis de muestras con visión artificial",
          "Mapeo de riesgos geotécnicos"
        ],
        benefits: [
          "Incremento 60% precisión exploración",
          "Reducción 35% costos perforación",
          "Optimización 28% recuperación mineral",
          "Minimización 50% riesgos geotécnicos"
        ],
        technologies: ["Deep Learning", "Computer Vision", "Geological Modeling", "Spectral Analysis"],
        caseStudy: {
          client: "Exploración Minera Andina - Bolivia",
          challenge: "Baja precisión en exploración generaba perforaciones innecesarias",
          solution: "IA geológica con análisis espectral y modelado 3D",
          results: [
            "60% mejor precisión exploración",
            "35% menos costos perforación", 
            "$1.8M ROI primer año",
            "Zero falsas perforaciones"
          ]
        }
      },
      {
        id: "seguridad-industrial",
        title: "Seguridad Industrial Inteligente",
        description: "Sistemas de visión artificial y sensores IoT para detectar riesgos, prevenir accidentes y asegurar el cumplimiento de protocolos de seguridad.",
        icon: "🛡️",
        features: [
          "Detección de EPP en tiempo real con 98% precisión",
          "Monitoreo de gases peligrosos con alertas automáticas",
          "Alertas de zona de peligro con geofencing",
          "Análisis de comportamiento para prevenir accidentes",
          "Dashboard de métricas de seguridad en tiempo real"
        ],
        benefits: [
          "Reducción 75% accidentes laborales",
          "Cumplimiento 100% protocolos seguridad",
          "Respuesta 90% más rápida emergencias",
          "Reducción 60% prima seguros"
        ],
        technologies: ["Computer Vision", "IoT Sensors", "Edge AI", "Emergency Systems"],
        caseStudy: {
          client: "Mina Subterránea Profunda - México",
          challenge: "Alto índice de accidentes por falta de EPP y gases tóxicos",
          solution: "Sistema integral de IA para seguridad con 500+ sensores",
          results: [
            "75% reducción accidentes",
            "100% cumplimiento EPP",
            "Zero fatalidades año 1",
            "60% reducción prima seguros"
          ]
        }
      },
      {
        id: "gestion-ambiental",
        title: "Gestión Ambiental Inteligente",
        description: "Monitoreo inteligente del impacto ambiental con sensores y análisis predictivo para operaciones sostenibles y cumplimiento regulatorio.",
        icon: "🌱",
        features: [
          "Monitoreo calidad agua con sensores multi-parámetro",
          "Control de emisiones atmosféricas en tiempo real",
          "Gestión inteligente de residuos y relaves",
          "Predicción de impacto ambiental",
          "Reportes automáticos para autoridades"
        ],
        benefits: [
          "Cumplimiento 100% normativas ambientales",
          "Reducción 45% huella de carbono",
          "Optimización 30% gestión de agua",
          "Minimización 50% multas ambientales"
        ],
        technologies: ["Environmental IoT", "Predictive Analytics", "Carbon Tracking", "Water Management"],
        caseStudy: {
          client: "Mina Sostenible Verde - Colombia",
          challenge: "Multas ambientales frecuentes y presión regulatoria",
          solution: "Plataforma IA ambiental con monitoreo 24/7",
          results: [
            "100% cumplimiento normativo",
            "45% menos huella carbono",
            "Zero multas ambientales",
            "$800K ahorro compliance"
          ]
        }
      },
      {
        id: "optimizacion-produccion",
        title: "Optimización de Producción",
        description: "IA que optimiza procesos de extracción y refinamiento para maximizar el rendimiento, calidad y eficiencia operacional.",
        icon: "📊",
        features: [
          "Optimización de procesos en tiempo real",
          "Control de calidad automatizado con visión artificial",
          "Predicción de rendimiento de planta",
          "Balanceado automático de líneas de producción",
          "Analytics avanzado de KPIs productivos"
        ],
        benefits: [
          "Incremento 22% eficiencia producción",
          "Mejora 15% calidad producto final",
          "Reducción 18% costos operativos",
          "Optimización 25% uso energético"
        ],
        technologies: ["Process Optimization", "Quality Control AI", "Production Analytics", "Energy Management"],
        caseStudy: {
          client: "Planta Concentradora Norte - Argentina",
          challenge: "Variabilidad en calidad y eficiencia de concentrado",
          solution: "IA de optimización con control de calidad automatizado",
          results: [
            "22% incremento eficiencia",
            "15% mejor calidad",
            "$1.5M ahorro operativo",
            "25% menos consumo energía"
          ]
        }
      }
    ]
  },

  // Métricas y beneficios clave
  metricas: {
    title: "Impacto Medible en la Industria Minera",
    subtitle: "Resultados reales obtenidos por nuestros clientes en implementaciones de IA minera.",
    categorias: [
      {
        titulo: "Eficiencia Operacional",
        metricas: [
          { valor: "45%", descripcion: "Reducción tiempo inactividad equipos", icono: "⚡" },
          { valor: "23%", descripcion: "Aumento productividad general", icono: "📈" },
          { valor: "25%", descripcion: "Optimización consumo combustible", icono: "⛽" },
          { valor: "22%", descripcion: "Incremento eficiencia producción", icono: "🏭" }
        ]
      },
      {
        titulo: "Seguridad y Cumplimiento",
        metricas: [
          { valor: "75%", descripcion: "Reducción accidentes laborales", icono: "🛡️" },
          { valor: "100%", descripcion: "Cumplimiento protocolos seguridad", icono: "✅" },
          { valor: "60%", descripcion: "Reducción prima seguros", icono: "💰" },
          { valor: "90%", descripcion: "Tiempo respuesta emergencias", icono: "🚨" }
        ]
      },
      {
        titulo: "Impacto Ambiental",
        metricas: [
          { valor: "45%", descripcion: "Reducción huella de carbono", icono: "🌍" },
          { valor: "30%", descripcion: "Optimización gestión agua", icono: "💧" },
          { valor: "50%", descripcion: "Minimización multas ambientales", icono: "📋" },
          { valor: "40%", descripcion: "Reducción emisiones CO2", icono: "🌱" }
        ]
      },
      {
        titulo: "Retorno Inversión",
        metricas: [
          { valor: "$2.1M", descripcion: "Ahorro anual promedio", icono: "💵" },
          { valor: "300%", descripcion: "ROI típico primer año", icono: "📊" },
          { valor: "35%", descripcion: "Reducción costos operativos", icono: "💸" },
          { valor: "18 meses", descripcion: "Tiempo recuperación inversión", icono: "⏱️" }
        ]
      }
    ]
  },

  // Casos de éxito detallados
  casosExito: {
    title: "Casos de Éxito Comprobados",
    subtitle: "Transformaciones reales en operaciones mineras líderes de Latinoamérica.",
    casos: [
      {
        id: "mina-cobre-chile",
        titulo: "Mina de Cobre Los Andes - Chile",
        industria: "Cobre",
        tamano: "Gran Minería",
        ubicacion: "Región de Antofagasta, Chile",
        problema: {
          descripcion: "Fallas inesperadas en flota de 45 excavadoras causaban pérdidas de $50,000 por día de inactividad. Costos de mantenimiento reactivo representaban 35% del presupuesto operativo.",
          metricas: [
            "45 excavadoras con fallas impredecibles",
            "$50K pérdidas diarias por inactividad", 
            "35% presupuesto en mantenimiento reactivo",
            "15% tiempo inactividad promedio"
          ]
        },
        solucion: {
          descripcion: "Implementación integral de IA predictiva con 200+ sensores IoT en cada excavadora, machine learning para análisis de patrones de falla y dashboard ejecutivo en tiempo real.",
          tecnologias: ["Sensores IoT industriales", "Machine Learning avanzado", "Edge Computing", "Dashboard ejecutivo"],
          implementacion: "6 meses con fases piloto, testing y rollout completo"
        },
        resultados: {
          descripcion: "Transformación completa del mantenimiento de reactivo a predictivo con resultados excepcionales en el primer año.",
          metricas: [
            { valor: "45%", descripcion: "Reducción tiempo inactividad", color: "green" },
            { valor: "23%", descripcion: "Aumento productividad", color: "green" },
            { valor: "$2.1M", descripcion: "Ahorro anual comprobado", color: "blue" },
            { valor: "Zero", descripcion: "Accidentes por fallas", color: "green" }
          ]
        },
        testimonial: {
          texto: "La IA predictiva de AIGS transformó completamente nuestras operaciones. Pasamos de reaccionar a fallas a prevenirlas, lo que nos ha dado una ventaja competitiva significativa.",
          autor: "Carlos Mendoza",
          cargo: "Gerente de Operaciones",
          empresa: "Mina Los Andes"
        }
      },
      {
        id: "mina-oro-peru",
        titulo: "Exploración Aurífera Pacífico - Perú",
        industria: "Oro",
        tamano: "Mediana Minería",
        ubicacion: "Cajamarca, Perú",
        problema: {
          descripcion: "Baja precisión en exploración geológica generaba 40% de perforaciones innecesarias. Costos de exploración representaban 60% más que competidores regionales.",
          metricas: [
            "40% perforaciones innecesarias",
            "60% sobrecostos vs competencia",
            "25% precisión exploración",
            "$500K mensuales en exploración"
          ]
        },
        solucion: {
          descripcion: "IA geológica con análisis espectral, modelado 3D de yacimientos y algoritmos de optimización para patrones de perforación más efectivos.",
          tecnologias: ["Deep Learning geológico", "Análisis espectral", "Modelado 3D", "Optimización de perforación"],
          implementacion: "4 meses incluyendo training del modelo con datos históricos"
        },
        resultados: {
          descripcion: "Revolución en la precisión exploratoria con impacto directo en rentabilidad y eficiencia operacional.",
          metricas: [
            { valor: "60%", descripcion: "Mejora precisión exploración", color: "green" },
            { valor: "35%", descripcion: "Reducción costos perforación", color: "green" },
            { valor: "$1.8M", descripcion: "ROI primer año", color: "blue" },
            { valor: "92%", descripcion: "Precisión predicción mineral", color: "green" }
          ]
        },
        testimonial: {
          texto: "Gracias a la IA geológica de AIGS, hemos revolucionado nuestra exploración. La precisión que logramos ahora era impensable con métodos tradicionales.",
          autor: "Ana Sofia Rodriguez",
          cargo: "Jefe de Exploración",
          empresa: "Aurífera Pacífico"
        }
      }
    ]
  },

  // Tecnologías utilizadas
  tecnologias: {
    title: "Tecnologías de Vanguardia para Minería",
    subtitle: "Stack tecnológico especializado para los desafíos únicos de la industria minera.",
    categorias: [
      {
        titulo: "Inteligencia Artificial",
        tecnologias: [
          { nombre: "Machine Learning", descripcion: "Algoritmos predictivos para mantenimiento y producción", icono: "🤖" },
          { nombre: "Deep Learning", descripcion: "Redes neuronales para análisis geológico avanzado", icono: "🧠" },
          { nombre: "Computer Vision", descripcion: "Visión artificial para seguridad y control de calidad", icono: "👁️" },
          { nombre: "NLP", descripcion: "Procesamiento de reportes y documentación técnica", icono: "💬" }
        ]
      },
      {
        titulo: "Internet de las Cosas (IoT)",
        tecnologias: [
          { nombre: "Sensores Industriales", descripcion: "Monitoreo de vibración, temperatura y presión", icono: "📡" },
          { nombre: "Edge Computing", descripcion: "Procesamiento local para respuesta en tiempo real", icono: "⚡" },
          { nombre: "5G/LTE", descripcion: "Conectividad robusta en entornos mineros", icono: "📶" },
          { nombre: "Digital Twins", descripcion: "Gemelos digitales de equipos y procesos", icono: "👥" }
        ]
      },
      {
        titulo: "Análisis y Visualización",
        tecnologias: [
          { nombre: "Big Data Analytics", descripcion: "Procesamiento de terabytes de datos operativos", icono: "📊" },
          { nombre: "Dashboards Ejecutivos", descripcion: "Visualización en tiempo real para toma de decisiones", icono: "📈" },
          { nombre: "Predictive Analytics", descripcion: "Modelos predictivos para operaciones futuras", icono: "🔮" },
          { nombre: "GIS Avanzado", descripcion: "Sistemas de información geográfica especializados", icono: "🗺️" }
        ]
      }
    ]
  },

  // Proceso de implementación
  implementacion: {
    title: "Proceso de Implementación Probado",
    subtitle: "Metodología estructurada para asegurar el éxito de proyectos de IA minera.",
    fases: [
      {
        numero: 1,
        titulo: "Diagnóstico y Evaluación",
        duracion: "2-4 semanas",
        descripcion: "Análisis exhaustivo de operaciones actuales, identificación de oportunidades y definición de objetivos medibles.",
        actividades: [
          "Auditoría de procesos operativos actuales",
          "Evaluación de infraestructura tecnológica",
          "Identificación de casos de uso prioritarios",
          "Definición de KPIs y métricas de éxito",
          "Análisis de ROI proyectado"
        ],
        entregables: ["Reporte de diagnóstico", "Roadmap de implementación", "Business case detallado"]
      },
      {
        numero: 2,
        titulo: "Diseño y Arquitectura",
        duracion: "3-6 semanas", 
        descripcion: "Diseño de la solución técnica, arquitectura de datos y plan de integración con sistemas existentes.",
        actividades: [
          "Diseño de arquitectura de IA",
          "Planificación de infraestructura IoT",
          "Diseño de integración con sistemas ERP/MES",
          "Definición de modelos de datos",
          "Plan de seguridad y cybersecurity"
        ],
        entregables: ["Arquitectura técnica", "Plan de integración", "Especificaciones funcionales"]
      },
      {
        numero: 3,
        titulo: "Desarrollo y Testing",
        duracion: "8-16 semanas",
        descripcion: "Desarrollo de modelos de IA, implementación de hardware IoT y testing exhaustivo en ambiente controlado.",
        actividades: [
          "Desarrollo de modelos de machine learning",
          "Instalación de sensores y hardware IoT",
          "Integración con sistemas existentes",
          "Testing en ambiente de laboratorio",
          "Validación con datos históricos"
        ],
        entregables: ["Modelos de IA entrenados", "Sistema IoT instalado", "Reportes de testing"]
      },
      {
        numero: 4,
        titulo: "Piloto y Validación",
        duracion: "4-8 semanas",
        descripcion: "Implementación piloto en operación real con monitoreo intensivo y ajustes basados en resultados.",
        actividades: [
          "Deployment en área piloto",
          "Monitoreo intensivo de performance",
          "Ajustes de modelos basados en datos reales",
          "Training del personal operativo",
          "Validación de ROI inicial"
        ],
        entregables: ["Sistema piloto operativo", "Métricas de performance", "Plan de rollout"]
      },
      {
        numero: 5,
        titulo: "Rollout y Optimización",
        duracion: "6-12 semanas",
        descripcion: "Despliegue completo en todas las operaciones con optimización continua y soporte especializado.",
        actividades: [
          "Rollout gradual en todas las áreas",
          "Optimización continua de modelos",
          "Training completo de equipos",
          "Establecimiento de procesos de mantenimiento",
          "Medición de ROI final"
        ],
        entregables: ["Sistema completamente operativo", "Documentación técnica", "Plan de mantenimiento"]
      }
    ]
  }
};

export default mineriaContent; 