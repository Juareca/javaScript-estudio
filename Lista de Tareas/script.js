let tarea = document.getElementById("tarea");
let agregar = document.getElementById("agregar");
let lista = document.getElementById("lista");


agregar.addEventListener("click",function(){

    let textoArea = tarea.value.trim();

    if(textoArea !== ""){
        let li = document.createElement("li");

        li.innerHTML = `${textoArea}
            <button class="editar">Editar</button>
            <button class="eliminar">Eliminar</button>`;

        lista.appendChild(li);
        tarea.value = "";

        li.querySelector(".eliminar").addEventListener("click",function(){
            li.remove();
        })

        li.querySelector(".editar").addEventListener("click",function(){
            let nuevoTexto = prompt("Editar tarea:", textoArea);
            if(nuevoTexto !== ""){
                li.firstChild.textContent = nuevoTexto;
            }
        })
    }
    
});