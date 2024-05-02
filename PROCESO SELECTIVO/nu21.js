//ado un arreglo de 3 elementos indicar cuál de los elementos es el mayor
//Algoritmo mayor_elemento
//Definir arreglo[3] como entero
//mayor <- arreglo[1]//
//Escribir "Ingrese los 3 elementos del arreglo:"
//Para i <- 1 Hasta 3 Hacer
//Escribir "Elemento ", i, ": "
//Leer arreglo[i]
//Si arreglo[i] > mayor Entonces
//    mayor <- arreglo[i]
//Fin Si
//Fin Para//
//Escribir "El mayor elemento es: ", mayor
//FinAlgoritmo
// Definir una función que encuentre el mayor elemento en un arreglo
const read = require('prompt-sync')();
const whrite = console.log
function encontrarMayor(arreglo) {
    let mayor = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }
    return mayor;
}


let arreglo = [];
for (let i = 0; i < 3; i++) {
    let elemento = parseInt(read("Ingrese el elemento " + (i+1) + ":"));
    arreglo.push(elemento);
}

whrite("El mayor elemento es: " + encontrarMayor(arreglo));
