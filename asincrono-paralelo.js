"use strict";
console.log("Empieza");

function escribeTras4(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 4000);

}

//  bucle asincrono en paralelo
var terminados = 0;
for (var i = 0; i < 5; i++) {
    escribeTras4('Texto de prueba' + i, function() {
        terminados++;
        if (terminados >= 5) {
            console.log("Fin");
        }

    });

}