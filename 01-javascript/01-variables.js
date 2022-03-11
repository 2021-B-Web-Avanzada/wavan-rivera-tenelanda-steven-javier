// 01-javascript/
//              / 01-variables.js
// Mutables e Inmutables

// Mutables
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 5;
numeroDos = 8;
numeroUno = false;
numeroDos = true;

// Inmutables
const configuracionArchivos = "PDF";
// configuracionArchivos = "XML";
// Vamos a preferir CONST > LET > NUNCA VAR!

// Tipos de variables
const numero = 1; // number
const sueldo = 1.2; // number
const texto = "Adrian"; // string
const apellido = 'Eguez'; // string
const booleanooo = false; // boolean
const hijos = null; // object
const zapatos = undefined; // undefined
console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellido);
console.log(typeof booleanooo);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof Number("asd")); // number
console.log(Number("asd")); // NaN

// Truty Falsy
if (true == true) {
    console.log("Es verdadero"); //!
} else {
    console.log("Es Falso");
}

if (true == false) {
    console.log("Es verdadero");
} else {
    console.log("Es Falso"); //!
}

if ("") {
    console.log("String vacio Es verdadero");
} else {
    console.log("String vacio Es Falsy"); //!
}
if ("Adrian") {
    console.log("String con datos Es truty"); //!
} else {
    console.log("String con datos Falso");
}

if(-1){
    console.log("Negativos Es truty");//!
}else{
    console.log("Negativos Es Falso");
}
if(0){
    console.log("Cero Es truty");
}else{
    console.log("Cero Es Falso");//!
}
if(1){
    console.log("Positivos Es truty");//!
}else{
    console.log("Positivos Es Falso");
}

if(null){
    console.log("Null Es truty");
}else{
    console.log("Null Es Falso"); // Falsy
}
if(undefined){
    console.log("Undefined Es truty");
}else{
    console.log("Undefined Es Falso");  // Falsy
}
// Orden de importancia
// 1) "const"
// 2) "let"
// 3) X -> "var"

// Objetos Js (JSON) - Arreglos

const adrian = {
    nombre: "Adrian", // llave: valor,
    apellido: 'Eguez',
    edad: 32,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa: {
        color: 'plomo',
        talla: '40',
    },
    mascotas: ['Cachetes', 'Pequitas', 'Panda'],
};
// Acceder a las propiedades del objeto
adrian.nombre; // "Adrian"
adrian.apellido; // 'Eguez'
adrian["nombre"]; // "Adrian"
console.log(adrian);
adrian.nombre = "Vicente";
console.log(adrian);
adrian["nombre"] = "Adrian";
adrian.sueldo; // undefined
console.log(adrian.sueldo);
adrian.sueldo = 1.2;
console.log(adrian.sueldo); // 1.2
adrian["gastos"] = 0.8;
console.log(adrian.gastos); // 0.8
adrian.nombre = undefined;
console.log(adrian);
console.log(Object.keys(adrian));
console.log(Object.values(adrian));
delete adrian.nombre; // Eliminar la llave "nombre"
console.log(adrian);

// Variables por valor o referencia?
// Variables por valor en JS son las primitivas: number, string, boolean
let edadAdrian = 32;
let edadVicente = edadAdrian; // Guardamos una primitiva en otra variable
                              // Variables por valor
console.log(edadAdrian); // 32
console.log(edadVicente); // 32
edadAdrian = edadAdrian + 1;
console.log(edadAdrian); // 33
console.log(edadVicente); // 32

// Variables por referencia: object ({},[])
// let rafael = {
//     nombre: "Rafael"
// };
// let lenin = rafael;
// console.log(rafael);
// console.log(lenin);
// lenin.nombre = "Lenin";
// console.log(rafael);
// console.log(lenin);
// delete rafael.nombre;
// console.log(rafael);
// console.log(lenin);
let rafael = {
    nombre: "Rafael"
};
let lenin = Object.assign({}, rafael);
console.log(rafael);
console.log(lenin);
lenin.nombre = "Lenin";
delete rafael.nombre;
console.log(rafael);
console.log(lenin);
let arregloNumeros = [1,2,3,4,5];
let arregloClonado = Object.assign([], arregloNumeros);
console.log(arregloNumeros);
console.log(arregloClonado);
arregloNumeros[0] = 200;
arregloClonado[0] = 100;
console.log(arregloNumeros);
console.log(arregloClonado);