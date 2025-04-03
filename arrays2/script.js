let inputTarea = document.getElementById("inputTarea");
let agregarTarea = document.getElementById("agregarTarea");
let listaTareas = document.getElementById("listaTareas");

let array = [];

agregarTarea.addEventListener("click",function(){
    let txtarea = inputTarea.value.trim();

    if(txtarea !== ""){

        let li = document.createElement("li");
        array.push(txtarea)
        li.innerHTML = `
        ${txtarea} 
        <button class="btneliminar">Eliminar</button>
        `
        listaTareas.appendChild(li);
        inputTarea.value = "";

    }
    
});

listaTareas.addEventListener("click",function(event){

    let element = event.target;

    if(element.classList.contains("btneliminar")){
        
        let li = element.parentElement;
        let index = Array.from(listaTareas.children).indexOf(li);

        if(index !== -1){
            array.splice(index,1);
        }
        li.remove();
        console.log(array);

    }

});