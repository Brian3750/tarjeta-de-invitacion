let timeoutId;
const videoFondo = document.getElementById("videoFondo");
const botonMusica = document.getElementById("botonMusica");

function mostrarBienvenida() {
    ocultarTodos();
    document.getElementById("bienvenidaScreen").classList.add("active");
    timeoutId = setTimeout(mostrarInvitacion, 3000);
}

function mostrarInvitacion() {
    ocultarTodos();
    document.getElementById("invitacionScreen").classList.add("active");
    timeoutId = setTimeout(mostrarInvitacion2, 3000);
}

function mostrarInvitacion2() {
    ocultarTodos();
    document.getElementById("invitacion2Screen").classList.add("active");
    // Aquí podrías agregar una acción final o reiniciar el ciclo
}

function ocultarTodos() {
    const secciones = document.querySelectorAll('.container');
    secciones.forEach(seccion => seccion.classList.remove('active'));
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("sobreScreen").classList.add("active");
    timeoutId = setTimeout(mostrarBienvenida, 5000);

    // Agrega un event listener al botón para iniciar la reproducción del video con audio
    if (botonMusica && videoFondo) {
        botonMusica.addEventListener('click', function() {
            videoFondo.muted = false; // Desactiva el silencio
            videoFondo.play().catch(error => {
                console.error("Error al intentar reproducir el video:", error);
            });
            botonMusica.style.display = 'none'; // Oculta el botón después de hacer clic
        });
    }
});