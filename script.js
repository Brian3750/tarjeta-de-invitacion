let timeoutId;

function mostrarBienvenida() {
    ocultarTodos();
    document.getElementById("bienvenidaScreen").classList.add("active");
    timeoutId = setTimeout(mostrarInvitacion, 3000); // Muestra la invitación después de 3 segundos
}

function mostrarInvitacion() {
    ocultarTodos();
    document.getElementById("invitacionScreen").classList.add("active");
    timeoutId = setTimeout(mostrarInvitacion2, 3000); // Muestra la invitación 2 después de 3 segundos
}

function mostrarInvitacion2() {
    ocultarTodos();
    document.getElementById("invitacion2Screen").classList.add("active");
    // Aquí podrías agregar una acción final o reiniciar el ciclo
    // Por ejemplo, para reiniciar después de 5 segundos:
    // timeoutId = setTimeout(() => {
    //     document.getElementById("sobreScreen").classList.add("active");
    //     setTimeout(mostrarBienvenida, 3000);
    // }, 5000);
}

function ocultarTodos() {
    const secciones = document.querySelectorAll('.container');
    secciones.forEach(seccion => seccion.classList.remove('active'));
}

document.addEventListener("DOMContentLoaded", function () {
    // Al cargar la página, muestra la primera pantalla con el QR
    document.getElementById("sobreScreen").classList.add("active");
    // Inicia la secuencia automática después de un breve tiempo (ej. 5 segundos para que puedan escanear)
    timeoutId = setTimeout(mostrarBienvenida, 5000);
});
