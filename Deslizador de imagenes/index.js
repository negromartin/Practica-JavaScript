var imagenes = ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg', 'images/img5.jpg'];

var num = 0;

function siguiente() {
    var deslizador = document.getElementById('deslizador');
    num++;
    if (num >= imagenes.length) {
        num = 0;
    }
    deslizador.src = imagenes[num];
}

function anterior() {

    var deslizador = document.getElementById('deslizador');
    num--;
    if (num < 0) {
        num = imagenes.length - 1;
    }
    deslizador.src = imagenes[num];
}