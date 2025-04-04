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

// Mostrar la sección correcta según el parámetro en la URL
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
        document.getElementById("sobreScreen").classList.add("active"); // pantalla inicial por defecto
    }

    // Generar el código QR que apunta directamente a la invitación
    const urlInvitacion = window.location.origin + window.location.pathname + "?pantalla=invitacion";

    new QRCode(document.getElementById("qrcode"), {
        text: urlInvitacion,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
});
