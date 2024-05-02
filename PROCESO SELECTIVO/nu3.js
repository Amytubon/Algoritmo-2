//definir num,como entero
//escribir ##ingrese un numwero
// Pedir al usuario un número
// si(num%2)
// Verificar si el número es par o impa
 //escribir " el numero es par"
 // sino 
// escribir " el numero es impar"
// escribir "el numero es" num
// Pedir al usuario un número
const read = require('prompt-sync')();
const whrite = console.log 
function paroimpar(){
let numero = read ("Por favor, ingresa un número:");

if(numero % 2 === 0) {
    whrite("El número ingresado es par.");
} else {
    whrite("El número ingresado es impar.");
}
}
paroimpar()