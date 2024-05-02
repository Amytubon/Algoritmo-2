//Pedir al usuario su nombre y mostrarlo tres veces en la pantalla
//Algoritmo MostrarNombreTresVeces
// Definir la variable para almacenar el nombre
//Caracter nombre
// Solicitar al usuario que ingrese su nombre
//Escribir "Por favor, ingresa tu nombre: "
//Leer nombre
// Mostrar el nombre tres veces
//Escribir nombre
//Escribir nombre
//Escribir nombre
//FinAlgoritmo

const read = require('prompt-sync')();
const whrite = console.log 
function nombre(){
  let userName =read ("Please enter your name:");
for (let i = 0; i < 3; i++) {
  whrite(userName);
}
}
nombre()