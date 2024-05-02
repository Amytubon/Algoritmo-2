 //Pedir al usuario un número y mostrar si es múltiplo de 3.
//Proceso MultiploDeTres
// Definir la variable numero como Entero
//Definir numero Como Entero//
// Solicitar al usuario que ingrese un número
//Escribir "Ingrese un número:"
//Leer numero//
// Verificar si el número es múltiplo de 3
//Si numero % 3 == 0 Entonces
//    Escribir "El número", numero, "es múltiplo de 3."
//Sino
//    Escribir "El número", numero, "no es múltiplo de 3."
//FinSi
FinProceso

const read = require('prompt-sync')();
const whrite = console.log
function multiplo  (){
let numero = read("Ingrese un número:");

if (numero % 3 === 0) {
    whrite("El número", numero, "es múltiplo de 3.");
} else {
    whrite("El número", numero, "no es múltiplo de 3.");
}
}
multiplo()