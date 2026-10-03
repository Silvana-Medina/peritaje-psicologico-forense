---
name: security-audit
description: >-
  Auditoria de seguridad estatica, mitigacion de riesgos OWASP Top 10, politicas de contenido
  y sanitizacion de entradas para sitios estaticos.
---

# Web Security Audit Standard

Este skill realiza la verificación sistemática de controles de seguridad en sitios web sin backend.

## 1. Controles Obligatorios

- **Inyección y XSS:** Procesamiento estricto de entradas como texto plano (`textContent`) y codificación URI rigurosa (`encodeURIComponent`).
- **Fuga de datos:** Arquitectura de retención cero; ausencia de almacenamiento en `localStorage`, `sessionStorage` o cookies no consentidas.
- **Cabeceras de respuesta:** `Content-Security-Policy`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Content-Type-Options: nosniff`.
- **Integridad de enlaces externos:** Atributos `rel="noopener noreferrer"` en todos los hipervínculos con `target="_blank"`.
