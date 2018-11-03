// requires
const fs = require('fs');
// Otros ejemplos de uso de requires
// const fs = require('express');  // Paquetes o expansiones no nativos en node.js (son de otros usuarios y que nosotros utilizamos)
// const fs = require('./fs'); // son archivos que nosotros mismos creamos y que están en una carpeta de nuestra computadora


// Tabla de multiplicar de un numero (parametro)
let base = 6;
let data = '';

for (let i = 1; i <= 10; i++) {
    // console.log(`${base} * ${i} =  ${base * i}`);
    data += `${base} * ${i} =  ${base * i} \n`;
}

// const data = new Uint8Array(Buffer.from('Hello Mundo'));
fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base}, ha sido creado!`);
});