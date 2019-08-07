class miClase{
	
	constructor(primero,segundo){
		this.uno= primero;
		this.dos = segundo;
		this.tres= "Hola mis ñeres"

	};

	miMetodoUno(){
		document.write("<br>Primer metodo");
		document.write("<br>Saludo:"+this.tres);

	}

	miMetodoDos(parametroUno, parametroDos){
		document.write("<br>Segundo metodo");
		document.write("<br>El primer parametro:"+parametroUno+
			"<br>El segundo parametro es:"+parametroDos);


	}

}

class miClaseDos extends miClase{
	constructor(uno,dos,cuatro){
		super(uno,dos)
		this.cuatro = cuatro;

	}
}


//Crear un Objeto - instanciar
var object = new miClase("Blackpeople",2019);
 
 document.write(object.uno);
 document.write(object.dos);


//Recuperar datos

object.miMetodoUno();
object.miMetodoDos("Negromartin11"," Practicando");
var objectHeredador = new miClaseDos("<br>Practica Herencia ",2019," Ya tu sabe");
document.write(objectHeredador.uno+" "+objectHeredador.dos+" "+objectHeredador.cuatro);