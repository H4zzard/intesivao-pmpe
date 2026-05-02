/* =====================================================
   AULÃO PMPE 2026 — CPPEM Concursos
   main.js
   ===================================================== */

/* ---------- Countdown ---------- */
function initCountdown() {
  const target = new Date('2026-05-30T09:00:00');
  const ids = { dias: 'cd-dias', horas: 'cd-horas', min: 'cd-min', seg: 'cd-seg' };
  const fmt = n => String(n).padStart(2, '0');

  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) {
      Object.values(ids).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = '00';
      });
      return;
    }
    document.getElementById(ids.dias).textContent  = fmt(Math.floor(diff / 86400000));
    document.getElementById(ids.horas).textContent = fmt(Math.floor((diff % 86400000) / 3600000));
    document.getElementById(ids.min).textContent   = fmt(Math.floor((diff % 3600000) / 60000));
    document.getElementById(ids.seg).textContent   = fmt(Math.floor((diff % 60000) / 1000));
    setTimeout(tick, 1000);
  }
  tick();
}

/* ---------- Scroll progress bar ---------- */
function initProgressBar() {
  const bar = document.getElementById('progressBar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + '%';
  }, { passive: true });
}

/* ---------- Intersection Observer — .fade-up ---------- */
function initFadeUp() {
  const els = document.querySelectorAll('.fade-up');
  if (!els.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => obs.observe(el));
}

/* ---------- Sticky nav shadow ---------- */
function initStickyNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 40
      ? '0 2px 40px rgba(0,0,0,0.55)'
      : 'none';
  }, { passive: true });
}

/* ---------- FAQ accordion ---------- */
function toggleFaq(el) {
  const item = el.closest('.faq-item');
  const resp = item.querySelector('.faq-resposta');
  const icon = item.querySelector('.faq-icon');
  const isOpen = item.classList.contains('open');

  /* close all */
  document.querySelectorAll('.faq-item.open').forEach(open => {
    open.classList.remove('open');
    open.querySelector('.faq-resposta').style.maxHeight = null;
    open.querySelector('.faq-icon').textContent = '+';
  });

  if (!isOpen) {
    item.classList.add('open');
    resp.style.maxHeight = resp.scrollHeight + 'px';
    icon.textContent = '−';
  }
}
window.toggleFaq = toggleFaq; /* expose for inline onclick */

/* ---------- Smooth scroll ---------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ---------- CTA pulse — nudge after idle ---------- */
function initCtaPulse() {
  const btns = document.querySelectorAll('.btn-primary');
  if (!btns.length) return;

  let timer = setTimeout(() => btns.forEach(b => b.classList.add('pulse')), 9000);

  window.addEventListener('scroll', () => {
    clearTimeout(timer);
    btns.forEach(b => b.classList.remove('pulse'));
    timer = setTimeout(() => btns.forEach(b => b.classList.add('pulse')), 18000);
  }, { passive: true, once: true });
}

/* ---------- Hero fade-in on load ---------- */
function initHeroFade() {
  const hero = document.querySelector('.hero');
  if (hero) hero.classList.add('loaded');
}

/* ---------- Boot ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initProgressBar();
  initFadeUp();
  initStickyNav();
  initSmoothScroll();
  initCtaPulse();
  initHeroFade();
});
