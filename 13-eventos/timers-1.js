"use stric";

window.addEventListener("load", function() {

  function intervalo() {
    // Se ejecuta después de un periodo de tiempo dado
    var tiempo = setInterval(function() {
      console.log("Set interval ejecutado");

      var encabezado = document.querySelector("h1");

      if (encabezado.style.fontSize === "50px") {
        encabezado.style.fontSize = "30px";
      } else {
        document.querySelector("h1").style.fontSize = "50px";
      }
    }, 1000);

    return tiempo;
  }

  var tiempo = intervalo();

  // Para el timer que esta en funcionamiento
  var stop = document.querySelector("#stop");

  stop.addEventListener("click", function() {
    alert("Has parado el intervalo en bucle");
    clearInterval(tiempo);
  });

  // Empieza el timer
  var start = document.querySelector("#start");

  start.addEventListener("click", function() {
    alert("Has iniciado el intervalo en bucle")
    intervalo();
  });

});
