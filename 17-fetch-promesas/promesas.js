"use strict";

var divUsuarios = document.querySelector("#usuarios");
var divprofesor = document.querySelector("#profesor");
var divUsuario = document.querySelector("#usuario");

getUsuarios()
  .then(data => data.json())
  .then(users => {
    listadoUsuarios(users.data);
    return getInfo();
  })
  .then(data => {
    divprofesor.innerHTML = data;
    return getUsuario();
  })
  .then(data => data.json())
  .then(user => {
    mostrarUsuario(user.data);
  })
  .catch(error => {
    alert("Error en las peticiones");
  });

function getUsuarios() {
  return fetch("https://reqres.in/api/users");
}

function getUsuario() {
  return fetch("https://reqres.in/api/users/2");
}

// Crear promesa desde cero
function getInfo() {
  var profesor = {
    nombre: "Víctor",
    apellidos: "Robles",
    url: "https://victorroblesweb.es"
  };

  return new Promise((resolve, reject) => {
    var profesorString = "";

    setTimeout(function() {
      profesorString = JSON.stringify(profesor);

      if (typeof profesorString !== "string" || profesorString === "") {
        return reject("error");
      }

      return resolve(profesorString);
    }, 3000);
  });
}

// Mostrar listado usuarios
function listadoUsuarios(usuarios) {
  usuarios.map((user, i) => {
    let nombre = document.createElement("h3");
    nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name;
    divUsuarios.appendChild(nombre);
    document.querySelector(".loading").style.display = "none";
  });
}

// Mostrar usuario
function mostrarUsuario(user) {
  let nombre = document.createElement("h3");
  let email = document.createElement("p");

  nombre.innerHTML = user.first_name + " " + user.last_name;
  email.innerHTML = user.email;

  divUsuario.appendChild(nombre);
  divUsuario.appendChild(email);

  document.querySelector("#usuario .loading").style.display = "none";
}
