const API_LOGIN = "https://reqres.in/api/login";  
const API_USERS = "https://reqres.in/api/users";  

document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch(API_LOGIN, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (data.token) {
            localStorage.setItem("token", data.token);
            alert("Inicio de sesión exitoso");
            mostrarElementos(true);
        } else {
            alert("Error en el login");
        }
    } catch (error) {
        console.error("Error en la autenticación:", error);
    }
});

document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("token");
    alert("Sesión cerrada");
    mostrarElementos(false);
});

document.getElementById("verUsuarios").addEventListener("click", async () => {
    const token = localStorage.getItem("token");

    if (!token) return alert("Inicia sesión primero");

    try {
        const response = await fetch(API_USERS, {
            headers: { "Authorization": `Bearer ${token}` }
        });

        const data = await response.json();
        const listaUsuarios = document.getElementById("usuarios");
        listaUsuarios.innerHTML = "";

        data.data.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `${user.first_name} ${user.last_name} - ${user.email}`;
            listaUsuarios.appendChild(li);
        });
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
    }
});

function mostrarElementos(logueado) {
    document.getElementById("logout").style.display = logueado ? "block" : "none";
    document.getElementById("verUsuarios").style.display = logueado ? "block" : "none";
}

// Verificar si ya hay un token almacenado
if (localStorage.getItem("token")) {
    mostrarElementos(true);
}
