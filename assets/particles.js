/* ===========================
   ONFIRE 2.0 - PARTICLES.JS
   Effetto fuoco animato per la home
   =========================== */

function initFireParticles() {
  const canvas = document.getElementById("particles-canvas");
  const ctx = canvas.getContext("2d");

  // Dimensione canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  // Particelle fuoco
  const particles = [];
  const particleCount = 120;

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + Math.random() * 100;
      this.size = Math.random() * 3 + 1;
      this.speedY = Math.random() * -1.5 - 0.5;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.alpha = Math.random() * 0.5 + 0.3;
      this.color = `rgba(255, ${Math.floor(Math.random() * 180 + 75)}, 0, ${this.alpha})`;
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      this.alpha -= 0.003;
      if (this.y < -10 || this.alpha <= 0) {
        this.reset();
      }
    }

    draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Popola array particelle
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Animazione
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
}
