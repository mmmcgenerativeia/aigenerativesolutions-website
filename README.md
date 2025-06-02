# 🚀 AIGS Landing Page - AI Generative Solutions

Landing page moderna y profesional para AIGS, empresa de consultoría en inteligencia artificial generativa. Construida con **Next.js**, **React**, **TypeScript** y **Tailwind CSS**.

## ✨ Características

- ⚡ **Tecnologías Modernas**: Next.js 14, React 18, TypeScript, Tailwind CSS
- 🎨 **Logo Animado 3D**: Implementación del logo con satélites orbitales en CSS puro
- 📱 **Responsive Design**: Optimizado para móviles, tablets y desktop
- 🧩 **Componentes Modulares**: Fácil edición y mantenimiento
- 🎯 **SEO Optimizado**: Meta tags, structured data, Open Graph
- 📧 **Formulario de Contacto**: Funcional con validación
- ⚡ **Performance**: Optimizado para carga rápida
- 🌟 **Animaciones Suaves**: Transiciones y efectos visuales elegantes

## 🏗️ Estructura del Proyecto

```
aigs-landing/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/        # Componentes React modulares
│   │   ├── Header.tsx     # Navegación y menú móvil
│   │   ├── Hero.tsx       # Sección principal con logo
│   │   ├── About.tsx      # Sección Nosotros
│   │   ├── Services.tsx   # Servicios de consultoría
│   │   ├── WhyUs.tsx      # Por qué elegirnos
│   │   ├── Testimonials.tsx # Testimonios de clientes
│   │   ├── Contact.tsx    # Formulario de contacto
│   │   ├── Footer.tsx     # Pie de página
│   │   └── Logo.tsx       # Logo animado 3D
│   ├── pages/            # Páginas de Next.js
│   │   ├── _app.tsx      # Configuración de la app
│   │   ├── _document.tsx # HTML document
│   │   └── index.tsx     # Página principal
│   └── styles/           # Estilos
│       └── globals.css   # Estilos globales con Tailwind
├── package.json          # Dependencias y scripts
├── tailwind.config.js    # Configuración de Tailwind
├── tsconfig.json         # Configuración de TypeScript
└── next.config.js        # Configuración de Next.js
```

## 🚀 Instalación Rápida

### 1. Clonar o Descargar el Proyecto

```bash
# Si tienes Git
git clone <tu-repositorio>
cd aigs-landing

# O simplemente descargar los archivos en tu carpeta
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Ejecutar en Desarrollo

```bash
npm run dev
```

La página estará disponible en: `http://localhost:3000`

### 4. Construir para Producción

```bash
npm run build
npm start
```

## 📝 Guía de Edición Fácil

### ✏️ Editar Contenido Principal

Cada componente tiene props editables. Los textos principales están como valores por defecto:

#### **Hero Section** (`src/components/Hero.tsx`)
```tsx
// Cambiar textos principales
title = 'Transformando Negocios con'
subtitle = 'En AIGS, fusionamos estrategia...'
primaryButtonText = 'Descubre Nuestras Soluciones'
secondaryButtonText = 'Hablemos de tu Proyecto'
```

#### **About Section** (`src/components/About.tsx`)
```tsx
// Editar información de la empresa
title = 'Sobre AIGS'
mainTitle = 'Nuestra Misión: Innovación y Resultados'
description1 = 'En AIGS, combinamos...'
features = [
  'Experiencia Comprobada y Liderazgo',
  'Soluciones a Medida y Escalables',
  // ...más características
]
```

#### **Services** (`src/components/Services.tsx`)
```tsx
// Modificar servicios ofrecidos
services = [
  {
    title: 'Estrategia de IA Generativa',
    description: 'Diseñamos hojas de ruta...',
    icon: <svg>...</svg>
  },
  // ...más servicios
]
```

#### **Testimonials** (`src/components/Testimonials.tsx`)
```tsx
// Cambiar testimonios de clientes
testimonials = [
  {
    quote: 'AIGS transformó nuestra aproximación...',
    name: 'Ana Pérez',
    position: 'CEO',
    company: 'Innovatech Solutions'
  },
  // ...más testimonios
]
```

