const login = async () => {
    const username = document.getElementById("username").value;
    const role = document.getElementById("role").value;

    const response = await fetch("/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, role }),
    });

    const data = await response.json();
    if (data.token) {
        localStorage.setItem("token", data.token);
        if (role === "admin") {
            window.location.href = "admin.html";
        } else {
            window.location.href = "profile.html";
        }
    } else {
        document.getElementById("message").innerText = "Error en el login";
    }
};

const loadProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) return (window.location.href = "index.html");

    const response = await fetch("/users/perfil", {
        headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();
    document.getElementById("profileInfo").innerText = data.message;
};

const loadAdmin = async () => {
    const token = localStorage.getItem("token");
    if (!token) return (window.location.href = "index.html");

    const response = await fetch("/users/admin", {
        headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();
    if (data.error) {
        alert("No tienes permiso");
        window.location.href = "index.html";
    } else {
        document.getElementById("adminInfo").innerText = data.message;
    }
};

const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "index.html";
};
