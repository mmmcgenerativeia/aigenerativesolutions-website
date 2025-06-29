# 🚀 Guía de Despliegue - AI Generative Solutions

## ✅ Estado Actual
- ✅ Servidor funcionando en: `https://aigs-whatsapp-server.onrender.com`
- ✅ Frontend configurado para producción
- ✅ Dashboard administrativo listo
- ✅ Chat bidireccional funcionando

## 📋 Pasos para Subir a Git y Producción

### 1. 🔧 Preparación Final

#### Verificar archivo .env.local:
```bash
# Debe contener:
NEXT_PUBLIC_SERVER_URL=https://aigs-whatsapp-server.onrender.com
```

#### Restaurar .gitignore (IMPORTANTE):
- Descomenta las líneas de archivos .env en `.gitignore`
- Los archivos .env.local NO deben subirse a Git por seguridad

### 2. 📤 Subir Cambios a Git

```bash
# Revisar archivos modificados
git status

# Agregar archivos (EXCEPTO .env.local)
git add .

# Confirmar cambios
git commit -m "✨ Implementar sistema de chat WhatsApp bidireccional

- ✅ Chat en tiempo real con Socket.IO
- ✅ Dashboard administrativo (/admin) 
- ✅ Integración Twilio WhatsApp Business
- ✅ Servidor desplegado en Render.com
- 🎨 Mejorado UI del chat (texto negro en mensajes usuario)
- 🔧 Configuración de producción lista"

# Subir a GitHub
git push origin main
```

### 3. 🌐 Desplegar Frontend (Vercel)

#### Opción A: Automático (si ya tienes Vercel conectado)
- Al hacer `git push`, Vercel detectará los cambios
- Desplegará automáticamente en 2-3 minutos

#### Opción B: Manual desde Vercel Dashboard
1. Ve a [vercel.com](https://vercel.com)
2. Selecciona tu proyecto `aigenerativesolutions`
3. Click en "Deploy" o "Redeploy"

### 4. ⚙️ Configurar Variables de Entorno en Vercel

En Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_SERVER_URL = https://aigs-whatsapp-server.onrender.com
```

### 5. ✅ URLs Finales de Producción

#### 🌐 Sitio Web Principal:
- `https://aigenerativesolutions.vercel.app`
- (o tu dominio personalizado)

#### 🔧 Dashboard Administrativo:
- `https://aigenerativesolutions.vercel.app/admin`
- **Contraseña:** `aigs2024`

#### 📱 Servidor WhatsApp:
- `https://aigs-whatsapp-server.onrender.com`

### 6. 🧪 Pruebas Finales

1. **Probar Chat en Producción:**
   - Ve a tu sitio web
   - Click en el ícono de WhatsApp flotante
   - Completa el formulario de contacto
   - Verifica que aparezca en `/admin`

2. **Probar Dashboard:**
   - Ve a `tu-dominio.com/admin`
   - Ingresa contraseña: `aigs2024`
   - Verifica que veas conversaciones en tiempo real

3. **Probar WhatsApp (si configurado):**
   - El ejecutivo debe recibir notificaciones en WhatsApp
   - Las respuestas aparecen en el dashboard

## 🔄 Configuración Opcional: Webhook Twilio

Si quieres que las respuestas por WhatsApp aparezcan automáticamente:

1. Ve a [Twilio Console](https://console.twilio.com)
2. WhatsApp → Sandbox Settings
3. Webhook URL: `https://aigs-whatsapp-server.onrender.com/webhook/whatsapp`
4. HTTP Method: POST

## 📞 Soporte Post-Despliegue

### Configuración Twilio:
- Las credenciales están configuradas como variables de entorno en Render.com
- Para obtener las credenciales, revisar la configuración del servidor

### Logs y Debugging:
- **Render Logs:** https://dashboard.render.com
- **Vercel Logs:** https://vercel.com/dashboard
- **Browser Console:** F12 para errores frontend

## ⚠️ Recordatorios Importantes

1. **Nunca subir .env.local a Git** (contiene datos sensibles)
2. **Contraseña admin:** cambiar `aigs2024` por una más segura en producción
3. **Monitoreo:** revisar logs de Render periódicamente
4. **Backups:** las conversaciones se almacenan en memoria (temporales)

## 🎯 ¿Todo Listo?

✅ Servidor funcionando
✅ Frontend configurado  
✅ Dashboard operativo
✅ Git actualizado
✅ Producción desplegada

¡El sistema de chat bidireccional está completamente operativo! 🚀 