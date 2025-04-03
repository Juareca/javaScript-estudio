let inputTarea = document.getElementById("inputTarea");
let agregarTarea = document.getElementById("agregarTarea");
let listaTareas = document.getElementById("listaTareas");
let filtroTarea = document.getElementById("filtroTarea");

let tareas = [];

agregarTarea.addEventListener("click", function () {
    let texto = inputTarea.value.trim();

    if (texto !== "") {
        tareas.push(texto);

        let li = document.createElement("li");
        li.innerHTML = `
            ${texto}
            <button class="btneliminar">Eliminar</button>
        `;
        listaTareas.appendChild(li);
        inputTarea.value = "";
    }
});

// Eliminar tarea
listaTareas.addEventListener("click", function (event) {
    let element = event.target;

    if (element.classList.contains("btneliminar")) {
        let li = element.parentElement;
        let index = Array.from(listaTareas.children).indexOf(li);

        if (index !== -1) {
            tareas.splice(index, 1);
        }

        li.remove();
    }
});

filtroTarea.addEventListener("input",function(){

    let texto = filtroTarea.value.toLowerCase();

    Array.from(listaTareas.children).forEach(li => {
        let tareaTexto = li.textContent.toLowerCase();

        if(tareaTexto.includes(texto)){
            li.style.display = "flex";
        } else {
            li.style.display = "none";  // Ocultar si no coincide
        }
    })

});
