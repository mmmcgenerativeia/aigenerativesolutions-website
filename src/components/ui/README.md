# Componentes UI Temáticos por Industria

Este sistema de componentes permite crear interfaces que se adaptan automáticamente al tema visual de cada industria (minería, madera, agricultura, servicios).

## 🎨 Sistema de Design Tokens

Los design tokens están definidos en `src/data/design-tokens.ts` y proporcionan:

- **Paletas de colores** específicas por industria
- **Tipografías** contextualizadas 
- **Iconografía** especializada
- **Espaciado y efectos** apropiados
- **Métricas y contenido** por sector

## 📦 Componentes Disponibles

### 1. IndustryCard

Componente de tarjeta adaptable que cambia de apariencia según la industria.

```tsx
import IndustryCard from '@/components/ui/IndustryCard';

// Tarjeta de característica
<IndustryCard
  industry="mineria"
  variant="feature"
  title="Mantenimiento Predictivo"
  description="IA que predice fallas antes de que ocurran"
  icon="⚙️"
  features={[
    'Análisis de vibraciones',
    'Alertas tempranas',
    'Optimización de repuestos'
  ]}
  href="/industria-4-0/mineria"
/>

// Tarjeta de métricas
<IndustryCard
  industry="agricultura"
  variant="metric"
  title="Resultados Comprobados"
  description="Beneficios medibles en agricultura"
  metrics={[
    { value: '25%', label: 'Más Rendimiento' },
    { value: '30%', label: 'Ahorro Agua' },
    { value: '40%', label: 'Menos Químicos' }
  ]}
/>
```

**Variantes disponibles:**
- `default`: Tarjeta estándar
- `feature`: Con icono y características
- `metric`: Para mostrar métricas
- `case-study`: Para casos de éxito

### 2. IndustryHero

Componente hero que se adapta a cada industria con gradientes y colores específicos.

```tsx
import IndustryHero from '@/components/ui/IndustryHero';

<IndustryHero
  industry="madera"
  title="Industria Maderera 4.0 con"
  highlight="IA Sostenible"
  subtitle="Transformamos la gestión forestal con tecnología de vanguardia"
  primaryCTA={{
    text: "Ver Soluciones",
    href: "/industria-4-0/madera"
  }}
  secondaryCTA={{
    text: "Contactar",
    href: "#contacto"
  }}
  metrics={[
    { value: '40%', label: 'Más Eficiencia' },
    { value: '35%', label: 'Menos Desperdicio' }
  ]}
/>
```

### 3. IndustryButton

Botones temáticos con múltiples variantes y tamaños.

```tsx
import IndustryButton from '@/components/ui/IndustryButton';

// Botón primario
<IndustryButton
  industry="servicios"
  variant="primary"
  size="lg"
  href="/servicios-empresas"
  icon="🚀"
>
  Ver Servicios
</IndustryButton>

// Botón outline
<IndustryButton
  industry="agricultura"
  variant="outline"
  onClick={() => console.log('Clicked')}
>
  Más información
</IndustryButton>
```

**Variantes disponibles:**
- `primary`: Botón principal con gradiente
- `secondary`: Fondo suave con color de industria
- `outline`: Solo borde con color de industria
- `ghost`: Transparente con hover

**Tamaños disponibles:**
- `sm`: Pequeño (px-4 py-2)
- `md`: Mediano (px-6 py-3) - Por defecto
- `lg`: Grande (px-8 py-4)
- `xl`: Extra grande (px-10 py-5)

### 4. IndustryIcon

Iconos SVG personalizados por industria con nombres específicos.

```tsx
import IndustryIcon from '@/components/ui/IndustryIcon';

// Iconos específicos por industria
<IndustryIcon industry="mineria" name="excavadora" size="xl" />
<IndustryIcon industry="madera" name="arbol" color="secondary" />
<IndustryIcon industry="agricultura" name="drone" size="lg" />
<IndustryIcon industry="servicios" name="chatbot" color="white" />

// Iconos genéricos
<IndustryIcon industry="mineria" name="analytics" />
<IndustryIcon industry="servicios" name="ai" />
```

**Iconos específicos por industria:**

**Minería:**
- `excavadora`: Maquinaria pesada
- `casco`: Seguridad industrial
- `sensor`: Tecnología IoT

**Madera:**
- `arbol`: Gestión forestal
- `sierra`: Procesamiento
- `medicion`: Control de calidad

**Agricultura:**
- `tractor`: Maquinaria agrícola
- `drone`: Monitoreo aéreo
- `planta`: Cultivos

**Servicios:**
- `capacitacion`: Formación
- `chatbot`: Asistentes virtuales
- `web`: Desarrollo web

**Genéricos:**
- `analytics`: Análisis de datos
- `iot`: Internet de las cosas
- `ai`: Inteligencia artificial

## 🎯 Tipos de Industria

```tsx
type IndustryTheme = 'mineria' | 'madera' | 'agricultura' | 'servicios';
```

## 🔧 Uso del Sistema de Temas

```tsx
import { getIndustryTheme } from '@/data/design-tokens';

const theme = getIndustryTheme('mineria');
// Retorna: { colors, fonts, icons, spacing, effects }
```

## 🎨 Paletas de Colores por Industria

### Minería
- **Primario:** Amber/Dorado (#D97706)
- **Gradientes:** Amber a Orange
- **Concepto:** Industrial, técnico, resistente

### Madera
- **Primario:** Verde/Esmeralda (#059669)
- **Gradientes:** Verde a Emerald
- **Concepto:** Natural, sostenible, orgánico

### Agricultura
- **Primario:** Lima/Verde brillante (#65A30D)
- **Gradientes:** Verde a Lime
- **Concepto:** Crecimiento, frescura, vitalidad

### Servicios
- **Primario:** Azul corporativo (#2563EB)
- **Gradientes:** Azul a Púrpura
- **Concepto:** Profesional, confiable, tecnológico

## 📱 Responsive Design

Todos los componentes incluyen clases responsive:
- `sm:` - Dispositivos pequeños
- `md:` - Tablets
- `lg:` - Desktop
- `xl:` - Pantallas grandes

## ⚡ Animaciones

Los componentes incluyen animaciones suaves con Framer Motion y CSS transitions:
- Hover effects
- Scale transforms
- Fade in/out
- Gradient animations

## 🔍 Ejemplo Completo

```tsx
import IndustryHero from '@/components/ui/IndustryHero';
import IndustryCard from '@/components/ui/IndustryCard';
import IndustryButton from '@/components/ui/IndustryButton';
import IndustryIcon from '@/components/ui/IndustryIcon';

export default function MineriaPage() {
  return (
    <div>
      <IndustryHero
        industry="mineria"
        title="Minería 4.0 con"
        highlight="Inteligencia Artificial"
        subtitle="Revolucionamos la industria minera con IA avanzada"
        primaryCTA={{ text: "Ver Demo", href: "/demo" }}
      />
      
      <section className="py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <IndustryCard
            industry="mineria"
            variant="feature"
            title="Mantenimiento Predictivo"
            description="Prevención de fallas con IA"
            icon="⚙️"
            features={['Sensores IoT', 'ML Avanzado']}
          />
          
          <IndustryCard
            industry="mineria"
            variant="feature"
            title="Optimización de Flotas"
            description="Gestión inteligente de vehículos"
            icon="🚛"
            features={['Rutas optimizadas', 'Ahorro combustible']}
          />
        </div>
      </section>
    </div>
  );
}
``` 