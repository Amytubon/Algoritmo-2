//Dado un arreglo de 5 nombres presentarlos todos
//Algoritmo PresentarNombres
// Definir un arreglo con 5 nombres
//Definir nombres[5]: Cadena
//Definir i: Entero
//nombres[1] <- "Juan"
//nombres[2] <- "María"
//nombres[3] <- "Pedro"
//nombres[4] <- "Ana"
//nombres[5] <- "Luis"
// Mostrar los nombres
//Escribir "Los nombres son:"
//Para i <- 1 Hasta 5 Hacer
//Escribir nombres[i]
//FinPara
//FinAlgoritmo

const read = require('prompt-sync')();
const whrite = console.log 
function arreglo(){
let nombres =  ["Juan", "María", "Pedro", "Ana", "Luis"];

// Mostrar los nombres
 whrite("Los nombres son:");
for (let i = 0; i < nombres.length; i++) {
    whrite(nombres[i]);
}
}
arreglo()