let producto1 = prompt("Ingrese el primer producto");
let producto2 = prompt("Ingrese el segundo producto");
let producto3 = prompt("Ingrese el tercer producto");
let producto4 = prompt("Ingrese el cuarto producto");
let producto5 = prompt("Ingrese el quinto producto");

if (producto1 != !NaN && producto1 != "" && producto2 != !NaN && producto2 != "" && producto3 != !NaN && producto3 != "" && producto4 != !NaN && producto4 != "" && producto5 != !NaN && producto5 != "") {
    alert(`Usted ha cargado los siguientes productos:
    - ${producto1}
    - ${producto2}
    - ${producto3}
    - ${producto4}
    - ${producto5}
    Gracias.`)
} else { alert(`Hay productos que no son validos. Vuelva a intentarlo`)
}

