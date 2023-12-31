En este repositorio estoy resolviendo la guia de ejercicios complementarios de CoderHouse.

Anotaciones: 

Ejercicio 5 actividad 3

dentro de las funciones constructoras estuve experimentando con:
this.valor = false

(ponerle un condicional)
y luego hacer que devuelva valores con: `${valor ? "Opcion true" : "Opcion false"}
_______________________
!isNaN(entrada)

"no es un no-numero" le pregunta a entrada es un numero.
(Ejercicio 6 actividad 2)

Ejercicio 6 actividad 4

carAt selecciona la posicion del string indicado
y slice genera una copia desde la posicion que le digamos
en este caso, carAt selecciona la posicion cero (primera letra) y la convierte en mayuscula.
Mientras slice selecciona el resto de lapalabra (a partir de la posicion 1) y la convierte en minuscula. 

const palabraCorregida = (palabra) => palabra.carAt(0).toUpperCase + palabra.slice(1).toLowerCase();

Correcion de sintaxis: todos los array es mejor declararlos con const
