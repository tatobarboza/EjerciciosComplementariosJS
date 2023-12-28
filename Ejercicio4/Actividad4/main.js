// * Codificar una función con la siguiente cabecera: impuesto (precio, porcentaje). En ella, se retorna un valor numérico compuesto por el precio recibido, más la suma del porcentaje ingresado.
// * Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un precio y porcentaje al usuario.

// * Notas actividad 3
// * Un impuesto es la suma de un monto al precio inicial. Buscamos calcular en la función el porcentaje sobre dicho precio, y sumarlo; por ejemplo: si el precio es 100, el 20% es 20, entonces el precio final es 100+20 = 120.


function impuesto (precio,porcentaje) {
    let valor = precio + (precio * porcentaje / 100)
    return valor
}
let valor1 = Number(prompt("Ingrese un precio"))
let valor2 = Number(prompt("Ingrese el porcentaje a sumarle."))

alert((impuesto(valor1,valor2)))