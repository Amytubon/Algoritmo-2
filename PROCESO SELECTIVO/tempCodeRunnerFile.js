const read = require('prompt-sync')();
const whrite = console.log
function encontrarMayor(arreglo) {
    let mayor = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }
    return mayor;
}


let arreglo = [];
for (let i = 0; i < 3; i++) {
    let elemento = parseInt(read("Ingrese el elemento " + (i+1) + ":"));
    arreglo.push(elemento);
}

whrite("El mayor elemento es: " + encontrarMayor(arreglo));