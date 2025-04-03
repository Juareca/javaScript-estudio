document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem("token");
    if (token) {
        mostrarPrivado();
    } else {
        mostrarPublico();
    }
});

document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;

    try {
        const response = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username })
        });
        
        const data = await response.json();
        if (data.token) {
            localStorage.setItem("token", data.token);
            mostrarPrivado();
        } else {
            alert("Error: " + data.error);
        }
    } catch (error) {
        console.error("Error en la petición:", error);
    }
});

document.getElementById("cerrarSesion").addEventListener("click", () => {
    localStorage.removeItem("token");
    mostrarPublico();
});

function mostrarPrivado() {
    document.getElementById("publico").style.display = "none";
    document.getElementById("privado").style.display = "block";
    obtenerPerfil();
}

function mostrarPublico() {
    document.getElementById("publico").style.display = "block";
    document.getElementById("privado").style.display = "none";
}

async function obtenerPerfil() {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
        const response = await fetch("/perfil", {
            method: "GET",
            headers: { "Authorization": `Bearer ${token}` }
        });

        const data = await response.json();
        document.getElementById("mensaje").innerText = data.message || data.error;
    } catch (error) {
        console.error("Error en la petición:", error);
    }
}
