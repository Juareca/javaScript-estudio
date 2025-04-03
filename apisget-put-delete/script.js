// API Base URL
const API_URL = "https://jsonplaceholder.typicode.com/users";

// Seleccionar elementos del DOM
const listaUsuarios = document.getElementById("listaUsuarios");
const cargarUsuariosBtn = document.getElementById("cargarUsuarios");
const agregarUsuarioBtn = document.getElementById("agregarUsuario");
const actualizarUsuarioBtn = document.getElementById("actualizarUsuario");
const eliminarUsuarioBtn = document.getElementById("eliminarUsuario");

// 🟢 Obtener y mostrar usuarios (GET)
cargarUsuariosBtn.addEventListener("click", () => {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            listaUsuarios.innerHTML = "";
            data.forEach(user => {
                let li = document.createElement("li");
                li.textContent = `ID: ${user.id} - ${user.name} (${user.email})`;
                listaUsuarios.appendChild(li);
            });
        })
        .catch(error => console.error("Error al obtener usuarios:", error));
});

// 🟡 Agregar un nuevo usuario (POST)
agregarUsuarioBtn.addEventListener("click", () => {
    let nombre = document.getElementById("nombreUsuario").value.trim();
    let email = document.getElementById("emailUsuario").value.trim();

    if (nombre === "" || email === "") return alert("Completa los campos.");

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: nombre, email: email })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Usuario agregado:", data);
        alert("Usuario agregado correctamente.");

        // 🔥 Simulamos que el usuario se agregó en la lista
        let li = document.createElement("li");
        li.textContent = `ID: ${data.id} - ${nombre} (${email})`;
        listaUsuarios.appendChild(li);
    })
    .catch(error => console.error("Error al agregar usuario:", error));
});

// 🔵 Actualizar usuario (PUT)
actualizarUsuarioBtn.addEventListener("click", () => {
    let id = document.getElementById("idActualizar").value.trim();
    let nombre = document.getElementById("nuevoNombre").value.trim();
    let email = document.getElementById("nuevoEmail").value.trim();

    if (!id || nombre === "" || email === "") return alert("Completa los campos.");

    fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: nombre, email: email })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Usuario actualizado:", data);
        alert("Usuario actualizado correctamente.");

        // 🔥 Actualizar la lista en la interfaz
        let items = listaUsuarios.getElementsByTagName("li");
        for (let li of items) {
            if (li.textContent.includes(`ID: ${id} -`)) {
                li.innerHTML = `ID: ${id} - ${nombre} (${email})`;
                break;
            }
        }
    })
    .catch(error => console.error("Error al actualizar usuario:", error));
});


// 🔴 Eliminar usuario (DELETE)
eliminarUsuarioBtn.addEventListener("click", () => {
    let id = document.getElementById("idEliminar").value;
    if (!id) return alert("Ingresa un ID válido.");

    fetch(`${API_URL}/${id}`, { method: "DELETE" })
        .then(response => {
            if (response.ok) {
                console.log("Usuario eliminado.");
                alert("Usuario eliminado correctamente.");

                // 🔥 Simulamos la eliminación en la lista
                let items = listaUsuarios.getElementsByTagName("li");
                for (let li of items) {
                    if (li.textContent.includes(`ID: ${id} -`)) {
                        li.remove();
                        break;
                    }
                }
            } else {
                console.error("Error al eliminar usuario.");
            }
        })
        .catch(error => console.error("Error en la eliminación:", error));
});
