// Función para crear una cookie
function setCookie(nombre, valor, dias) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    let expiracion = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}

// Función para obtener una cookie
function getCookie(nombre) {
    let nombreEQ = nombre + "=";
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(nombreEQ) === 0) {
            return c.substring(nombreEQ.length, c.length);
        }
    }
    return "";
}

// Función para borrar una cookie
function borrarCookie(nombre) {
    document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// Obtener elementos del DOM
let inputNombre = document.getElementById("nombre");
let btnGuardar = document.getElementById("guardar");
let btnBorrar = document.getElementById("borrar");
let mensaje = document.getElementById("mensaje");

// Cargar la cookie al inicio
window.onload = function () {
    let nombreGuardado = getCookie("usuario");
    if (nombreGuardado) {
        mensaje.textContent = "Bienvenido de nuevo, " + nombreGuardado + "!";
    }
};

// Evento para guardar la cookie
btnGuardar.addEventListener("click", function () {
    let nombre = inputNombre.value.trim();
    if (nombre) {
        setCookie("usuario", nombre, 7); // Guarda la cookie por 7 días
        mensaje.textContent = "Cookie guardada. Recarga la página.";
    }
});

// Evento para borrar la cookie
btnBorrar.addEventListener("click", function () {
    borrarCookie("usuario");
    mensaje.textContent = "Cookie eliminada.";
});
