const fs = require('fs');

/*
Hacer una funcion que me acepte como parametro una variable
con el path del archivo y el contenido a agregar al contenido
del archivo. La funcion debe tomar estos dos parametros y leer
el archivo y añadir el texto al final del achivo.
*/
function escribirArchivo(path, contenidoNuevo) {
    fs.readFile(
        path,
        'utf-8',
        (error, contenido) => {
            if(error){
                console.error({mensaje:'error leyendo contenido', error: error});
            }else{
                fs.writeFile(
                    path,
                    contenido + "\n" + contenidoNuevo,
                    'utf-8',
                    (error) => {
                        if(error){
                            console.error({mensaje:'error escribiendo contenido', error: error});
                        }else{
                            console.log(contenidoNuevo);
                        }
                    }
                );
            }
        }
    );
}

escribirArchivo(
  './06-ejemplo.txt',
  'Buenas tardes'
);