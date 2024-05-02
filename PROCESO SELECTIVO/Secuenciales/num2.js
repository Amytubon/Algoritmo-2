// pedir  dos palabras  y presentarlas concatenadas 
//Algoritmo ConcatenarPalabras
// Definir las variables para almacenar las palabras y el resultado
//caracter palabra1, palabra2, resultado
// Pedir al usuario que ingrese la primera palabra
//Escribir "Ingresa la primera palabra: "
//Leer palabra1
// Pedir al usuario que ingrese la segunda palabra
//Escribir "Ingresa la segunda palabra: "
//Leer palabra2
// Concatenar las dos palabras
//resultado <- palabra1 + palabra2
// Mostrar la concatenación de las palabras
//Escribir "La concatenación de las palabras es: ", resultado
//FinAlgoritmo

const read = require('prompt-sync')();
const whrite = console.log 
function palabras(){
let palabra1 = read("ingrese una palabras ");
let palabra2 = read ( "ingrese la segunda palabras ");
let concatenadas = palabra1+ " "+ palabra2;
whrite(concatenadas);
}
palabras()