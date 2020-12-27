"use strict";

// Muestra todos los divisores de un npumero introducido

var numero = parseInt(prompt("Mete un número", 1));

for (var i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    console.log("Divisor: ", i);
  }
}
