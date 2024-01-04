//* Eventos del teclado

let nombre = document.getElementById("nombre");
let saludo = document.getElementById("saludo");
// nombre.addEventListener("keydown", () => console.log("Apretaste"));

nombre.addEventListener("keyup", (e) => {
    if(e.key === "a"){
        saludo.className = "yellow";
        console.log(e.key);
    } else if(e.key === "s"){
        saludo.className = "green";
        console.log(e.key);
    } else if(e.key === "d"){
        saludo.className = "blue";
        console.log(e.key);
    } else if(e.key === "w"){
        saludo.className = "red";
        console.log(e.key);
    }
});