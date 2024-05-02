//Dado un arreglo de 5 elementos presentar la suma de dichos elementos
//Algoritmo suma_elementos
//Definir arreglo[5] como entero
//Definir suma como entero
//suma <- 0//
//Escribir "Ingrese los 5 elementos del arreglo:"
//Para i <- 1 Hasta 5 Hacer
//    Escribir "Elemento ", i, ": "
//    Leer arreglo[i]
//    suma <- suma + arreglo[i]
//Fin Para//
//Escribir "La suma de los elementos es: ", suma
//FinAlgoritmo
// Definir una función que calcule la suma de los elementos de un arreglo
const read = require('prompt-sync')();
const whrite = console.log
function sumaElementos(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}


let arreglo = [];
for (let i = 0; i < 5; i++) {
    let elemento = read("Ingrese el elemento " + (i+1) + ":");

    arreglo.push(parseInt(elemento));
}

whrite("La suma de los elementos es: " + sumaElementos(arreglo));
