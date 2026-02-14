window.onload = function () {
  const container = document.getElementById("floating-container");
  const mainMessage = document.querySelector(".main-content");
  const musica = document.getElementById("musica-fondo");
  const finalNote = document.getElementById("final-note");

  let lastX = 0;
  let interactionStarted = false;
  let generatorInterval; // Variable para controlar el inicio del flujo

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
    "Mi sol cada día",
    "Estás en mi mente",
    "Contigo siempre",
    "Mi lugar favorito",
    "Eres magia",
    "Mi persona favorita",
    "Todo es mejor contigo",
    "Te elijo siempre",
    "Me haces feliz",
    "Eres mi sueño",
    "Gracias por existir",
    "Mi corazón es tuyo",
    "Juntos por siempre",
    "Eres luz",
    "Amo tu sonrisa",
    "Mi mundo entero",
    "Eres mi hogar",
    "Love you",
    "Para siempre",
    "Futura esposa",
    "Quiero una vida contigo",
    "¡Me encantas!",
    "Aunque te caiga mal... 😏",
    "❤️",
    "💖",
    "✨",
    "💙",
    "💍",
    "🌸",
    "⭐",
    "🐇",
    "🐰",
    "🐾",
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
      element.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
    } else {
      const content = phrases[Math.floor(Math.random() * phrases.length)];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      element.className = "floating-item";
      element.innerText = content;
      element.style.color = randomColor;
      element.style.textShadow = `0 0 10px ${randomColor}, 0 0 20px ${randomColor}`;

      if (
        content === "Futura esposa" ||
        content === "Quiero una vida contigo"
      ) {
        element.style.fontSize = "2.5rem";
        element.style.fontWeight = "bold";
        element.style.zIndex = "100";
      } else {
        const fontSize = Math.random() * 0.5 + 1;
        element.style.fontSize = `${fontSize}rem`;
      }
    }

    element.style.left = `${randomLeft}%`;
    element.style.position = "absolute";
    element.style.bottom = "-150px"; // Aseguramos que nazcan abajo
    element.style.animation = `moveUp ${randomDuration}s linear forwards`;

    container.appendChild(element);
    setTimeout(() => element.remove(), randomDuration * 1000);
  }

  function showFinalNote() {
    clearInterval(generatorInterval); // Detenemos la lluvia
    container.style.display = "none";
    if (mainMessage) mainMessage.style.display = "none";
    const stars = document.getElementById("stars");
    if (stars) stars.style.display = "none";

    finalNote.classList.remove("hidden");
    setTimeout(() => finalNote.classList.add("show"), 100);
  }

  // ESTA ES LA FUNCIÓN CLAVE PARA EL AUDIO "AUTOMÁTICO"
  const startEverything = () => {
    if (!interactionStarted) {
      interactionStarted = true;

      if (mainMessage) mainMessage.classList.add("fade-out");

      // Intentar tocar la música de inmediato al primer contacto
      if (musica) {
        musica
          .play()
          .catch((error) => console.log("Audio esperando interacción real"));
      }

      // Iniciar la lluvia de fotos y frases SOLO cuando ella toque/mueva
      generatorInterval = setInterval(createFloatingElement, 600);

      // Programar la nota final
      setTimeout(showFinalNote, 60000);
    }
  };

  const handleMove = (e) => {
    // Si no ha empezado, el movimiento del mouse/dedo lo activa
    if (!interactionStarted) startEverything();

    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;

    const moveX = (x - window.innerWidth / 2) / 12;
    const moveY = (y - window.innerHeight / 2) / 12;

    const tilt = (x - lastX) * 2.5;
    const limitedTilt = Math.max(Math.min(tilt, 15), -15);

    container.style.transition = "transform 0.1s ease-out";
    container.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${limitedTilt}deg)`;
    lastX = x;
  };

  const resetMove = () => {
    container.style.transition = "transform 0.8s ease-out";
    container.style.transform = "translate(0, 0) rotate(0deg)";
  };

  // --- EVENTOS ---
  // Quitamos el setInterval de aquí para que no floten antes de la música
  document.addEventListener("mousemove", handleMove);
  document.addEventListener("touchmove", handleMove);
  document.addEventListener("touchstart", startEverything); // Para móviles
  document.addEventListener("click", startEverything); // Para PC
  document.addEventListener("touchend", resetMove);
  document.addEventListener("mouseleave", resetMove);
};
