// var herramienta = new utils
// herramienta.saludo('mundo')

import utils from "./utils.js";
var herramienta = new utils
import readline, {clearScreenDown} from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// do {
    console.log("opcion 1: Segundos del día");
    console.log("opcion 2: Area del rectángulo");
    console.log("opcion 3: De Grados a Fahrenheit");
    console.log("opcion 4: Traducir dias de la semana a inglés");
    console.log("opcion 5: Comprar productos");
    console.log("opcion 6: Tablas del 2 al 12");
    console.log("opcion 7: Factorial de un número entero positivo");
    console.log("opcion 8: CONVIERTE EN MAYÚSCULAS");
    console.log("opcion 9: Suma de numeros enteros consecutivos a partir de 2 valores");
    console.log("opcion 10: Duplicar las letras de una palabra")
    console.log("opcion 11: Suma de matriz")
    console.log("opcion 12: Salir")
    rl.question("Eliga una opcion", (opcion) => {
    switch(opcion) {
        case "1":
            herramienta.Segundosdia();
            rl.close();
            break;
        case "2":
            rl.question("Ingresa la base rectángulo",(base) => {
                var numerob = parseFloat(base);
            rl.question('Ingresa la altura del rectangulo',(altura) => {
                var numeroa = parseFloat(altura);
                herramienta.AreaRectangulo(numerob,numeroa);
            rl.close();
            })
            });
            break;
        case "3":
            rl.question("Ingresa los grados",(Celsius) => {
                const C = parseFloat(Celsius);
                const Fahrenheit = herramienta.Grados(C);
                console.log(Fahrenheit);
            rl.close();
            });
            break;
        case "4":
            rl.question("Ingrese el día que quiere traducir...",(day) => {
                herramienta.Dia(day)
            rl.close();
            })
            break;
        case "5":
            rl.question("Ingresa el valor de la compra...",(valor) => {
                const precio = parseFloat(valor)
                const valortotal = herramienta.preciocompra(precio)
                console.log(valortotal);
            rl.close();
            })
            break;
        case "6":
            herramienta.Tablamultiplicar()
            break;
        case "7":
            rl.question('Ingresa un número entero positivo para factorizar...',(num) => {
                const valor = parseInt(num)
                const valorfinal = herramienta.Factorial(valor)
                console.log(valorfinal);
            rl.close();
            })
            break;
        case "8":
            rl.question('Ingresa la cadena a convertir en Mayúsculas...',(letras) => {
                const entrada = letras
                const resultado = herramienta.Mayusculas(entrada)
                console.log(resultado);
            rl.close();
            })
            break;
        case "9":
            rl.question('Ingrese el primer número...',(numero1) => {
                const valor1 = parseInt(numero1);
            rl.question('Ingrese el segundo número...',(numero2) => {
                const valor2= parseInt(numero2);
                var valorfinal = herramienta.Sumadenumeros(valor1,valor2);
                console.log(valorfinal);
            rl.close();
            })
            })
        break;
        case "10":
            rl.question('Ingrese la cadena...',(letra) => {
                var entrada = letra
                var resultado = herramienta.Repetirletras(entrada);
                console.log(resultado);
            rl.close();
            })
        break;
        case "11":
            const matriz = [
                [2,3,5],
                [0,1,4],
                [0,0,7],
            ]
            const resultado = herramienta.Sumamatriz(matriz);
            console.log(resultado);
            console.log(matriz);
            rl.close();
        break;
        case "12":
            console.log("Saliendo del menú...");
            rl.close();
            break;
        default:
            console.log("Opción no válida");
            rl.close();
            break;
    }
    
})
// readline.question(`What's your name?`, name => {
//     console.log(`Hi ${name}!`);
//     rl.close();
// });
