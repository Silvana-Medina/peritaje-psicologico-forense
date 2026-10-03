---
name: frontend-lighthouse
description: >-
  Auditoria automatizada de rendimiento web, Core Web Vitals (LCP, CLS, INP/TBT) y calidad
  de producción con Lighthouse CI.
---

# Frontend Lighthouse CI Audit

Este skill define los presupuestos de rendimiento y criterios de calidad exigidos por Google Lighthouse
para el despliegue en producción.

## 1. Presupuestos Obligatorios (Budgets)

- **Largest Contentful Paint (LCP):** <= 2.5 s en emulación 4G lenta.
- **Cumulative Layout Shift (CLS):** <= 0.1.
- **Total Blocking Time (TBT):** <= 200 ms.
- **Puntuaciones mínimas por categoría:**
  - Rendimiento (Performance): >= 90
  - Accesibilidad (Accessibility): >= 90
  - Buenas prácticas (Best Practices): >= 90
  - SEO: >= 90
