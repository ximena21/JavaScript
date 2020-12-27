"use strict";

let peliculas = ["La Verdad Duele", "La Vida es Bella", "Gran Torino"];

// Agregar elementos
let elemento = "";

do {
  elemento = prompt("Introduce tu pelicula");
  peliculas.push(elemento);
} while (elemento !== "ACABAR");

// Cambiar un elemento
peliculas[0] = undefined;

// Eliminar un elemento seleccionado
let indice = peliculas.indexOf("Gran Torino");

if (indice > -1) {
  peliculas.splice(indice, 1);
}

console.log(peliculas);

// Convierte un array a un string
let peliculas_string = peliculas.join();
console.log(peliculas_string);

// Convierte un string a un array
let cadena = "texto1, texto2, texto3";
let cadena_array = cadena.split(", ");

console.log(cadena_array);

// Ordena el array alfabéticamente
peliculas.sort();
console.log(peliculas);

// Ordena el array alfabéticamente pero a la inversa
peliculas.reverse();
console.log(peliculas);
