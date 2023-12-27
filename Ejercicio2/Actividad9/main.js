let numero = prompt("Ingrese un valor, le diremos como se encuentra su presupuesto para realizar esta operación.")

if (numero <= 1000 && !NaN) {
    alert("Usted cuenta con un presupuesto bajo.")
} else if (numero <= 3000 && numero > 1000 && !NaN) {
    alert("Usted cuenta con un presupuesto medio.")
} else if (numero > 3000 && !NaN) {
    alert("Usted cuenta con un presupuesto alto.")
} else alert("Intente colocar un número. Vuelva a intentarlo.")
