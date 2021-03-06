/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */

var Jugador = {
  sprite:'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  mover: function(movX, movY) {
    this.x += movX;
    this.y += movY;
    if (movX>0){
      this.sprite = 'imagenes/auto_rojo_derecha.png';
      this.ancho = 30;
      this.alto = 15;
    }if (movX<0){
      this.sprite = 'imagenes/auto_rojo_izquierda.png';
      this.ancho = 30;
      this.alto = 15;
    }if (movY < 0){
      this.sprite = 'imagenes/auto_rojo_arriba.png';
      this.ancho = 15;
      this.alto = 30;
    }if (movY > 0){
      this.sprite = 'imagenes/auto_rojo_abajo.png';
      this.ancho = 15;
      this.alto = 30;
    };
  },
  perderVida: function(cantVidas){
    Jugador.vidas -= cantVidas;
  }
};
