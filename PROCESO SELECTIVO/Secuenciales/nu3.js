//solicitar al usuario dos numeros y mostrar la suma
//Algoritmo SumarNumeros
// Definir las variables para almacenar los números y el resultado
//entero nu1, nu2, resultado//
// Pedir al usuario que ingrese un número
//Escribir "Ingrese un número: "
//Leer nu1//
// Pedir al usuario que ingrese otro número
//Escribir "Ingrese otro número: "
//Leer nu2//
// Sumar los dos números
//resultado <- nu1 + nu2//
// Mostrar el resultado
//Escribir "El resultado es: ", resultado
//FinAlgoritmo

const read = require('prompt-sync')();
const whrite = console.log 
function suma(){
let numero = read("ingrese un numero:");
let numero2 =read("ingrese un segundo numero");
let resultado = parseInt(numero) + parseInt(numero2);
whrite(" la suma de sus numeros :"+ resultado);
}
suma()