//Crear objeto con características

function Tama(felicidad, hambre, energia, ui) { //Constructor para inicializar propiedades
    this.felicidad = felicidad;
    this.hambre = hambre;
    this.energia = energia;
    this.visor = ui;
    this.estado = 0;
    this.mensaje = "¡Juega conmigo!";
    console.log("mascota creada");
}
//Metodos de la clase

Tama.prototype.jugar = function() {
    this.felicidad++; //Incrementa felicidad en una unidad
    if (this.energia > 5) {
        this.mensaje = "Estoy jugando";
        this.estado = 1;
        this.energia--;
    } else {
        this.mensaje = "No puedo jugar. Estoy cansada";
    }

};

Tama.prototype.dormir = function() {
    if(this.energia < 10) {
        this.mensaje = "Necesito dormir";
        this.energia++;
        this.estado = 3;
    } else {
        this.mensaje = "No quiero dormir. No estoy cansada";
    }
    //Crear mensjae estoy cansada
};

Tama.prototype.aburrirse = function() {
    if (this.felicidad > 5) {
        this.felicidad--;
    } else {
        this.mensaje = "Estoy aburrida. Juega conmigo"
    }
};

Tama.prototype.comer = function() {
    this.energia++; //Incrementa felicidad en una unidad
    if (this.hambre > 10) {
        this.mensaje = "Necesito comer, aliméntame";
        this.estado = 5;
        this.hambre--;
    } else {
        this.mensaje = "No puedo comer. Estoy llena";
    }

};

Tama.prototype.comunicar = function() {
    this.visor.innerHTML=this.mensaje; //Modificar el HTML para comunicar al usuario el estado
    return this.estado;
}
