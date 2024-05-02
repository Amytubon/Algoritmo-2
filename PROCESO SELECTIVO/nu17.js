 // Inicio del algoritmo
Inicio
// Declaración de variables
//tipoBanano: caracter
//tamañoBanano: entero
//precioInicial: real
//ganancia: real//
//Entrada de datos
//Escribir "Ingrese el tipo de banano (A o B):"
//Leer tipoBanano
//Escribir "Ingrese el tamaño del banano (1 o 2):"
//Leer tamañoBanano
//Escribir "Ingrese el precio inicial por kilo de banano:"
//Leer precioInicial//
// Cálculo de la ganancia
//Si tipoBanano = "A" Entonces
//    Si tamañoBanano = 1 Entonces
//        ganancia = precioInicial + 2
//    Sino
//        ganancia = precioInicial + 3
//    Fin Si
//Sino
//    Si tamañoBanano = 1 Entonces
//        ganancia = precioInicial - 3
//    Sino
//        ganancia = precioInicial - 5
//    Fin Si
//Fin Si//
//Salida de resultados
//Escribir "La ganancia obtenida por el productor es: ", ganancia
//Fin del algoritmo
// Declaración de variables
const read = require('prompt-sync')();
const whrite = console.log
function ganancia(){
let tipoBanano = read("Ingrese el tipo de banano (A o B):");
let tamañoBanano = parseInt(read("Ingrese el tamaño del banano (1 o 2):"));
let precioInicial = parseFloat(read("Ingrese el precio inicial por kilo de banano:"));
let ganancia;

// Cálculo de la ganancia
if (tipoBanano === "A") {
    if (tamañoBanano === 1) {
        ganancia = precioInicial + 2;
    } else {
        ganancia = precioInicial + 3;
    }
} else {
    if (tamañoBanano === 1) {
        ganancia = precioInicial - 3;
    } else {
        ganancia = precioInicial - 5;
    }
}

// Salida de resultados
whrite("La ganancia obtenida por el productor es: " + ganancia);
}
ganancia()