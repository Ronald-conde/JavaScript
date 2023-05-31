import Utils from "./utils.js";
import readline from "readline";

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});

const herramienta = new Utils();
console.log('Opcion 1: Empezar tres en raya...');
console.log('Opcion 2: Parar programa...');
rl.question('Eliga una opción',(opcion) => {
    switch(opcion) {
        case "1":
            herramienta.mostrartablero();
            console.log(herramienta.resultado);
            break;
    }
    let turno = 1
    let movimientos = 0
    let maxmovimientos = 9
    const Empieza = () => {
        if (turno === 1) {
            rl.question('Jugador 1 ingresa las coordenadas...', (valor) => {
                const valor1 = herramienta.juegajugador1(valor)
                console.log(valor1);
                movimientos++;
                cambio();
            })
        } else {
            rl.question('Jugador 2 ingrese las coordenadas...', (v) => {
                const valor2 = herramienta.juegajugador2(v)
                console.log(valor2);
                movimientos++;
                cambio();
            });
        }
    };
    const cambio = () => {
        const ganador = herramienta.Ganadordefinitivo();
        if(ganador) {
            console.log(ganador);
            rl.close();
        } else if(movimientos < maxmovimientos){
            turno = turno === 1 ? 2 : 1;
            Empieza();
        } else if(movimientos === maxmovimientos) {
            console.log('Empate');
            rl.close();
        }
    }
    Empieza();
});



//rl.question('Jugador1 ingresa las coordenadas...', (valor) => {
    //     const valor1 = herramienta.juegajugador1(valor)
    //     console.log(valor1);
        
    // rl.question('Jugador 2 ingresa las coordenadas...',(v) => {
    //     const valor2 = herramienta.juegajugador2(v)
    //     console.log(valor2);
        
    // rl.question('Jugador1 ingresa las coordenadas...', (valor) => {
    //     const valor1 = herramienta.juegajugador1(valor)
    //     console.log(valor1);
        
    // rl.question('Jugador 2 ingresa las coordenadas...',(v) => {
    //     const valor2 = herramienta.juegajugador2(v)
    //     console.log(valor2);
    // rl.question('Jugador1 ingresa las coordenadas...', (valor) => {
    //     const valor1 = herramienta.juegajugador1(valor)
    //     console.log(valor1);
        
    //     const ganador = herramienta.Ganadordefinitivo();
    //     if (ganador) {
    //         console.log(ganador);
    //     }
    // rl.close();
    // })
    // })
    // })
    // })
    // });