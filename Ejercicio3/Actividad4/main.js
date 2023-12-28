// let valorIngresado = []
// let nombres = []

// while (valorIngresado != "voldemort") {
//     let iteraciones = 0
//     valorIngresado[iteraciones]= [prompt("Por favor siga ingresando nombres, no coloque voldemort.")]
//     iteraciones++
//     return valorIngresado[iteraciones]
    
    
// }

// alert(`${[valorIngresado]}`)

let nombreIngresado = prompt("Ingrese un nombre. No coloque al innombrable.")
let listaNombres = [];

while (nombreIngresado != "Voldemort") {
    listaNombres.push(nombreIngresado)
    nombreIngresado = prompt("Ingrese otro nombre.")
}

alert(`${[listaNombres]}`)