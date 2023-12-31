
const  jugadores = []

class Jugador {
    constructor (nombre,numeroCamiseta, edad, lesionado) {
        this.nombre = nombre
        this.numeroCamiseta = numeroCamiseta
        this.edad = edad
        this.lesionado = lesionado
    }

}

jugadores.push(new Jugador ("Juan", 77, 24, false))
jugadores.push(new Jugador ("Juanu", 22, 17, true))
jugadores.push(new Jugador ("Juanete", 33, 20, false))
jugadores.push(new Jugador ("Juanchute", 44, 21, true))
jugadores.push(new Jugador ("Juancito", 55, 22, false))
jugadores.push(new Jugador ("Juano", 66, 23, true))


// *Codificar una función con la siguiente cabecera: buscarJugador(equipo, jugador). En ella, se recibe por parámetro un array de jugadores (objetos instanciados empleando la clase de la actividad 3), y el nombre de un jugador. La función retorna el jugador que coincide con el nombre.
// * Realizar al menos tres (3) búsquedas solicitando el nombre al usuario, e informar sobre el resultado de cada búsqueda.

//notas

// * El método find permite encontrar un elemento en el array. Como estamos trabajando con array de objetos, usamos la notación punto para verificar el valor de las propiedades.

const buscarJugador = (jugadors,jugador)  => jugadors.find(array => array.nombre = jugador);

const palabraBien = palabra => palabra.carAt(0).toUpperCase + palabra.slice(1).toLowerCase();

for (let i = 0; i < 4; i++) {
    let busqueda = buscarJugador(jugadores, prompt("Ingresar nombre de jugador a comprobar"));
    if (busqueda != undefined) {
        alert(`El jugador ${busqueda.nombre}, de camiseta ${busqueda.numeroCamiseta}, edad: ${busqueda.edad}. ${busqueda.lesionado ? "Lamentablemente se encuentra lesionado." : "Se encuentra en perfectas condiciones, listo para jugar."}`);
    } else {
        alert(`No se ha encontrado el nombre ingresado`);
    }
}
