// -------------------------------------------------------------
// Theme Toggle (Dark / Light Mode)
// -------------------------------------------------------------
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check stored preference or default to dark
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.remove('dark-theme');
  body.classList.add('light-theme');
} else {
  body.classList.add('dark-theme');
  body.classList.remove('light-theme');
}

themeToggleBtn.addEventListener('click', () => {
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  }
});

// -------------------------------------------------------------
// Mobile Hamburger Menu
// -------------------------------------------------------------
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('open');
});

// Close mobile menu when a navigation link is clicked
document.querySelectorAll('.nav-link, .nav-btn-resume').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('open');
  });
});

// -------------------------------------------------------------
// Navbar Scroll Shadow
// -------------------------------------------------------------
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.25)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});
