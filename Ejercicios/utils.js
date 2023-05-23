
// var Dia = 'Miércoles'

class utils {
    AreaRectangulo(base,altura){
        // if(base > 0 && altura > 0) {
        //     return base * altura
        // }else if ( base <= 0 || altura <= 0) {
        //     return 'Error, números negativos'
        // } else {
        //     return 'Datos no válidos'
        // }
        var resultado = base * altura;
        console.log(resultado);
    }
    Segundosdia(dia) {
        var min = 60;
        var h = min * 60;
        var dia = h *24
        console.log(dia);
    }
    Grados(C) {
        if(C > 0) {
            return (C * 9 / 5) + 32; 
        }
        else {
            console.log('Datos no válidos');
        }
    }
    Dia(Dia) {
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
    }
    preciocompra(precio) {
        if (precio <= 10 && precio > 0 && typeof precio !== 'string') {
            return precio + 3;
        } else if (precio > 10 && precio <= 20 && typeof precio !== 'string' ) {
            return(precio + 5);
        } else if (precio > 20 && precio <= 50 && typeof precio !== 'string'){
            return(precio + 7)
        } else if (precio > 50 && typeof precio !== 'string') {
            return('El total de la compra es:' + precio + '€')
        } else {
            console.log('Datos no válidos');
        } 
    }
    Tablamultiplicar() {
        for(let i = 2; i <= 12; i++) {
            console.log(`Tabla del ${i}:` );
            for(let y = 1; y <= 10; y++) {
                console.log(`${i} x ${y} = ${i * y}`);
            }
            console.log(' ');
        }
    }
    Factorial(numero) {
        let resultado = 1;
        for(let i = 2; i <= numero; i ++) {
            resultado *= i;
        }
        return resultado;
    }
    Mayusculas(cadena) {
        return cadena.toUpperCase();
    }
    Sumadenumeros(num1, num2) {
        let suma = 0;
        const inicio = Math.min(num1, num2);
        const fin = Math.max(num1, num2);
        for (let i = inicio; i <= fin; i++) {
            suma += i;
        }
        return suma;
    }
    Repetirletras(letras) {
        let cadena = "";
        for ( let i = 0; i < letras.length; i++) {
            cadena += letras[i] + letras[i]
        }
        return cadena;
    }
    Sumamatriz(matriz) {
        let suma = 0;
        for (let i = 0; i < matriz.length; i++){
            for (let x = 0; x < matriz[i].length; x++) {
                suma += matriz[i][x];
            }
        }
        return suma;
    }
}
export default utils;
// if(typeof precio !== 'string') {
//     console.log('El total de la compra es:' + precio + '€');
// } else {
//     console.log('Ha habido un problema con el tipo de dato del precio');
// }

function factorialIterativo(num) {
    let factorial = 4;

    for (let i = 2; i <= num; i++) {
      factorial *= i;
    }

    return factorial;
}