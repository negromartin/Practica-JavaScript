// Un closure es una funcion q retorna otra funcion
"use strict";

function creaSumador(valor) {
    return function(valor2) {
        return valor + valor2;
    }
}

var suma = creaSumador(10);
console.log(suma(30));

// Constructor hecho con Closure

function creaAgente() {
    var edad = 0;
    var nombre = '';
    return {
        setNombre: function(nuevoNombre) {
            nombre = nuevoNombre;
        },
        getNombre: function() {
            return nombre;
        },
        setEdad: function(nuevaEdad) {
            edad = nuevaEdad;
        },
        getEdad: function() {
            return edad;
        },
        hablar: function() {
            console.log('\nSoy ' + nombre + ' y tengo ' + edad + ' años');
        }

    }
}

// instanciamos agente

var martin = creaAgente();
martin.setNombre('Martin');
martin.setEdad(26);

setTimeout(martin.hablar, 2000);