"use strict";

// Transformación de textos
var numero = 44;
var texto1 = "Bienvenido al curso de Javascript";
var texto2 = "Es muy buen curso";

var dato = numero.toString();
dato = texto1.toUpperCase(); // Convierte a mayúsculas
dato = texto2.toLowerCase(); // Convierte a minúsculas

console.log(dato);

// Calcular longitud
var nombre = "";
console.log(nombre.length);

// Concatenar - Unir textos
// var textoTotal = texto1 + " " + texto2;
var textoTotal = texto1.concat(" " + texto2);
console.log(textoTotal);
