"use strict";

function Persona(nombre) {
    this.name = nombre;
}

var persona = new Persona('Peters');
// el metodo prototype asigna a la clase Persona la funcion saludar
Persona.prototype.saludar = function() {
    console.log("Hola a todos me llamo " + this.name);
}

persona.saludar();