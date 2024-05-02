//Pedir 5 números y asignarlos en un arreglo
//Algoritmo AsignarNumeros
// Definir un arreglo para almacenar los números
//Definir numeros[5]: Entero
//Definir i: Entero
// Pedir al usuario que ingrese 5 números
//Para i <- 1 Hasta 5 Hacer
//Escribir "Introduce el número ", i, ": "
// Convertir el número ingresado a tipo numérico y agregarlo al arreglo
//Leer numeros[i]
//FinPara
// Mostrar los números ingresados
//Escribir "Los números ingresados son:"
//Para i <- 1 Hasta 5 Hacer
//Escribir numeros[i]
//FinPara
//FinAlgoritmo
const read = require('prompt-sync')();
const whrite = console.log 
function nu(){
let numeros = [];

for (let i = 0; i < 5; i++) {
    let numero = read("Introduce el número " + (i+1) + ":");
  
    numeros.push(parseFloat(numero));
}


whrite("Los números ingresados son:");
for (let i = 0; i < numeros.length; i++) {
    whrite(numeros[i]);
}
}
nu()