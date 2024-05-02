// Definir la variable número como entero
//Definir número como entero
// Solicitar al usuario que ingrese un número
//Escribir "Ingresa un número:"
//Leer número
//Verificar si el número es mayor que 10
//Si número > 10 Entonces
//Escribir "El número ingresado es mayor que 10."
//Sino
//Escribir "El número ingresado es menor o igual que 10."
//Fin Si
// Fin del programa
//Fin

const read = require('prompt-sync')();
const whrite = console.log 
function tabla(){
 let numero = read("Por favor, ingresa un número:");
  numero= parseFloat(numero)
  if(numero > 10) {
    whrite =("El número ingresado es mayor que 10.");
 } else if(numero < 10) {
  whrite =("El número ingresado es menor que 10.");
 
  
 }
}
tabla()