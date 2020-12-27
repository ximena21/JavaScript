"use strict";

// JSON - Javascript Object Notation

var pelicula = {
  titulo: "Batman vs. Superman",
  year: 2017,
  pais: "Estados Unidos"
};

console.log(pelicula);

// Cambiar propiedad
pelicula.titulo = "Superman Begins";
console.log(pelicula.titulo);

// Colección de objetos
var peliculas = [{
    titulo: "La Verdad Duele",
    year: 2016,
    pais: "Francia"
  },
  pelicula
];

console.log(peliculas);

// Recorrido
var cajaPeliculas = document.querySelector("#peliculas");

var index;
for (index in peliculas) {
  var p = document.createElement("p");
  p.append(peliculas[index].titulo + " - " + peliculas[index].year);
  cajaPeliculas.append(p);
}
