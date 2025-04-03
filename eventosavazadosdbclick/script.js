let agregar = document.getElementById("agregar");
let tareaInput = document.getElementById("tarea");
let lista = document.getElementById("lista");

agregar.addEventListener("click",function(){

    let textArea = tareaInput.value.trim();

    if(textArea !== ""){
        let li = document.createElement("li")
        li.innerHTML = `
        <span class="texto">${textArea}</span>
        <button class="editar">Editar</button>
        <button class="eliminar">Eliminar</button>
        `
        lista.appendChild(li);
        tareaInput.value = "";
    }
});

lista.addEventListener("click", function(event){
    let elemento = event.target;

    if(elemento.classList.contains("eliminar")){
        elemento.parentElement.remove();
    }

    if(elemento.classList.contains("editar")){
        let nuevoTexto = prompt("Editar la tarea: ", elemento.parentElement.querySelector(".texto").textContent);

        if(nuevoTexto !== ""){
            elemento.parentElement.querySelector(".texto").textContent = nuevoTexto.trim();
        }
    }
});

lista.addEventListener("dblclick",function(event){
    if(event.target.classList.contains("texto")){
        event.target.classList.toggle("completado");
    }
});