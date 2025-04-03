let nombreInput = document.getElementById("nombreInput");

let btnSaludar = document.getElementById("btnSaludar");

let mensaje = document.getElementById("mensaje");

btnSaludar.addEventListener("click", function(){
    let nombre = nombreInput.value;
    mensaje.textContent = "Hola, " + nombre + "! Bienvenido a javascript!!"
})