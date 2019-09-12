"user strict";

var fs = require('fs'); //fileSystem en este caso lo usamos para leer los archivos del sistema
var path = require('path'); //modulo para las rutas de datos

//el callBack es una funcion que se retorna despues de terminar lo iterado
var versionModulo = function(moduleName, callBack) {
    var fichero = path.join('./node_modules', moduleName, 'package.json');

    fs.readFile(fichero, 'utf8', function(err, data) {
        if (err) {
            callBack(err);
            return;
        }

        //iniciamos y verificamos la lectura del json
        var packageJson = {};

        try {
            packageJson = JSON.parse(data);
        } catch (e) {
            callBack('error al parsear ' + fichero);
            return;
        }


        if (packageJson && !packageJson.version) {
            callBack("no se encuentra la etiqueta 'version' en " + fichero);
            return;
        }
        //llamo al callback de finalizacion
        callBack(null, packageJson.version);
    });
};

//uso de la funcion
var modulo = 'chance';


versionModulo(modulo, function(err, version) {
    if (err) {
        console.log('Hubo un error:', err);
        return;
    }

    console.log('La version del modulo ' + modulo + ' es: ' + version);

});