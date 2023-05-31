
//Hora de explicar el código.(Empezamos definiendo una clase utils y haciendo un export default de la misma)
class Utils {
  constructor() { //constructor sirve para que cuando crees una nueva clase(new) se llame automáticamente(muy opcional)
    this.columnasuperior = ['| |', '| |', '| |'];//'this' es capaz de acceder al objeto, también puede modificarlo como se ve a continuación
    this.columnacentral = ['| |', '| |', '| |'];
    this.columnainferior = ['| |', '| |', '| |'];
    this.resultado = '';
  }
  mostrartablero(){
    this.resultado = this.columnasuperior.join(' ') + '\n' + this.columnacentral.join(' ') + '\n' + this.columnainferior.join(' ');
  }//Utilizamos .join para unir las columnas (' ') separado por un espacio en blanco y ('\n') salto de línea
  juegajugador1(coordenadas) {
    if (coordenadas === 'A1' || coordenadas === 'a1') {//Utilizaremos .splice para eliminar y reemplazar en ese orden,
      this.columnasuperior.splice(0, 1, '|O|');
    } else if( coordenadas === 'B1' || coordenadas === 'b1') {
      this.columnacentral.splice(0, 1, '|O|');
    } else if( coordenadas === 'C1' || coordenadas === 'c1') {
      this.columnainferior.splice(0, 1, '|O|');
    } else if( coordenadas === 'A2' || coordenadas === 'a2') {
      this.columnasuperior.splice(1, 1, '|O|');
    } else if( coordenadas === 'B2' || coordenadas === 'b2') {
      this.columnacentral.splice(1, 1, '|O|');
    } else if( coordenadas === 'C2' || coordenadas === 'c2') {
      this.columnainferior.splice(1, 1, '|O|');
    } else if( coordenadas === 'A3' || coordenadas === 'a3') {
      this.columnasuperior.splice(2, 1, '|O|');
    } else if( coordenadas === 'B3' || coordenadas === 'b3') {
      this.columnacentral.splice(2, 1, '|O|');
    } else if( coordenadas === 'C3' || coordenadas === 'c3') {
      this.columnainferior.splice(2, 1, '|O|');
    }
    this.mostrartablero();
    return this.resultado;
  }
  juegajugador2(coordenadas) {  
  if (coordenadas === 'A1' || coordenadas === 'a1') {
    this.columnasuperior.splice(0, 1, '|X|');
  } else if( coordenadas === 'B1' || coordenadas === 'b1') {
    this.columnacentral.splice(0, 1, '|X|');
  } else if( coordenadas === 'C1' || coordenadas === 'c1') {
    this.columnainferior.splice(0, 1, '|X|');
  } else if( coordenadas === 'A2' || coordenadas === 'a2') {
    this.columnasuperior.splice(1, 1, '|X|');
  } else if( coordenadas === 'B2' || coordenadas === 'b2') {
    this.columnacentral.splice(1, 1, '|X|');
  } else if( coordenadas === 'C2' || coordenadas === 'c2') {
    this.columnainferior.splice(1, 1, '|X|');
  } else if( coordenadas === 'A3' || coordenadas === 'a3') {
    this.columnasuperior.splice(2, 1, '|X|');
  } else if( coordenadas === 'B3' || coordenadas === 'b3') {
    this.columnacentral.splice(2, 1, '|X|');
  } else if( coordenadas === 'C3' || coordenadas === 'c3') {
    this.columnainferior.splice(2, 1, '|X|');
  }
  this.mostrartablero();
  return this.resultado;
  }
  Ganadordefinitivo() {
    const lineas = [
      [this.columnasuperior, this.columnacentral, this.columnainferior],
      [this.columnasuperior[0], this.columnacentral[0], this.columnainferior[0]],
      [this.columnasuperior[1], this.columnacentral[1], this.columnainferior[1]],
      [this.columnasuperior[2], this.columnacentral[2], this.columnainferior[2]],
      [this.columnasuperior[0], this.columnacentral[1], this.columnainferior[2]],
      [this.columnasuperior[2], this.columnacentral[1], this.columnainferior[0]],
      [this.columnasuperior[0], this.columnasuperior[1], this.columnasuperior[2]],
      [this.columnacentral[0], this.columnacentral[1], this.columnacentral[2]],
      [this.columnainferior[0], this.columnainferior[1], this.columnainferior[2]],
    ];
    //Vamos a hacer un for of porque es un objeto iterable(arreglos, cadenas de texto, objetos set, objetos map...)
    for (var combinacion of lineas) {
      const Tresenraya = combinacion.join(' ');//Recuerda que hay que unirlo de nuevo(yo no lo recordé)
      if ( Tresenraya === '|O| |O| |O|') {//Lo unimos con un if/else simple como hicimos anteriormente y tenemos nuestro bucle
          return 'Ha ganado el jugador 1';
      } else if ( Tresenraya  === '|X| |X| |X|') {
          return 'Ha ganado el jugador 2';
      } 
    }
  }
}
export default Utils;
