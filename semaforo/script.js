const coloresObtenidos = document.querySelectorAll(".colores");

let contador = 0;

const mostarLuz = () => {
    coloresObtenidos[contador].className = "colores";
    contador++;

    if(contador > 2) contador = 0;

    const luzActual = coloresObtenidos[contador];
    luzActual.classList.add(luzActual.getAttribute("color"));
}

setInterval(mostarLuz,1000);