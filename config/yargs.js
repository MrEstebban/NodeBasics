const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multilicar', opts)
    .command('crear', 'Crea un archivo que contiene la tabla de multilicar', opts)
    .help()
    .argv;

module.exports = {
    argv
};