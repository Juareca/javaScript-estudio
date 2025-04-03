let inputElemento = document.getElementById("inputElemento");

let lista = document.getElementById("lista");

let agregarbtn = document.getElementById("agregar");

let eliminarbtn = document.getElementById("eliminar");

let elementosLista = [];

agregarbtn.addEventListener("click",function(){

    let textArea = inputElemento.value.trim();

    if(textArea!==""){
        elementosLista.push(textArea);
        let li = document.createElement("li");
        li.textContent = textArea;
        lista.appendChild(li);
    }

});

eliminarbtn.addEventListener("click",function(){
    if(elementosLista.length > 0 ){
        elementosLista.pop();
        lista.removeChild(lista.lastElementChild);
    }
});