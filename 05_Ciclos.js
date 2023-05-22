/**
 * Tipos de ciclos
 */

// while

//while () {}
var contador = 0;
while (contador <= 3) {
    console.log('Hola mundo');
    contador += 1;
}
// Do - while(condicion)
var contador = 1;
do{
    console.log('Hola mundo');
    contador += 1
} while (contador <= 3)

// For
/**
 * for(expresionInicial; expresionCondicional; expresionActualizacion) {
    las instrucciones
}
 */
for(let i = 0; i < 3; i++) {
    console.log('Hola mundo');
}

// For - in(para iterar)
/**
 * for (variable operadorIN objeto) {
    instrucciones
}
 */
var persona = {
    nombre: 'Ronald',
    apellido: 'Conde',
    edad: 19
}
for (let clave in persona) {
    console.log(clave, persona[clave]);
}

// for of (iterar objetos iterables)
var arreglo = [1,2,3,4,5]
var nombre = 'Ronald'
for (let valor of arreglo) {
    console.log(valor);
}