/**
 * Ejercicios operadores
 */
//Calcular el número de segundos que existen en un día
const min = 60;
const h = min * 60;
const dia = h * 24;
const semana = dia * 7
console.log(semana + 's');


//Calcular el area de un rectángulo 
var areaRectangulo = (b,a) => {
    if ( b > 0 && a > 0) {
        return b * a;
    } else if ( b <= 0 || a <= 0) {
        return 'Números negativos introducidos'
    } else {
        return 'Datos no válidos'
    }
}
console.log(areaRectangulo(8,5));
console.log(typeof areaRectangulo );


//Conversor de grados centígrados a a grados Fahrenheit.
var C = 0
const Fahrenheit = C * 9/5 + 32
console.log(Fahrenheit);


/**
 * Ejercicios control de flujos
 */
//Un programa que segun el dia ingresado, lo diga en inglés.
var Dia = 'Miércoles'
if (Dia === 'Lunes' || Dia === 'lunes') {
    console.log('Monday');
} else if (Dia === 'Martes' || Dia === 'martes') {
    console.log('Tuesday');
} else if (Dia === 'Miercoles' || Dia === 'miercoles' || Dia === 'miércoles' || Dia === 'Miércoles') {
    console.log('Wednesday');
} else if (Dia === 'Jueves'|| Dia === 'jueves') {
    console.log('Thursday');
} else if (Dia === 'Viernes' || Dia === 'viernes') {
    console.log('Friday');
} else if (Dia === 'Sabado' || Dia === 'sabado') {
    console.log('Saturday');
} else if (Dia === 'Domingo' || Dia === 'domingo') {
    console.log('Sunday');
}  else {
    console.log('Dia no existente o mal introducido');
}

var Dia = 'domingo'
switch(Dia) {
    case 'Lunes', 'lunes':
        console.log('Monday');
        break;
    case 'Martes', 'martes':
        console.log('Tuesday');
        break;
    case 'Miercoles', 'Miércoles', 'miercoles', 'miércoles':
        console.log('Wednesday');
        break;
    case 'Jueves', 'jueves':
        console.log('Thursday');
        break;
    case 'Viernes', 'viernes':
        console.log('Friday');
        break;
    case 'Sabado', 'sabado':
        console.log('saturday');
        break;
    case 'Domingo', 'domingo':
        console.log('Sunday');
        break;
    default:
        console.log('Dia no existente o erróneamente introducido');
        }

 //Programa de compra

var precio = 17.5;
const Gastoenvio1 = 3;
const Gastoenvio2 = 5;
const Gastoenvio3 = 7;

switch(true) {
    case (precio <= 10 && precio > 0 && typeof precio !== 'string'):
        precio += Gastoenvio1;
        console.log(`Los gatos de envío son 3€`);
        break;
    case (precio > 10 && precio <= 20 && typeof precio !== 'string'):
        precio += Gastoenvio2;
        console.log('los gastos de envío son 5€');
        break;
    case (precio > 20 && precio <= 50 && typeof precio !== 'string'):
        precio += Gastoenvio3;
        console.log('Los gastos de envío son 7€');
        break;
    case (precio > 50 && typeof precio !== 'string'):
        console.log('Felicidades no tienes gastos de envío!!');
        break;
    default:
        console.log('datos incorrectos');
}
if(typeof precio !== 'string') {
    console.log('El total de la compra es:' + precio + '€');
} else {
    console.log('Ha habido un problema con el tipo de dato del precio');
}


// if (precio <= 10 && precio > 0 ) {
//     var resultado = precio + Gastoenvio1
//     console.log(resultado);
// } else if (precio > 10 && precio <= 20 && typeof precio !== 'string' ) {
//     console.log(precio + Gastoenvio2);
// } else if (precio > 20 && precio <= 50) {
//     console.log(precio + Gastoenvio3);
// } else if (precio >= 50) {
//     console.log(precio);
// } else {
//     console.log('Datos incorrectos');
// }


/**
 * Ejercicios ciclos
 */
// Imprima las tablas de multiplicar del 2 al 12 con for y  while.

for(let i = 2; i <= 12; i++) {
    console.log(`Tabla del ${i}:` );
    for(let y = 1; y <= 10; y++) {
        console.log(`${i} x ${y} = ${i * y}`);
    }
    console.log(' ');
}

let x = 2
while(x <= 5) {
    console.log(`Tabla del ${x}:`);
    let z = 1;
    while( z <= 10) {
        console.log(`${x} · ${z} = ${x * z}`);
        z += 1 
    }
    console.log('');
    x ++
}

let w  = 2;

do{
    console.log(`Tabla del ${w}:`);
    let s = 1;
    do {
        console.log(`${w} · ${s} = ${w * s}`);
        s++;
    } while (s <= 10);
    w++;
    console.log('');
} while (w <= 4)

/**
 * Ejercicios funciones
 */
// Crear una función que reciba un valor cualquiera y se imprima pasando 5

function muestravalor(valor) {
    console.log(valor);
}
muestravalor(5);

// arreglar la siguiente función
function multiply(a, b){
    return a * b;
}
console.log(multiply(2,4));

//Crear una función que reciba un número entero y muestre un error si el tipo de dato pasado es de otro tipo.

function numeroentero(numero) {
    if(typeof numero === 'number' && Number.isInteger(numero))
    console.log('Es un número entero');
    else {
        console.log('No es un número entero');
    }
}
console.log(numeroentero(5));

//
(function() {
    console.log("muuu");
})();