"use strict";

console.log("Empieza");

function escribeTras4(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 4000);

}

function serie(lista, func, callbackFin) {
    if (lista.length == 0) {
        callbackFin();
        return;
    }
    func(lista.shift(), function() { serie(lista, func, callbackFin); });
}

var lista = [1, 2, "Tres", 4, 5];
serie(lista, escribeTras4, function() {
    console.log('Ha Terminado');
});