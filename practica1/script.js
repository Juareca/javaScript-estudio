function cambiarTema() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    // Guardar el tema el localStorage
    const temaActual = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("tema", temaActual)

}

window.onload = function() {
    const temaGuardado = localStorage.getItem("tema") || "light";
    document.body.classList.add(temaGuardado === "dark" ? "dark-mode" : "light-mode");
}