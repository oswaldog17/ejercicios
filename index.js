/* const os = require('os');

console.log(os.platform());
console.log(os.release());
console.log('Free men:', os.freemem(), 'bytes');
console.log('Total men:', os.totalmem(), 'bytes');
*/

const fs = require('fs'); // permite trabajar con los archivos del sistema operativo
fs.writeFile('./texto.txt', 'linea uno', function(err) {
    if (err) {
        console.log(err);
    }
    console.log('Archivo creado');
});

console.log('Última línea de código');