//Algoritmo DeterminarVocalConsonante
//Definir caracter Como Caracter//
//Escribir "Ingrese un carácter:"
//Leer caracter//
//caracter <- ConvertirAMinuscula(caracter)//
//Si caracter = "a" O caracter = "e" O caracter = "i" O caracter = "o" O caracter = "u" Entonces
//Escribir "El carácter ingresado es una vocal."
//Sino
//Escribir "El carácter ingresado es una consonante."
//FinSi
//FinAlgoritmo

// Solicitar al usuario un carácter
// Convertir el carácter a minúsculas para facilitar la comparación
// Verificar si el carácter es una vocal o consonante
const read = require('prompt-sync')();
const whrite = console.log
function cara(){
let caracter = read("Por favor ingresa un carácter:");
caracter = caracter.toLowerCase();
if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u") {
    whrite("El carácter ingresado es una vocal.");
} else {
    whrite("El carácter ingresado es una consonante.");
}
}
cara()