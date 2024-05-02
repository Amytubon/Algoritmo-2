//Solicitar al usuario una temperatura en grados Celsius y 
//Algoritmo ConvertirCelsiusAFahrenheit
// Definir las variables para almacenar la temperatura en Celsius y Fahrenheit
//Real celsius, fahrenhei
// Escribir el mensaje para solicitar al usuario una temperatura en grados Celsius
//Escribir "Por favor ingresa la temperatura en grados Celsius:
// Leer la temperatura en grados Celsius ingresada por el usuario
//Leer celsiu
// Convertir la temperatura de Celsius a Fahrenheit
//fahrenheit <- (celsius * 9/5) + 3
// Mostrar la temperatura en grados Fahrenheit
//Escribir "La temperatura en grados Fahrenheit es: ", fahrenheit
//FinAlgoritmo

const read = require('prompt-sync')();
const whrite = console.log 
function grado(){
let celsius = read("Ingrese la temperatura en grados Celsius:");
let fahrenheit = (celsius * 9/5) + 32;
whrite("La temperatura en grados Fahrenheit es: " + fahrenheit);
}
grado()