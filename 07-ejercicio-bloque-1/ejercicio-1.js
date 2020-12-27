"use strict";

/*
Programa que pida dos números y que nos diga cual es el mayor, el menor y si son
iguales.

PLUS: Si los números no son un número o son menores o iguales a cero que nos lo
vuelva a pedir.

Nan = Not A Number
*/

var numero1 = parseInt(prompt("Introduce el primer número", 0));
var numero2 = parseInt(prompt("Introduce el segundo número", 0));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
  numero1 = parseInt(prompt("Introduce el primer número", 0));
  numero2 = parseInt(prompt("Introduce el segundo número", 0));
}

console.log(numero1, numero2);

if (numero1 === numero2) {
  alert("LOS NÚMERO SON IGUALES");
} else if (numero1 > numero2) {
  alert("EL NÚMERO MAYOR ES: " + numero1);
  alert("EL NÚMERO MENOR ES: " + numero2);
} else if (numero2 > numero1) {
  alert("EL NÚMERO MAYOR ES: " + numero2);
  alert("EL NÚMERO MENOR ES: " + numero1);
} else {
  alert("INTRODUCE NÚMEROS CORRECTOS");
}
