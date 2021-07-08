
// Se usa desestructuración para llamar los objetos o funciones de archivos externos
const {crearArchivoPromesa} = require('./helpers/multiplicar')
const argv = require('./config/yargs');
const colors = require('colors');
console.clear();

//console.log(argv);

crearArchivoPromesa(argv.b, argv.h, argv.l)
     .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
     .catch( err => console.log(err));   

//console.log(process.argv);

//console.log('base: yargs', argv.b);

// const [, , arg3 = 'base=7'] = process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(base);

//const base = 4



