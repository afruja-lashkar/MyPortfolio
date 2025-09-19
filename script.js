// Smooth scroll effect for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Contact form (just demo)
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you for reaching out, Afruja! I'll get back to you soon.");
});
