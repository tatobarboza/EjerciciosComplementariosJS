/* class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre
        this.direccion = direccion
        this.propietario = propietario
        this.rubro = rubro
    }

    contieneTienda() {
        alert(`
        El nombre de la tienda es: ${this.nombre}
        La dirección es: ${this.direccion}
        El propietario es: ${this.propietario}
        Su rubro es: ${this.rubro}
        `)
    }
}

const tiendas = []

for (let i = 0; i < 5; i++) {
    const nombre = prompt("Ingrese nombre de la tienda")
    const direccion = prompt("Ingrese la dirección")
    const propietario = prompt("Ingrese el propietario")
    const rubro = prompt("Ingrese el rubro")

    const nuevaTienda = new Tienda(nombre, direccion, propietario, rubro);
    tiendas.push(nuevaTienda);
}

tiendas.forEach(tienda => tienda.contieneTienda()); */


// * funcion constructora (creada en el anterior ejercicio)
class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
}

//* crea la variable "ingresados" para que luego de iterar las cosas ya se vayan guardando dentro.
//* for que itera 5 veces, suma de a una iteracion.
//* la variable tienda contiene la funcion constructora Tienda con sus respectivos prompt. Una vez pedidos son guardados dentro de ingresados con strings que muestran a que pertenece cada dato.
//* finalmente se muestra todo por ingresados (todas las iteraciones) con sus respectivos prompt requeridos.

let ingresados = '';
for (let index = 0; index < 5; index++) {
    let tienda =  new Tienda(prompt("NOMBRE"), 
                             prompt("DIRECCION"), 
                             prompt("PROPIETARIO"),
                             prompt("RUBRO"));

    ingresados+= "Tienda: "+tienda.nombre+" "+
             "Direccion: "+tienda.direccion+" "+
             "Propitario: "+tienda.propietario+" "+
             "rubro: "+tienda.rubro+"\n" ;
}

alert(ingresados);


//* cuando lo hice arriba me pareció mejor crear un array que contenga dentro todos los datos.
//* el problema del que habia planteado es que sólo me dejaba ver lo que colocaba en la iteracion, no lo habia puesto para que se guarde todo dentro de una variable. 

