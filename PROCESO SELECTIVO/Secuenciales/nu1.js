//pedir  al usuario su nombre y saludarlo 
// Definir la variable para almacenar el nombre
//caracter nombre

// Pedir al usuario que ingrese su nombre
//escribir "Por favor, ingresa tu nombre: "
//leer nombre

// Saludar al usuario
//escribir "Hola, " + nombre + "! Bienvenido/a."

// 
const read = require('prompt-sync')();
const whrite = console.log 
function hola(){
let nombre=read("por favor ingrese su nombre");
whrite("hola"+" " +nombre+ " " +"bienvenido") ;
}
hola()