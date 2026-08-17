# 📋 TODO — landing-lumina (Backlog de mejoras)

> **Creado:** 2026-08-17
> **Repo:** [SteveMoya/landing-lumina](https://github.com/SteveMoya/landing-lumina)
> **Estado:** pendiente de implementación — orden propuesto por prioridad

---

## 🎯 Resumen

| # | Tarea | Estado | Prioridad |
|---|-------|--------|-----------|
| 1 | Imágenes reales del audífono | ⏳ Pendiente | 🔴 Alta |
| 2 | Animaciones de scroll | ⏳ Pendiente | 🟠 Media |
| 3 | Animaciones 3D de los audífonos | ⏳ Pendiente | 🔴 Alta |
| 4 | Sección de Tecnología más desarrollada | ⏳ Pendiente | 🔴 Alta |
| 5 | Archivos mock de las Opiniones | ⏳ Pendiente | 🟠 Media |
| 6 | Persona usando la cancelación de ruido | ⏳ Pendiente | 🟠 Media |
| 7 | Selector de producto (color, size, gama) | ⏳ Pendiente | 🔴 Alta |

**Leyenda:** ✅ Completado | 🔄 En progreso | ⏳ Pendiente

---

## 🔴 TODO 1: Imágenes reales del audífono

### 🎯 Objetivo
Sustituir/complementar la ilustración SVG (`ProductVisual.astro`) con **imágenes reales del producto** (fotos tipo Apple: producto sobre fondo limpio, ángulos de estudio).

### 📝 Pasos
- [ ] **1.1** — Definir fuente de imágenes: render 3D propio, fotografía de estudio o banco de imágenes premium
- [ ] **1.2** — Generar/obtener set mínimo: hero (frontal), showcase (3/4), sección tecnología (detalle copa), persona (en uso)
- [ ] **1.3** — Optimizar con `astro:assets` (AVIF/WebP, tamaños responsive, `srcset`)
- [ ] **1.4** — `loading="lazy"` fuera del hero, `fetchpriority="high"` + preload en el hero
- [ ] **1.5** — Alt text descriptivo por imagen
- [ ] **1.6** — Mantener el SVG como fallback/estado sin conexión

### ⚠️ Consideraciones
- Las imágenes reales suben el peso de página → medir LCP tras el cambio (objetivo: LCP < 2.5 s)
- Si se usan renders 3D, sirven también para el TODO 3 (animación 3D)

---

## 🟠 TODO 2: Animaciones de scroll

### 🎯 Objetivo
Añadir **scroll-driven animations** modernas y micro-interacciones que refuercen la sensación premium sin JS pesado.

### 📝 Pasos
- [ ] **2.1** — Scroll-driven (`animation-timeline: view()`) para reveal de secciones y parallax sutil del producto
- [ ] **2.2** — Progreso de lectura o indicador de scroll en el header
- [ ] **2.3** — Estagger de features/testimonios con delays escalonados
- [ ] **2.4** — Verificar soporte con fallback (IntersectionObserver actual) y `prefers-reduced-motion`

### ⚠️ Consideraciones
- Mantener el sistema actual (`data-reveal` + IO) como fallback para navegadores sin `animation-timeline`
- Animaciones solo `transform`/`opacity` para no afectar CWV

---

## 🔴 TODO 3: Animaciones 3D de los audífonos

### 🎯 Objetivo
Modelo **3D interactivo** del audífono en el hero: rotación al hover/scroll, órbita automática sutil.

### 📝 Pasos
- [ ] **3.1** — Elegir librería: **Three.js** (react-three-fiber o vanilla + isla Astro `client:visible`), **<model-viewer>** (WebGL declarativo) o **Spline** (editor + export)
- [ ] **3.2** — Conseguir/crear el modelo GLB del audífono (Blender, Spline o asset con licencia)
- [ ] **3.3** — Integrar como isla con carga diferida (`client:visible`) para no penalizar el LCP
- [ ] **3.4** — Fallback: mantener SVG estático si WebGL no está disponible
- [ ] **3.5** — Performance: `frameloop="demand"`/pausa cuando no está en viewport, reducir pixel ratio

### ⚠️ Consideraciones
- Ventajas: wow-factor máximo, diferenciación del portfolio
- Desventajas: peso del bundle JS (100–200 KB), battery en móvil → cargar solo cuando visible
- Presupuesto: render de alta calidad requiere modelado manual (Blender/Spline) — decidir si se usa modelo genérico licenciado

---

## 🔴 TODO 4: Sección de Tecnología más desarrollada

### 🎯 Objetivo
Ampliar `Features.astro` con contenido técnico real: **cómo funciona la ANC**, specs detalladas y comparativa de modos.

### 📝 Pasos
- [ ] **4.1** — Diagrama "Cómo funciona la ANC": micrófono externo → análisis → onda inversa → cancelación (SVG animado)
- [ ] **4.2** — Tabla de specs técnicas: drivers 40 mm, impedancia, THD, codecs (AAC, LDAC), rango de frecuencia, latencia
- [ ] **4.3** — Comparativa de modos (Silencio / Transparencia / Adaptativo) con cuándo usar cada uno
- [ ] **4.4** — Alternancia de contenido: tabs o acordeón para no alargar la sección
- [ ] **4.5** — Datos nuevos en `src/data/features.ts` (o `tech.ts` separado) tipados

### ⚠️ Consideraciones
- Mantener coherencia visual: misma jerarquía, tokens y animaciones del Design System
- La ANC explicada visualmente es el storytelling técnico más potente de la marca

---

## 🟠 TODO 5: Archivos mock de las Opiniones

### 🎯 Objetivo
Ampliar `testimonials.ts` con **mocks ricos**: más testimonios, metadatos y variedad de uso.

### 📝 Pasos
- [ ] **5.1** — Definir interfaz extendida: `{ quote, name, role, avatar (iniciales), rating, date, product (One/Air), verified }`
- [ ] **5.2** — Crear 6–9 testimonios mock realistas (no solo 3) con productos y ratings variados
- [ ] **5.3** — Avatares: iniciales generadas (sin fotos de stock de personas)
- [ ] **5.4** — Renderizar el nuevo schema en `Testimonials.astro` (badge "Compra verificada", estrellas dinámicas)

### ⚠️ Consideraciones
- Los testimonios son mock (marca ficticia) → dejar claro en el código con comentario `// mock`
- El rating dinámico reemplaza las 5 estrellas fijas actuales

---

## 🟠 TODO 6: Persona usando la cancelación de ruido

### 🎯 Objetivo
Añadir el **elemento humano**: ilustración/foto de una persona con los Lumina puestos en un entorno ruidoso → silencio. Reforzar el storytelling "El silencio es un lujo".

### 📝 Pasos
- [ ] **6.1** — Concepto visual: split "ciudad ruidosa (gris, ondas, caos) ↔ con Lumina (calma, dorado, foco)"
- [ ] **6.2** — Ilustración SVG propia (estilo de marca) o imagen optimizada
- [ ] **6.3** — Nueva sección `sections/Story.astro` (o integración en Showcase) con la narrativa
- [ ] **6.4** — Añadir datos del copy en `src/data/` (nunca hardcodeados)

### ⚠️ Consideraciones
- No usar fotos de stock genéricas de personas (marca ficticia) → ilustración coherente con el Design System

---

## 🔴 TODO 7: Selector de producto (color, size, gama)

### 🎯 Objetivo
Convertir la sección `Products` en una **experiencia de configuración**: selector que renderice el producto según **gama** (One/Air), **color** (Negro, Plata, Dorado) y **tamaño/estilo**, mostrando las características correspondientes y el precio actualizado.

### 📝 Pasos
- [ ] **7.1** — Extender el modelo de datos: `variants` con `{ color, size, price, features[], image }` por producto en `src/data/products.ts`
- [ ] **7.2** — Componente selector accesible: radio group nativo o combobox con `aria-selected`, focus visible
- [ ] **7.3** — Render dinámico: nombre, precio y features se actualizan según la variante elegida
- [ ] **7.4** — Swatch de colores (círculos con borde de foco) + labels de tamaño/gama
- [ ] **7.5** — Isla JS mínima (vanilla TS en `src/scripts/`) o Alpine.js para el estado — sin framework
- [ ] **7.6** — Estado inicial = variante principal (Lumina One · Negro)
- [ ] **7.7** — Testing: cambio de variante actualiza precio/features, teclado (flechas), sin JS el producto principal sigue visible

### ⚠️ Consideraciones
- Accesibilidad crítica: el selector debe funcionar con teclado y lector de pantalla
- Sin JS: renderizar siempre la variante por defecto (progressive enhancement)
- El precio y features vienen de los datos, nunca hardcodeados en el componente

---

## 🔄 Cómo actualizar este archivo

1. Marcar checkbox `- [ ]` → `- [x]` al completar
2. Actualizar estado y prioridad en la tabla resumen
3. Añadir nota con fecha al completar cada ítem

---

**Última actualización:** 2026-08-17
**Próxima acción:** implementar TODO 1 (imágenes) y TODO 7 (selector) como primeras mejoras
