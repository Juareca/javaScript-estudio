const API_KEY = "RR88YURSZ08ZJSM9";  // Reemplaza con tu API Key de Alpha Vantage
const symbol = "IBM";
const API_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`;

const ctx = document.getElementById("grafico").getContext("2d");
let miGrafico;

// Función para obtener datos de la API
async function obtenerDatos() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const series = data["Time Series (5min)"];
        
        if (!series) throw new Error("Error al obtener datos de la API");

        const labels = Object.keys(series).reverse();  // Fechas
        const precios = labels.map(time => parseFloat(series[time]["4. close"]));

        actualizarGrafico(labels, precios);
    } catch (error) {
        console.error("Error al obtener datos:", error);
    }
}

// Función para actualizar el gráfico
function actualizarGrafico(labels, precios) {
    if (miGrafico) miGrafico.destroy();  // Eliminar gráfico anterior

    miGrafico = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: "Precio (USD)",
                data: precios,
                borderColor: "blue",
                fill: false
            }]
        }
    });
}

// Evento para actualizar manualmente
document.getElementById("actualizar").addEventListener("click", obtenerDatos);

// Cargar datos al inicio
obtenerDatos();
