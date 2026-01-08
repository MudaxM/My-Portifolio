
const menuToggle = 
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
 