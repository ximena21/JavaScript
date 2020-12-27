"use strict";

/*
1. Pida 6 números por pantalla y meterlos en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la página y en
   la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra
   y su índice (se valorará el uso de funciones)
*/


// Pedir los 6 número y meterlos en un array
// let numeros1 = new Array(6);

// for (let i = 0; i <= 5; i++) {
// numeros1[i] = parseInt(prompt("Introduce un número", 0));
// }

// console.log(numeros1);


let numeros2 = [];

for (let i = 0; i <= 5; i++) {
  numeros2.push(parseInt(prompt("Introduce un número", 0)));
}


// Mostrar en consola
console.log(numeros2);


// Mostrar en la pagina
function mostrarArray(elementos, textoCustom = "") {
  document.write("<h1>Contenido del array " + textoCustom + "</h1>");
  document.write("<ul>");

  elementos.forEach((elemento, index) => {
    document.write("<li>" + elemento + "</li>");
  });

  document.write("</ul>");
}

mostrarArray(numeros2);


// Ordenar y mostrar

// numeros2.sort();
// mostrarArray(numeros2, "ordenado");

numeros2.sort(function(a, b) {
  return a - b; // para orden inverso cambiar a "b-a"
});

mostrarArray(numeros2, "ordenado");


// Invertir el orden
numeros2.reverse;
mostrarArray(numeros2, "invertido");


// Contar elementos
document.write("<h1>El array tiene: " + numeros2.length + " elementos");


// Búsqueda
let busqueda = parseInt(prompt("Busca un número", 0));
let posicion = numeros2.findIndex(busqueda);

if (posicion && posicion !== -1) {
  document.write("<h1>ENCONTRADO</h1>");
  document.write("<h1>Posición de búsqueda: " + posicion + "</h1>");
} else {
  document.write("<h1>NO ENCONTRADO</h1>");
}
