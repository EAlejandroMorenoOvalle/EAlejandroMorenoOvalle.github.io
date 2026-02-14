const container = document.getElementById("floating-container");
const mainMessage = document.querySelector(".main-content");
const musica = document.getElementById("musica-fondo");

musica.volume = 0.6;

let interactionStarted = false;

const phrases = [
  "Eres mi paz",
  "Te amo mucho",
  "Mi sol cada día",
  "Contigo siempre",
  "Mi lugar favorito",
  "Eres magia",
  "Te elijo siempre",
  "Mi corazón es tuyo",
  "❤️",
  "✨",
  "💖",
];

const colors = ["#ff00ff", "#00d4ff", "#ff007f", "#00ffcc", "#ffffff"];

function createFloatingElement() {
  const element = document.createElement("div");

  const content = phrases[Math.floor(Math.random() * phrases.length)];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  element.className = "floating-item";
  element.innerText = content;
  element.style.color = randomColor;
  element.style.left = Math.random() * 90 + "%";
  element.style.fontSize = Math.random() * 1 + 1 + "rem";
  element.style.animationDuration = Math.random() * 6 + 6 + "s";

  container.appendChild(element);

  setTimeout(() => {
    element.remove();
  }, 12000);
}

/* 🔥 ESTA ES LA PARTE IMPORTANTE PARA QUE FUNCIONE EN CELULAR */

document.addEventListener(
  "pointerdown",
  () => {
    if (!interactionStarted) {
      mainMessage.classList.add("fade-out");

      musica.currentTime = 0;

      musica
        .play()
        .then(() => {
          console.log("Audio iniciado correctamente");
        })
        .catch((err) => {
          console.log("Error al reproducir:", err);
        });

      interactionStarted = true;
    }
  },
  { once: true },
);

setInterval(createFloatingElement, 600);
