// 01-variables.ts

let nombre: string = 'Steven'; // primitivo
let nombre2: String = 'Steven2'; // Clase String
// nombre = 1;
nombre = 'Javier'
let edad: number = 32;
let casado: boolean = false;
let fecha: Date = new Date();
let sueldo: number;
sueldo = 12.4;

// Duck Typing
let apellido = 'Rivera'; // string ->
apellido = 'Steven'; // igual a otros string
apellido.toUpperCase(); // metodos string

let marihuana: any = 2;
marihuana = '2';
marihuana = true;
marihuana = () => '2';

let edadMultiple: number | string | Date = 2;
edadMultiple = '2';
edadMultiple = 2222;
edadMultiple = 'dos';
edadMultiple = new Date();
// edadMultiple = true;