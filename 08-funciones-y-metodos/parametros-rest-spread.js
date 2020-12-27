"use strict";

// Parámetros REST
function listadoFrutas(fruta1, fruta2, ...restoFrutas) {
  console.log("Fruta 1: ", fruta1);
  console.log("Fruta 2: ", fruta2);
  console.log(restoFrutas);
}

listadoFrutas("Naranja", "Manzana", "Sandía", "Pera", "Melón", "Coco");

// Parámetros SPREAD
var frutas = ["Naranja", "Manzana"];
listadoFrutas(...frutas, "Sandía", "Pera", "Melón", "Coco");
