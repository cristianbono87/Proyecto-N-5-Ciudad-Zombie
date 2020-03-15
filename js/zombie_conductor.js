/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, sentido) {

  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.sentido = sentido;
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
}

/* Completar creacion del ZombieConductor */

/* Completar metodos para el movimiento y el ataque */

ZombieConductor.prototype = Object.create(Enemigo.prototype);

ZombieConductor.prototype.constructor = ZombieConductor;

ZombieConductor.prototype.mover = function () {
  if(this.sentido == 'H'){
    this.x -= this.velocidad;
    if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
    this.velocidad *= -1;
    };
  } else if(this.sentido == 'V'){
    this.y -= this.velocidad;
    if((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
    this.velocidad *= -1;
    };
  }
};

ZombieConductor.prototype.atacar = function(jugador) {
  jugador.perderVida(5);
};


/* Este metodo sirve para no estar atacando continuamente al jugador. Solo va a
atacar si no estaba atacando previamente. Esto lo va a indicar la propiedad atacando*/

ZombieConductor.prototype.comenzarAtaque = function (jugador) {
  if (!this.atacando) {
    this.atacar(jugador);
  }
  this.atacando = true;
}

/* Cuando el enemigo no este contacto con el jugador, se utilizara el metodo
dejarDeAtacar para modificar la propiedad atacando*/

ZombieConductor.prototype.dejarDeAtacar = function () {
  this.atacando = false;
}