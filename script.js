// Smooth Scrolling Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Dynamic Navbar Accent Border on Scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.borderBottomColor = 'rgba(6, 182, 212, 0.4)';
  } else {
    navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
  }
});