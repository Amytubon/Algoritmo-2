//Proceso CalcularPrecioFinal
//Definir precio, descuento, precioFinal Como Real//
//Escribir "Ingrese el precio del producto:"
//Leer precio//
//Escribir "Ingrese el porcentaje de descuento:"
//Leer descuento//
//descuento <- precio * descuento / 100
//precioFinal <- precio - descuento//
//Escribir "El precio final del producto es:", precioFinal
//FinProceso
const read = require('prompt-sync')();
const whrite = console.log
function descu(){
let precio = parseFloat(read("Ingrese el precio del producto:"));
let descuento = parseFloat(read("Ingrese el porcentaje de descuento:"));

let descuentoAplicado = precio * (descuento / 100);
let precioFinal = precio - descuentoAplicado;

whrite("El precio final del producto es: " + precioFinal);
}
descu()