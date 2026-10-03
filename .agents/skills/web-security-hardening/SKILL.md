---
name: web-security-hardening
description: >-
  Estandares de endurecimiento de seguridad web (OWASP, CSP, SRI, Headers de seguridad, Sanitizacion)
  para arquitecturas estaticas de alto perfil forense. Previene ataques XSS, Clickjacking, MiTM y
  fuga de datos en el cliente.
---

# Web Security Hardening Standard

Este skill define los controles tecnicos de seguridad para proteger la integridad y confidencialidad
del sitio web frente a manipulacion o ataques ciberneticos.

## 1. Cabeceras de Seguridad y Meta Tags

En entornos de hosting estatico (GitHub Pages / Cloudflare Pages), se implementan directivas
estrictas tanto a nivel de `<meta http-equiv>` como en configuraciones de servidor:

1. **Content Security Policy (CSP):**
   - Restringir scripts a fuentes de confianza (`'self'` y opcionalmente scripts de analitica de privacidad).
   - Bloquear inline handlers inseguros.
   - Restringir conexiones salientes (`connect-src 'self'`).
   - Bloquear carga en iframes no autorizados (`frame-ancestors 'none'`).

2. **Referrer-Policy:**
   - Establecer `strict-origin-when-cross-origin` para evitar fuga de rutas sensibles o identificadores.

3. **Permissions-Policy:**
   - Inhabilitar camara, microfono, geolocalizacion, sensor de acelerometro y pagos en el navegador.

## 2. Sanitizacion y Procesamiento de Entradas

- Toda entrada de usuario (nombre, tipo de solicitante, descripcion del caso) debe ser procesada
  como texto plano, sin interpretacion HTML (`textContent`).
- Codificacion rigurosa de parametros URI con `encodeURIComponent` para evitar rotura de enlaces o
  inyecciones en los esquemas `https://wa.me/` y `mailto:`.
- Atributos `rel="noopener noreferrer"` en todos los enlaces que abran en nueva pestaña (`target="_blank"`).

## 3. Resiliencia Cero Dependencias

- No depender de CDNs externos no controlados para scripts ejecutables.
- Mantener las dependencias en cero para eliminar vulnerabilidades de la cadena de suministro (supply-chain attacks).
