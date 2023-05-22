console.log('Tarea 1');
console.log('Tarea 2');
console.log('Tarea 3');
setTimeout(() => {
    console.log('Tarea 4');
}, 2000)
console.log('Tarea 5');

//Callbacks
const suma = (a,b, cb) => {
    cb(a + b)
}

suma(1,2, imprimir)

//
const getData = (cb,cbError) => {
    if(false) {
        setTimeout(() => {
            cb({
                nombre:'Lucía',
                apellido: 'Conde',
            })
        }, 3000);
    } else {
        cbError(new Error('No se pudo obtener los datos'))
    }
};
const imprimirData = (data) => console.log(data);
const errorhandler = (error) => console.log(error);

getData(imprimirData, errorhandler)

/**
 * Promises
 */
var getdata1 = (error) => new Promise ((resolve, reject)=> { //las funciones expresisvas tienen implícito el return
    if (!error) {
        resolve({
            nombre: 'Ronald',
            apellido: 'Conde',
        })
    }
    })