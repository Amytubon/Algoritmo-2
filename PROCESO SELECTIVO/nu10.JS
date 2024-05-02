//Algoritmo MayorMenor
// definir como entero
// Solicitar al usuario que ingrese un número
//Escribir "Ingrese un número:"
//Leer numero//
//Si numero > 100 Entonces
// Verificar si el número es mayor, menor o igual a 100
//Escribir "El número es mayor a 100"
//Sino Si numero < 100 Entonces
//Escribir "El número es menor a 100"
//Sino
//Escribir "El número es igual a 100"
//Fin Si
//FinAlgoritmo
const read = require('prompt-sync')();
const whrite = console.log
function mayor (){
let numero = read("Ingrese un número:");

if (numero > 100) {
    whrite("El número es mayor a 100");
} else if (numero < 100) {
    whrite("El número es menor a 100");
} else {
    whrite("El número es igual a 100");
}
}
mayor()