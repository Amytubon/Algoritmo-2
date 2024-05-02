//Dado un arreglo de 5 elementos indicar si el primero elemento es par y el último elemento es impar.
//Algoritmo verificarParImpar
//Definir arreglo[5] Como Entero
//Definir primerElemento, ultimoElemento Como Entero
//
//Escribir "Ingrese los 5 elementos del arreglo:"
//Para i <- 0 Hasta 4 Hacer
//   Escribir "Elemento ", i+1, ":"
//   Leer arreglo[i]
//Fin Para
//
//primerElemento <- arreglo[0]
//ultimoElemento <- arreglo[4]
//
//Si primerElemento % 2 == 0 Entonces
//   Escribir "El primer elemento es par"
//Sino
//   Escribir "El primer elemento es impar"
//Fin Si
//
//Si ultimoElemento % 2 == 0 Entonces
//   Escribir "El último elemento es par"
//Sino
//   Escribir "El último elemento es impar"
//Fin Si
//Fin Algoritmo
const read = require('prompt-sync')();
const whrite = console.log
function verificarParImpar() {
   let arreglo = [];
   let primerElemento, ultimoElemento;
   
   whrite("Ingrese los 5 elementos del arreglo:");
   for (let i = 0; i < 5; i++) {
     whrite("Elemento " + (i+1) + ":");
      arreglo[i] = parseInt(read());
   }
   
   primerElemento = arreglo[0];
   ultimoElemento = arreglo[4];
   
   if (primerElemento % 2 === 0) {
     whrite("El primer elemento es par");
   } else {
      whrite("El primer elemento es impar");
   }
   
   if (ultimoElemento % 2 === 0) {
      whrite("El último elemento es par");
   } else {
     whrite("El último elemento es impar");
   }
}

verificarParImpar();