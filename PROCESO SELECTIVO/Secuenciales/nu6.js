//Pedir al usuario dos números y mostrar el resultado de multiplicarlos
//Algoritmo MultiplicarNumeros
// Definir las variables para almacenar los números y el resultado
//entero num1, num2, resultado//
// Pedir al usuario que ingrese el primer número
//Escribir "Ingrese un número: "
//Leer num1//
// Pedir al usuario que ingrese el segundo número
//Escribir "Ingrese otro número: "
//Leer num2//
// Calcular el resultado de la multiplicación
//resultado <- num1 * num2//
// Mostrar el resultado de la multiplicación
//Escribir "El resultado de la multiplicación es: ", resultado
//FinAlgoritmo

 const read = require('prompt-sync')();
const whrite = console.log 
function nu6(){
let num1 = read("ingrese un numero :");
let num2 = read("ingrese segundo numero:");
 let resultado = num1 * num2 ;
 whrite("el resultado de la multiplicacio es" +" "+ resultado );
}
nu6()