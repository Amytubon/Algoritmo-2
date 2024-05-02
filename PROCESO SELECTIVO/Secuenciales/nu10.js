//Pedir al usuario dos números y mostrar el mayor.
//Algoritmo MostrarMayor
//Definir num1, num2, mayor Como Entero
//Escribir "Por favor, ingresa el primer número:"
//Leer num1
//Escribir "Ahora, ingresa el segundo número:"
//Leer num2
//Si num1 > num2 Entonces
//mayor = num1
// Sino
// mayor = num2
//FinSi
//Escribir "El número mayor entre ", num1, " y ", num2, " es: ", mayor 
//FinAlgoritmo
const read = require('prompt-sync')();
const whrite = console.log 
function igual(){

let num1 = read("Por favor, ingresa el primer número:");
let num2 = read("Ahora, ingresa el segundo número:");

if (num1 > num2) {
  whrite("El número mayor es: " + num1);
} else if (num2 > num1) {
  whrite("El número mayor es: " + num2);
} else {
  whrite("Los números son iguales.");
}}

igual()