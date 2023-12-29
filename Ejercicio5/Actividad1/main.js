class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
      this.nombre = nombre;
      this.direccion = direccion;
      this.propietario = propietario;
      this.rubro = rubro;
    }
}

const tienda1 = new Tienda ("La placita de la frescura", "Av siempreviva 123", "Don Rafael", "Verduleria");
const tienda2 = new Tienda ("My supermarket", "La callecita 345", "Doña juana", "Supermercado mayorista");
const tienda3 = new Tienda ("Minisuper", "La cortada 53", "Don juan", "almacen");

console.log(tienda1);
console.log(tienda2);
console.log(tienda3);