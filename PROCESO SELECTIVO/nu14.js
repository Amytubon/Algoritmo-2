//Algoritmo AprobacionExamen
// Definir la variable nota como Entero
//Definir nota Como Entero//
// Solicitar al usuario que ingrese su nota en el examen
//Escribir "Ingrese su nota en el examen:"
//Leer nota//
// Verificar si la nota es mayor o igual a 60
//Si nota >= 60 Entonces
//    Escribir "¡Felicidades! Ha aprobado el examen."
//Sino
//    Escribir "Lo siento, ha reprobado el examen."
//FinSi
//FinAlgoritmo

const read = require('prompt-sync')();
const whrite = console.log
function nota (){
let nota = read("Ingrese su nota en el examen:");

if (nota >= 60) {
    whrite("¡Felicidades! Ha aprobado el examen.");
} else {
    whrite("Lo siento, ha reprobado el examen.");
}
}
nota()