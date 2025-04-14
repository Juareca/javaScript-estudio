document.getElementById("lista").addEventListener("click", function(event) {
    if (event.target.classList.contains("eliminar")) {
        console.log("Se eliminó el producto");
        event.target.parentElement.remove();
    }
});
