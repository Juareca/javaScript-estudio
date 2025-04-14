let container = document.getElementById("productos-container");

const productos = [
    {
        nombre: "iPhone",
        precio: 700+" usd",
        categoria: "Tecnología"
    },
    {
        nombre: "desodorante",
        precio: 5+" usd",
         categoria: "aseoPersonal"
    },
    {
        nombre: "sueter",
        precio: 10+" usd",
         categoria: "ropa"
    },
    {
        nombre: "carro",
        precio: 15000+" usd",
        categoria: "transporte"
    }  
];

//Crear tarjetas
const tarjetas = productos.map(producto => {
    return `
    <div class = "card ${producto.categoria}">
        <h3>${producto.nombre}</h3>
        <p>${producto.precio}</p>
        <p>${producto.categoria}</p>
        <button class="btn-comprar" data-producto="${producto.nombre}">Comprar</button>
    </div>
    `
});

//Insertar tarjetas
container.innerHTML = tarjetas.join("");

const boton = document.querySelectorAll(".btn-comprar");

console.log(botones);

boton.forEach(boton => {
    boton.addEventListener("click", () =>{
        const nombreProducto = boton.getAttribute("data-producto");
        alert(`Has comprado: ${nombreProducto}`);
    });
    
});