// solicitar al usuario su edad y mostrar un mensaje indicando año tiene el proximo año
//Algoritmo CalcularEdadProximoAnio
// Definir las variables para almacenar la edad actual y la edad del próximo año
//entero edad, edaddelsiguienteanio
// Pedir al usuario que ingrese su edad actual
//Escribir "Ingrese su edad actual: "
//Leer edad
// Calcular la edad del próximo año
//edaddelsiguienteanio <- edad + 1
// Mostrar el resultado
//Escribir "El próximo año tendrás ", edaddelsiguienteanio, " años."
//FinAlgoritmo

const read = require('prompt-sync')();
const whrite = console.log 
function edad(){
let edad= read("ingrese su edad:");
const edadsiguiente = parseInt(edad)+1;
whrite("el proximo año "+" " + edadsiguiente+ " "+"años.");
}
edad()