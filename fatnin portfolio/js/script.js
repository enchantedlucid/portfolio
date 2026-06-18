// ── ACTIVE NAV LINK ──
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .exp-card, .skill-block').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ── GALLERY LIGHTBOX ──
document.querySelectorAll('.gallery-img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:999;display:flex;align-items:center;justify-content:center;cursor:pointer;backdrop-filter:blur(8px)';
    const bigImg = document.createElement('img');
    bigImg.src = img.src;
    bigImg.style.cssText = 'max-width:90vw;max-height:88vh;border-radius:10px;box-shadow:0 0 60px rgba(200,96,26,0.3)';
    overlay.appendChild(bigImg);
    overlay.addEventListener('click', () => overlay.remove());
    document.body.appendChild(overlay);
  });
});

// ── NAV SCROLL EFFECT ──
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 40) {
    nav.style.borderBottomColor = 'rgba(200,96,26,0.3)';
    nav.style.background = 'rgba(20,42,28,0.97)';
  } else {
    nav.style.borderBottomColor = 'rgba(200,96,26,0.15)';
    nav.style.background = 'var(--green-dark)';
  }
});
