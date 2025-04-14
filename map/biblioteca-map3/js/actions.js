// js/actions.js
import { mostrarMensajePrestamo } from './ui.js';

export function inicializarPrestamos(libros, listaRegistroMovimiento) {
  document.querySelectorAll(".btn-prestar").forEach(boton => {
    boton.addEventListener("click", () => {
      const id = parseInt(boton.dataset.id);
      const libro = libros.find(lib => lib.id === id);

      if (!libro.disponible) {
        alert(`El libro "${libro.nombre}" ya ha sido prestado.`);
        return;
      }

      libro.disponible = false;
      boton.style.display = "none";
      mostrarMensajePrestamo(libro, listaRegistroMovimiento);
    });
  });
}

export function inicializarDevoluciones(libros, listaRegistroMovimiento) {
  listaRegistroMovimiento.addEventListener("click", e => {
    if (e.target.classList.contains("btnEntregar")) {
      const id = parseInt(e.target.dataset.id);
      const libro = libros.find(lib => lib.id === id);
      const li = e.target.parentElement;

      if (libro) {
        libro.disponible = true;
        const boton = document.querySelector(`.btn-prestar[data-id="${id}"]`);
        if (boton) boton.style.display = "inline-block";
        alert(`Has entregado con éxito el libro: "${libro.nombre}"`);
        li.remove();
      }
    }
  });
}
