"use strict";

// Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName("div");
console.log(todosLosDivs);

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

// Recorre y muestra todos los elementos contenidos en div
for (var valor in todosLosDivs) {
  // Comprueba si el elemento es un elemento del DOM
  if (typeof todosLosDivs[valor].textContent === "string") {
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.prepend(texto); // Añade antes
    seccion.append(parrafo); // Añade despúes
  }
}

seccion.append(hr);

// Muestra contenido que pertenece al elemento seleccionado
var contenidoEnTexto = todosLosDivs[2].textContent;
console.log(contenidoEnTexto);

contenidoEnTexto = todosLosDivs[3].innerHTML;
console.log(contenidoEnTexto);

// Cambia el contenido del elemento seleccionado
contenidoEnTexto = todosLosDivs[2];
contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento";
console.log(contenidoEnTexto);

// Conseguir elementos por su clase css
var divsAmarillos = document.getElementsByClassName("amarillo");
divsAmarillos[0].style.background = "yellow";

// Cambia el fondo a los elementos con la misma clase
var divsRojos = document.getElementsByClassName("rojo");

for (var div in divsRojos) {
  if (divsRojos[div].className === "rojo") {
    divsRojos[div].style.background = "red";
  }
}

// Query selector
var id = document.querySelector("#encabezado");
console.log(id);
