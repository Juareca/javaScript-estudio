// Seleccionamos el botón y la lista
let btn = document.querySelector(".btn");
let lista = document.getElementById("lista");

// Agregamos un evento al botón
btn.addEventListener("click", function() {
    lista.innerHTML = ""; // Limpiar la lista antes de agregar elementos

    // Bucle para generar la lista de números del 1 al 10
    for (let i = 1; i <= 10; i++) {
        lista.innerHTML += `<li>Elemento ${i}</li>`; // Agrega cada elemento con innerHTML
    }
});
 