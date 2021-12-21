//08-promesas.js
const fs = require('fs');

function promesaEsPar(numero) {
    const miPrimerPromesa = new Promise(
        (resolve, reject) => {
            if (numero % 2 == 0) {
                resolve(numero);
            } else {
                reject('No es par =(');
            }
        }
    )
    return miPrimerPromesa
}

function promesaElevarAlCuadrado(numero) {
    const miPrimerPromesa = new Promise(
        (resolve, reject) => {
            const numeroElevadoAlCuadrado = Math.pow(numero, 2);
            resolve(numeroElevadoAlCuadrado);
        }
    );
    return miPrimerPromesa
}

promesaEsPar(7)
    .then(
        (datosPromesa)=>{
            console.log(datosPromesa);
        }
    )       //Try
    .catch(
        (error)=>{
            console.log(error);
        }
    )       //catch
    .finally()      //finally

//Contacenacion de promesas

