// Trabajo con strings busqueda

var texto = "Hola.!! A todos mis amigos le pega la mujer, todos estamos corriendo AIIUDA:v";
document.write(texto);
document.write("<br>El tamaño del texto es de: " + texto.length);

document.write("<br>Posicion de amigos: " + texto.search("amigos"));

document.write("<br>Primer posicion de todos: " + texto.indexOf("todos"));

document.write("<br>Ultima posicion de todos: " + texto.lastIndexOf("todos"));

document.write("<br>Las veces repetidas todos: " + texto.match(/todos/gi));

document.write("<br>substring desde 5 hasta 10 caracteres mas: " + texto.substr(5, 10));

document.write("<br>subtring desde 5 hasta 10 posiciones: " + texto.substring(5, 10));

document.write("<br>caracter en la posicion 8: " + texto.charAt(8));

document.write("<br>comienza el texto con Hola?: " + texto.startsWith("Hola"));

document.write("<br>Termina con locos?: " + texto.endsWith("locos"));

document.write("<br>Esta incluido cet en el texto: " + texto.includes("locos", 10)); // 10 es la posicion de inicio de la busqueda