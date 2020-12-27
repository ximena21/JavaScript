"use strict";

// Definición de la función
function calculadora(numero1, numero2) {
  // Conjunto de instrucciones a ejecutar
  console.log("Suma: " + (numero1 + numero2));
  console.log("Resta: " + (numero1 - numero2));
  console.log("Multiplicación: " + (numero1 * numero2));
  console.log("División: " + (numero1 / numero2));
  console.log("**************************************");
}

// Invocar o llamar a la función
for (var i = 1; i <= 10; i++) {
  console.log(i);
  calculadora(i, 8);
}
