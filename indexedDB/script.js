// 1️⃣ Abrimos o creamos la base de datos en IndexedDB
let db;
const request = indexedDB.open("TareasDB", 1);

// 2️⃣ Creamos el almacén de objetos si no existe
request.onupgradeneeded = function (event) {
    db = event.target.result;
    let store = db.createObjectStore("tareas", { keyPath: "id", autoIncrement: true });
    store.createIndex("nombre", "nombre", { unique: false });
};

// 3️⃣ Conectar a la base de datos si todo está bien
request.onsuccess = function (event) {
    db = event.target.result;
    mostrarTareas();
};

// 4️⃣ Manejar errores
request.onerror = function (event) {
    console.error("Error al abrir IndexedDB", event.target.error);
};

// 5️⃣ Agregar tarea a IndexedDB
document.getElementById("agregarBtn").addEventListener("click", function () {
    let tareaTexto = document.getElementById("tareaInput").value.trim();
    if (tareaTexto === "") return;

    let transaction = db.transaction(["tareas"], "readwrite");
    let store = transaction.objectStore("tareas");

    let nuevaTarea = { nombre: tareaTexto };
    store.add(nuevaTarea);

    transaction.oncomplete = function () {
        document.getElementById("tareaInput").value = "";
        mostrarTareas();
    };
});

// 6️⃣ Mostrar tareas almacenadas
function mostrarTareas() {
    let listaTareas = document.getElementById("listaTareas");
    listaTareas.innerHTML = "";

    let transaction = db.transaction(["tareas"], "readonly");
    let store = transaction.objectStore("tareas");
    let request = store.openCursor();

    request.onsuccess = function (event) {
        let cursor = event.target.result;
        if (cursor) {
            let li = document.createElement("li");
            li.innerHTML = `${cursor.value.nombre} 
                <button class="eliminar" data-id="${cursor.value.id}">Eliminar</button>`;
            listaTareas.appendChild(li);
            cursor.continue();
        }
    };
}

// 7️⃣ Eliminar tarea
document.getElementById("listaTareas").addEventListener("click", function (event) {
    if (event.target.classList.contains("eliminar")) {
        let id = Number(event.target.getAttribute("data-id"));

        let transaction = db.transaction(["tareas"], "readwrite");
        let store = transaction.objectStore("tareas");

        store.delete(id);

        transaction.oncomplete = function () {
            mostrarTareas();
        };
    }
});
