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
    console.log("opcion 7: Salir");
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
            console.log("Saliendo del menú...");
            rl.close();
            break;
        default:
            console.log("Opción no válida");
            rl.close();
            break;
    }
    
})
// } while(opcion !== 4)
// rl.question('Ingrese el ancho del rectángulo: ', (ancho) => {
//     rl.question('Ingrese el alto del rectángulo: ', (alto) => {
//     calcularAreaRectangulo(parseInt(ancho), parseInt(alto));
//     rl.close();
//     });
// });
// readline.question(`What's your name?`, name => {
//     console.log(`Hi ${name}!`);
//     rl.close();
// });
