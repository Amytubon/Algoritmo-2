//Proceso CalcularSueldoAnual
//Definir sueldoMensual, sueldoAnual, sueldoNetoAnual, excedente Como Real//
//Escribir "Ingrese su sueldo mensual: "
//Leer sueldoMensual//
//sueldoAnual = sueldoMensual * 12//
//Si sueldoAnual > 30000 Entonces
//    excedente = sueldoAnual - 30000
//    sueldoNetoAnual = sueldoAnual - (excedente * 0.15)
//Sino
//    sueldoNetoAnual = sueldoAnual
//FinSi//
//Escribir "Su sueldo neto anual es: ", sueldoNetoAnual
//FinProceso
const read = require('prompt-sync')();
const whrite = console.log
function calcularSueldoAnual() {
    let sueldoMensual = parseFloat(read("Ingrese su sueldo mensual: "));
    let sueldoAnual = sueldoMensual * 12;
    let sueldoNetoAnual;

    if (sueldoAnual > 30000) {
        let excedente = sueldoAnual - 30000;
        sueldoNetoAnual = sueldoAnual - (excedente * 0.15);
    } else {
        sueldoNetoAnual = sueldoAnual;
    }

    whrite("Su sueldo neto anual es: " + sueldoNetoAnual);
}

calcularSueldoAnual();