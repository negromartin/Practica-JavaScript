"use strict";

console.log('Empieza y espero 4 segundos por el asincrono paralelo');

function escribeTras4(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 4000);
}
// es asincrono paralelo
escribeTras4('\nEl texto que se ejecuta tras 4 segundos', function() {
    console.log("fin");
});

escribeTras4('\nSegundo texto que se ejecuta tras 4 segundos', function() {
    console.log("fin2");
});

// asincrono en serie

escribeTras4('\nEmpieza y espero 4 segundos por el asincrono en serie', function() {
    console.log("fin");
    escribeTras4('\nEl texto que se ejecuta tras 4 segundos en serie', function() {
        console.log("fin2");
    });
});