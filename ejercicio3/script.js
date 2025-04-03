let edadInput = document.getElementById("edadInput");

let btnVerificar = document.getElementById("btnVerificar")

let resultado = document.getElementById("resultado");

btnVerificar.addEventListener("click", function(){
    let edad = edadInput.value;

    if (edad >= 18){
        resultado.textContent = "Eres mayor de edad, bienvenido"
    } else {
        resultado.textContent = "Eres menor de edad, no puedes ingresar."
    }
})