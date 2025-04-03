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
            document.getElementById("mensaje").innerText = "Inicio de sesión exitoso ✅";
        } else {
            document.getElementById("mensaje").innerText = "Error: " + data.error;
        }
    } catch (error) {
        console.error("Error en la petición:", error);
    }
});

document.getElementById("perfilBtn").addEventListener("click", async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        document.getElementById("mensaje").innerText = "Inicia sesión primero ⚠️";
        return;
    }

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
});
