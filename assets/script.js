/* ===========================
   ONFIRE 2.0 - SCRIPT.JS
   Gestione interattività e animazioni
   =========================== */

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelector(".nav-links");
  const menuToggle = document.createElement("div");
  menuToggle.classList.add("menu-toggle");
  menuToggle.innerHTML = "☰";
  navbar.querySelector(".nav-container").appendChild(menuToggle);

  // --- Navbar Scroll Effect ---
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // --- Mobile Menu Toggle ---
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.innerHTML = navLinks.classList.contains("active") ? "✕" : "☰";
  });

  // --- Fade-in Animations ---
  const revealElements = document.querySelectorAll(".feature, .event-card, .staff-card");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    revealElements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add("show");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // --- Attiva Particelle Fuoco ---
  if (document.getElementById("particles-canvas")) {
    initFireParticles();
  }
});
