// Ejemplo del video de la clase 34, que va con el fichero de soporte ./multiplicar/multiplicar.js

// utilizamos destructuración para obtener la función del fichero
const { crearArchivo } = require('./multiplicar/multiplicar.js');
const { listarArchivo } = require('./multiplicar/multiplicar.js');

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
    .command('crear', 'Crea el fichero de la tabla de multiplicar', {
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


// Tabla de multiplicar de un numero (parametro)
let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo listado ${archivo}`))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado ${archivo}`))
            .catch(e => console.log(e));
        break;

    case 'borrar':
        console.log(comando);
        break;


}