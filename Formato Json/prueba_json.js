//definir un objeto de forma literal
var empleado ={
	nombre:"Negro",
	profesion: "Programador",
	edad: 26,
	armas:["pistola","rifle","kungfu"]
};
console.log("Definimos un objeto cualquiera")
console.log(empleado);
console.log("\nPasamos a formato JSON");
//Pasamos a formato JSON

var serializado = JSON.stringify(empleado);

console.log(serializado);

//des-serializar el objeto

var leido;
try {
	console.log("\nTomamos el JSON y lo pasamos a objeto");
	leido = JSON.parse(serializado);
	console.log(leido);
}catch(err){
	console.log("error no se pude leer el 'serializado'");
}
