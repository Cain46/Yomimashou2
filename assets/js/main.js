// YOMIMASHOU! — main.js
// Fase 1: scripts base

document.addEventListener('DOMContentLoaded', () => {

  // ─── Header scroll effect ───────────────────────────
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    });
  }

  // ─── Placeholder: botones sin funcionalidad real ────
  // En Fase 2 estos se reemplazarán por modales de registro/login
  const btnRegistro = document.querySelectorAll('[data-action="registro"]');
  const btnLogin = document.querySelectorAll('[data-action="login"]');

  btnRegistro.forEach(btn => {
    btn.addEventListener('click', () => {
      console.log('📌 Registro — pendiente Fase 2');
    });
  });

  btnLogin.forEach(btn => {
    btn.addEventListener('click', () => {
      console.log('📌 Login — pendiente Fase 2');
    });
  });

});
