// *Declarar un método para la clase Tienda con la siguiente cabecera esPropietario(nombre). Se retorna true si el nombre enviado corresponde al propietario de la tienda.Caso contrario, se retorna false.
// *Luego, invocar al menos tres(3) objetos usando esta clase y solicitar al usuario cinco(5) nombres. Informar por alerta si los nombres pertenecen a algún dueño de tienda.


class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
    esPropietario(nombre){
        return this.propietario == nombre;
    }

}

const tienda1 = new Tienda ("La placita de la frescura", "Av siempreviva 123", "Rafael", "Verduleria");
const tienda2 = new Tienda ("My supermarket", "La callecita 345", "Juana", "Supermercado mayorista");
const tienda3 = new Tienda ("Minisuper", "La cortada 53", "Juan", "almacen");

for (let index = 0; index < 5; index++) {
    let ingresarNombre = prompt("Ingrese un nombre para corroborar si es o no propietario");
    if (tienda1.esPropietario(ingresarNombre)){
        alert(`${ingresarNombre} es propietario de la tienda: "${tienda1.nombre}"`);
    }
    if (tienda2.esPropietario(ingresarNombre)){
        alert(`${ingresarNombre} es propietario de la tienda: "${tienda2.nombre}"`);
    }
    if (tienda3.esPropietario(ingresarNombre)){
        alert(`${ingresarNombre} es propietario de la tienda: "${tienda3.nombre}"`);
    } else {
        alert(`No se ha encontrado ese propietario`)
    }
}



