//Pasar string a numero.

var a = "10.55";
var b = Number(a);
document.write(typeof b);

// convertir un decimal a entero

document.write("<br>" + parseFloat(b));

document.write("<br>" + parseInt(b));

// comprueba si la variable es un numero

var d = "Hola ";

document.write("<br>" + d);
document.write("<br>" + isNaN(d));
// comprueba si es un entero devuelve un booleano

var f = 15;
document.write("<br>" + Number.isInteger(f));

// Redondeo
var j = 15.45659;
document.write("<br>" + j.toFixed(1));

//pasar de numero a string

var l = j.toString();
document.write("<br>" + typeof l);