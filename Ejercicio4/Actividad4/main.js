// * Codificar dos funciones:
// *  Una función cotizarDolar(pesos), la cual recibe un valor monetario en pesos argentinos, y lo retorna en su equivalente en dólares.
// *  Una función cotizarPesos(dolar), que recibe un valor monetario en dólares, y lo retorna en su equivalente en pesos argentinos.
// *  Luego invocar las funciones solicitando  al usuario el valor y el tipo de cotización a realizar.

// notas
// * Notas actividad 4
// *Es posible cambiar la moneda a cotizar. Lo importante es codificar dos funciones que hagan operaciones contrarias (inversas). 
let valor1

function cotizarDolar(pesos) {
    valor1 = pesos / 1100
    return valor1
};

function cotizarPesos(dolar) {
    valor1 = dolar * 1100
    return valor1
};
let cotizacion = prompt("Ingrese 1: cotizacion dolar o 2: cotizacion pesos")
let entrada

if (cotizacion == 1)  {
    entrada = Number(prompt("Ingrese el monto a cotizar"))
    alert(`El monto en dolares da un total de: ${cotizarDolar(entrada)}`)
} else if (cotizacion == 2) {
    entrada = Number(prompt("Ingrese el monto a cotizar"))
    alert(`El monto en pesos da un total de: ${cotizarPesos(entrada)}`)
} else if (cotizacion != 1 || cotizacion != 2 || cotizacion == NaN) {
    alert("Esa no es una operación valida")
} else {
    alert("Intentenlo de nuevo.") // no se si es necesario o no este else. Lo pongo por las dudas, aunque lo he probado sin y funciona perfectamente. 
}