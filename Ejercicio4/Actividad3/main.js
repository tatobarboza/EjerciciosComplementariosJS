
// function y return son super importantes 
// a la hora de concatenar cosas dentro de un codigo
// el return devuelve directamente un valor que le pidamos con el parametro asignado
//asimismo podemos ir guardando en bucle la entrada y mostrandola por alert


function transformar (x) {
    return Math.round(x)
}

for (let i = 0; i < 5; i++) {
    let entrada = prompt("Ingresar numero");
    alert(transformar(entrada));
}