### 🎨 Personalizar Colores y Estilos

En `tailwind.config.js`:

```js
colors: {
  primary: {
    500: '#20C997', // Color principal (verde teal)
    600: '#1aa085', // Hover state
  }
}
```

En `src/styles/globals.css`:

```css
.accent-color {
  color: #20C997; /* Cambiar color de acento */
}

.accent-bg {
  background-color: #20C997;
}
```

### 📧 Configurar Formulario de Contacto

En `src/pages/index.tsx`, reemplaza la función `handleContactSubmit`:

```tsx
const handleContactSubmit = async (formData) => {
  // Opción 1: Enviar a tu backend
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });

  // Opción 2: Usar EmailJS
  // await emailjs.send('service_id', 'template_id', formData, 'public_key');

  // Opción 3: Usar Formspree
  // await fetch('https://formspree.io/f/tu-form-id', {
  //   method: 'POST',
  //   body: JSON.stringify(formData),
  //   headers: { 'Content-Type': 'application/json' }
  // });
};
```

### 🖼️ Cambiar Imágenes

1. **Logo**: Edita `src/components/Logo.tsx` o reemplaza con imagen:
```tsx
// Reemplazar logo animado con imagen
<img src="/logo.png" alt="AIGS Logo" className="h-12" />
```

2. **Imágenes de secciones**: Cambiar URLs en los componentes:
```tsx
imageUrl = 'https://tu-dominio.com/tu-imagen.jpg'
```

3. **Favicons**: Reemplazar archivos en `public/`:
   - `favicon.ico`
   - `apple-touch-icon.png`
   - `favicon-32x32.png`
   - `favicon-16x16.png`

## 🌐 Despliegue en Producción

### Opción 1: Vercel (Recomendado)

1. Subir tu código a GitHub
2. Conectar con [Vercel](https://vercel.com)
3. Deploy automático ✨

### Opción 2: Netlify

1. Build: `npm run build && npm run export`
2. Subir carpeta `out/` a [Netlify](https://netlify.com)

### Opción 3: Tu Servidor

```bash
npm run build
npm start
```

## 🛠️ Configuración Avanzada

### Añadir Google Analytics

En `src/pages/_document.tsx`:

```tsx
<script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID`}
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_TRACKING_ID');
    `,
  }}
/>
```

### Configurar Dominio Personalizado

1. Actualizar URLs en meta tags (`src/pages/_document.tsx`)
2. Configurar DNS en tu proveedor
3. Configurar SSL/HTTPS

### Integrar CMS (Opcional)

Para edición sin código, puedes integrar:
- **Contentful**
- **Strapi**
- **Sanity**
- **Forestry**

## 📱 SEO y Redes Sociales

La página incluye:
- ✅ Meta tags optimizados
- ✅ Open Graph para Facebook
- ✅ Twitter Cards
- ✅ Structured Data (Schema.org)
- ✅ Sitemap automático
- ✅ Robots.txt

## 🤝 Soporte y Personalización

### Ediciones Comunes

1. **Cambiar información de contacto**: Edita `src/components/Footer.tsx`
2. **Añadir nueva sección**: Crea componente y añade a `src/pages/index.tsx`
3. **Modificar navegación**: Edita `src/components/Header.tsx`
4. **Cambiar fuentes**: Actualiza imports en `src/styles/globals.css`

### Problemas Comunes

**Error de compilación TypeScript**: Asegúrate de que todos los tipos están correctos
**Estilos no se aplican**: Verifica que Tailwind esté configurado correctamente
**Logo no aparece**: Revisa rutas de archivos en `public/`

## 📄 Licencia

Este proyecto está diseñado específicamente para AIGS. Todos los derechos reservados.

---

**¡Tu landing page moderna está lista!** 🎉

Para cualquier duda o personalización adicional, revisa los comentarios en el código o contacta al desarrollador. 