// js/ui.js
export function renderLibros(libros, container) {
    container.innerHTML = libros.map(libro => `
      <div class="card libro${libro.id}">
        <h1>Libro${libro.id}</h1>
        <h3>${libro.nombre}</h3>
        <h5>${libro.autor}</h5>
        <p>${libro.genero}</p>
        <button class="btn-prestar" data-id="${libro.id}">Prestar libro</button>
      </div>
    `).join("");
  }
  
  export function mostrarMensajePrestamo(libro, listaRegistroMovimiento) {
    const li = document.createElement("li");
    li.innerHTML = `Haz prestado el libro "${libro.nombre}". Código: ${libro.id}
      <button class="btnEntregar" data-id="${libro.id}">Entregar</button>`;
    listaRegistroMovimiento.appendChild(li);
  }
  