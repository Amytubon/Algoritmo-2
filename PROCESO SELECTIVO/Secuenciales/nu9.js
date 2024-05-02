//Solicitar al usuario un número y mostrar su tabla de multiplicar del 1 al 10.
//Algoritmo TablaMultiplicar
// Definir la variable para almacenar el número
//entero numero
// Solicitar al usuario que ingrese un número
//Escribir "Por favor, ingrese un número:"
//Leer numero
// Mostrar la tabla de multiplicar del número ingresado
//Para i desde 1 hasta 10 hacer
//    Escribir numero, " x ", i, " = ", numero * i
//FinPara
//FinAlgoritmo

const read = require('prompt-sync')();
const whrite = console.log 
function tabla(){

let numero = read("Por favor, ingrese un número:");


for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
}
}
tabla()