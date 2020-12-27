"use strict";

var texto = "Bienvenido al curso de Javascript";

// Busca la posición de la palabra en una cadena de texto
// Si la palabra no existe el resultado es -1
var busqueda = texto.indexOf("curso");
var busqueda = texto.search("curso");

// Busca el número de veces que la palabra se encuentra en una cadena de texto
var busqueda = texto.match(/curso/g);

// Saca la cadena de texto que hay de una posición hasta el número de carácteres
// indicado que hay después
var busqueda = texto.substr(14, 5);

// Saca una letra en concreto
var busqueda = texto.charAt(44);

// Dice si el inicio de la cadena de texto es correcto
var busqueda = texto.startsWith("Bi");

// Dice si el final de la cadena de texto es correcto
var busqueda = texto.endsWith("pt");

// Dice si existe una palabra en la cadena de texto, es muy sensitivo
var busqueda = texto.includes("al");

console.log(busqueda);
