"use strict";

function porConsola(numero1, numero2) {
  console.log("Suma: " + (numero1 + numero2));
  console.log("Resta: " + (numero1 - numero2));
  console.log("Multiplicación: " + (numero1 * numero2));
  console.log("División: " + (numero1 / numero2));
  console.log("**************************************");
}

function porPantalla(numero1, numero2, mostrar = false) {
  document.write("Suma: " + (numero1 + numero2) + "<br>");
  document.write("Resta: " + (numero1 - numero2) + "<br>");
  document.write("Multiplicación: " + (numero1 * numero2) + "<br>");
  document.write("División: " + (numero1 / numero2) + "<br>");
  document.write("*******************************************<br>");
}

function calculadora(numero1, numero2, mostrar = false) {
  if (mostrar === false) {
    porConsola(numero1, numero2);
  } else {
    porPantalla(numero1, numero2);
  }
}

// Invocar o llamar a la función
calculadora(1, 4);
calculadora(2, 5, true);
calculadora(4, 5, true);
