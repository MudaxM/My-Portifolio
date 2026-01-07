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

// Initialize EmailJS
(function () {
  emailjs.init("YOUR_PUBLIC_KEY"); // User ID
})();

// Form submit
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
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
 