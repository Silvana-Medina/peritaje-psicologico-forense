---
name: accessibility-compliance-audit
description: >-
  Directrices y auditoria de accesibilidad digital WCAG 2.1 AA/AAA, Ley 1618 de 2013 y Resolucion
  1519 de 2020 de MinTIC. Garantiza que el sitio sea 100% operable por teclado, legible por lectores
  de pantalla y sin barreras excluyentes.
---

# Accessibility Compliance and Audit Guide

Este skill asegura que el sitio cumpla con los mas altos estandares internacionales y nacionales de
accesibilidad digital, previniendo denuncias o demandas por discriminacion en el acceso a la
informacion publica y de servicios profesionales.

## 1. Principios WCAG 2.1 AA

1. **Perceptible:**
   - Contraste de color minimo de 4.5:1 para texto normal y 3:1 para texto grande o componentes de UI.
     - `--ink: #141C25` sobre `--paper: #FBFAF7` tiene un contraste superior a 14:1 (Cumple AAA).
     - `--seal: #2F5D50` sobre `--paper: #FBFAF7` tiene un contraste de 6.1:1 (Cumple AA).
   - Tipografia con jerarquia clara, espaciado de linea minimo de 1.5 en parrafos.
   - Textos descriptivos en enlaces y botones (evitar enlaces vagos como "clic aqui").
   - Atributos `alt` precisos en imagenes.

2. **Operable:**
   - Navegacion 100% funcional mediante teclado (`Tab`, `Shift+Tab`, `Enter`, `Space`).
   - Indicador visual claro de foco activo (`:focus-visible`) en todos los elementos interactivos.
   - Respeto a la preferencia de movimiento reducido de los usuarios:
     `@media (prefers-reduced-motion: reduce)`.
   - Atajo de accesibilidad "Saltar al contenido principal" (`skip-to-content`).

3. **Comprensible:**
   - Idioma declarado explicitamente en el elemento raiz: `lang="es-CO"`.
   - Etiquetas de formulario asociadas univocamente con atributos `for` e `id`.
   - Mensajes de validacion claros sin depender unicamente del color.

4. **Robusto:**
   - Marcado semantico HTML5 nativo (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<details>`, `<summary>`, `<footer>`).
   - Atributos ARIA cuando sean estrictamente necesarios para lectores de pantalla.
