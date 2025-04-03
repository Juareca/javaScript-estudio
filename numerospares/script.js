let btn = document.getElementById("btn");
let lista = document.getElementById("lista");

btn.addEventListener("click",function(){
    
    let numeros = [];

    for(let i = 10; i>=0;i--){
        numeros.push(i);
    }

    lista.innerHTML = numeros.join(", ");

})