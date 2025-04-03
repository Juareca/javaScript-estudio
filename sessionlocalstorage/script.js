let localInput = document.getElementById("localInput");
let btnguardarLocal = document.getElementById("guardarLocal");
let mostrarLocal = document.getElementById("mostrarLocal");

let sessionInput = document.getElementById("sessionInput");
let btnguardarSession = document.getElementById("guardarSession");
let mostrarSession = document.getElementById("mostrarSession");

btnguardarLocal.addEventListener("click",function(){
    let textArea = localInput.value.trim();

    if(textArea !== ""){
        localStorage.setItem("datoLocal",textArea);
        mostrarLocal.textContent = textArea;
        localInput.value = "";
    }
});

btnguardarSession.addEventListener("click",function(){
    let textoArea = sessionInput.value.trim();

    if(textoArea !== ""){
        sessionStorage.setItem("datoSession",textoArea);
        mostrarSession.textContent = textoArea;
        sessionInput.value = "";
    }
});

// Recuperar datos almacenados al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    let datoGuardadoLocal = localStorage.getItem("datoLocal");
    let datoGuardadoSession = sessionStorage.getItem("datoSession");

    if (datoGuardadoLocal) {
        mostrarLocal.textContent = datoGuardadoLocal;
    }
    if (datoGuardadoSession) {
        mostrarSession.textContent = datoGuardadoSession;
    }
});