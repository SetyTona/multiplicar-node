const argv = require('yargs')
    .command('listar', 'Imprime en la consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;


// utilizamos destructuración para obtener la función del fichero
const { crearArchivo } = require('./multiplicar/multiplicar.js');
// Tabla de multiplicar de un numero (parametro)

let argv2 = process.argv;

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo Creado ${archivo}`))
//     .catch(e => console.log(e));

console.log(argv);