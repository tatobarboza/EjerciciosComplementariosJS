// let boton = document.getElementById("boton");

// const respuesta = (nombre) => {
//     console.log(`Hola ${nombre} diste click`);
// };
// let nombre = prompt("Ingrese un nombre");
// boton.addEventListener("click", () => respuesta(nombre));

let boton = document.getElementById("boton");


boton.addEventListener("click", () => console.log("click")); // cuando se cumple la accion clickear 
boton.addEventListener("mousedown", () => console.log("mousedown")); // cuando pusheo el mouse1
boton.addEventListener("mouseup", () => console.log("mouseup")); //cuando levanto el mouse1
boton.addEventListener("mouseover", () => console.log("mouseover")); //mientras tengo el mouse sobre el elemento
boton.addEventListener("mouseout", () => console.log("mouseout")); //cuando saco el mouse del elemento
boton.addEventListener("mousemove", () => console.log("mousemove")); //mientras me muevo dentro del elemento
