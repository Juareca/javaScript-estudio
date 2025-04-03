let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

let sumar = document.getElementById("sumar");
let restar = document.getElementById("restar");
let multiplicar = document.getElementById("multiplicar");
let dividir = document.getElementById("dividir");

let resultado = document.getElementById("resultado");

const opsuma = (a,b) => a+b;

sumar.addEventListener("click", function(){

    valor1 = Number(num1.value);
    valor2 = Number(num2.value);

    resultado.innerHTML = `Resultado ${opsuma(valor1, valor2)}`;

})


