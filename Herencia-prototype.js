"use strict";

function Persona(nombre) {
    this.name = nombre;
}


Persona.prototype.saludar = function() {
    console.log("Hola soy " + this.name);
};


//Heredamos de Persona

function Agente(nombre) {
    Persona.call(this, nombre);
    //esto ejecuta el constructor de persona con el this de agente
    // definiendo en el this de agente una propiedad name
    // y le asigna el parametro recibido
}

//ahora le asignamos como prototipo una persona
Agente.prototype = new Persona('Soy un prototipo');

var agente = new Agente('Roberto');
agente.saludar();
//instanceOf devuelve si es o no una instancia de la clase
// Object.getPrototypeOf(clase) devuelve de que clase hereda(o cual es su clase padre) 
console.log(
    Object.getPrototypeOf(agente),
    agente instanceof Agente,
    agente instanceof Persona,
    agente instanceof Object
);