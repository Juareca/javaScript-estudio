let agregar = document.getElementById("agregar");
let inputElemento = document.getElementById("inputElemento");
let lista = document.getElementById("lista");

agregar.addEventListener("click",function(){

    let textArea = inputElemento.value.trim();

    if(textArea !== ""){
        let li = document.createElement("li");

        li.innerHTML = `${textArea} 
        <button class="mover-arriba">Subir</button> 
        <button class="mover-abajo">Bajar</button>
        <button class="eliminar">eliminar</button>`;

        lista.appendChild(li);
        inputElemento.value = "";
    }  
});

lista.addEventListener("click",function(event){
    let subir = event.target;
    let li = subir.parentElement;

    if(subir.classList.contains("mover-arriba")){
        let anterior = li.previousElementSibling;
        if(anterior){
            lista.insertBefore(li, anterior);
        }
    }
})

lista.addEventListener("click",function(event){
    let bajar = event.target;
    let li = bajar.parentElement;

    if(bajar.classList.contains("mover-abajo")){
        let posterior = li.nextElementSibling;
        if(posterior){
            lista.insertBefore(posterior, li);
        }
    }
});

lista.addEventListener("click",function(event){

    let elemento = event.target;

    if(elemento.classList.contains("eliminar")){
        elemento.parentElement.remove();
    }

});
