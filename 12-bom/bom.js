"use strict";

// BOM - Browser Object Model

function getBom() {
  console.log(screen.width);
  console.log(window.innerHeight);
  console.log(window.location);
  console.log(window.location.href);
}

// Redirige a una página web
function redirect(url) {
  window.location.href = url;
}

// Redirige abriendo una nueva pestaña a una página web
function abrirVentana(url) {
  window.open(url);
  window.open(url, "", "witdh=400,height=300");
}

getBom();
