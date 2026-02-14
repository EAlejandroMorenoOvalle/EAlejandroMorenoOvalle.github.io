window.onload = function () {
  const container = document.getElementById("floating-container");
  const mainMessage = document.querySelector(".main-content");
  const musica = document.getElementById("musica-fondo");
  const finalNote = document.getElementById("final-note");

  let lastX = 0;
  let interactionStarted = false;
  let generatorInterval;

  const images = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg",
    "foto5.jpg",
  ];
  const phrases = [
    "Quiero una vida contigo",
    "¡Me encantas!",
    "Aunque te caiga mal...",
    "Futura Esposa",
    "Eres mi paz",
    "Mi sol cada día",
    "Te amo mucho",
    "❤️",
    "✨",
    "💖",
  ];

  const colors = ["#ff00ff", "#00d4ff", "#ff007f", "#00ffcc", "#ffffff"];

  function createFloatingElement() {
    if (!finalNote.classList.contains("hidden")) return;

    const isImage = Math.random() > 0.6 && images.length > 0;
    const element = document.createElement(isImage ? "img" : "div");
    const randomLeft = Math.random() * 80;
    const duration = Math.random() * 7 + 6;

    if (isImage) {
      element.src = images[Math.floor(Math.random() * images.length)];
      element.className = "floating-img";
    } else {
      const content = phrases[Math.floor(Math.random() * phrases.length)];
      element.className = "floating-item";
      element.innerText = content;
      element.style.color = colors[Math.floor(Math.random() * colors.length)];

      // --- FRASES GRANDES ---
      if (
        content === "Futura Esposa" ||
        content === "Quiero una vida contigo"
      ) {
        element.style.fontSize = "2.8rem";
        element.style.fontWeight = "bold";
        element.style.zIndex = "100";
      } else {
        element.style.fontSize = `${Math.random() * 1 + 1.2}rem`;
      }
    }

    element.style.left = `${randomLeft}%`;
    element.style.animation = `moveUp ${duration}s linear forwards`;
    container.appendChild(element);
    setTimeout(() => element.remove(), duration * 1000);
  }

  function showFinalNote() {
    container.style.display = "none";
    if (mainMessage) mainMessage.style.display = "none";
    finalNote.classList.remove("hidden");
    setTimeout(() => finalNote.classList.add("show"), 100);
  }

  const startEverything = () => {
    if (!interactionStarted) {
      interactionStarted = true;
      if (mainMessage) mainMessage.classList.add("fade-out");
      if (musica) musica.play().catch((e) => console.log("Clic requerido"));

      // Inicia la lluvia y el cronómetro de 60 segundos
      generatorInterval = setInterval(createFloatingElement, 700);
      setTimeout(showFinalNote, 60000);
    }
  };

  document.addEventListener("mousedown", startEverything);
  document.addEventListener("touchstart", startEverything);
  document.addEventListener("mousemove", (e) => {
    if (!interactionStarted) return;
    const x = e.clientX || e.touches[0].clientX;
    const moveX = (x - window.innerWidth / 2) / 15;
    container.style.transform = `translateX(${moveX}px)`;
  });
};
