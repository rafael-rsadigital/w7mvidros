/**
 * W7M Vidros — Main.js
 * Script centralizado para funcionalidades multi-página
 */

// 1. Controle do Menu Mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// 2. Efeito de Navbar fixa no Scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// 3. Animações Simples ao Scroll (Reveal)
const revealOnScroll = () => {
  const elements = document.querySelectorAll('.service-card, .stat-card, .testimonial-card');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
};

// Configuração inicial das animações
document.addEventListener('DOMContentLoaded', () => {
  const elementsToAnimate = document.querySelectorAll('.service-card, .stat-card, .testimonial-card');
  elementsToAnimate.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease-out';
  });
  
  revealOnScroll();
});

window.addEventListener('scroll', revealOnScroll);

// 4. Fechar menu mobile ao clicar fora
document.addEventListener('click', (e) => {
  if (navLinks && navLinks.classList.contains('open') && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove('open');
  }
});
