document.addEventListener("keydown", function(event) {
    let resultado = document.getElementById("resultado");
    if (event.key === "b") {
        document.body.style.backgroundColor = "blue";
    }
    resultado.innerHTML = `Tecla presionada: ${event.key}`;
});

