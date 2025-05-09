// Selección de elementos
const audio = document.getElementById('background-audio');
const startAdventureButton = document.getElementById('start-adventure');
const bookCover = document.querySelector('.book-cover');
const storyAudio = document.getElementById('story-audio');
const nextPageButton = document.getElementById('next-page');
const backCover = document.getElementById('back-cover');
const bookImage = document.getElementById('book-image'); // Selecciona la imagen de la portada
const topitoImage = document.getElementById('topito-image'); // Selecciona la imagen de Topito
const restartButton = document.getElementById('restart-button'); // Botón de reinicio

// Asegurar que el audio se reproduzca correctamente
document.addEventListener('DOMContentLoaded', () => {
    audio.play().catch((error) => {
        console.error('El audio no se pudo reproducir automáticamente:', error);
    });

    // Restablece el estado del botón al cargar la página
    localStorage.removeItem("buttonClicked");
    startAdventureButton.style.display = "block";
});

// Evento para abrir el libro
startAdventureButton.addEventListener('click', () => {
    bookCover.classList.add('open'); // Agrega la clase para activar la animación

    // Detener el audio de fondo
    audio.pause();
    audio.currentTime = 0;

    // Oculta el botón y guarda el estado en localStorage
    startAdventureButton.style.display = "none";
    localStorage.setItem("buttonClicked", "true");

    // Crear y mostrar una hoja en blanco unida al libro
    const blankPage = document.querySelector('.blank-page');
    blankPage.style.display = 'block';

    // Texto que aparecerá progresivamente
    const text = `Este cuento inicia en las profundidades del corazón de un bosque. 
En lo más profundo de un bosque encantado, bajo la tierra mullida y cálida. 
Vivía un pequeño topo llamado Topito.`;

    // Función para mostrar el texto letra por letra sincronizado con el audio
    function typeTextWithAudio(element, text, audio) {
        const totalDuration = audio.duration * 1000; // Duración del audio en milisegundos
        const delay = totalDuration / text.length; // Tiempo por letra
        let index = 0;

        element.style.visibility = 'visible'; // Hace visible el texto
        const interval = setInterval(() => {
            element.textContent += text[index];
            index++;
            if (index === text.length) {
                clearInterval(interval); // Detiene la animación al finalizar
                nextPageButton.style.display = 'block'; // Muestra el botón "Siguiente"
            }
        }, delay);
    }

    // Reproducir el audio del cuento y sincronizar el texto
    storyAudio.play().then(() => {
        typeTextWithAudio(document.getElementById('animated-text'), text, storyAudio);
    }).catch((error) => {
        console.error('El audio del cuento no se pudo reproducir:', error);
    });
});

// Evento para pasar a la contraportada
nextPageButton.addEventListener('click', () => {
    document.querySelector('.blank-page').style.display = 'none'; // Oculta la hoja en blanco
    backCover.style.display = 'block'; // Muestra la contraportada
    bookImage.style.display = 'none'; // Oculta la imagen de la portada

    // Centrar la imagen Topito Cuento.jpg
    backCover.style.display = 'flex';
    backCover.style.justifyContent = 'center';
    backCover.style.alignItems = 'center';
    backCover.style.height = '100vh'; // Asegura que ocupe toda la altura de la pantalla
    backCover.style.backgroundImage = "url('img/Topito Cuento.jpg')"; // Agrega la imagen de fondo
    backCover.style.backgroundSize = 'contain'; // Ajusta la imagen para que se contenga dentro del contenedor
    backCover.style.backgroundRepeat = 'no-repeat'; // Evita que la imagen se repita
    backCover.style.backgroundPosition = 'center'; // Centra la imagen
});

// Reproducción de audios en orden al hacer clic en la imagen de Topito
const audioFiles = [
    "assets/Audio/escabando1.mp3",
    "assets/Audio/escabando2.mp3",
    "assets/Audio/escabando3.mp3",
    "assets/Audio/saliendo4.mp3",
    "assets/Audio/Narrador5.mp3"
];
let currentAudioIndex = 0;

// Crear un elemento de audio para reproducir los audios en orden
const audioPlayer = new Audio();
audioPlayer.addEventListener("ended", () => {
    currentAudioIndex++;
    if (currentAudioIndex < audioFiles.length) {
        audioPlayer.src = audioFiles[currentAudioIndex];
        audioPlayer.play();
    }
});

// Iniciar la reproducción de los audios al hacer clic en la imagen
topitoImage.addEventListener("click", () => {
    if (currentAudioIndex === 0) {
        audioPlayer.src = audioFiles[currentAudioIndex];
        audioPlayer.play();
    }
});

// Reiniciar la página al hacer clic en el botón de inicio
restartButton.addEventListener("click", () => {
    window.location.reload();
});
