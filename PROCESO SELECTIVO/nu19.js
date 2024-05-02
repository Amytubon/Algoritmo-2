//	Dado un arreglo de 5 elementos indicar si el primero elemento es mayor que el último elemento.
//Algoritmo CompararElementos
//Dimension arreglo[5]
//Escribir "Ingrese los 5 elementos del arreglo:"
//Para i <- 1 Hasta 5 Hacer
//   Escribir "Elemento ", i, ":"
//   Leer arreglo[i]
//FinPara
//Si arreglo[1] > arreglo[5] Entonces
//   Escribir "El primer elemento es mayor que el último elemento"
//Sino
//   Escribir "El primer elemento no es mayor que el último elemento"
//FinSi
//FinAlgoritmo
const read = require('prompt-sync')();
const whrite = console.log
 function compararElementos(arreglo) {
   if (arreglo[0] > arreglo[arreglo.length - 1]) {
      return "El primer elemento es mayor que el último elemento";
   } else {
      return "El primer elemento no es mayor que el último elemento";
   }
}

// Ejemplo de uso
let arreglo = [5, 10, 15, 20, 25];
let resultado = compararElementos(arreglo);
whrite(resultado);