"use strict";

var async = require('async');

console.log('Empieza el asincrono con async en un arreglo con .eachSeries');

function escribeTras4(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 4000);
}

var lista = [1, 2, 'Ñereee', 4, 5];

async.eachSeries(lista, escribeTras4, function() {
    console.log("Ha Terminado");
});