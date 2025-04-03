let inputElemento = document.getElementById("inputElemento");
let agregar = document.getElementById("agregar");
let lista = document.getElementById("lista");


agregar.addEventListener("click",function(){

    let textArea = inputElemento.value.trim();

    if(textArea !== ""){
        let li = document.createElement("li");
        li.innerHTML = textArea;
        lista.appendChild(li);
        inputElemento.value = "";
    }
});

lista.addEventListener("dblclick",function(event){

    if(event.target.tagName === "LI"){
        event.target.remove();
    }

});