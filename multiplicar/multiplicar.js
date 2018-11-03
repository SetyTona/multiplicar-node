// Ejemplo del video de la clase 34, que es llamado desde el fichero: app-3-yargs2.js
// Ejemplo del video de la clase 35, que es llamado desde el fichero: app-3-yargs3.js

// requires
const fs = require('fs');
// Otros ejemplos de uso de requires
// const fs = require('express');  // Paquetes o expansiones no nativos en node.js (son de otros usuarios y que nosotros utilizamos)
// const fs = require('./fs'); // son archivos que nosotros mismos creamos y que están en una carpeta de nuestra computadora

const color = require('colors');

// si pongo el parametro limit, con la nomenclatura limite por limite = 10, significa que como default value, tendrá 10.
let listarArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido base: ${base}, no es un numero.`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido limite: ${limite}, no es un numero.`);
            return;
        }

        console.log('===================================='.green);
        console.log(`============ Tabla de ${base} ============`.green);
        console.log('===================================='.green);

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} =  ${base * i} \n`;
        }

        // Listamos
        console.log(data);
        // devolvemos ok
        resolve(`tabla-${base}.txt`);
    });
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        // Comprobamos que la base sea un numero
        // Si no lo es, devolvemos el reject
        // y añadimos un return detrás para que no continue
        // Recordemos que sin el return, continuaria despues 
        // del reject
        if (!Number(base)) {
            reject(`El valor introducido ${base}, no es un numero.`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido limite: ${limite}, no es un numero.`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            // console.log(`${base} * ${i} =  ${base * i}`);
            data += `${base} * ${i} =  ${base * i} \n`;
        }

        // const data = new Uint8Array(Buffer.from('Hello Mundo'));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-del-${1}-al-${limite}.txt`);
        });
    });
}

// publica la funció per fer-la servir en un altre fitxer
module.exports = {
    crearArchivo,
    listarArchivo
}

// para publicar varias funciones
// publica la funció per fer-la servir en un altre fitxer
// module.exports = {
//     crearArchivo,
//     funcion1,
//     funcion2,
//     funcion3,
//     ....,
//     ..
// }