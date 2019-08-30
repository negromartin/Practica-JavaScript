var inputs = document.getElementsByClassName("formulario-input"); // obtengo todos los elementos en input
for (var i = 0; i <= inputs.length; i++) { //recorrido
    inputs[i].addEventListener('keyup', function() { //evento keyup suelta la tecla
        if (this.value.length >= 1) { //control de al menos 1 caracter en el input
            this.nextElementSibling.classList.add('fijar'); // aplica la clase fijar
        } else {
            this.nextElementSibling.classList.remove('fijar'); //elimina la clase fijar
        }
    });

}