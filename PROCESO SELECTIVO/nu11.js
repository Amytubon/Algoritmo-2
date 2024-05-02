//Proceso NumeroUnico
//Definir la variable numero como Entero
//Definir numero Como Entero//
//Solicitar al usuario que ingrese un número
//Escribir "Ingrese un número:"
//Leer numero//
//Verificar si el número es de un solo dígito
//Si numero >= 0 y numero <= 9 Entonces
//    Escribir "El número ingresado es de un solo dígito."
//SiNo
//    Escribir "El número ingresado no es de un solo dígito."
//FinSi
//FinProceso

const read = require('prompt-sync')();
const whrite = console.log
function digitos(){
let numero = read("Ingrese un número:");
numero = parseInt(numero);

if (numero >= 0 && numero <= 9) {
    whrite("El número ingresado es de un solo dígito.");
} else {
    whrite("El número ingresado no es de un solo dígito.");
}
}
digitos()