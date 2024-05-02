//Algoritmo CompararNumeros
// Definir las variables num1 y num2 como Entero
//Definir num1, num2 como Enter//
// Solicitar al usuario que ingrese el primer número
//Escribir "Ingrese el primer número:"
//Leer num//
// Solicitar al usuario que ingrese el segundo número
//Escribir "Ingrese el segundo número:"
//Leer num//
// Verificar si los números son iguales
//Si num1 = num2 Entonces
//    Escribir "Los números son iguales"
//Sino
//    Escribir "Los números son diferentes"
//FinSi
//FinAlgoritmo

const read = require('prompt-sync')();
const whrite = console.log
function igual(){
let numero1 = read ("Por favor, ingresa el primer número:");
let numero2 = read ("Ahora, ingresa el segundo número:");

if(numero1 === numero2) {
  whrite("Los números son iguales.");
} else {
  whrite("Los números son diferentes.");
}
}
igual()