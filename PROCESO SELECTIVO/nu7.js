//Algoritmo CompararNombres
// Definir las variables nombre1 y nombre2 como cadena
//Definir nombre1, nombre2 como cadena
// Solicitar al usuario que ingrese el primer nombre
//Escribir "Ingrese el primer nombre:"
//Leer nombre1
// Solicitar al usuario que ingrese el segundo nombre
//Escribir "Ingrese el segundo nombre:"
//Leer nombre2
// Comparar los nombres
//Si nombre1 == nombre2 Entonces
//    Escribir "Los nombres son iguales"
//SiNo
//    Si nombre1 > nombre2 Entonces
//        Escribir "El primer nombre es mayor que el segundo"
//    SiNo
//        Escribir "El primer nombre es menor que el segundo"
//    Fin Si
//Fin Si
//FinAlgoritmo

const read = require('prompt-sync')();
const whrite = console.log
function nombre  (){
let nombre1 = read("Ingrese el primer nombre:");
let nombre2 = read("Ingrese el segundo nombre:");

if (nombre1 === nombre2) {
  whrite("Los nombres son iguales");
} else if (nombre1 > nombre2) {
  whrite("El primer nombre es mayor que el segundo");
} else {
  whrite("El primer nombre es menor que el segundo");
}
}
nombre()