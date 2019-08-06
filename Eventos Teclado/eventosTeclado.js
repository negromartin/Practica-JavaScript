/*
	keyDown: Presiona
	keyPress: Mantiene Presionado
	keyUp: Deja de Presionar
*/


window.addEventListener("keydown", function(){alert("Que onda mi gente")});
window.addEventListener("keypress",function(event){
	alert(String.fromCharCode(event.keyCode));

});