//Dado un arreglo de 5 elementos, presentar el primero, el del medio y el ultimo
//Algoritmo PresentarElementos
//Definir arreglo[5]: Entero
// Definir un arreglo con 5 elementos
//Definir primero, medio, ultimo: Entero
// Supongamos que el arreglo ya tiene valores asignados
// Mostrar el primer elemento
//primero <- arreglo[1]
//Escribir "El primer elemento es:", primero
// Mostrar el elemento del medio
//medio <- arreglo[3]
//Escribir "El elemento del medio es:", medio
// Mostrar el último elemento
//ultimo <- arreglo[5]
//Escribir "El último elemento es:", ultimo
//FinAlgoritmo

const read = require('prompt-sync')();
const whrite = console.log 
function prese(){
let arreglo = [1, 2, 3, 4, 5];

whrite("El primer elemento es: " + arreglo[0]);

let indiceMedio = Math.floor(arreglo.length / 2);
whrite("El elemento del medio es: " + arreglo[indiceMedio]);

whrite("El último elemento es: " + arreglo[arreglo.length - 1]);
} 
prese()