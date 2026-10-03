# Sitio Web Profesional: Psicología Jurídica y Forense — Silvana Medina Anacona

Sitio web estático, accesible, de alto rendimiento y costo cero para la presentación de servicios periciales forenses y captación directa de solicitudes por WhatsApp y correo electrónico en Florencia, Caquetá y cobertura nacional (Colombia).

---

## 1. Marcadores Pendientes de Confirmar

Para cumplir con el principio de veracidad de la **Ley 1090 de 2006** y no atribuir datos inexactos, los siguientes valores se encuentran delimitados con marcadores y deben reemplazarse antes del lanzamiento definitivo:

| Marcador | Descripción | Dónde aparece | Ejemplo de reemplazo |
|---|---|---|---|
| `[TIEMPO_RESPUESTA]` | Tiempo estimado de respuesta a contactos iniciales. | Encabezado principal (Hero) | `Menos de 24 horas` o `Mismo día hábil` |
| `[PLAZO_DICTAMEN]` | Plazo habitual de entrega del informe pericial formal foliado. | Sección Proceso y FAQ | `15 a 20 días hábiles` |
| `[REVISION_GRATUITA]` | Si la valoración preliminar de viabilidad tiene o no costo. | Sección Proceso (Paso 01) | `(Revisión preliminar sin costo)` |

*(Nota: La fotografía profesional real en sala de audiencias ya fue integrada en `img/silvana-medina.jpg`).*

---

## 2. Ecosistema de Skills Forenses y de Seguridad Instaladas (`.agents/skills/`)

El proyecto cuenta con cuatro skills especializadas para asegurar la escalabilidad, accesibilidad y el blindaje legal e informático del sitio web:

1. **`forensic-privacy-and-compliance`**:
   - Cumplimiento de la **Ley 1581 de 2012** (Habeas Data) y **Ley 1090 de 2006** (Código Deontológico del Psicólogo).
   - Arquitectura de **Retención Cero**: la web no almacena datos de casos, expedientes ni personas en bases de datos intermedias, eliminando riesgos de hackeo, filtración o demandas por vulneración de reserva legal.
   - Prohibición estricta de promesas de resultados judiciales y de testimonios de víctimas.
2. **`web-security-hardening`**:
   - Cabeceras de seguridad (`Content-Security-Policy`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Content-Type-Options: nosniff`).
   - Sanitización rigurosa de parámetros para evitar inyecciones en `wa.me` y `mailto:`.
   - Protección contra Clickjacking y fugas de contexto.
3. **`accessibility-compliance-audit`**:
   - Conformidad estricta con **WCAG 2.1 Nivel AA** (y criterios AAA de contraste).
   - Cumplimiento de la Ley 1618 de 2013 y Resolución 1519 de 2020 de MinTIC en Colombia para accesibilidad web.
   - Soporte total para lectores de pantalla, foco visual interactivo y respeto a `prefers-reduced-motion`.
4. **`web-architecture-scalability`**:
   - Rendimiento estático con carga menor a 1 segundo en redes 4G móviles.
   - Cero dependencias de ejecución, cero costos mensuales de servidor o base de datos.

---

## 3. Instrucciones Paso a Paso para el Despliegue (Costo Cero)

### Opción A: Despliegue en GitHub Pages (Recomendado)

1. **Crear repositorio en GitHub:**
   - Inicie sesión en [github.com](https://github.com) y cree un repositorio nuevo (por ejemplo: `web-psicologia-forense`).
   - Selecciónelo como público.
2. **Subir los archivos:**
   - Suba la totalidad de los archivos de la raíz del proyecto (`index.html`, `privacidad.html`, `robots.txt`, `sitemap.xml`, carpetas `css/`, `js/`, `img/`, `.agents/`).
3. **Activar GitHub Pages:**
   - En el repositorio, vaya a **Settings** > **Pages**.
   - En "Build and deployment", seleccione **Deploy from a branch**.
   - Rama: `main`, Carpeta: `/ (root)`.
   - Guarde los cambios. En 1-2 minutos el sitio estará publicado en `https://<tu-usuario>.github.io/<nombre-repo>/`.
4. **Verificar HTTPS:**
   - Asegúrese de que la casilla "Enforce HTTPS" esté activada en la misma sección de configuración.

### Opción B: Despliegue en Cloudflare Pages

1. Conecte su cuenta de Cloudflare con el repositorio de GitHub.
2. Cree un proyecto de Pages seleccionando el repositorio.
3. En la configuración de compilación, deje el comando vacío (Build command: ninguno; Output directory: `/`).
4. El despliegue se realiza automáticamente en una URL global con HTTPS y CDN de alta velocidad.

---

## 4. Registro en Google Search Console y Sitemap

1. Ingrese a [Google Search Console](https://search.google.com/search-console).
2. Agregue la propiedad utilizando la URL pública del sitio (ejemplo: `https://silvanamedinaforense.github.io/`).
3. Verifique la propiedad mediante el método de etiqueta HTML en el `<head>` o subiendo el archivo de verificación a la raíz.
4. En el menú lateral, diríjase a **Sitemaps** y envíe la ruta: `sitemap.xml`.

---

## 5. Configuración de Analítica Ética (GoatCounter - Plan Gratuito)

Para medir el éxito del sitio (clics en WhatsApp y correo) sin vulnerar la privacidad ni usar cookies invasivas:

1. Regístrese gratuitamente en [goatcounter.com](https://www.goatcounter.com) y cree un subdominio (ejemplo: `silvanaforense.goatcounter.com`).
2. En `index.html` y `privacidad.html`, agregue la siguiente etiqueta antes del cierre de `</body>`:
   ```html
   <script data-goatcounter="https://silvanaforense.goatcounter.com/count"
           async src="//gc.zgo.at/count.js"></script>
   ```
3. El archivo `js/main.js` ya incluye la función `trackCustomEvent()` para registrar automáticamente los eventos:
   - `click-whatsapp-form`
   - `click-email-form`
   - `click-whatsapp-direct`
   - `click-email-direct`

---

## 6. Estructura de Archivos del Proyecto

```
/
├── .agents/
│   └── skills/
│       ├── forensic-privacy-and-compliance/
│       │   └── SKILL.md
│       ├── web-security-hardening/
│       │   └── SKILL.md
│       ├── accessibility-compliance-audit/
│       │   └── SKILL.md
│       └── web-architecture-scalability/
│           └── SKILL.md
├── index.html
├── privacidad.html
├── robots.txt
├── sitemap.xml
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── img/
│   ├── favicon.svg
│   ├── og-image.svg
│   └── og-image.jpg
├── CONTEXT.md
└── README.md
```
