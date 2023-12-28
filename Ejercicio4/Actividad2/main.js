function entrada () {
    return prompt("Ingrese un dato")
}

function procesamiento (x) {
    return "La palabra ingresada es: " + x
}

function salida (y) {
    alert(y);
}

salida(procesamiento(entrada()));
