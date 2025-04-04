function mostrarBienvenida() {
    ocultarTodos();
    document.getElementById("bienvenidaScreen").classList.add("active");
}

function mostrarInvitacion() {
    ocultarTodos();
    document.getElementById("invitacionScreen").classList.add("active");
}

function mostrarInvitacion2() {
    ocultarTodos();
    document.getElementById("invitacion2Screen").classList.add("active");
}

function ocultarTodos() {
    const secciones = document.querySelectorAll('.container');
    secciones.forEach(seccion => seccion.classList.remove('active'));
}

document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const pantalla = params.get("pantalla");

    if (pantalla === "bienvenida") {
        mostrarBienvenida();
    } else if (pantalla === "invitacion") {
        mostrarInvitacion();
    } else if (pantalla === "invitacion2") {
        mostrarInvitacion2();
    } else {
        document.getElementById("sobreScreen").classList.add("active");
    }
});