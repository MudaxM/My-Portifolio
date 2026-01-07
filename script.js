
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Check for saved user preference
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
}

themeToggle.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');
  
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});

 document.querySelector('.menu-toggle');
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

// Initialize EmailJS
(function () {
  emailjs.init("wudtVIuPZJcqQSQgy"); // User ID
})();

// Form submit
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_rmhba5f",
      "ID:template_ilrl0c8",
      form
    ).then(
      function () {
        alert("Message sent successfully ✅");
        form.reset();
      },
      function (error) {
        alert("Failed to send message ❌");
        console.log("EmailJS error:", error);
      }
    );
  });
});
 