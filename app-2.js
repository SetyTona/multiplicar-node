// utilizamos destructuración para obtener la función del fichero
const { crearArchivo } = require('./multiplicar/multiplicar.js');
// Tabla de multiplicar de un numero (parametro)
let base = '7';

crearArchivo(base)
    .then(archivo => console.log(`Archivo Creado ${archivo}`))
    .catch(e => console.log(e));