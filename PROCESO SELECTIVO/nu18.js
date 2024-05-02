//“Somos más” es una empresa dedicada a ofrecer banquetes; sus tarifas son las siguientes:
//El costo de platillo por persona es de $20.00, pero si el número de personas es mayor a 100 pero menor o igual a 200, el costo es de $15.00.  Para más de 200 personas el costo por platillo es de $10.00.
//Se requiere un algoritmo que ayude a determinar el presupuesto que se debe presentar a los clientes que deseen realizar un evento, considerando que al total hay que agregarle el 15% del iva
//Algoritmo presupuesto_evento
//Leer numero_personas
//Si numero_personas > 200 entonces
//   costo_platillo = 10.00
//Sino si numero_personas > 100 entonces
//   costo_platillo = 15.00
//Sino
//   costo_platillo = 20.00
//Fin Si
//costo_total = costo_platillo * numero_personas
//monto_iva = costo_total * 0.15
//presupuesto_total = costo_total + monto_iva
//Escribir "El presupuesto total es: ", presupuesto_total
//Fin Algoritmo
const read = require('prompt-sync')();
const whrite = console.log
function calcularPresupuesto() {
    let costoTotal= 0
    let numPersonas = read("ingrese el numerode personas ")
 
    if (numPersonas > 100 && numPersonas <= 200) {
      costoTotal = numPersonas * 15.00;
    } else if (numPersonas > 200) {
      costoTotal = numPersonas * 10.00;
    } else {
      costoTotal = numPersonas * 20.00;
    }
  
    const montoIVA = costoTotal * 0.15;
    const presupuestoTotal = costoTotal + montoIVA;
  
    return presupuestoTotal;
  }
  
  const numPersonas = 150; // Ejemplo de número de personas
  const costoPlatillo = 20.00; // Ejemplo de costo por platillo
  
  const presupuesto = calcularPresupuesto();
  whrite("El presupuesto total es: $" + presupuesto);
