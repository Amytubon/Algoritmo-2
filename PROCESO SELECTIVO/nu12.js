//Proceso CalcularMontoTotalConIVA
//Definir monto_total, porcentaje_iva, monto_con_iva Como Real//
//Escribir "Ingrese el monto total de la factura:"
//Leer monto_total//
//Escribir "Ingrese el porcentaje de IVA aplicado:"
//Leer porcentaje_iva//
//monto_con_iva = monto_total + (monto_total * (porcentaje_iva / 100))//
//Escribir "El monto total a pagar incluyendo el IVA es:", monto_con_iva
//FinProceso
const read = require('prompt-sync')();
const whrite = console.log
function calcularMontoTotalConIVA() {
    let montototal = parseFloat(read("Ingrese el monto total de la factura:"));
    let porcentajeiva = parseFloat(read("Ingrese el porcentaje de IVA aplicado:"));

    let montoconiva = montototal + (montototal * (porcentajeiva / 100));

    whrite("El monto total a pagar incluyendo el IVA es: " + montoconiva);
}

calcularMontoTotalConIVA();