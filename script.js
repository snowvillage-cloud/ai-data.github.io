document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', links.classList.contains('open'));
  });

  // Close mobile nav on link click
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Scroll-based fade-in animation
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Add fade-in class to animatable elements
  const animateElements = document.querySelectorAll(
    '.about-content, .event-upcoming, .event-card, .link-card, .event-history-title'
  );
  animateElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // Navbar background on scroll
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(10, 22, 40, 0.95)';
    } else {
      nav.style.background = 'rgba(10, 22, 40, 0.85)';
    }
  });
});
