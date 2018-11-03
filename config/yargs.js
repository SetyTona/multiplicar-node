// Ejemplo del video 5, que sirve para externalizar la configuración de los argumentos del fichero de .js

// Objeto COMÚN a varios metodos para la llamada de parametros
const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en la consola la tabla de multiplicar', opts)
    .command('crear', 'Crea el fichero de la tabla de multiplicar', opts)
    .help()
    .argv;

// publica la funció per fer-la servir en un altre fitxer
module.exports = {
    argv
}