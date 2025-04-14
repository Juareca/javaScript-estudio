const usuarios = [
    { nombre: "Juan", edad: 25, ciudad: "Santa Marta" },
    { nombre: "Luisa", edad: 30, ciudad: "Bogotá" },
    { nombre: "Carlos", edad: 22, ciudad: "Medellín" },
    { nombre: "Andrea", edad: 28, ciudad: "Cali" },
  ];
  
const container = document.getElementById("usuarios-container");

const tarjetas = usuarios.map(usuario => {
    
    const card = document.createElement("div");
    card.classList.add("card");

    let nombre = document.createElement("h1");
    nombre.textContent = usuario.nombre;

    let edad = document.createElement("p");
    edad.textContent = usuario.edad;

    let ciudad = document.createElement("p");
    ciudad.textContent = usuario.ciudad;

    card.appendChild(nombre);
    card.appendChild(edad);
    card.appendChild(ciudad);

    return card; // 👈 devolvemos la card para formar un array

});

tarjetas.forEach(card => {
    container.appendChild(card)
});