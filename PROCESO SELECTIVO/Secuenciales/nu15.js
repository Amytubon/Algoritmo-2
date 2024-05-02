//Dado un arreglo de 5 elementos, cambiar los valores el primer y 
//último elemento entre sí
//Algoritmo CambiarPrimerUltimo
//Definir arreglo[5]: Entero
//Definir temp: Entero
// Supongamos que el arreglo ya tiene valores asignados
//Mostrar el arreglo original
//Escribir "Arreglo original:", arreglo
// Cambiar los valores del primer y último elemento entre sí
//temp <- arreglo[1]
//arreglo[1] <- arreglo[5]
//arreglo[5] <- temp
// Mostrar el arreglo después del intercambio
//Escribir "Arreglo después del intercambio:", arreglo
//FinAlgoritmo
// Definir un arreglo con 5 elementos
const read = require('prompt-sync')();
const whrite = console.log 
function arre(){
let arreglo = [1, 2, 3, 4, 5];

("Arreglo original:", arreglo);

let temp = arreglo[0];
arreglo[0] = arreglo[arreglo.length - 1];
arreglo[arreglo.length - 1] = temp;

whrite("Arreglo después del intercambio:", arreglo);
}
arre()