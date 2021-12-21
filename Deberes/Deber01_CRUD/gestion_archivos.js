const fs = require ('fs');

const escribir_archivo = (datos) => {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile ('./archivo.txt',
                JSON.stringify(datos, null, '\t'),
                'utf-8',
                (error) => {
                    if (error) {
                        reject(error)
                    } else {
                        console.log('Escritura del archivo realizada con exito')
                        resolve();
                    }
                })
        }
    )
}
module.exports = {escribir_archivo}