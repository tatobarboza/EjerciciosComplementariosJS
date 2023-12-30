// * Declarar una clase Jugador que permita registrar nombre, número de camiseta, edad, y si está lesionado. Luego instanciar al menos cinco (5) objetos usando esta clase, y asociarlos a un array.

//notas

// * El método push puede recibir un objeto por parámetro, el cual se asociará al array empleado. Es posible agregar más propiedades a la clase jugador.

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
jugadores.push(new Jugador ("Juanu", 22, 17, false))
jugadores.push(new Jugador ("Juanete", 33, 20, false))
jugadores.push(new Jugador ("Juanchute", 44, 21, false))
jugadores.push(new Jugador ("Juancito", 55, 22, false))
jugadores.push(new Jugador ("Juano", 66, 23, false))

console.log(jugadores);
