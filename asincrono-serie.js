"use strict";

console.log("Empieza");

function escribeTras4(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 4000);

}

// bucle asincrono en serie
// llamar a una funcion N veces en serie
// al finalizar llamar al callback

function serie(n, func, callbackFin) {
    if (n == 0) {
        callbackFin();
        return;
    }

    n--;
    func(n, function() {
        serie(n, func, callbackFin);
    });

}

serie(5, escribeTras4, function() {
    console.log("ha terminado");
});