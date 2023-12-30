// * Declarar un array vacío, y cargarlo de forma dinámica solicitando al usuario nombres de forma consecutiva,  hasta que se ingrese “ESC”. Luego recorrer el array, e informar por alerta el nombre de cada jugador, así como la posición  que ocupa en la colección.
 //notas

// * Usando while  y prompt podemos cargar una colección de forma dinámica. Es decir, agregar al array en cada iteración la entrada capturada, usando el método push

// push agrega al final y unshift adelante.

let arrayVacio = [];
let entrada;
let i = 0;

while (entrada !== "ESC") {
    entrada = prompt("Ingrese palabras a agregar al array.");
    if(!isNaN(entrada)) {
        alert("Usted ha ingresado un numero")
        break
    } else arrayVacio.push(entrada)
};

for (let jugador of arrayVacio) {
    alert(`En la posición ${i} del array "nombres" se encuentra: ${jugador}`)
    i++
}