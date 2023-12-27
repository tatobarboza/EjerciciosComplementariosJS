let carnet = []

carnet[0] = prompt("Ingrese su nombre.")
carnet[1] = prompt("Ingrese su apellido.")
carnet[2] = prompt("Ingrese su calle de residencia.")
carnet[3] = prompt("Ingrese la altura de la calle de residencia.")


alert(`
Su nombre es: ${carnet[0]}
Su apellido es: ${carnet[1]}
Su dirección actual es: ${carnet[2]} a la altura ${carnet[3]}
Gracias.`)


let confirmacion = prompt(`Revise los datos.
¿Son todos los datos correctos?`)

if (confirmacion = "si" || "Si" || "SI" || "sI") {
    alert("Muchas gracias. Vuelva pronto.")
};