/**
 * Operadores
 */

//Operadores de asignación

var x = 2;
var y = true;

//Operador de asignación de adición ( += )
var x = 2;
var y = 1;

x += y; // x= x+y
console.log(x);

//Operador de aignación de resta( -= )
var x = 2;
var y = 1;

x -= y;
console.log(x); 

//Operador de asignación de multiplicación ( *= )
var x = 2;
var y = 1;

x *= y;
console.log(x);

// Operador de asignación de división( /= 9)
var x = 12;
var y = 2;

x /= y; // x= x/y
console.log(x);

// Operador de asignación de residuo ( %= )
var x = 5;
var y = 2;

x %= y
console.log(x);

// Operador de asignacion de exponenciación ( **= )
var x = 2;
var y = 3;

x **= y
console.log(x);

/**
 * operadores de comparación
 */

//Operador igual ( == )

console.log(3 == 3); //true
console.log(3 == '3'); //true(presupone que te refieres a un numero a pesar de ser un string)

// Operador no es igual ( != )
console.log(3 != 3);

// Operador estrictamente igual ( === )
console.log(3 === 3); //true
console.log(3 === '3'); //false(no presupone) muy útil para software productivo

// Operador de desigualdad estricta ( !== )
console.log(3 !== '3');
console.log(3 != '3');

// Operadores >, >=, <, <=
console.log(4 > 4);
console.log(3 >= 3);
console.log(2 < 4);
console.log(2 <= 2);

/**
 * Operadores aritméticos( +, -, /, *, %, **)
 */
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 ** 2);

// Operadores de incremento ( ++ )
var num = 0;
//console.log(++num);

console.log(num++);// lo ejecuta en la siguiente variable
console.log(num);

// Operador de decremento ( -- )
var numero = 3
console.log(--numero);

/**
 * Operadores lógicos
 */

// AND(&&)
console.log(true && true);
console.log(2 > 3 && 1 <= 2);

// OR(||)
console.log(true || false);
console.log(2 > 3 || 3 < 4);

//NOT(!)
var x = 5
var y = 9
console.log(!true);
console.log(x > !y && x == '5' );

// Operador de cadena o concatenación ( + )
var nombre = 'Ronald'
var apellido = 'Conde'
var Nombrecompleto = nombre + ' ' + apellido
console.log(Nombrecompleto);

//Operador condicional ( condicion, ?, val1 : val2 )
console.log(2 > 3 ? 'Es mayor' : 'Es menor');

// Operador de desestructuración

var persona = {
    nombre: 'Ronald',
    apellido: 'Conde',
}

var { nombre:xyz, apellido } = persona;
console.log(xyz);
console.log(apellido);
console.log(persona);

// Desestructuración de arreglos
var arreglo = [ 1, 2, 3, 4, 5]

var [Primero, Segundo] = arreglo;
console.log(Primero);
console.log(Segundo);

/**
 * Operador de miembro o acceso de propiedad
 */
// Notación punto
var persona = {
    nombre: 'Ronald',
    apellido: 'Conde',
}
console.log(persona.nombre);
console.log(persona.apellido);

//Notacion por corchetes
var persona = {
    nombre: 'Ronald',
    apellido: 'Conde',
}
console.log(persona['nombre']);

// notacion por corchetes en arreglos
var arreglo = [21,22,23,24,26]
console.log(arreglo[0]);

// Operacion de determinacion de tipo ( typeof )

console.log(typeof 'Ronald');
console.log(typeof 24);
console.log(typeof true);
