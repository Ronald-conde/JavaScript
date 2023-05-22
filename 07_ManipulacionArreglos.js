/**
 * Manipulacion arreglos
 */

//ForEach(Recorre los elememtos de un arreglo)
var letras = ['a', 'b', 'c', 'd', 'e'];
//console.log(letras.length);

//for (let i = 1; i < letras.length; i++) {
//    const element = letras[i];
//    console.log(element);
//}
letras.forEach((elemento) => console.log(elemento));

//Push - shift - pop.

var letras = ['a', 'b', 'c', 'd', 'e'];
letras.push('f')
console.log(letras);

var primerElemento = letras.shift()
console.log(primerElemento);
console.log(letras);

var ultimoelemento = letras.pop()
console.log(letras);
console.log(ultimoelemento);

//map(recorre cada uno de los items, no modifica)
var estudiantes = ['Dayana', 'Pamela', 'Ada', 'Katrina']
var asistencia = estudiantes.map((nombre) => `${nombre}.`) //{
    // return {
        // nombre: nombre,
        // asistencia: false
    // }
// })
console.log(estudiantes);
console.log(asistencia);


var productos = [
    {nombre: 'camisetas', precio: 15},
    {nombre: 'zapatillas', precio: 20},
    {nombre: 'pantalon', precio: 25}
]

var impuestoproducto = productos.map((producto) => {//no es viable retornar solo el producto
    // producto.impuesto = .12;
    return {
        ...producto,
        impuesto: .12
    }
})

var precios = productos.map((producto) => producto.precio)
console.log(productos);
console.log(impuestoproducto);
console.log(precios);

// Filter
var estudiantes = [
    {nombre : 'Ada', edad: 20, matriculado: true},
    {nombre : 'Katrina', edad: 19, matriculado: true},
    {nombre : 'Jorge', edad: 22, matriculado: false},
    {nombre : 'Gabriel', edad: 21, matriculado: true},
    {nombre : 'Raul', edad: 19, matriculado: false},
]

// var filtrado = estudiantes.filter((estudiantes) => estudiantes.edad >= 21);
var filtrado = estudiantes.filter((estudiante) => estudiante.edad >= 21 && estudiante.matriculado);

console.log(estudiantes);
console.log(filtrado);

// reduce
var calificaciones = [3, 5, 9, 10, 10];
var suma = calificaciones.reduce((acumulador,calificacion) => acumulador + calificacion, 0);
console.log(calificaciones);
console.log(suma);
console.log(suma / calificaciones.length);

var edades = [21, 21, 23, 43, 21, 43, 18, 18, 23, 23]

// salida
// {
//     21:3,
//     43:2,
// }
var resultado = edades.reduce((acumulador, edad) => {
    if (!acumulador[edad]) {
        acumulador[edad] = 1
    } else {
        acumulador[edad] += 1
    }
    return acumulador
}, {})
console.log(edades);
console.log(resultado);


var ventas = [
    { nombre: 'camiseta', precio: 15, totalvendido: 10 },
    { nombre: 'zapatillas', precio: 150, totalvendido: 8 },
    { nombre: 'pantalon', precio: 20, totalvendido: 30 },
]

var resultado = ventas.reduce((acumulador, producto) => {
    let totalventas = producto.precio * producto.totalvendido;
    acumulador[producto.nombre] = `$ ${totalventas}`;
    return acumulador;
}, {})

console.log(ventas);
console.log(resultado);


var estudiantes = [
    {nombre : 'Ada', edad: 20, matriculado: true},
    {nombre : 'Katrina', edad: 19, matriculado: true},
    {nombre : 'Jorge', edad: 22, matriculado: false},
    {nombre : 'Gabriel', edad: 21, matriculado: true},
    {nombre : 'Raul', edad: 19, matriculado: false},
]

var resultado = estudiantes
.map((estudiante) => estudiante.matriculado)
.reduce(( acumulador, item ) => {
    if (item) {
        acumulador.matriculado += 1
    } else {
        acumulador.noMatriculado += 1
    }
    return acumulador;
}, { matriculado: 0, noMatriculado: 0})
console.log(estudiantes);
console.log(resultado);

