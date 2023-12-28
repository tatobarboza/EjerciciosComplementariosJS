// Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva.
// Luego realizar un única salida por alerta, con el listado de alumnos registrados.

// Notas actividad 3
// La “carga consecutiva” implica utilizar un bucle, para solicitar entradas al usuario una detrás de otra.  Podemos concatenar la entrada obtenida en cada ciclo a otra variable.


let alumnos = []

for (let i = 0; i < 10;i++) {
    alumnos[i] = [prompt("Ingrese el nombre del alumno")]
}
alert(`${[alumnos]}`)