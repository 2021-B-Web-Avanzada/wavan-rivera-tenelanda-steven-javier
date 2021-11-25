// 06-callbacks.js

const fs = require('fs'); // file system
console.log('Primero');
// 06-ejemplo.txt -> Hola


console.log('TERCERO')

fs.readFile(
    './01-variables.js',
    'utf-8',
    (error, contenido) => {
        if(error){
            console.error({mensaje:'error leyendo contenido', error: error});
        }else{
            console.log(contenido);
            fs.readFile(
                './06-ejemplo.txt',
                'utf-8',
                (error, contenido) => {
                    if(error){
                        console.error({mensaje:'error leyendo contenido', error: error});
                    }else{
                        console.log(contenido);
                    }
                }
            );
        }
    }
);