// some(al menos 1 cumple connla condición) 

var numeros = [1,3,5,7,9];
var resultado = numeros.some((numero) => numero % 2 === 0 )
console.log(resultado);

// every(todos cumplen con la condición)
var numeros = [18,19,17,18]
var resultado = numeros.every((numero) => numero >= 18)
console.log(resultado);

// find - findIndex
var clientes = [
    { id: 1, nombre: 'Ada'},
    { id: 2, nombre: 'Katrina'},
    { id: 3, nombre: 'Dayana'},
    { id: 4, nombre: 'Pamela'},
    { id: 1, nombre: 'Michelle'}
]
var cliente = clientes.find((cliente) => cliente.id === 1) //retorna el primer valor
var filter = clientes.filter((cliente) => cliente.id === 1) //todos los valores con las condiciones
console.log(cliente);
console.log(clientes);
console.log(filter);

// FindIndex
var clientes = [
    { id: 1, nombre: 'Ada'},
    { id: 2, nombre: 'Katrina'},
    { id: 3, nombre: 'Dayana'},
    { id: 4, nombre: 'Pamela'},
    { id: 1, nombre: 'Michelle'}
]
var posicion = clientes.findIndex((cliente) => cliente.id === 2);
console.log(posicion);
console.log(clientes[posicion]);


//includes
var mascotas = ['perro', 'gato', 'conejo'];
var resultado = mascotas.includes('gato')
console.log(resultado);
console.log('Ronald'.includes('a'));

var buscador = (parametro) => {
    let clientes = [
        { id: 1, nombre: 'Ada'},
        { id: 2, nombre: 'Katrina'},
        { id: 3, nombre: 'Dayana'},
        { id: 4, nombre: 'Pamela'},
        { id: 1, nombre: 'Michelle'}
    ]
    return clientes.filter((cliente) => cliente.nombre.includes(parametro))
}

console.log(buscador('na'));

//Join
var elementos = ['aire','fuego', 'agua'];
var resultado = elementos.join('--');
console.log(resultado);

var clientes = [
    { id: 1, nombre: 'Ada'},
    { id: 2, nombre: 'Katrina'},
    { id: 3, nombre: 'Dayana'},
    { id: 4, nombre: 'Pamela'},
    { id: 1, nombre: 'Michelle'}
]
// console.log(clientes.join());
var csvGenerator = (array,separator = ',') => {
    let headers = Object.keys(array[0]).join(separator)//shift modifica y no nos intersa
    let data = array.map((element) => Object.values(element).join(separator))//añadimos element
    console.log(headers);
    data.forEach(element => console.log(element))
}
csvGenerator(clientes);

console.log(Object.values({id:5, nombre: 'Michelle'}));
console.log(Object.keys({id:5, nombre: 'Michelle'}));


/**
 * concat - sort - splice - slice
 */
//concat
var array1 = [1,2,3,4,5];
var array2 = [6,7,8,9,0];
var array3 = array1.concat(array2);
var array4 = [...array1, ...array2]
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);


//sort(ordena)
var array1 = [1,2,3,4,5,6,7,8,9,0];
console.log(array1.sort());

var meses = ['Dic', 'Ene', 'Mar', 'Feb','Abr']
console.log(meses.sort());

var array = [1,1000,21,30,4]//lo ordena en código ascii con .sort
var ordenado = array.sort((a,b) => b - a)
console.log(ordenado);

//splice(separa, elimina, reemplaza)
var nombres = ['Ronald', 'Conde','Flores'];
nombres.splice(1, 1, 'Ada'), 
console.log(nombres);

//slice(retorna una copia)
var nombres = ['Ronald', 'Conde','Flores'];
var resultado = nombres.slice(1, 3) //no incluye la útima posición
console.log(resultado);
console.log(nombres); //no modifica el origen(inmutable)