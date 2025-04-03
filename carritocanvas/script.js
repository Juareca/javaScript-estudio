const canvas = document.getElementById("simulador");
const ctx = canvas.getContext("2d");

let x = 50;  // Posición inicial del carro
let velocidad = 2; // Velocidad de movimiento
let semaforo = "verde"; // Estado inicial del semáforo

const semaforoTexto = document.getElementById("estado-semaforo");
const botonCambiarSemaforo = document.getElementById("cambiar-semaforo");

function dibujarCarro() {
    ctx.fillStyle = "blue";
    ctx.fillRect(x, 100, 50, 30); // Carro (rectángulo azul)
}

function dibujarSemaforo() {
    ctx.fillStyle = "black";
    ctx.fillRect(600, 50, 30, 80); // Poste del semáforo

    ctx.fillStyle = semaforo === "rojo" ? "red" : "gray"; 
    ctx.beginPath();
    ctx.arc(615, 65, 10, 0, Math.PI * 2);
    ctx.fill(); // Luz roja

    ctx.fillStyle = semaforo === "verde" ? "green" : "gray"; 
    ctx.beginPath();
    ctx.arc(615, 95, 10, 0, Math.PI * 2);
    ctx.fill(); // Luz verde
}

function actualizarSimulacion() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Borra la pantalla

    dibujarSemaforo();
    dibujarCarro();

    if (semaforo === "verde" || x < 580) {
        x += velocidad; // Mover el carro si el semáforo es verde o si aún no llegó
    }

    if (x > canvas.width) {
        x = -50; // Reiniciar el carro cuando sale de la pantalla
    }

    requestAnimationFrame(actualizarSimulacion);
}

// Cambiar el semáforo al presionar el botón
botonCambiarSemaforo.addEventListener("click", () => {
    if (semaforo === "verde") {
        semaforo = "rojo";
        semaforoTexto.textContent = "🔴 Rojo";
    } else {
        semaforo = "verde";
        semaforoTexto.textContent = "🟢 Verde";
    }
});

// Iniciar la simulación
actualizarSimulacion();
