// js/main.js
import { libros } from "./data.js";
import { renderLibros } from "./ui.js";
import { inicializarPrestamos, inicializarDevoluciones } from "./actions.js";

const container = document.getElementById("libros-container");
const listaRegistroMovimiento = document.getElementById("listaRegistroMovimiento");
const filtro = document.getElementById("filtro");

renderLibros(libros, container);
inicializarPrestamos(libros, listaRegistroMovimiento);
inicializarDevoluciones(libros, listaRegistroMovimiento);

filtro.addEventListener("input", () => {
  const texto = filtro.value.toLowerCase();
  Array.from(container.children).forEach(card => {
    card.style.display = card.textContent.toLowerCase().includes(texto) ? "block" : "none";
  });
});
