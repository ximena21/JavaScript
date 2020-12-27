"use stric";

window.addEventListener("load", function() {

  // Se ejecuta sólo una vez
  var tiempo = setTimeout(function() {
    console.log("Set interval ejecutado");

    var encabezado = document.querySelector("h1");

    if (encabezado.style.fontSize === "50px") {
      encabezado.style.fontSize = "30px";
    } else {
      document.querySelector("h1").style.fontSize = "50px";
    }
  }, 500);

});
