//Algoritmo MayorMenorEdad
// Definir la variable edad como entero
//Definir edad como entero
// Solicitar al usuario que ingrese su edad
//Escribir "Por favor, ingresa tu edad:"
//Leer edad
// Verificar si la edad es mayor o igual a 18
//Si edad >= 18 Entonces
//    Escribir "Eres mayor de edad."
//Sino
//    Escribir "Eres menor de edad."
//FinSi
//FinAlgoritmo

const read = require('prompt-sync')();
const whrite = console.log 
function mayor(){
let edad = read ("Por favor, ingresa tu edad:");
if (edad >= 18) {
  whrite("Eres mayor de edad. ¡Bienvenido!");
} else {
  whrite("Eres menor de edad. Por favor, ten en cuenta las restricciones de edad.");
}
}
mayor()