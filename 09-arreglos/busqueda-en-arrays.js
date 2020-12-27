"use strict";

let lenguajes = new Array("PHP", "JS", "Go", "Java", "C#", "C", "Pascal");

// Busca el lenguaje elegido en un array
let busqueda1 = lenguajes.find(function(lenguaje) {
  return lenguaje === "PHP";
});

let busqueda2 = lenguajes.find(lenguaje => lenguaje === "PHP");
console.log(busqueda1, busqueda2);

// Busca el índice
let busqueda3 = lenguajes.findIndex(lenguaje => lenguaje === "JS");
console.log(busqueda3);

// Busca en base a una condición dada y dice si hay elementos que la cumplen o no
let precios = [10, 20, 50, 80, 12];

let busqueda4 = precios.some(precio => precio >= 20);
console.log(busqueda4);
