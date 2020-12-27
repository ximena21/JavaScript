"use strict";

let nombres = ["Ximena Ae", "Edgar Ae", "Mao Ae", 52, true];
let lenguajes = new Array("PHP", "JS", "Go", "Java", "C#", "C", "Pascal");

// Cuenta los objetos que tiene un array
console.log(lenguajes.length);

// Te dice que elemento se encuentra en la posición que elegiste
let elemento = parseInt(prompt("¿Qué elemento del array quieres?", 0));

if (elemento >= nombres.length) {
  alert("Introduce el número correcto menor que " + nombres.length);
} else {
  alert("El usuario seleccionado es: " + nombres[elemento]);
}

// Muestra listado de todos los elementos del array
document.write("<h1>Lenguajes de programación del 2018</h1>");
document.write("<ul>");

for (let i = 0; i < lenguajes.length; i++) {
  document.write("<li>" + lenguajes[i] + "</li>");
}

document.write("</ul>");
