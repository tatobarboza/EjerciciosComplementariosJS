
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

const persona1 = new Persona("Alguien", 43);

for (const clave in persona1) {
    console.log(clave);
    console.log("valor asociado", persona1[clave]);
}