// utilizamos destructuración para obtener la función del fichero
const { crearArchivo } = require('./multiplicar/multiplicar.js');
// Tabla de multiplicar de un numero (parametro)

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split("=")[1];

crearArchivo(base)
    .then(archivo => console.log(`Archivo Creado ${archivo}`))
    .catch(e => console.log(e));