/**
PRACTICA FUNCIONES------

 - Sin parámetros
 - Con parámetros 
 - Preinicialización de parámetros 
 - Evaluación de parámetros
 - Rest 
 - Spread 
 - Funciones anónimas
 - CallBacks 
 - Arrow
---------
**/


function uno(){

	var saludo = document.write("Hola a todos");
	return saludo;

};


uno();


function dos(a,b){
	var datos = document.write(a + b);
	
	return datos;	
}

dos(3,4);


function tres(a,b,c){
	var datos = document.write("Mi nombre es:"+ a +"<br>Mi apellido es: "+ b +"Mi edad es: "+c);
	return datos;
}

tres("Martin","Retamozo",6);


function cuatro(nombre="Martin Emanuel"){		/*#Parametro iniciado*/
	var nombreCompleto = nombre;
	return document.write(nombreCompleto);
}

cuatro();


function cinco(nombre,apellido){
	if(nombre != null && apellido != null){
		return document.write(nombre, apellido);
				
	}else{
		return document.write("INGRESE LOS DATOS COMPLETOS");
	
	}

}

cinco("Black","People");

function seis(...meses){				/*#Estos parametros(...nombre) es un arreglo*/
	return document.write(meses);


}

seis(Enero,Febrero,Marzo,etc);

function siete(nombre, precio, peso){
	return "Nombre: "+nombre+ "<br>Precio:"+precio+"<br>Peso:"+peso;
}

var juguete = ['Soldado',25,2];

document.write(siete(...juguete));


var siete = function(){					/*#Esta es una funcion anonima*/
	respuesta= "Hola mis Ñeres";
	return respuesta;
};

document.write(siete());


var a = function(nombre,dos){var e=nombre; dos(e);};    /*#Funciones anidadas*/
var b = function(i){document.write(i);};

a("Negro",b);


var name = nombre => nombre		/*#Funcion donde name es el nombre de la funcion, nombre es el parametro y nombre es devuelto al final*/
document.write( name("Blackpeople"));


var name2 = (nombre, apellido) =>nombre + apellido;
document.write( name2("Negro","Martin"));
