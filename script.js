window.onload = function () {
  const container = document.getElementById("floating-container");
  const mainMessage = document.getElementById("start-btn"); // Cambiado a ID
  const musica = document.getElementById("musica-fondo");
  const finalNote = document.getElementById("final-note");

  let interactionStarted = false;
  let generatorInterval;

  // ... (Tus listas de imágenes y frases se quedan igual) ...
  const images = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg",
    "foto5.jpg",
    "foto6.jpeg",
    "foto7.jpeg",
  ];
  const phrases = [
    "Eres mi paz",
    "Te amo mucho",
    "Futura esposa",
    "Quiero una vida contigo",
    "❤️",
    "🐰",
  ];
  const colors = ["#ff00ff", "#00d4ff", "#ff007f", "#00ffcc", "#ffffff"];

  function createFloatingElement() {
    if (finalNote && !finalNote.classList.contains("hidden")) return;
    const isImage = Math.random() > 0.7 && images.length > 0;
    const element = document.createElement(isImage ? "img" : "div");
    const randomLeft = Math.random() * 80;
    const randomDuration = Math.random() * 7 + 6;

    if (isImage) {
      element.src = images[Math.floor(Math.random() * images.length)];
      element.className = "floating-img";
    } else {
      const content = phrases[Math.floor(Math.random() * phrases.length)];
      element.className = "floating-item";
      element.innerText = content;
      element.style.color = colors[Math.floor(Math.random() * colors.length)];
      element.style.fontSize = content.length > 10 ? "2rem" : "1.5rem";
    }

    element.style.left = `${randomLeft}%`;
    element.style.bottom = "-150px";
    element.style.animation = `moveUp ${randomDuration}s linear forwards`;
    container.appendChild(element);
    setTimeout(() => element.remove(), randomDuration * 1000);
  }

  // ESTA ES LA FUNCIÓN QUE "ROMPE" EL BLOQUEO
  const startEverything = (e) => {
    if (interactionStarted) return;

    // 1. Intentar reproducir el audio inmediatamente
    if (musica) {
      musica
        .play()
        .then(() => {
          console.log("¡Audio desbloqueado!");
          interactionStarted = true;
          iniciarEfectos();
        })
        .catch((err) => {
          console.log(
            "El navegador aún bloquea el audio. Reintenta con un toque claro.",
          );
        });
    }
  };

  function iniciarEfectos() {
    if (mainMessage) mainMessage.classList.add("fade-out");
    generatorInterval = setInterval(createFloatingElement, 600);
    setTimeout(showFinalNote, 60000);
  }

  function showFinalNote() {
    clearInterval(generatorInterval);
    container.style.display = "none";
    finalNote.classList.remove("hidden");
    setTimeout(() => finalNote.classList.add("show"), 100);
  }

  // ESCUCHADORES DE EVENTOS CLAVE
  // Usamos 'pointerdown' que funciona en PC y Móvil de forma más agresiva
  document.addEventListener("pointerdown", startEverything);
};
