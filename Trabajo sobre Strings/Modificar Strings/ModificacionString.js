//repeat: repetimos el texto n cantidad de veces
//replace: remplaza contenido del string 
//slice: devuelte el string desde la posicion n que esta como parametro
//split: transforma el string en un arreglo ["n","n1","nN"]
//trim
//toLowerCase
//toLowerCase
//concat


var a = "  Hola a Todos <br>  ";
var b = " Prueba ";
var c = " de ";
var d = " Concatenacion ";

document.write("Repetimos: " + a.repeat(10)) + "<br>";
document.write("--------------------<br>");

document.write("Reemplazamos: " + a.replace("todos", "Mis ñeres") + "<br>");
document.write("--------------------<br>");

document.write("devolver desde: " + a.slice(5) + "<br>");
document.write("---------------------<br>");

document.write("Transformar a  arreglo: " + a.split(" ") + "<br>");
document.write("----------------------<br>");

document.write("Quitar espacios de inicio y final: " + a.trim() + "<br>");
document.write("------------------------<br>");

document.write("Convertir todo a minuscula: " + a.toLowerCase() + "<br>");
document.write("--------------------------<br>");

document.write("Convertir todo a mayuscula: " + a.toUpperCase() + "<br>");
document.write("--------------------------<br>");


document.write("Concatenamos: " + b.concat(c, d) + "<br>");

document.write(`Esto es otra ${b} ${c} ${d}`);