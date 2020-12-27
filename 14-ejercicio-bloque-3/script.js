"use strict";

window.addEventListener("load", function() {

  console.log("DOM cargado!!");

  var formulario = document.querySelector("#formulario");

  var boxDashed = document.querySelector(".dashed");
  boxDashed.style.display = "none";

  formulario.addEventListener("submit", function() {
    console.log("Evento submit capturado");

    var nombre = document.querySelector("#nombre").value;
    var apellidos = document.querySelector("#apellidos").value;
    var edad = parseInt(document.querySelector("#edad").value);

    if (nombre.trim() === null || nombre.trim().length === 0) {
      alert("El nombre no es válido");
      document.querySelector("#errorNombre").innerHTML = "El nombre no es válido";
      return false;
    } else {
      document.querySelector("#errorNombre").style.display = "none";
    }

    if (apellidos.trim() === null || apellidos.trim().length === 0) {
      alert("Los apellidos no son válidos");
      return false;
    }

    if (edad === null || edad <= 0 || isNaN(edad)) {
      alert("La edad no es válida");
      return false;
    }

    boxDashed.style.display = "block";

    pNombre = document.querySelector("#pNombre span");
    pApellidos = document.querySelector("#pApellidos span");
    pEdad = document.querySelector("#pEdad span")

    pNombre.innerHTML = nombre;
    pApellidos.innerHTML = apellidos;
    pEdad.innerHTML = edad;

    /*
    var datosUsuario = [nombre, apellidos, edad];
    var indice;

    for (indice in datosUsuario) {
        var parrafo = document.createElement("p");
        parrafo.append(datosUsuario[indice]);
        boxDashed.append(parrafo);
    }
    */
  });

});
