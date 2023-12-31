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

Arreglos:

*   lenght                 averiguar longitud
-------------------------------------------------
*   push y unshift         agregar
-------------------------------------------------
*   shift, pop, splice     quitar
-------------------------------------------------
*   join         juntar
-------------------------------------------------
*   concat       combinar
-------------------------------------------------
*   slice        cortar (desde, hasta)
(no modifica el array original, crea uno nuevo)
-------------------------------------------------
*   splice       (desde, hasta, "agregar")
(si modifica el array original)
-------------------------------------------------
*   indexOf      obtener indice (-1 / 1 )
-------------------------------------------------
*   includes     verificar existencia  (true or false)
-------------------------------------------------
*   reverse      invertir el orden

* Metodos de busqueda y transformacion:

                            Resumen
                   Funciones de orden superior
               METODOS DE BUSQUEDA y TRANSFORMACION
-----------------------------------------------------
*     forEach
                   recorre cada uno de los elementos del arreglo
 (nos muestra todos los elementos del arreglo)
-----------------------------------------------------
*        find
           encuentra el primer elemento que cumpla la condición.
 (ejemplo que tira todos los datos del producto especifico)
-----------------------------------------------------
*        filter
               Encuentra todos los elementos que cumplan la condición.
 (ejemplo del precio minimo que tiene que tener un producto / precio maximo)
-----------------------------------------------------
 *       some
                Valida si existe al menos un elemento que cumple la condición
  (ejemplo de la camisa en el buscador) "si está disponible"
-----------------------------------------------------
 *       map
                   modifica o transforma el arreglo
(ejemplo quitandole el iva a todos los items)
-----------------------------------------------------
*        reduce
                   Reduce un arreglo a un unico valor
(ejemplo sumando el precio de todos los items general el total del carrito)
-----------------------------------------------------
 *       sort
 ordena segun el criterio que nosotros coloquemos
 ejemplo de los numeros a - b y b - a
 ejemplo con los nombres 
 a.name > b.name
 a.name < b.name
