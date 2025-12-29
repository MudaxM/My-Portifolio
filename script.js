const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});



// Animate skill bars when About section is in view
const skillsSection = document.querySelector('#about');
const skillFills = document.querySelectorAll('.skill-fill');

window.addEventListener('scroll', () => {
  const sectionTop = skillsSection.offsetTop;
  const sectionHeight = skillsSection.offsetHeight;
  const scrollPos = window.scrollY + window.innerHeight;

  if (scrollPos > sectionTop + 100) {
    skillFills.forEach(fill => {
      fill.style.width = fill.style.width; // trigger transition
    });
  }
});


// Simple contact form submission alert
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  contactForm.reset();
}); 