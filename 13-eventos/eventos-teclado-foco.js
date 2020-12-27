"use strict";

window.addEventListener("load", () => {

  let input = document.querySelector("#campoNombre");

  // Focus
  input.addEventListener("focus", function() {
    console.log("[focus] Estas dentro del input");
  });

  // Blur
  input.addEventListener("blur", function() {
    console.log("[blur] Estas fuera del input");
  });

  // Key Down
  input.addEventListener("keydown", function(event) {
    console.log("[key down] Pulsando esta tecla", String.fromCharCode(event.keyCode));
  });

  // Key Press
  input.addEventListener("keypress", function(event) {
    console.log("[key press] Tecla presionada", String.fromCharCode(event.keyCode));
  });

  // Key Up
  input.addEventListener("keyup", function(event) {
    console.log("[key up] Tecla soltada", String.fromCharCode(event.keyCode));
  });

}); // end load
