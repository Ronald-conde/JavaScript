/**
 * Funciones
 */

// Declarativa
//function nombreDeLaFuncion(){cuerpodeNuestraFuncion}
function saludar() {
    console.log('Hola soy Ronald');
}

saludar();

function saludar(nombre) {
    console.log(`Hola soy ${nombre}`);
}
saludar('Ronald');

function saludar (nombre) {
    return `Hola soy ${nombre}`
}
var saludo = saludar('Ronald');//Necesitamos almacenar en una variable para hacer un print y utilizarlo
console.log(saludo);
console.log(saludar('Ronald Conde'));

// Expresion o anónimas
var suma = function(a,b) {
    return a + b;
}

console.log(suma(2, 2));

// arrow function(alternativas para ser más compactas pero más limitadas)
var resta = (a,b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    } else {
        return 'Solo puedes introducir números'
    }
}
console.log(resta(-4, 2));

var multiplicar = (a,b) => a * b; // Tiene return implícito
console.log(multiplicar(2, 2));