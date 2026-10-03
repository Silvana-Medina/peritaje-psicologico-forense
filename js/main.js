// ==========================================================================
// Logica de interaccion, accesibilidad y contacto seguro
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  initContactForm();
  initAnalyticsTracking();
});

// Inicializa la validacion y despacho del formulario de solicitud
function initContactForm() {
  const form = document.getElementById("forensic-request-form");
  if (!form) return;

  const nameInput = document.getElementById("requester-name");
  const requesterTypeSelect = document.getElementById("requester-type");
  const serviceSelect = document.getElementById("service-requested");
  const caseDescriptionInput = document.getElementById("case-description");
  const privacyCheckbox = document.getElementById("privacy-consent");
  const whatsappButton = document.getElementById("btn-send-whatsapp");
  const emailButton = document.getElementById("btn-send-email");

  const phoneInternational = "573163827174";
  const professionalEmail = "silvanaanacona22@gmail.com";

  // Actualiza el estado de habilitacion de los botones de envio
  function updateButtonsState() {
    const isConsentGiven = privacyCheckbox.checked;
    whatsappButton.disabled = !isConsentGiven;
    emailButton.disabled = !isConsentGiven;
    whatsappButton.setAttribute("aria-disabled", String(!isConsentGiven));
    emailButton.setAttribute("aria-disabled", String(!isConsentGiven));
  }

  // Escucha cambios en la casilla de verificacion de privacidad
  privacyCheckbox.addEventListener("change", updateButtonsState);
  updateButtonsState();

  // Valida los campos basicos antes de generar el enlace
  function validateFields() {
    const name = nameInput.value.trim();
    const caseDesc = caseDescriptionInput.value.trim();

    if (!name) {
      nameInput.focus();
      return false;
    }

    if (!caseDesc) {
      caseDescriptionInput.focus();
      return false;
    }

    return true;
  }

  // Genera el texto estructurado a partir de los datos ingresados
  function buildMessageContent() {
    const name = nameInput.value.trim();
    const requesterType = requesterTypeSelect.value;
    const service = serviceSelect.value;
    const caseDesc = caseDescriptionInput.value.trim();

    return {
      name,
      requesterType,
      service,
      caseDesc,
      plainText: `Hola, Silvana Medina. Mi nombre es ${name} (${requesterType}). Deseo solicitar una valoracion pericial sobre: ${service}. Descripcion preliminar del caso: ${caseDesc}\n\n(Declaro que he leido y acepto la politica de tratamiento de datos personales segun la Ley 1581 de 2012 y que esta comunicacion no constituye relacion pericial vinculante).`
    };
  }

  // Despacha la solicitud hacia la API de WhatsApp
  function dispatchWhatsApp() {
    if (!privacyCheckbox.checked) {
      privacyCheckbox.focus();
      return;
    }

    if (!validateFields()) {
      return;
    }

    const { plainText } = buildMessageContent();
    const encodedText = encodeURIComponent(plainText);
    const whatsappUrl = `https://wa.me/${phoneInternational}?text=${encodedText}`;

    trackCustomEvent("click-whatsapp-form", "Solicitud WhatsApp Formulario");
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  // Intercepta el envio del formulario
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    dispatchWhatsApp();
  });

  // Despacha la solicitud hacia el cliente de correo predeterminado
  emailButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (!privacyCheckbox.checked) {
      privacyCheckbox.focus();
      return;
    }

    if (!validateFields()) {
      return;
    }

    const { name, requesterType, service, caseDesc } = buildMessageContent();
    const subject = `Solicitud de valoracion pericial psicologica - ${name}`;
    const body = `Nombre del solicitante: ${name}
Calidad / Tipo de solicitante: ${requesterType}
Servicio requerido: ${service}

Sintesis del caso:
${caseDesc}

(He leido y aceptado el aviso de privacidad y tratamiento de datos personales)`;

    const mailtoUrl = `mailto:${professionalEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    trackCustomEvent("click-email-form", "Solicitud Correo Formulario");
    window.location.href = mailtoUrl;
  });
}

// Registra eventos en herramientas de analitica respetuosas de la privacidad
function initAnalyticsTracking() {
  const directWhatsAppLinks = document.querySelectorAll('a[href*="wa.me"]');
  directWhatsAppLinks.forEach((link) => {
    link.addEventListener("click", () => {
      trackCustomEvent("click-whatsapp-direct", "Enlace directo WhatsApp");
    });
  });

  const directEmailLinks = document.querySelectorAll('a[href^="mailto:"]');
  directEmailLinks.forEach((link) => {
    link.addEventListener("click", () => {
      trackCustomEvent("click-email-direct", "Enlace directo Correo");
    });
  });
}

// Envia el evento a GoatCounter si se encuentra cargado
function trackCustomEvent(eventName, eventTitle) {
  if (window.goatcounter && typeof window.goatcounter.count === "function") {
    window.goatcounter.count({
      path: eventName,
      title: eventTitle,
      event: true
    });
  }
}
