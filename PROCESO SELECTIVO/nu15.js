//Algoritmo CalcularPrecioVenta
// Definir las variables precioVenta, añoFabricacion, precioFinal como Real
//Definir precioVenta, añoFabricacion, precioFinal Como Real//
// Solicitar al usuario que ingrese el precio de venta del vehículo
//Escribir "Ingrese el precio de venta del vehículo:"
//Leer precioVenta//
// Solicitar al usuario que ingrese el año de fabricación del vehículo
//Escribir "Ingrese el año de fabricación del vehículo:"
//Leer añoFabricacion//
// Calcular el precio final de venta
//Si añoFabricacion < 2010 Entonces
//    precioFinal = precioVenta - (precioVenta * 0.1)
//Sino
//    precioFinal = precioVenta
//FinSi//
// Mostrar el precio final de venta
//Escribir "El precio final de venta es:", precioFinal
FinAlgoritmo

const read = require('prompt-sync')();
const whrite = console.log
function calcularPrecioVenta() {
    let precioVenta = parseFloat(read("Ingrese el precio de venta del vehículo:"));
    let añoFabricacion = parseInt(read("Ingrese el año de fabricación del vehículo:"));
    let precioFinal;

    if (añoFabricacion < 2010) {
        precioFinal = precioVenta - (precioVenta * 0.1);
    } else {
        precioFinal = precioVenta;
    }

    whrite("El precio final de venta es: " + precioFinal);
 }


calcularPrecioVenta();