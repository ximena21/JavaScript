"use strict";

var texto = "Bienvenido al curso de Javascript";

// Reemplaza una cadena de texto por otra
var reemplazo = texto.replace("Javascript", "Symfony");

// Da como resultado una cadena de texto a partir de la posición que eliges
var reemplazo = texto.slice(14, 22);

// Recorta la cadena de texto y la mete en un array
// Recorta la cadena cada vez que encuentra un espacio
var reemplazo = texto.split(" ");

// Quita los espacios que tiene al principio y al final la cadena de texto
var reemplazo = texto.trim();

console.log(reemplazo);
