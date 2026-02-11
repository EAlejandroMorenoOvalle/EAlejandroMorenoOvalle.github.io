<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>💜 ¿Serás mi Valentín Púrpura? 💜</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand:wght@400;700&display=swap');

        body {
            font-family: 'Quicksand', sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #a745ff 0%, #7d1eff 100%); /* Degradado púrpura */
            color: white;
            text-align: center;
            overflow: hidden;
            position: relative;
        }

        .container {
            background-color: rgba(255, 255, 255, 0.95); /* Fondo casi blanco para contraste */
            border-radius: 35px;
            padding: 50px 70px;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
            position: relative;
            z-index: 10;
            animation: popIn 1s ease-out forwards;
            max-width: 90%;
        }

        h1 {
            font-family: 'Pacifico', cursive; /* Fuente más caligráfica */
            color: #7d1eff; /* Morado intenso */
            font-size: 3.5em;
            margin-bottom: 15px;
            text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.15);
        }

        .question {
            font-size: 2em;
            margin-bottom: 40px;
            color: #4a009e; /* Morado oscuro */
            font-weight: 700;
        }

        .buttons {
            display: flex;
            gap: 25px;
            justify-content: center;
            flex-wrap: wrap; /* Para que los botones se ajusten en móviles */
        }

        button {
            padding: 18px 35px;
            font-size: 1.3em;
            border: none;
            border-radius: 40px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: bold;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        #yesBtn {
            background-color: #ff69b4; /* Corazón rosa vibrante */
            color: white;
            animation: pulse 1.5s infinite; /* Animación de pulsación para el SÍ */
        }

        #yesBtn:hover {
            background-color: #e91e63;
            transform: scale(1.1);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        #noBtn {
            background-color: #e0b0ff; /* Morado lavanda */
            color: #4a009e;
        }

        #noBtn:hover {
            background-color: #c988ee;
            transform: scale(1.05);
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
        }

        /* Animaciones de animales y corazones */
        .decoration {
            position: absolute;
            font-size: 3.5em; /* Tamaño de los emojis */
            animation: driftAndSpin 20s infinite ease-in-out;
            opacity: 0;
            pointer-events: none;
            text-shadow: 2px 2px 6px rgba(0,0,0,0.3);
        }

        .decoration:nth-child(1) { top: 8%; left: 8%; animation-delay: 0s; }
        .decoration:nth-child(2) { top: 25%; right: 12%; animation-delay: 2s; }
        .decoration:nth-child(3) { bottom: 10%; left: 20%; animation-delay: 4s; }
        .decoration:nth-child(4) { top: 15%; right: 25%; animation-delay: 6s; }
        .decoration:nth-child(5) { bottom: 20%; left: 5%; animation-delay: 8s; }
        .decoration:nth-child(6) { top: 35%; left: 30%; animation-delay: 10s; }
        .decoration:nth-child(7) { bottom: 5%; right: 8%; animation-delay: 12s; }
        .decoration:nth-child(8) { top: 5%; left: 40%; animation-delay: 14s; }
        
        @keyframes popIn {
            from { transform: scale(0.8) translateY(20px); opacity: 0; }
            to { transform: scale(1) translateY(0); opacity: 1; }
        }

        @keyframes driftAndSpin {
            0% { transform: translate(0, 0) rotate(0deg) scale(0.7); opacity: 0; }
            15% { opacity: 1; }
            85% { opacity: 1; }
            100% { transform: translate(var(--dx), var(--dy)) rotate(var(--rot)) scale(1.1); opacity: 0; }
        }

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.03); }
            100% { transform: scale(1); }
        }

        /* Para el "NO" que se escapa */
        #noBtn.moved {
            position: absolute;
        }

        /* Media queries para responsividad */
        @media (max-width: 600px) {
            .container {
                padding: 30px 20px;
                border-radius: 20px;
            }
            h1 {
                font-size: 2.5em;
            }
            .question {
                font-size: 1.5em;
            }
            .buttons {
                flex-direction: column;
                gap: 15px;
            }
            button {
                width: 100%;
                padding: 12px 20px;
                font-size: 1.1em;
            }
            .decoration {
                font-size: 2.5em;
            }
        }
    </style>
