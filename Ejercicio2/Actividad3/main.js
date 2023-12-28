// slicitar al usuario un (1) número.
// Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: 
// “Elegiste a Homero” si es 1.
// “Elegiste a Marge” si es 2.
// “Elegiste a Bart” si es 3.
// “Elegiste a Lisa” si es 4.

let numero = prompt("Ingrese un numero del 1 al 4.")

if (numero == 1) {
    alert("Elegiste a Homero")
} else if (numero == 2) {
    alert("Elegiste a Marge")
} else if (numero == 3) {
    alert("Elegiste a Bart")
} else if (numero == 4) {
    alert("Elegiste a Lisa")
} else alert("Vuelva a intentarlo eligiendo un valor del 1 al cuatro (1,2,3,4")