//inicializar
var pepa, f,h,e;

function setear() {
    f=10;
    h=5;
    e=8;
    pepa = new Tama(f, h, e, document.getElementById("mensaje")); //Pepa naciendo
    setInterval(abu,4000);  //Ejercuta un método específico durante cada ciclo
}

function abu() {
    pepa.aburrirse();
    pepa.comunicar();
}

function cambioEstado(imagen) {
    const $imagen = document.getElementById("imgPepa");
    $imagen.src = imagen;
}  

function accionar(boton) {
    console.log(boton)
    switch (boton.value) {
        case "jugar":
            cambioEstado("./assets/pepa_playing.gif")
            pepa.jugar();
            break;
        case "dormir":
            pepa.
            pepa.dormir();
            break;
        default:
    }
}
onload=setear;


