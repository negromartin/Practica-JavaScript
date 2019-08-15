//clase padre
class Animal {
    constructor(tipo, raza) {
        this.tipo = tipo;
        this.raza = raza;

    };

};

//clase hija
class Domesticos extends Animal {
    constructor(tipo, nombre, edad, peso) {
        super(tipo) //genera la relacion entre las 2 clases
        this.nombreD = nombre;
        this.edadD = edad;
        this.pesoD = peso;

    };
};

document.write("<br><br>--------Esto es el segundo Script-----------<br>");

var animal = new Domesticos("Felino", "Bior", 2, 5);

var animal2 = new Domesticos("Reptil", "Dinoroberto", 5, 2);

var animalUnico = new Animal("Salvaje", "pura");

document.write("<br>Primer Animal: " + animal.tipo + " <br>" + animal.nombreD + " <br>" + animal.edadD + "años<br>" + animal.pesoD + "kg<br>");

document.write("<br>Segundo Animal: " + animal2.tipo + " <br>" + animal2.nombreD + " <br>" + animal2.edadD + "años<br>" + animal2.pesoD + "kg<br>");

document.write("<br>Animal Unico: " + animalUnico.tipo + " <br>" + animalUnico.raza + " <br>");