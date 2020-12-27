"use strict";

// DOM - Document Object Model

// Selecciona elemento
var caja = document.getElementById("micaja");

// Selecciona elemento como si fuera CSS
caja = document.querySelector("#micaja");

// Sirve para añadir
caja.innerHTML = "TEXTO EN LA CAJA DESDE JS";

// Cambia estilos
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";

// Función que cambia de color el fondo
function cambiaColor(color) {
  caja.style.background = color;
}

// Agrega una clase css
caja.className = "hola hola2";

console.log(caja);
cambiaColor("green");
