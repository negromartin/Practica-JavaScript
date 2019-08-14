// Arreglos unidimensionales

var arreglo = new Array("El ", "Negro ", "Saabee ", 2019);
var arreglo2 = ["Hay que ", "Estudiar ", "Negro", 2019];
document.write("Prueba unidimensional<br>");
document.write(arreglo + "<br>" + arreglo2 + "<br>");
document.write("-------------------<br>");
//Arreglos Multidimensionales
document.write("Prueba Multidimensional<br>");
var matriz = [
    [10, 20, 30, 40],
    [50, 60, 70, 80],
    [90, 100, 110, 120]

];


for (i = 0; i < 3; i++) {
    for (j = 0; j < 4; j++) {
        document.write(matriz[i][j] + " ");
    }
    document.write("<br>");
}


var matriz3d = [
    [
        [
            "Saaabeee",
            "Que hace :V"
        ],
        ["Nio lo q eh"],
    ],

    [
        ["Vo noma nio sabee"]
    ],

    [
        [
            "Esto es una prueba",
            "De la Matriz",
            "de 3 dimensiones"
        ],
        ["Saaabeeeee :V"]

    ]
];


document.write(matriz3d[0][0][0] + "<br>");
document.write(matriz3d[0][0][1] + "<br>");

document.write(matriz3d[2][0][0] + " " + matriz3d[2][0][1] + " " + matriz3d[2][0][2] + "<br>");
document.write("-------------------<br>");

//Trabajo con arreglos
/*
    length: Devuelve la cantidad de elementos del arreglo
    push(): Inserta elementos en el arreglo
    pop(): Devuelve el ultimo elemento del arreglo
    join(): Convierte un array en un String
    split(): Convierte un String en un Array
    array.from(): Toma un elemento del Html y lo convierte en un arreglo es necesario el mapeo (map)
    sort(): Ordena alfabeticamente
    reverse(): invierte el contenido 
*/
var uno = [10, 20, 30, 40, 50, "Lunes", "Martin"];
document.write("Prueba Trabajo con Arreglos<br>");
document.write("El arreglo inicial es: " + uno + "<br>");
document.write("Cantidad de elementos Iniciantes: " + uno.length + "<br>");

uno.push("Negro", "Martin", 11);

document.write("Insertamos elementos con push: " + uno + "<br>");

document.write("El Ultimo elemento es eliminado: " + uno.pop() + "<br>");

//Esta definicion es para traer elementos del html y convertirlo a un arreglo
var arregloSemana = Array.from(document.querySelectorAll(".dias p"));
var creacion = arregloSemana.map(dia => dia.textContent);
console.log(creacion);
document.write("El arreglo traido del Html es: " + creacion.join() + "<br>");
document.write("Invertir arreglo:" + uno.reverse() + "<br>");
document.write("Ordenamos alfabeticamente la semana: " + uno.sort() + "<br>");
document.write("-------------------<br>");
document.write("Pruebas de for en arreglos<br>");

/* busquedas en arreglos con for
    for in
    forEach
    find
    findIndex
    filter
    some
*/
document.write("for in<br>");
for (let i in uno) {
    document.write(uno[i] + "<br>");
}

document.write("-------------------<br>");
document.write("forEach <br>")
uno.forEach(
    (dos, i) => document.write(i + ": " + dos + "<br>")
);

document.write("-------------------<br>");
document.write("metodo find<br>");
var buscar = uno.find(dos => dos == "Martin");
document.write("Palabra encontrada en el arreglo: " + buscar + "<br>");

document.write("-------------------<br>");
document.write("metodo findIndex<br>");
buscar = uno.findIndex(dos => dos == "Martin");
document.write("Indice de la palabra Martin: " + buscar + "<br>");

document.write("-------------------<br>");
document.write("metodo filter<br>");
buscar = uno.filter(dos => dos == "Martin");
document.write("Palabra filtrada: " + buscar + "<br>");

document.write("-------------------<br>");
document.write("metodo some<br>");
var numeros = [1, 2, 3, 4, 5, 6, 7];
buscar = numeros.some(dos => dos < 4);
document.write("Hay numeros mayores q 4?: " + buscar + "<br>");