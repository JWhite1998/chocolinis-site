// ── Scroll-triggered nav ──
const nav = document.getElementById('nav');
if (nav && !nav.classList.contains('nav-solid')) {
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 60);
    });
}

// ── Mobile menu ──
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.add('open');
        if (!navLinks.querySelector('.close-menu')) {
            const closeBtn = document.createElement('button');
            closeBtn.className = 'close-menu';
            closeBtn.innerHTML = '×';
            closeBtn.addEventListener('click', () => navLinks.classList.remove('open'));
            navLinks.prepend(closeBtn);
        }
    });
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
}

// ── Scroll reveal ──
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Smooth scroll ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// ── Contact form handler ──
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        this.style.display = 'none';
        document.getElementById('formSuccess').style.display = 'block';
    });
}
