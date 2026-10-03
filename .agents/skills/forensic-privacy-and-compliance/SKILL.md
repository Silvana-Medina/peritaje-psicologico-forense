---
name: forensic-privacy-and-compliance
description: >-
  Guia y estandar de cumplimiento legal, deontologico e informatica forense para sitios web juridicos
  y de psicologia forense en Colombia (Ley 1581 de 2012, Decreto 1377 de 2013, Ley 1090 de 2006).
  Previene demandas civiles, disciplinarias y de proteccion de datos mediante arquitectura de retencion
  cero, consentimiento expreso previo y prohibicion estricta de promesas de resultados judiciales.
---

# Forensic Privacy and Compliance Standard

Este skill establece las directrices obligatorias de seguridad, proteccion de datos y cumplimiento
etico-legal para el sitio web de psicologia juridica y forense en Colombia, disenado para blindar
juridicamente a la profesional y a los consultantes.

## 1. Marco Normativo Colombiano Obligatorio

1. **Ley 1581 de 2012 y Decreto 1377 de 2013 (Habeas Data):**
   - El tratamiento de datos en el contexto juridico/forense involucra datos sensibles (art. 5 Ley 1581).
   - **Principio de Retencion Cero:** La pagina web no almacena datos en bases de datos, cookies ni
     almacenamiento local (`localStorage`/`sessionStorage`).
   - Todo contacto se delega al canal directo del usuario (WhatsApp o cliente de correo), donde opera
     el secreto profesional y el consentimiento informado pericial.
   - Se exige casilla de verificacion obligatoria previa a la habilitacion de botones de contacto.

2. **Ley 1090 de 2006 (Codigo Deontologico y Bioetico del Psicologo):**
   - **Prohibicion de garantizar resultados:** Queda terminantemente prohibido afirmar o insinuar que
     el peritaje garantiza sentencias favorables, condenas o absoluciones. La pericia es un medio de
     prueba cientifico e independiente, sujeto a la sana critica del juez.
   - **Prohibicion de testimonios de clientes:** No publicar nombres, declaraciones ni reseñas de casos
     o de personas evaluadas.
   - **Veracidad academica:** No atribuir titulos no culminados; indicar con exactitud el estado
     academico de especializaciones o acreditaciones.
   - **Identificacion profesional:** Incluir de manera visible el numero de tarjeta profesional expedida
     por el Colegio Colombiano de Psicologos (COLPSIC).

3. **Ley 527 de 1999 (Mensajes de Datos y Comercio Electronico):**
   - Integridad del mensaje de datos generado desde el formulario hacia el cliente de mensajeria/correo.
   - Cadena de custodia conceptual de la informacion de contacto.

## 2. Pautas de Implementacion Tecnica

- Formularios sin endpoint de backend que pueda ser vulnerado, interceptado o sujeto a fuga de datos.
- Apertura mediante protocolos estandarizados con sanitizacion (`encodeURIComponent`):
  - WhatsApp: `https://wa.me/573163827174?text=...`
  - Correo: `mailto:silvanaanacona22@gmail.com?subject=...&body=...`
- Politica de privacidad completa y accesible en `/privacidad.html` con canales claros para el
  ejercicio de derechos de acceso, rectificacion y supresion.
- Sin inclusion de cookies analiticas invasivas ni pixeles de rastreo que compartan datos con terceros.
