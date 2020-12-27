"use strict";

let lenguajes = new Array("PHP", "JS", "Go", "Java", "C#", "C", "Pascal");

document.write("<h1>Lenguajes de programación del 2018</h1>");
document.write("<ul>");

// FOR
let i;
for (i = 0; i < lenguajes.length; i++) {
  document.write("<li>" + lenguajes[i] + "</li>");
}

document.write("<br>");

// FOREACH
lenguajes.forEach((elemento, indice, arr) => {
  console.log(arr);
  document.write("<li>" + indice + " - " + elemento + "</li>");
});

document.write("<br>");

// FOR IN
let lenguaje;
for (lenguaje in lenguajes) {
  document.write("<li>" + lenguajes[lenguaje] + "</li>");
}

document.write("</ul>");
