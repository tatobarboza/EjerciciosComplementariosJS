let boton = document.getElementById("boton");

const respuesta = (nombre) => {
    console.log(`Hola ${nombre} diste click`);
};
let nombre = prompt("Ingrese un nombre");
boton.addEventListener("click", () => respuesta(nombre));