</head>
<body>

    <div class="decoration" style="--dx: 100px; --dy: -150px; --rot: 180deg;">💜</div>
    <div class="decoration" style="--dx: -120px; --dy: 100px; --rot: -90deg;">🦄</div>
    <div class="decoration" style="--dx: 80px; --dy: 180px; --rot: 270deg;">💖</div>
    <div class="decoration" style="--dx: -50px; --dy: -100px; --rot: 45deg;">✨</div>
    <div class="decoration" style="--dx: 150px; --dy: 50px; --rot: -180deg;">🦋</div>
    <div class="decoration" style="--dx: -90px; --dy: -130px; --rot: 90deg;">💞</div>
    <div class="decoration" style="--dx: 70px; --dy: 120px; --rot: 0deg;">🥳</div>
    <div class="decoration" style="--dx: -100px; --dy: 70px; --rot: 220deg;">🌠</div>

    <div class="container">
        <h1>¡Hola, mi cielo!</h1>
        <p class="question">En este día especial... ¿Serías mi Valentín?</p>
        <div class="buttons">
            <button id="yesBtn" onclick="handleYes()">¡Absolutamente SÍ! 💖</button>
            <button id="noBtn">Uhm... no estoy seguro 😥</button>
        </div>
    </div>

    <script>
        const noBtn = document.getElementById('noBtn');

        noBtn.addEventListener('mouseover', () => {
            const container = document.querySelector('.container');
            const containerRect = container.getBoundingClientRect();
            const btnRect = noBtn.getBoundingClientRect();

            // Rango de movimiento dentro del contenedor
            const minX = 20;
            const maxX = containerRect.width - btnRect.width - 20;
            const minY = 20;
            const maxY = containerRect.height - btnRect.height - 20;

            let newX = Math.random() * (maxX - minX) + minX;
            let newY = Math.random() * (maxY - minY) + minY;
            
            // Asegurarse de que no se superponga con el botón "Sí"
            const yesBtn = document.getElementById('yesBtn');
            const yesRect = yesBtn.getBoundingClientRect();

            // Iterar para encontrar una posición que no colisione (rudimentario, pero funcional)
            let attempts = 0;
            while (attempts < 50 && 
                   newX < (yesRect.left - containerRect.left + yesRect.width + 30) &&
                   newX + btnRect.width > (yesRect.left - containerRect.left - 30) &&
                   newY < (yesRect.top - containerRect.top + yesRect.height + 30) &&
                   newY + btnRect.height > (yesRect.top - containerRect.top - 30)) {
                
                newX = Math.random() * (maxX - minX) + minX;
                newY = Math.random() * (maxY - minY) + minY;
                attempts++;
            }


            noBtn.style.position = 'absolute';
            noBtn.style.left = ${newX}px;
            noBtn.style.top = ${newY}px;
            noBtn.style.transition = 'top 0.3s ease-out, left 0.3s ease-out, transform 0.3s ease-out';
            noBtn.classList.add('moved');
        });

        function handleYes() {
            alert('¡WIIII! ¡Qué emoción! ¡Sabía que dirías que sí! 🎉💖🦄');
            document.querySelector('.container').innerHTML = `
                <h1>¡Feliz San Valentín!</h1>
                <p class="question">¡Mi corazón es tuyo! Gracias por decir que sí. 🥰</p>
                <div class="decoration" style="font-size: 10em; animation: pulse 1s infinite; opacity: 1; position: static; text-shadow: none;">💖</div>
            `;
            noBtn.style.display = 'none'; // Esconder el botón "No"
            // También se pueden detener las animaciones de fondo si quieres
        }

    </script>
</body>
</html>
