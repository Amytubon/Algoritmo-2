//Solicitar al usuario una distancia en metros y mostrarla en centímetros.
//Algoritmo ConvertirDistancia
// Definir las variables para almacenar la distancia en metros y centímetros
//Real metros, centimetros
// Solicitar al usuario que ingrese la distancia en metros
//Escribir "Por favor, ingresa la distancia en metros:"
//Leer metros
// Convertir la distancia de metros a centímetros
//centimetros <- metros * 100
// Mostrar la distancia en centímetros
//Escribir "La distancia en centímetros es:", centimetros  
//FinAlgoritmo

const read = require('prompt-sync')();
const whrite = console.log 
function dista(){
let distanciaMetros = read ("Por favor, ingresa una distancia en metros:");

// Convertir la distancia de metros a centímetros
let distanciaCentimetros = distanciaMetros * 100;


whrite("La distancia ingresada en centímetros es: " + distanciaCentimetros + " cm");
}
dista()