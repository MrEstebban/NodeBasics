const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
const { argv } = require('./config/yargs.js');
var colors = require('colors');

let command = argv._[0];

switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(`Tabla del ${argv.base}:\n${tabla.green}`))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.red))
            .catch(e => console.log(e))
        break;
    default:
        console.log('Command not recogniced');
        break;
}


//console.log(argv.base);