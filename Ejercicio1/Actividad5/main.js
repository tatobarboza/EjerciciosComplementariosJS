let precioInicial = parseFloat(prompt("Solicite un precio"))
let aplicarDescuento = prompt(`Si desea "Descuento del 20%" : coloque DESC20
Si desea "Descuento del 30%": Coloque DESC30`)
let precioFinal

if (aplicarDescuento === "DESC20") {
    precioFinal = precioInicial - (precioInicial * 0.2) 
} else if (aplicarDescuento === "DESC30") {
    precioFinal = precioInicial - (precioInicial * 0.3)
} else {alert(`Ingrese un valor correcto.`)}

alert(`Para el precio ${precioInicial} y el descuento ${aplicarDescuento} el precio final es: ${precioFinal}`)