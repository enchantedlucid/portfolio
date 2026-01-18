// Fade animation on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

// Observe all sections and cards
document.querySelectorAll('section, .fade-in, .link-card, .logbook-week, .overview-card, .gallery-item, .responsibility-card').forEach(el => {
  el.classList.add('fade');
  observer.observe(el);
});

// IMAGE LIGHTBOX
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImage');
const closeBtn = document.getElementById('closeLightbox');

// Add clickable functionality to all images with class 'clickable'
document.querySelectorAll('img.clickable').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || 'Enlarged image';
  });
});

// Close lightbox
closeBtn.onclick = () => {
  lightbox.style.display = 'none';
};

// Close lightbox when clicking outside image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.style.display === 'flex') {
    lightbox.style.display = 'none';
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Add active state to navigation links based on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  const scrollPosition = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Logbook week expand/collapse functionality
const weekHeaders = document.querySelectorAll('.logbook-week h3');
weekHeaders.forEach(header => {
  header.style.cursor = 'pointer';
  header.addEventListener('click', () => {
    const weekDetails = header.nextElementSibling;
    const weekEvidence = weekDetails.nextElementSibling;
    
    if (weekDetails.style.display === 'none') {
      weekDetails.style.display = 'grid';
      if (weekEvidence) weekEvidence.style.display = 'block';
    } else {
      weekDetails.style.display = 'none';
      if (weekEvidence) weekEvidence.style.display = 'none';
    }
  });
});

// Initialize with all weeks expanded
document.querySelectorAll('.week-details').forEach(details => {
  details.style.display = 'grid';
});