window.onload = function () {
  // 1. Definición de elementos y variables globales
  const container = document.getElementById("floating-container");
  const mainMessage = document.querySelector(".main-content");
  const musica = document.getElementById("musica-fondo");
  const finalNote = document.getElementById("final-note");

  let lastX = 0;
  let interactionStarted = false;

  // 2. Configuración de contenido (Imágenes y Frases)
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
    "Increíble contigo",
    "Amo tu sonrisa",
    "Mi mundo entero",
    "Eres mi hogar",
    "Love you",
    "Para siempre",
    "Mi paz en el caos",
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
  ];

  const colors = ["#ff00ff", "#00d4ff", "#ff007f", "#00ffcc", "#ffffff"];

  // 3. Función para crear elementos que flotan (Fotos y Textos)
  function createFloatingElement() {
    // Si ya apareció la nota final, dejamos de crear elementos
    if (finalNote && !finalNote.classList.contains("hidden")) return;

    const isImage = Math.random() > 0.7 && images.length > 0;
    const element = document.createElement(isImage ? "img" : "div");

    const randomLeft = Math.random() * 80;
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
      element.style.fontSize = `${Math.random() * 0.5 + 1}rem`;
    }

    element.style.left = `${randomLeft}%`;
    element.style.position = "absolute";
    element.style.animation = `moveUp ${randomDuration}s linear forwards`;

    container.appendChild(element);
    setTimeout(() => {
      element.remove();
    }, randomDuration * 1000);
  }

  // 4. Lógica de la Nota Final
  function showFinalNote() {
    // Ocultar todo lo demás
    container.style.display = "none";
    if (mainMessage) mainMessage.style.display = "none";

    // Mostrar la nota con su animación de CSS
    finalNote.classList.remove("hidden");
    setTimeout(() => {
      finalNote.classList.add("show");
    }, 100);
  }

  // 5. Lógica de movimiento e interacción inicial
  const startEverything = () => {
    if (!interactionStarted) {
      if (mainMessage) mainMessage.classList.add("fade-out");
      if (musica) {
        musica
          .play()
          .catch((error) => console.log("Esperando clic para audio..."));
      }
      interactionStarted = true;

      // Programar la nota final: 25000ms = 25 segundos después del primer toque
      setTimeout(showFinalNote, 25000);
    }
  };

  const handleMove = (e) => {
    startEverything();
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

  // 6. Inicialización de eventos
  setInterval(createFloatingElement, 600);

  document.addEventListener("mousemove", handleMove);
  document.addEventListener("touchmove", handleMove);
  document.addEventListener("touchend", resetMove);
  document.addEventListener("mouseleave", resetMove);
  document.addEventListener("click", startEverything);
};

