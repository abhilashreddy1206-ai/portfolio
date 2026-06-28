// Initialization
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Typing Animation
    const typed = new Typed('.typing', {
        strings: ['B.Tech CSBS Student', 'Full Stack Developer', 'Software Engineer Aspiring', 'Tech Enthusiast'],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    });

    // 2. Dark/Light Mode Toggle
    const themeToggle = document.querySelector('#theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Load saved theme
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        body.classList.remove('dark-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        let theme = 'dark';
        
        if (body.classList.contains('dark-mode')) {
            icon.classList.replace('fa-sun', 'fa-moon');
        } else {
            icon.classList.replace('fa-moon', 'fa-sun');
            theme = 'light';
        }
        localStorage.setItem('theme', theme);
    });

    // 3. AOS Animation Library
    AOS.init({
        duration: 1000,
        offset: 120,
        once: true
    });

    // 4. Smooth Scrolling for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 5. Back to Top Button
    const scrollTopBtn = document.querySelector('#scroll-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 6. Contact Form Alert
    const contactForm = document.querySelector('#contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message Sent Successfully! Abhilash will contact you soon.');
        contactForm.reset();
    });
});