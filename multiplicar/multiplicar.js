//requireds
const fs = require('fs');

//modulo.exports.crearArchivo(base)
function crearArchivo(base, limite = 10) {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La base indicada no es un número');
            return;
        }

        if (!Number(limite)) {
            reject('El límite indicado no es un número');
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {

            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);

            }
        });
    });
}

function listarTabla(base, limite = 10) {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('La base indicada no es un número');
            return;
        }

        if (!Number(limite)) {
            reject('El límite indicado no es un número');
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        resolve(data);
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}