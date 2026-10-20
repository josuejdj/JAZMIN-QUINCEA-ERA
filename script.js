/* =========================================================
   INVITACIÓN XV AÑOS - JAZMIN
   Interacciones, cuenta regresiva y confirmación
   ========================================================= */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initCountdown();
  initScrollAnimations();
  initMusicToggle();
  initWhatsAppConfirmation();
});

/** Oculta la pantalla de carga cuando el documento está listo. */
function initLoader() {
  const loader = document.getElementById("loader");
  if (!loader) return;

  window.addEventListener("load", () => {
    window.setTimeout(() => loader.classList.add("is-hidden"), 450);
  });
  // Fallback por si algún recurso externo tarda demasiado.
  window.setTimeout(() => loader.classList.add("is-hidden"), 2500);
}

/** Actualiza la cuenta regresiva hasta la fecha configurada en el HTML. */
function initCountdown() {
  const countdown = document.getElementById("countdown");
  if (!countdown) return;

  const eventDate = new Date(countdown.dataset.date).getTime();
  const fields = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds")
  };

  const update = () => {
    const distance = eventDate - Date.now();

    if (distance <= 0) {
      Object.values(fields).forEach(field => {
        if (field) field.textContent = "00";
      });
      const caption = document.querySelector(".countdown__caption");
      if (caption) caption.textContent = "¡Hoy es el gran día! Gracias por celebrar conmigo.";
      window.clearInterval(timer);
      return;
    }

    const values = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60)
    };

    Object.entries(values).forEach(([key, value]) => {
      if (fields[key]) fields[key].textContent = String(value).padStart(2, "0");
    });
  };

  update();
  const timer = window.setInterval(update, 1000);
}

/** Revela elementos suavemente al entrar en la pantalla. */
function initScrollAnimations() {
  const elements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    elements.forEach(element => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(element => observer.observe(element));
}

/** Controla la música. Los navegadores requieren una acción del usuario. */
function initMusicToggle() {
  const button = document.getElementById("musicToggle");
  const audio = document.getElementById("backgroundMusic");
  if (!button || !audio) return;

  button.addEventListener("click", async () => {
    if (audio.paused) {
      try {
        await audio.play();
        button.classList.add("is-playing");
        button.setAttribute("aria-pressed", "true");
        button.setAttribute("aria-label", "Pausar música");
        button.querySelector(".music-toggle__label").textContent = "Pausar";
      } catch (error) {
        button.querySelector(".music-toggle__label").textContent = "Añade música";
        console.warn("No se pudo reproducir el audio. Comprueba assets/music/musica.mp3", error);
      }
    } else {
      audio.pause();
      button.classList.remove("is-playing");
      button.setAttribute("aria-pressed", "false");
      button.setAttribute("aria-label", "Activar música");
      button.querySelector(".music-toggle__label").textContent = "Música";
    }
  });
}

/** Genera un enlace de WhatsApp con el mensaje de confirmación. */
function initWhatsAppConfirmation() {
  const link = document.getElementById("whatsappLink");
  if (!link) return;

  // IMPORTANTE: sustituye este número por el teléfono real, con código de país.
  // Perú: 51 + número, sin espacios ni el signo +.
  const whatsappNumber = "519XXXXXXXX";
  const message = "¡Hola! Confirmo mi asistencia a los quince años de Jazmin, el 15 de noviembre de 2026. ¡Muchas gracias por la invitación!";
  link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  link.addEventListener("click", event => {
    if (whatsappNumber.includes("X")) {
      event.preventDefault();
      alert("Para activar las confirmaciones, reemplaza el número de ejemplo en js/script.js por el número real de WhatsApp.");
    }
  });
}
