---
name: web-architecture-scalability
description: >-
  Arquitectura de frontend estatico de costo cero, alta disponibilidad y escalabilidad global para
  sitios de alto impacto en GitHub Pages o Cloudflare Pages con HTML5, CSS3 y Vanilla JS.
---

# Web Architecture and Scalability Guide

Este skill proporciona la base tecnica para desplegar un sitio web veloz, escalable y mantenible
sin costos de servidor, bases de datos ni dependencias fragiles.

## 1. Principios de Arquitectura Estatica

1. **Cero Dependencias de Ejecucion (Zero Runtime Dependencies):**
   - Sin bundlers obligatorios, sin Node.js en produccion, sin librerias pesadas.
   - El navegador ejecuta directamente el HTML, CSS y JS nativos.
   - Garantiza que el sitio funcione sin roturas por versiones a lo largo de los años.

2. **Escalabilidad y Costo Cero:**
   - Alojamiento en redes perimetrales globales (CDN) de GitHub Pages o Cloudflare Pages.
   - Resistencia total a picos de trafico sin incremento de costos de infraestructura.
   - Certificados SSL/TLS gratuitos y renovados automaticamente.

3. **Optimizacion de Rendimiento (Lighthouse 95+):**
   - CSS modular con variables `:root` y especificidad baja.
   - Carga diferida de scripts (`defer`).
   - Optimizacion de fuentes con `font-display: swap` y preconeccion a `fonts.googleapis.com` y `fonts.gstatic.com`.
   - Elementos visuales vectoriales (SVG) de peso minimo para logos e iconos.
