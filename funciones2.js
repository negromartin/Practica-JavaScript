// una funcion basica

function funcionBasica() {
    console.log('funcion basica ejecutada :V\n');

}

funcionBasica();

//funcion como declaracion, con argumentos y retorno

function sumar(a, b) {
    return a + b;
}
console.log("Funcion sumar ejecutada: " + sumar(10, 5));

// funcion como expresion

var multiplicar = function(a, b) {
    return a * b;
}

console.log("Funcion expresion multiplicar: " + multiplicar(10, 5));


var lang = 'es';

function accesoContexto() {
    console.log("en el contexto superior:", lang);
}

accesoContexto();

//metodo de un objeto
console.log("\nEsto es un metodo de un objeto");
var agente = {
    nombre: 'Negro',
    saludar: function() {
        console.log("Hola a todos mis ñerees soy el " + this.nombre);
    }
};

agente.saludar();

//constructor de objetos
console.log("\nUtilizamos un constructor de fruta");

function Fruta(nombre, peso, calidad) {
    this.getNombre = function() {
        return nombre;
    };
    this.getPeso = function() {
        return peso;
    };
    this.getCalidad = function() {
        return calidad;
    };
    this.setFruta = function(valor, valor2, valor3) {
        nombre = valor;
        peso = valor2;
        calidad = valor3;
    };
}

//creamos el objeto fruta
var limon = new Fruta('Limon del bueno', 5, "Muy buena");
console.log("la fruta es: " + limon.getNombre());
console.log("El peso es: " + limon.getPeso() + " gramos");
console.log("La calidad es: " + limon.getCalidad());