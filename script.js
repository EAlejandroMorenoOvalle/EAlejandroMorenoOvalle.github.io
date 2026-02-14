window.onload = function () {
  const container = document.getElementById("floating-container");
  const mainMessage = document.getElementById("start-btn");
  const musica = document.getElementById("musica-fondo");
  const finalNote = document.getElementById("final-note");

  let interactionStarted = false;
  let generatorInterval;

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
    const isImage = Math.random() > 0.7 && images.length > 0;
    const element = document.createElement(isImage ? "img" : "div");

    const randomLeft = Math.random() * 85;
    const randomDuration = Math.random() * 7 + 6;

    if (isImage) {
      const randomImg = images[Math.floor(Math.random() * images.length)];
      element.src = randomImg;
      element.className = "floating-img";
      const rotation = Math.random() * 30 - 15;
      element.style.transform = `rotate(${rotation}deg)`;
    } else {
      const content = phrases[Math.floor(Math.random() * phrases.length)];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      element.className = "floating-item";
      element.innerText = content;
      element.style.color = randomColor;
      element.style.textShadow = `0 0 10px ${randomColor}, 0 0 20px ${randomColor}`;

      const fontSize = Math.random() * 1 + 0.8;
      element.style.fontSize = `${fontSize}rem`;
    }

    element.style.left = `${randomLeft}%`;
    element.style.position = "absolute";
    element.style.animation = `moveUp ${randomDuration}s linear forwards`;

    container.appendChild(element);
    setTimeout(() => {
      element.remove();
    }, randomDuration * 1000);
  }

  const startEverything = () => {
    if (interactionStarted) return;
    interactionStarted = true;

    // 1. Iniciar Música
    if (musica) {
      musica.play().catch((err) => console.log("Error al reproducir:", err));
    }

    // 2. Ocultar mensaje y empezar lluvia de elementos
    if (mainMessage) mainMessage.classList.add("fade-out");

    // Iniciamos la generación aquí para que no salgan antes del audio
    generatorInterval = setInterval(createFloatingElement, 600);

    // 3. Cronómetro para la nota final
    setTimeout(showFinalNote, 60000);
  };

  function showFinalNote() {
    clearInterval(generatorInterval);
    container.style.display = "none";
    finalNote.classList.remove("hidden");
    setTimeout(() => finalNote.classList.add("show"), 100);
  }

  // Escuchador de interacción (Clic o Toque)
  document.addEventListener("pointerdown", startEverything);
};
