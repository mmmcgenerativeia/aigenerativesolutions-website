/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#20C997',
          600: '#1aa085',
          700: '#0f766e',
          900: '#134e4a',
        },
        dark: {
          50: '#C9D1D9',
          100: '#8b949e',
          200: '#6e7681',
          300: '#484f58',
          400: '#30363d',
          500: '#21262d',
          600: '#161b22',
          700: '#0d1117',
          800: '#010409',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'exo': ['Exo 2', 'sans-serif'],
      },
      animation: {
        'gradient': 'animatedGradient 25s ease infinite',
        'orbit1': 'orbit1 8s linear infinite',
        'orbit2': 'orbit2 6s linear infinite',
        'orbit3': 'orbit3 10s linear infinite',
        'orbit4': 'orbit4 5s linear infinite',
        'orbit5': 'orbit5 12s linear infinite',
      },
      keyframes: {
        animatedGradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        orbit1: {
          '0%': { transform: 'rotateY(0deg) translateX(180px) translateZ(50px) rotateY(-0deg) scale(1)' },
          '25%': { transform: 'rotateY(90deg) translateX(180px) translateZ(0px) rotateY(-90deg) scale(0.8)' },
          '50%': { transform: 'rotateY(180deg) translateX(180px) translateZ(-50px) rotateY(-180deg) scale(0.6)' },
          '75%': { transform: 'rotateY(270deg) translateX(180px) translateZ(0px) rotateY(-270deg) scale(0.8)' },
          '100%': { transform: 'rotateY(360deg) translateX(180px) translateZ(50px) rotateY(-360deg) scale(1)' },
        },
        orbit2: {
          '0%': { transform: 'rotateX(0deg) translateY(70px) translateZ(60px) rotateX(-0deg) scale(0.9)' },
          '25%': { transform: 'rotateX(90deg) translateY(70px) translateZ(0px) rotateX(-90deg) scale(0.7)' },
          '50%': { transform: 'rotateX(180deg) translateY(70px) translateZ(-60px) rotateX(-180deg) scale(0.5)' },
          '75%': { transform: 'rotateX(270deg) translateY(70px) translateZ(0px) rotateX(-270deg) scale(0.7)' },
          '100%': { transform: 'rotateX(360deg) translateY(70px) translateZ(60px) rotateX(-360deg) scale(0.9)' },
        },
        orbit3: {
          '0%': { transform: 'rotateZ(45deg) rotateY(0deg) translateX(200px) translateZ(30px) rotateY(0deg) scale(0.8)' },
          '50%': { transform: 'rotateZ(45deg) rotateY(180deg) translateX(200px) translateZ(-40px) rotateY(-180deg) scale(0.5)' },
          '100%': { transform: 'rotateZ(45deg) rotateY(360deg) translateX(200px) translateZ(30px) rotateY(-360deg) scale(0.8)' },
        },
        orbit4: {
          '0%': { transform: 'rotateY(20deg) translateX(150px) translateZ(70px) rotateY(-20deg) scale(1.1)' },
          '25%': { transform: 'rotateY(110deg) translateX(150px) translateZ(10px) rotateY(-110deg) scale(0.9)' },
          '50%': { transform: 'rotateY(200deg) translateX(150px) translateZ(-20px) rotateY(-200deg) scale(0.7)' },
          '75%': { transform: 'rotateY(290deg) translateX(150px) translateZ(10px) rotateY(-290deg) scale(0.9)' },
          '100%': { transform: 'rotateY(380deg) translateX(150px) translateZ(70px) rotateY(-380deg) scale(1.1)' },
        },
        orbit5: {
          '0%': { transform: 'rotateX(-30deg) rotateY(0deg) translateX(220px) translateZ(-60px) rotateY(0deg) scale(0.6)' },
          '50%': { transform: 'rotateX(-30deg) rotateY(180deg) translateX(220px) translateZ(10px) rotateY(-180deg) scale(0.8)' },
          '100%': { transform: 'rotateX(-30deg) rotateY(360deg) translateX(220px) translateZ(-60px) rotateY(-360deg) scale(0.6)' },
        },
      },
    },
  },
  plugins: [],
} 