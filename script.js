// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-switcher');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme or system preference
const currentTheme = localStorage.getItem('theme') || 
                     (prefersDarkScheme.matches ? 'dark' : 'light');

// Apply the theme
document.documentElement.setAttribute('data-theme', currentTheme);

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggle.textContent = '☰';
  });
});

// Animate skill bars when About section is in view
const aboutSection = document.querySelector('#about');
const skillFills = document.querySelectorAll('.skill-fill');

function animateSkillBars() {
    skillFills.forEach(fill => {
        const level = fill.getAttribute('data-level');
        fill.style.width = level + '%';
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            observer.unobserve(entry.target); // Stop observing after animation
        }
    });
}, { threshold: 0.5 });

// Observe the about section
if (aboutSection) {
    observer.observe(aboutSection);
}

// EmailJS Integration
emailjs.init("wudtVIuPZJcqQSQgy");

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent auto refresh & auto send

    const params = {
        name: this.querySelector('input[name="name"]').value,
        email: this.querySelector('input[name="email"]').value,
        message: this.querySelector('textarea[name="message"]').value
    };

    emailjs.send("service_rmhba5f", "template_ilrl0c8", params)
        .then(() => {
            alert("Message sent successfully!");
            this.reset();
        })
        .catch(() => {
            alert("Failed to send message");
        });
});

// Smooth scrolling for navigation links
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
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.textContent = '☰';
            }
        }
    });
});