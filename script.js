function mostrarBienvenida() {
    ocultarTodos();
    document.getElementById("bienvenidaScreen").classList.add("active");
    setTimeout(mostrarInvitacion, 3000); // Muestra la invitación después de 3 segundos
}

function mostrarInvitacion() {
    ocultarTodos();
    document.getElementById("invitacionScreen").classList.add("active");
    setTimeout(mostrarInvitacion2, 3000); // Muestra la invitación 2 después de 3 segundos
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
    // Al cargar la página, muestra la primera pantalla y comienza el ciclo
    document.getElementById("sobreScreen").classList.add("active");
    setTimeout(mostrarBienvenida, 3000); // Muestra la bienvenida después de 3 segundos
});