// 1. Definición de elementos y variables globales
const container = document.getElementById("floating-container");
const mainMessage = document.querySelector(".main-content");
const musica = document.getElementById("musica-fondo");
musica.volume = 0.5; // Ajusta el volumen al 50% para probar
let lastX = 0;
let interactionStarted = false;

// 2. Configuración de contenido
const images = [
  "foto1.jpg",
  "foto2.jpg",
  "foto3.jpg",
  "foto4.jpg",
  "foto5.jpg",
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
  "Tan tú, tan yo",
  "Love you",
  "Para siempre",
  "Mi paz en el caos",
  "❤️",
  "💖",
  "✨",
  "💙",
  "💍",
  "🌸",
  "⭐",
];

const colors = ["#ff00ff", "#00d4ff", "#ff007f", "#00ffcc", "#ffffff"];

// 3. Función para crear elementos que flotan
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

// 4. Lógica de movimiento, música e inclinación
const handleMove = (e) => {
  // --- ACTIVAR MÚSICA Y QUITAR TEXTO ---
  if (!interactionStarted) {
    if (mainMessage) mainMessage.classList.add("fade-out");

    // Reproducir música (funciona al primer movimiento/toque)
    if (musica) {
      musica.play().catch((error) => {
        console.log("Esperando interacción para audio...");
      });
    }
    interactionStarted = true;
  }

  // Obtener coordenadas
  const x = e.touches ? e.touches[0].clientX : e.clientX;
  const y = e.touches ? e.touches[0].clientY : e.clientY;

  // Efecto Parallax (seguimiento suave)
  const moveX = (x - window.innerWidth / 2) / 12;
  const moveY = (y - window.innerHeight / 2) / 12;

  // Efecto Tilt (inclinación lateral)
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

// 5. Inicialización de eventos
setInterval(createFloatingElement, 600);

document.addEventListener("mousemove", handleMove);
document.addEventListener("touchmove", handleMove);
document.addEventListener("touchend", resetMove);
document.addEventListener("mouseleave", resetMove);

// Quitar mensaje automáticamente si no hay interacción
setTimeout(() => {
  if (!interactionStarted && mainMessage) {
    mainMessage.classList.add("fade-out");
    interactionStarted = true;
  }
}, 5000);

// Agrega esto al final de tu script.js junto a los otros eventListeners
document.addEventListener(
  "click",
  () => {
    if (!interactionStarted) {
      if (mainMessage) mainMessage.classList.add("fade-out");
      musica.play();
      interactionStarted = true;
    }
  },
  { once: true },
); // El { once: true } hace que solo se ejecute la primera vez que toques
