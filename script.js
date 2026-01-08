
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



emailjs.init("wudtVIuPZJcqQSQgy");

document.getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // 🔴 stops auto refresh & auto send

    const params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    emailjs.send("service_rmhba5f", "ID:template_ilrl0c8", params)
      .then(() => {
        alert("Message sent successfully!");
        this.reset();
      })
      .catch(() => {
        alert("Failed to send message");
      });
  });