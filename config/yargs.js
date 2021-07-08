
//const { options } = require('yargs');

const { describe } = require('yargs');

const argv = require('yargs')
               .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
               })
               .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
               })
               .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,
                    describe: 'Indica hasta que número será la tabla'
               })
               .check( (argv, options) => {  // se realiza un chequeo para verificar si la base es un número
                    if(isNaN(argv.b && argv.h)){
                         throw 'ERROR:\nLa base y el límite tienen que ser un número'
                    }
                    return true;
               })
               .argv;

module.exports = argv;