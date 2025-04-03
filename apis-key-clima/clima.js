const API_KEY = "4721bcf3a29490d53cf8d4a06123ef0e";  
const buscarClima = document.getElementById("buscarClima");

let intervalo;

buscarClima.addEventListener("click", () => {
    const ciudad = document.getElementById("ciudad").value.trim();
    if (!ciudad) return alert("Ingresa una ciudad");

    obtenerClima(ciudad); // Llamar con la ciudad ingresada

    // Eliminar intervalos previos
    clearInterval(intervalo);

    // Crear nuevo intervalo solo para la última ciudad ingresada
    intervalo = setInterval(() => obtenerClima(ciudad), 30000);
});

function obtenerClima(ciudad) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("resultado").textContent = 
                `Clima en ${data.name}: ${data.main.temp}°C`;
            console.log(`clima en ${ciudad}:`, data.main.temp);
        })
        .catch(error => console.error("Error:", error));
}
