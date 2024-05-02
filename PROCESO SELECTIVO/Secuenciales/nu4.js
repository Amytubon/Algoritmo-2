//pedir al numero un numero y mostrar su doble
//Algoritmo CalcularDoble
// Definir las variables para almacenar el número y su doble
//entero num1, dobleee
// Pedir al usuario que ingrese un número
//Escribir "Ingrese un número: "
//Leer num1
// Calcular el doble del número ingresado
//dobleee <- num1 * 2
// Mostrar el resultado
//Escribir "El doble de ", num1, " es ", dobleee
//FinAlgoritmo

const read = require('prompt-sync')();
const whrite = console.log 
function doble(){
let numero= read("ingrese un numero:");
 doblee = numero * 2;
whrite("el doble de"+" " + numero +" "+"es:"+ doblee);
}
doble()