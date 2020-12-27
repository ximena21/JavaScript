"use strict";

window.addEventListener("load", () => {

  function cambiarColor() {
    console.log("Me has dado click");

    var bg = boton.style.background;

    if (bg === "green") {
      boton.style.background = "red";
    } else {
      boton.style.background = "green";
    }

    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";

    return true;
  }

  var boton = document.querySelector("#boton");

  // Click
  boton.addEventListener("click", function() {
    cambiarColor();

    // "this" hace referencia al objeto del evento
    console.log(this);
    this.style.border = "10px solid black";
  });

  // Mouse Over
  boton.addEventListener("mouseover", function() {
    boton.style.background = "yellow";
  });

  // Mouse Out
  boton.addEventListener("mouseout", function() {
    boton.style.background = "gray";
  });

}); // end load
