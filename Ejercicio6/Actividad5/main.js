
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
jugadores.push(new Jugador ("Juanete", 33, 17, false))
jugadores.push(new Jugador ("Juanchute", 44, 21, true))
jugadores.push(new Jugador ("Juancito", 55, 20, false))
jugadores.push(new Jugador ("Juano", 66, 20, true))


// // Codificar una función con la siguiente cabecera: filtroJugadores(equipo, edad). En ella, se recibe un array de jugadores (objetos instanciados empleando la clase de la actividad 3), y una edad. La función retorna los jugadores cuya edad coincide con el segundo parámetro.

// ** Realizar al menos cinco (5) filtros solicitando la edad al usuario, e informar sobre el resultado de los jugadores filtrados.

// notas

// * El método filter obtiene un array con los elementos que cumplen cierta comprobación. Como obtenemos un array al llamar la función creada, debemos recorrer el resultado. //.forEach (creo)

const filtroJugadores = (equipo,edad) => equipo.filter(array => array.edad == parseInt(edad))  

for(let i = 0; i < 5;i++) {
    let resultado = filtroJugadores(jugadores, prompt("Ingrese una edad para buscar entre los jugadores."))
    if (resultado.length > 0) {
        resultado.forEach(jugador => { 
            alert(`Nombre: ${jugador.nombre}, Edad: ${jugador.edad}`);
            });
      } else {
        alert("No se encontraron jugadores con la edad ingresada.");
      } 
};
/* 
//* estaba probando la resolucion del ejercicio de coder. No habia pensado en crear una funcion que guarde lo que encontraba dentro para luego mostrarlo. El codigo que yo hice al iterar muestra los resultados en alerts distintos, este muestra todos los resultados en uno solo.

function filtroJugadores(equipo, edad) {
    return equipo.filter(objeto => objeto.edad == parseInt(edad));
}
  function listaJugadores(jugadores) {
     let lista = "";
     for (const jugador of jugadores) {
         lista += `Jugador: ${jugador.nombre}, camiseta: ${jugador.numeroCamiseta}. Tiene ${jugador.edad} años \n`
     }
     return lista;
 }

//* crea una funcion que crea una lista, en ella se van a guardar los datos que se vayan encontrando y con el for of se van a ir imprimiendo dentro de lista, por ultimo devuelve la lista con todos los resultados dentro.

for (let index = 0; index < 5; index++) {
    let filtro = filtroJugadores(jugadores, prompt('INGRESAR NOMBRE DE JUGADOR'));
    if (filtro.length > 0) {
        alert(listaJugadores(filtro));
    } else {
        alert('NO EXISTE JUGADORES CON ESA EDAD');
    }
}
 */