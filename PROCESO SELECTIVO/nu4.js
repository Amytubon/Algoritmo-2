//Algoritmo ClasificarNumero
// Definir la variable número como entero
//Definir numero como entero
// Solicitar al usuario que ingrese un número
//Escribir "Por favor, ingresa un número:"
//Leer numero
// Verificar si el número es mayor que 0
//Si numero > 0 Entonces
//    Escribir "El número ingresado es positivo."
//Sino
//    // Verificar si el número es menor que 0
//    Si numero < 0 Entonces
//        Escribir "El número ingresado es negativo."
//    Sino
//        Escribir "El número ingresado es cero."
//    FinSi
//FinSi  
//FinAlgoritmo

const read = require('prompt-sync')();
const whrite = console.log 
function pon(){
let number = read("Please enter a number:");
if (number > 0) {
    whrite("el numero es positivo.");
} else if (number < 0) {
    whrite("el numero es negativo.");
} else {
    whrite("el numero es cero.");
}
}
pon()