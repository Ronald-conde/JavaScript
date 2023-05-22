/**
 * Control de flujo
 */

//Estructura IF

//if(condicion) { }

var llueve = true;
if (llueve) {
    console.log('Necesito un paraguas');
}

var admin = 'admin'
if (admin === 'admin') {
    console.log('Bienvenido al sistema');
}

const MAYORIA_DE_EDAD = 18;
var edadpersona = 20;
if (edadpersona >= MAYORIA_DE_EDAD) {
    console.log('Es mayor de edad');
} else {
    console.log('Es menor de edad');
}

var semaforo = 'verde'
if (semaforo === 'verde') {
    console.log('Puede pasar');
} else if (semaforo === 'amarillo') {
    console.log('Pase con precaución');
} else if (semaforo === 'rojo') {
    console.log('No puede pasar');
} else {
    console.log('Error!, rojo, verde y amarillo son las únicas opciones');
}

// estructura switch
/**
 * switch ( expresion ) {
    case expresion:
        codigo
        break;
    case expresion:
        codigo
        break;
    default:
        console.log('caso else');
}
 */
var producto = 'mangos';
switch ( producto ) {
    case 'papayas':
    case 'naranjas':
        console.log('Las naranjas y papayas cuestan 3$ cada kg');
        break;
    case 'mangos':
        console.log('Los mangos cuestan 3.25$ cada kg');
        break;
    default:
        console.log('Lo sentimos no disponemos de ese producto');
}
// Do-While
var contador = 11;
do {
    console.log('Hola mundo');//Primero ejecuta este bloque de cofigo aunque sea false
    contador+= 1
}while (contador <= 3)

// For
/**
 * for (expresionInicial; expresionCondicion; expresiondeActualizacion) {
    Instrucciones
}
 */
for (let i = 0; i < 3; i++) {
    console.log('Hola mundo');
}
