// Sistema de Design Tokens AIGS - Rediseñado para máxima armonía visual
// Paleta basada en el logo AIGS: Cyan/Teal + Orange/Amber + Blue/Indigo

export const aigsCorePalette = {
  // Colores principales del logo AIGS
  primary: {
    cyan: '#06b6d4',     // Cyan principal
    teal: '#0d9488',     // Teal complementario
    orange: '#f97316',   // Orange principal  
    amber: '#f59e0b',    // Amber complementario
    blue: '#3b82f6',     // Blue principal
    indigo: '#6366f1',   // Indigo complementario
  },
  
  // Grises equilibrados para backgrounds
  neutral: {
    50: '#f8fafc',
    100: '#f1f5f9', 
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617'
  }
};

export const industryThemes = {
  mineria: {
    name: 'Minería 4.0',
    primary: '#f97316',      // Orange principal AIGS
    secondary: '#f59e0b',    // Amber complementario
    accent: '#0d9488',       // Teal para contraste
    gradient: 'from-orange-600 via-amber-500 to-yellow-400',
    gradientDark: 'from-orange-900 via-amber-800 to-orange-700',
    text: {
      primary: '#1e293b',    // Texto oscuro sobre fondos claros
      secondary: '#334155',  // Texto medio
      light: '#f8fafc',      // Texto claro sobre fondos oscuros
      accent: '#f97316'      // Texto accent
    },
    background: {
      primary: 'from-slate-50 via-orange-50 to-amber-50',
      secondary: 'from-orange-900 via-amber-900 to-yellow-900',
      card: 'from-white/95 to-orange-50/95',
      overlay: 'from-orange-600/20 to-amber-600/20'
    },
    animations: {
      particles: 'mining-particles',
      glow: 'mining-glow',
      float: 'mining-float'
    }
  },

  madera: {
    name: 'Madera 4.0', 
    primary: '#0d9488',      // Teal principal AIGS
    secondary: '#06b6d4',    // Cyan complementario
    accent: '#f59e0b',       // Amber para contraste
    gradient: 'from-emerald-600 via-teal-500 to-cyan-400',
    gradientDark: 'from-emerald-900 via-teal-800 to-green-700',
    text: {
      primary: '#1e293b',
      secondary: '#334155', 
      light: '#f8fafc',
      accent: '#0d9488'
    },
    background: {
      primary: 'from-slate-50 via-emerald-50 to-teal-50',
      secondary: 'from-emerald-900 via-teal-900 to-green-900',
      card: 'from-white/95 to-emerald-50/95',
      overlay: 'from-emerald-600/20 to-teal-600/20'
    },
    animations: {
      particles: 'wood-particles',
      glow: 'wood-glow', 
      float: 'wood-float'
    }
  },

  agricultura: {
    name: 'Agricultura 4.0',
    primary: '#06b6d4',      // Cyan principal AIGS
    secondary: '#3b82f6',    // Blue complementario  
    accent: '#f97316',       // Orange para contraste
    gradient: 'from-green-600 via-lime-500 to-cyan-400',
    gradientDark: 'from-green-900 via-lime-800 to-emerald-700',
    text: {
      primary: '#1e293b',
      secondary: '#334155',
      light: '#f8fafc', 
      accent: '#06b6d4'
    },
    background: {
      primary: 'from-slate-50 via-green-50 to-lime-50',
      secondary: 'from-green-900 via-lime-900 to-cyan-900',
      card: 'from-white/95 to-green-50/95',
      overlay: 'from-green-600/20 to-lime-600/20'
    },
    animations: {
      particles: 'agro-particles',
      glow: 'agro-glow',
      float: 'agro-float'
    }
  },

  servicios: {
    name: 'Servicios Empresariales',
    primary: '#6366f1',      // Indigo principal AIGS
    secondary: '#3b82f6',    // Blue complementario
    accent: '#06b6d4',       // Cyan para contraste  
    gradient: 'from-indigo-600 via-blue-500 to-cyan-400',
    gradientDark: 'from-indigo-900 via-blue-800 to-purple-700',
    text: {
      primary: '#1e293b',
      secondary: '#334155',
      light: '#f8fafc',
      accent: '#6366f1'
    },
    background: {
      primary: 'from-slate-50 via-indigo-50 to-blue-50',
      secondary: 'from-indigo-900 via-blue-900 to-purple-900', 
      card: 'from-white/95 to-indigo-50/95',
      overlay: 'from-indigo-600/20 to-blue-600/20'
    },
    animations: {
      particles: 'tech-particles',
      glow: 'tech-glow',
      float: 'tech-float'
    }
  }
};

// Efectos y animaciones personalizadas
export const customAnimations = {
  // Partículas flotantes para minería
  'mining-particles': {
    animation: 'mining-float 6s ease-in-out infinite',
    keyframes: `
      @keyframes mining-float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
      }
    `
  },

  // Hojas cayendo para agricultura  
  'agro-particles': {
    animation: 'leaf-fall 8s linear infinite',
    keyframes: `
      @keyframes leaf-fall {
        0% { transform: translateY(-100vh) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
      }
    `
  },

  // Partículas de madera
  'wood-particles': {
    animation: 'wood-drift 10s ease-in-out infinite',
    keyframes: `
      @keyframes wood-drift {
        0%, 100% { transform: translateX(0px) translateY(0px) rotate(0deg); }
        25% { transform: translateX(20px) translateY(-10px) rotate(90deg); }
        50% { transform: translateX(-10px) translateY(-20px) rotate(180deg); }
        75% { transform: translateX(-20px) translateY(-10px) rotate(270deg); }
      }
    `
  },

  // Efectos tecnológicos para servicios
  'tech-particles': {
    animation: 'tech-pulse 4s ease-in-out infinite',
    keyframes: `
      @keyframes tech-pulse {
        0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.3; }
        50% { transform: scale(1.2) rotate(180deg); opacity: 0.8; }
      }
    `
  },

  // Seguimiento de cursor
  'cursor-follow': {
    animation: 'cursor-glow 0.3s ease-out',
    keyframes: `
      @keyframes cursor-glow {
        0% { transform: scale(0) rotate(0deg); opacity: 0; }
        50% { transform: scale(1.2) rotate(180deg); opacity: 0.8; }
        100% { transform: scale(1) rotate(360deg); opacity: 0.6; }
      }
    `
  }
};

// Componentes de layout mejorados
export const layoutComponents = {
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  section: 'py-16 lg:py-24',
  card: 'backdrop-blur-lg bg-white/90 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500',
  button: 'px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg',
  heading: 'font-bold tracking-tight',
  text: 'leading-relaxed'
};

// Efectos hover mejorados
export const hoverEffects = {
  card: 'hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500',
  button: 'hover:scale-110 hover:shadow-xl hover:shadow-current/25 transition-all duration-300',
  image: 'hover:scale-110 hover:rotate-3 transition-all duration-700',
  text: 'hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r transition-all duration-300'
};

export default {
  aigsCorePalette,
  industryThemes,
  customAnimations,
  layoutComponents,
  hoverEffects
}; 