// Ejemplo del video de la clase 34, que va con el fichero de soporte ./multiplicar/multiplicar.js
// Utiliza la configuración de los parametros que se le pueden pasar, en la función ./config/yargs.js

// utilizamos destructuración para obtener la función del fichero
const { crearArchivo } = require('./multiplicar/multiplicar.js');
const { listarArchivo } = require('./multiplicar/multiplicar.js');
const argv = require('./config/yargs').argv;
const color = require('colors');
const colors = require('colors/safe');

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
            .then(archivo => console.log(colors.white('Archivo Creado: '), colors.green(`${archivo}`)))
            .catch(e => console.log(e));
        break;

    case 'borrar':
        console.log(comando);
        break;


}