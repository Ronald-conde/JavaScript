/**
 * Variables.
 * 3 Formas de definir variables
 * 
 * var, Let, const
 * 
 */
// variables con VAR(general)
var nombre = 'Ronald'; // x= 2
console.log(nombre);

var edad = 27;
console.log(edad);

var persona = {
    nombre: 'Ronald',
    apellido: 'Conde',
    edad: 19,
    direccion: {
        calle: 'Siempre Viva',
        numero: 123,
    },
    ciudades: [
        'Guayaquil',
        'Cuenca',
    ]
}

var ciudad;
ciudad = 'Quito';
ciudad = 'Guayaquil'; // redefinir
ciudad = 13;
console.log(ciudad);

// variables con let(dentro del bloque de código)
let nombre = 'Ronald';
console.log(nombre);

{
    let saludo = 'Hola soy Ronald';
    console.log(saludo);
}
console.log(saludo);

// variable con const
const PI = 3.14;
console.log(PI);

//string template
var nombre = 'Geovanny'
var saludo = `Hola soy ${nombre}

Como estás?`
console.log(saludo);
