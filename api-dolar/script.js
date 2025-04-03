const API_URL = `https://v6.exchangerate-api.com/v6/81f258961ae86a1cd132678e/latest/USD`;
let inputPeso = document.getElementById("inputPeso");
let convertir = document.getElementById("convertir");
let tasaDolar = 0;  // 🔥 Variable global para almacenar la tasa

document.getElementById("consultarDolar").addEventListener("click", () => {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            tasaDolar = data.conversion_rates.COP;  // 🔥 Obtener tasa de USD a COP
            document.getElementById("resultado").textContent = 
                `1 USD = ${tasaDolar.toLocaleString("es-CO")} COP`;
        })
        .catch(error => console.error("Error al obtener la tasa de cambio:", error));
});

convertir.addEventListener("click",function(){
    let cantidad = inputPeso.value.trim();

    if (!cantidad || isNaN(cantidad)) {
        alert("Ingrese un valor numérico correcto");
        return;
    }

    if (tasaDolar === 0) {
        alert("Primero consulta la tasa del dólar");
        return;
    }

    let convercion = cantidad*tasaDolar;

    document.getElementById("resultadoConvertir").textContent = `${cantidad} dolares = ${convercion} pesos colombianos`;
});