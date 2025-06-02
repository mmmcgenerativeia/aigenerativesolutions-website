# 🚀 Guía de Inicio Rápido - AIGS Landing Page

## ⚡ Instalación en 3 pasos

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar en desarrollo
npm run dev

# 3. Abrir navegador en http://localhost:3000
```

## 📝 Edición Rápida de Contenido

### Cambiar textos principales
Edita: `src/data/content.ts`

```typescript
export const heroContent = {
  title: 'Tu nuevo título',
  subtitle: 'Tu nueva descripción...',
  // etc.
}
```

### Cambiar colores
Edita: `tailwind.config.js`

```javascript
primary: {
  500: '#TU_COLOR', // Color principal
}
```

### Cambiar información de contacto
Edita: `src/components/Footer.tsx`

```typescript
email = 'tu@email.com'
phone = '+1 234 567 890'
```

## 🎨 Personalización del Logo

### Opción 1: Usar logo animado actual
El logo está en `src/components/Logo.tsx` - ya incluye animaciones 3D

### Opción 2: Reemplazar con imagen
```typescript
// En Header.tsx y Hero.tsx, reemplazar:
<Logo />
// Por:
<img src="/tu-logo.png" alt="Tu Logo" className="h-12" />
```

## 📧 Configurar Formulario de Contacto

En `src/pages/index.tsx`, reemplaza:

```typescript
const handleContactSubmit = async (formData) => {
  // OPCIÓN 1: Tu API
  await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData)
  });

  // OPCIÓN 2: EmailJS
  // await emailjs.send('service_id', 'template_id', formData);

  // OPCIÓN 3: Formspree
  // await fetch('https://formspree.io/f/YOUR_FORM_ID', {...});
};
```

## 🌐 Deploy a Producción

### Vercel (Recomendado)
1. `git push` a GitHub
2. Conectar repositorio en [vercel.com](https://vercel.com)
3. ¡Listo! 🎉

### Build manual
```bash
npm run build
npm start
```

## 🛠️ Comandos Útiles

```bash
# Desarrollo
npm run dev

# Producción
npm run build
npm start

# Linting
npm run lint

# Generar build estático
npm run export
```

## 📁 Estructura Clave

```
src/
├── components/     # Todos los componentes editables
├── data/          # content.ts - TODO EL CONTENIDO AQUÍ
├── pages/         # index.tsx - página principal
└── styles/        # globals.css - estilos globales
```

## 🆘 Problemas Comunes

**No se ven los estilos**: `npm install` y `npm run dev`
**Error de TypeScript**: Revisar tipos en los componentes
**Logo no aparece**: Verificar rutas en `public/`

---

**¡En 5 minutos tienes tu landing page funcionando!** ⚡

Para más detalles, consulta el `README.md` completo. 