// [1,2,3,4,6,5,3,1]
const respuestaReduce = arreglo
    .reduce(
        function (valorAcumulado:number, valorActual:{}, indice:number, arreglo:({})[]) {
            return (valorAcumulado + valorActual.nota);
        },
        100 // Acumulador
    );
console.log('respuestaReduce', respuestaReduce); // 100 - X = -46


