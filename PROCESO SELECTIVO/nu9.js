//Algoritmo divisiblePorDos
// Definir la variable numero como Entero
//Definir numero Como Entero//
// Solicitar al usuario que ingrese un número
//Escribir "Ingrese un número:"
//Leer numero//
// Verificar si el número es divisible por 2
//Si (numero MOD 2) == 0 Entonces
//    Escribir "El número es divisible por 2"
//SiNo
//    Escribir "El número no es divisible por 2"
//FinSi
//FinAlgoritmo

const read = require('prompt-sync')();
const whrite = console.log
function divi (){
let numero = read ("Ingrese un número:");

if (numero % 2 === 0) {
     whrite("El número es divisible por 2");
} else {
     whrite("El número no es divisible por 2");
}
}
divi()