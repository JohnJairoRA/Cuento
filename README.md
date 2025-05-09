# Cuento Interactivo: "Topito y su Primer Día de Escuela"

Este proyecto es una aplicación web interactiva que narra la historia de "Topito y su Primer Día de Escuela". Combina elementos visuales, animaciones, audio y texto para crear una experiencia inmersiva y educativa.

## Descripción del Proyecto

La aplicación está diseñada como un libro interactivo que permite a los usuarios explorar la historia de Topito, un pequeño topo que enfrenta sus miedos en su primer día de escuela. A través de animaciones, música de fondo y narración sincronizada, los usuarios pueden interactuar con el contenido y disfrutar de una experiencia única.

### Características Principales

- **Portada animada**: La portada del libro se abre al iniciar la aventura.
- **Narración sincronizada**: El texto del cuento se muestra de manera progresiva mientras se reproduce el audio.
- **Interactividad**: Los usuarios pueden avanzar en la historia haciendo clic en botones.
- **Contraportada personalizada**: Al final del cuento, se muestra una contraportada con un mensaje de cierre.
- **Reinicio**: Un botón permite reiniciar la experiencia desde el principio.

---

## Estructura del Código

### 1. **HTML (`index.html`)**
El archivo HTML define la estructura de la aplicación. Incluye:
- **Portada del libro**: Una imagen con un botón para iniciar la aventura.
- **Hoja en blanco**: Una sección donde se muestra el texto animado del cuento.
- **Contraportada**: Una sección final con el texto completo del cuento y un botón para reiniciar.
- **Audios**: Elementos `<audio>` para la música de fondo y la narración.

### 2. **CSS (`styles/style.css`)**
El archivo CSS define los estilos visuales y las animaciones:
- **Variables globales**: Colores y sombras reutilizables.
- **Animaciones**: Efectos como el cambio de color del texto y la apertura del libro.
- **Diseño responsivo**: Ajustes para que la aplicación se vea bien en diferentes dispositivos.

### 3. **JavaScript (`java.js`)**
El archivo JavaScript controla la lógica y la interactividad:
- **Reproducción de audio**: Función `playAudio` para manejar la reproducción de música y narración.
- **Sincronización de texto y audio**: Función `typeTextWithAudio` para mostrar el texto del cuento mientras se reproduce el audio.
- **Eventos**:
  - Abrir el libro y mostrar la primera página.
  - Avanzar a la contraportada.
  - Reiniciar la experiencia.
- **Gestión de audios en secuencia**: Reproducción automática de una lista de archivos de audio.

---

## Cómo Funciona

1. **Inicio**:
   - Al cargar la página, se reproduce música de fondo automáticamente.
   - El usuario hace clic en el botón "La aventura comienza aquí" para abrir el libro.

2. **Narración**:
   - Se reproduce el audio del cuento mientras el texto aparece progresivamente en la pantalla.

3. **Avance**:
   - Al finalizar la narración, el usuario puede hacer clic en "Siguiente" para avanzar a la contraportada.

4. **Contraportada**:
   - Se muestra el texto completo del cuento junto con una imagen de cierre.
   - El usuario puede reiniciar la experiencia haciendo clic en el botón "Inicio".

---

## Archivos del Proyecto

- **`index.html`**: Estructura principal de la aplicación.
- **`styles/style.css`**: Estilos visuales y animaciones.
- **`java.js`**: Lógica y funcionalidad interactiva.
- **`assets/`**: Carpeta que contiene imágenes y audios utilizados en la aplicación.

---

## Cómo Ejecutar el Proyecto

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone <URL_DEL_REPOSITORIO>