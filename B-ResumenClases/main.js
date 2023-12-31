/* alert("Bienvenido al calculador de cuotas")
let resultado = 0 

const multiplicacion = (x, y) => x * y;

let porcentaje = (1.05)

let operacion = (PP, porcentaje, cuotas) => {
    switch (cuotas) {
        case "1":
            return (multiplicacion(PP,porcentaje))
        case "2":
            return (PP * porcentaje) * porcentaje;
        case "3":
            return ((PP * porcentaje) * porcentaje) * porcentaje;
        case "6":
            return (((PP * porcentaje) * porcentaje) * porcentaje) *  porcentaje;
        case "12":
            return ((((PP * porcentaje) * porcentaje) * porcentaje) *  porcentaje) * porcentaje;
        default:
            return `El numero ${cuotas} no está disponible, Ingrese otro número.`;
    }
}

let PP = Number(prompt("Ingrese el precio del producto"));
let cuotas = prompt("Ingrese el numero de cuotas");

resultado = operacion(PP, porcentaje, cuotas);
mostrarCuotas = `  
Para el precio ${PP} en ${cuotas} cuotas(s)
El precio final a pagar es ${resultado}`
alert(mostrarCuotas);
 */

/* Es mi intento de for, un tanto fallido. */

/* alert("Bienvenido al calculador de cuotas")

let PP = Number(prompt("Ingrese el precio del producto"));
let cuotasIngresadas = prompt("Ingrese el numero de cuotas");


for (cuotas = 1; cuotas == cuotasIngresadas; cuotas = cuotas + 1){
    if (cuotasIngresadas == cuotas) {
    }
    PP = PP * 1.05;
}

mostrarCuotas = `  
Para el precio ${PP} en ${cuotasIngresadas} cuotas(s)
El precio final a pagar es ${PP}`
alert(mostrarCuotas);

 */

/* Objetos */

/* 
con el punto busca dentro del objeto (persona.nombre) 

const persona = {nombre: "Juan", edad: 22, direccion: "Tal Lugar"};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.direccion);

*/
/* el const se puede modificar en los objetos, porque no pierden su cualidad de objetos como Tal */

/* const persona = {nombre: "Juan", edad: 54, direccion: "av"};

persona.nombre = "pepito"  modificamos la variable nombre 
persona["edad"] = 56;  modificamos una variable 
persona.padre = "pedro"  variable agregada 

console.log(persona); 
 */

/* 

---------------

* FUNCION CONSTRUCTORA (para crear usuarios)
* siempre llevan 
function Palabra(propiedad, propiedad2) {
    this.propiedad = propiedad;
    this.propiedad2 = propiedad2;
}
* con la primera letra mayuscula

---------------
*
* El this es el OBJETO que llama a la propiedad (this reemplazado por persona1, persona2, etc)
* this.nombre
* persona1.nombre = "andres"

* This es un concepto, en este concepto direcciona para que javascript no se pierda y busque la propiedad de tal objeto.  


* Esto lo vamos a usar para crear objetos y asignarle datos dentro (precios, pulgadas, tamaño, etc.)

* LA SINTAXIS es: const persona1/objeto/loquesea = new (muy importante) seguido de la funcion constructora, en el caso de abajo sería "Persona"

 */

/* function Persona(nombre, edad) { 
    this.nombre = nombre;
    this.edad = edad;
}
const persona1 = new Persona("andres", 27);
const persona2 = new Persona("adriana", 30);
console.log(persona1);
console.log(persona2);


const persona1 = new Persona ({
    nombre: "pepito",
    edad: 54,
    direccion: "av",
    padre: "pedreito",
    madre: "juanita"
})
 */


/* const producto1 = {
    nombre: "camisa",
    precio: 1231
} */


/* function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

const persona = new Persona("carlos", 54);

for (const clave in persona) {
    console.log(clave);
    console.log("valor asociado", persona[clave]);
}


 */

/* class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    hablar (){
        console.log(`Hola soy ${this.nombre}`);
    }
}

const persona = new Persona ("andres", 54);
persona.hablar(); */


/* 
* clase, constructor, sumar iva. Dos productos creados, dos productos creados y un producto que pasó de vendido false a vendido true.

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }

    sumarIva() {
        this.precio = this.precio * 1.21;
    }
    
    vender() {
        this.vendido = true;
    }
}

const producto1 = new Producto ("maquinola", 1231)
const producto2 = new Producto ("moaaaa", 12311)

producto1.sumarIva();
producto2.sumarIva();
producto1.vender();

console.log(producto1); */




/* *nombre, precio y cantidad. cada vez que ejecutamos vender, restamos "-= 1" y cuando volvemos a ejecutarlo cada vez tenemos uno menos. Producto {
  nombre: 'RECOMENDADO MONITOR CURVO 27 HASHDAS',
  precio: 1231231321,
  cantidad: 5
}
Producto {
  nombre: 'RECOMENDADO MONITOR CURVO 27 HASHDAS',
  precio: 1231231321,
  cantidad: 4
}
Producto {
  nombre: 'RECOMENDADO MONITOR CURVO 27 HASHDAS',
  precio: 1231231321,
  cantidad: 2
} 
*/
/* 
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.cantidad = cantidad;
    }

    vender() {
        this.cantidad -= 1;
    }
}



const producto1 = new Producto("recomendado monitor curvo 27 hashdas",
1231231321, 
5);


console.log(producto1);
producto1.vender();
console.log(producto1);
producto1.vender();
producto1.vender();
console.log(producto1); 
* creamos el producto con cantidades y a medida que ejecutamos vender se va vendiendo (vender en este caso es un METODO)
*/



 
/*
*ahora utilizamos una funcion constructora con metodo vender y un for que crea 5 productos, let i (comienza en 0), mientras i sea menor que 5... i++ (sigue sumando de a uno), mientras va iterando va pidiendo prompt y se van creando en const producto = new Producto(nombre, precio, 5);
*/
/* 
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.cantidad = cantidad;
    }

    vender() {
        this.cantidad -= 1;
    }
}

for (let i = 0; i < 5; i++) {
    let nombre = prompt("Ingrese nombre del producto")
    let precio = prompt("Ingrese el precio del producto")
    const producto = new Producto (nombre, precio, 5);
} 
 */


/* 

*persona[clave] va a devolver una propiedad que contiene el objeto.

const persona = {nombre: "camila", edad:19 };

for(const clave in persona){
    console.log(clave);
    console.log(persona[clave]);
} */
/* 
*               ARRAYS 
* Definir arrays en javascript
* Guardar y Estructurar la información 

* Aprender como acceder a un array y recorrerlo
*   reconocer propiedades y metodos mas comunes del array

*           PROPIEDADES Y METODOS
* ((Lenght, push, unshift, pop, reverse, join, concat, slice, indexOf, includes))


*           ARRAYS + OBJETOS
*comprender las utilidades de la combinacion Arrays + Objetos.

*           Sentencia for...Of


* es una estructura de datos que nos permite ordenar la información de cierta manera. (arreglos = arrays), 

*               los objetos no guardan en orden, 
*           pero todos los arreglos arrancan en la
                        *POSICION CERO


*      es mejor declararlos con const a 
*           los arreglos

*           ESTRUCTURA DE UN ARREGLO

*       [valor1, valor2, ..., valorn];

*/

/* const vacio = [];
const numeros = [1, 2, 3, 4, 5, 6];
const nombres = ["andres", "camila", "luis", "Juan"];
const valores = [true, false, false, true];
const varios = [1, "andres", true];

console.log(nombres); */

/* const nombres = ["andres", "camila", "luis", "Juan"];
console.log(nombres[0]); */

/* const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros[0] + numeros[4]); 
*/
/* // * respuesta de la consola */
/*  
*es muy comun usar un for con los ARRAYS 
*/

/* const nombres = ["andres", "camila", "luis", "Juan"];

for (let i = 0; i < 4; i++) {
    console.log(nombres[i]);
} */
/*
*______________________________________
*la lista del supermercado, hago un for ya que es una accion repetitiva.

*       i vale cero, la condicion es que i sea menor que 5 (o sea cuatro y va a ir sumando de uno en uno(++))

* en cada iteracion va recorriendo el array y completandolo en la frase "veo producto (iteracion array espacio 0=galleta) lo busco y lo agrego al carrito"


*__________________________________________

*                     LENGTH
*       Nos devuelve la cantidad de elementos que contiene el array
*                 productos.length = 7
*           i < 7 = 6 (recorre todos los elementos del array)
*     Gracias a esto la iteracion va a recorrer el array por
*          la cantidad de valores que contenga.
*/
/*  
const productos = ["galleta", "cafe", "mate", "leche", "fideos", "chocolate"];

for (let i = 0;i < productos.length; i++){
    console.log(`Veo producto ${productos[i]} lo busco y lo agrego al carrito.`);
}  
*/
/* 
*                       PUSH
*            Agrega un elemento final del arreglo
*               productos.push("azucar");

*                     UNSHIFT
*          Agrega un elemento al inicio del arreglo
*           productos.unshift("mermelada");

*                       POP
*          Saca un elemento del final del arreglo
*               productos.pop();

*                       SHIFT
*          Saca un elemento del inicio del arreglo
*               productos.shift();
 */

/* const productos = ["galleta", "cafe", "mate", "leche", "fideos", "chocolate"];

console.log(productos.length); // longitud o cantidad de elementos en el arreglo
productos.push("azucar"); // agrega un elemento al final del arreglo

console.log(productos);

productos.unshift("mermelada"); // agregar al inicio del arreglo

console.log(productos);

productos.pop(); // saca un elemento del final del arreglo

productos.shift(); //saca un elemento del inicio del arreglo

console.log(productos); */
/* 
*                       SLICE
*             Genera una copia de un fragmento (una parte) de un arreglo  
*           const copia = productos.slice(1, 5);
*           FUI DESDE EL 1 (cafe) hasta el 5(fideos), el slice necesita +1 para contar bien.

 */
/* 
const productos = ["galleta", "cafe", "mate", "leche", "fideos", "chocolate"];

const copia = productos.slice(1, 5);
console.log(copia);
 */
/* 
*                       SPLICE
            *Elimina un fragmento del arreglo
*            Empece a eliminar desde 1 (cafe) y cuantos quiero 
*               eliminar = 2                 (cafe y mate)
 */
/* 
*                 Elimina varios elementos
const productos = ["galleta", "cafe", "mate", "leche", "fideos", "chocolate"];
productos.splice(1, 2); // elimina varios elementos del arreglo
console.log(productos);
 */
/* 
*                        Elimina sólo uno
const productos = ["galleta", "cafe", "mate", "leche", "fideos", "chocolate"];
productos.splice (3, 1); // elimina solamente leche del array(posicion 3, cantidad 1)
console.log(productos); 

*               Puedo eliminar y agregar al mismo tiempo
*
*/

/* 
*         Puedo decirle que (posicion1, quita1, agregue "mantequilla")
*                 productos.splice (1,1, "mantequilla")
*           Quita cafe, y en ese lugar coloca mantequilla

const productos = ["galleta", "cafe", "mate", "leche", "fideos", "chocolate"];
productos.splice (1, 1, "mantequilla");
console.log(productos); */

/* 
*                           JOIN
*               Une todos los elementos del arreglo en un solo arreglo separados por lo que yo le ponga entre los parentesis
 */

/* 
const productos = ["galleta", "cafe", "mate", "leche", "fideos", "chocolate"];
const personas = ["andres", "camila", "luis", "Juan"];
const varios = productos.concat(personas)

console.log(varios);
console.log(productos.join("")) // Une los elementos del arreglo en un string separado por el parametro

// Une los elementos del arreglo en un string separado por el parametro



 */
/* 
*                           indexOf
*               Busca la posicion del elemento pasado por parámetro
*           Si no encuentra el elemento devuelve -1 
* Se haria un codigo arriba de la devolución -1 para devolver un "no se ha encontrado el producto que está intentando buscar"
 */
/* 
const productos = ["galleta", "cafe", "mate", "leche", "fideos", "chocolate"];
console.log(productos.indexOf("cafe"));
 */
/* 
*                            INCLUDES
*     Busca dentro del array las palabras, si coincide devuelve true
*                   Si no coincide devuelve false  
 */

/* const productos = ["galleta", "cafe", "mate", "leche", "fideos", "chocolate"];

let nombre = prompt("Ingrese el nombre del producto a buscar");

if (productos.includes(nombre)){
    alert("Producto disponible");
} else {
    alert ("Producto no disponible");
} */
/* 
*           WHILE + IF and ELSE + Includes (true or false) 
*           Otro ejemplo con while
*           LO AUTOMATIZA
*Mientras el cliente no coloque "salir" el programa va a continuar pidiendole palabras y le va a devolver si está contenida la palabra en el arreglo o no.


const productos = ["galleta", "cafe", "mate", "leche", "fideos", "chocolate"];

let nombre = prompt("Ingrese el nombre del producto a buscar");

while(nombre != "salir") {
    if (productos.includes(nombre)){
        alert("Producto disponible");
    } else {
        alert ("Producto no disponible");
    }
    nombre = prompt("Ingrese el nombre del producto a buscar");
} */

/* 
*                       REVERSE
*           Da vuelta el array de atrás para adelante
 */
/* 
const productos = ["galleta", "cafe", "mate", "leche", "fideos", "chocolate"];
productos.reverse(); 
console.log(productos);
 */
/* 
*   lenght                  averiguar longitud
-------------------------------------------------
*   push y unshift          agregar
-------------------------------------------------
*   shift, pop, splice     quitar
-------------------------------------------------
*   join         juntar
-------------------------------------------------
*   concat       combinar
-------------------------------------------------
*   slice        cortar
-------------------------------------------------
*   indexOf      obtener indice (-1 / 1 )
-------------------------------------------------
*   includes     verificar existencia  (true or false)
-------------------------------------------------
*   reverse      invertir el orden
 */
/* 
const productos = ["galleta", "cafe", "mate", "leche", "fideos", "chocolate"];

const eliminarPorNombre = (nombre) => {
    let indice = productos.indexOf(nombre);

    if(indice != -1){
        productos.splice(indice, 1);
        console.log(productos);
    }
};
eliminarPorNombre("mate")
 */
/* 
*           creamos una arrow function... le decimos que dentro de indice guarde el resultado del indexOf
*           index of guarda numero(posicion del elemento encontrado) o en caso de no encontrarlo guarda -1..
*           por ende 
*           if(si indice es diferente de -1)
*           quiero que de productos.splice(indice, retires una posicion)
*           por ende acabamos de eliminar un producto */
/* 
const productos = [
    { id: 1, nombre: "camisa", precio: 1000 },
    { id: 2, nombre: "gorra", precio: 700 },
    { id: 3, nombre: "zapato", precio: 350 },
    { id: 4, nombre: "media", precio: 987 },
];

let productoEncontrado;
    for (const iterator of productos) {
    if (iterator.nombre === "camisa") {
    productoEncontrado = iterator;
  }
}

if (productoEncontrado) {
    console.log("Producto Encontrado");
} else {
    console.log("Producto no encontrado");
}
 */
/* 
*   Comprender que es una función de orden superior
*   Dominar los metodos avanzados de arrays.
 */

/* 
*                   FUNCIONES DE ALTO ORDEN 

*                   Funciones de orden superior

*               METODOS DE BUSQUEDA y TRANSFORMACION
-----------------------------------------------------
*       forEach
-----------------------------------------------------
*       find
-----------------------------------------------------
*       filter
-----------------------------------------------------
*       some
-----------------------------------------------------
*       map
-----------------------------------------------------
*       reduce
-----------------------------------------------------
*       sort
-----------------------------------------------------
*/
/* 
function mayorQue(n) {
    return (m) => m > n;
}

// let mayorQueCinco = mayorQue(5);
// console.log(mayorQueCinco(6));

let mayorQueDiez = mayorQue(10);
console.log(mayorQueDiez(5));
console.log(mayorQueDiez(11));
 */
/* 
const generarOperacion = (operacion) => {
    if(operacion === "sumar"){
        return (x,y) => x + y;
    }
    if(operacion === "restar"){
        return (x,y) => x - y;
    }
    if(operacion === "multiplicar"){
        return (x,y) => x * y;
    }
    if(operacion === "dividir"){
        return (x,y) => x / y;
    }
}
    
const sumar = generarOperacion ("sumar");
console.log(sumar(5, 6)); 
*/
/* 
*arrow function que tiene dentro un arreglo y una funcion
*   el console.log como tal es una funcion
* recorre el arreglo con for.. y que va a haciendo.. a cada funcion(le agrega iterator)
*como en este caso en funcion le pasamos console.log e iterator son elementos del array resulta que nos devuelve lo que contiene el arreglo.

const iterador = (arreglo, funcion) => {
    for (const iterator of arreglo) {
        funcion(iterator);
    }
};
iterador([4, 5, 6, 7, 8, 9], console.log);
 */

/* 

*                   forEach
*       recorre cada uno de los elementos del arreglo
*/
/* 
const productos = [
    
    { id: 2, nombre: "aaa", precio: 1010},
    { id: 3, nombre: "bbb", precio: 1111},
    { id: 4, nombre: "ccc", precio: 2222},
    { id: 1, nombre: "ddd", precio: 3333},
];

productos.forEach(item => { 
    console.log(item);
});
 */
/* 
*                       FIND 
*   encuentra el primer elemento que cumpla la condición.
 */

/* 
const productos = [
    { id: 2, nombre: "camisa", precio: 1010},
    { id: 3, nombre: "zapato", precio: 1111},
    { id: 4, nombre: "zapatilla", precio: 2222},
    { id: 1, nombre: "pantalaon", precio: 3333},
];

let nombre = prompt ("Ingrese el producto a consultar")
const producto = productos.find ((item) => item.nombre === nombre);
if(producto){
    alert(
        `
        Id: ${producto.id}
        Nombre: ${producto.nombre}
        Precio: $${producto.precio}
        `
    )
} else {
    alert("Producto no encontrado");
}
 */
/* 
*                   FILTER
*       Encuentra todos los elementos que cumplan la condición.
 */
/* 
const productos = [
    { id: 2, nombre: "camisa", precio: 1010},
    { id: 3, nombre: "zapato", precio: 1111},
    { id: 4, nombre: "zapatilla", precio: 2222},
    { id: 1, nombre: "pantalaon", precio: 3333},
];

let precio = Number(prompt("Ingrese el precio minimo del producto"));
const encontrados = productos.filter(item => item.precio > precio);

encontrados.forEach(item => {
    alert(
        `
        Id: ${item.id}
        Nombre: ${item.nombre}
        Precio: $${item.precio}
        `
    );
})
 */
/* 
* con esto podemos empezar a filtrar objetos dentro de un ecommerce que cumpla con los requisitos que busca el usuario. 
*/
/* 
*                       SOME
*           Valida si existe al menos un elemento que cumple la condición
*/
/* 
* con un console log nos devuelve true o false si dentro de los "productos" hay un elemento llamado camisa.
const productos = [
    { id: 2, nombre: "camisa", precio: 1010},
    { id: 3, nombre: "zapato", precio: 1111},
    { id: 4, nombre: "zapatilla", precio: 2222},
    { id: 1, nombre: "pantalaon", precio: 3333},
];

console.log(productos.some((item) => item.nombre === "camisa")); 
 */
/* 
* ahora otro ejemplo... le pedimos al usuario que ingrese un nombre de producto para ir luego y comprobar y devolver "producto disponible o no"
*/
/* const productos = [
    { id: 2, nombre: "camisa", precio: 1010},
    { id: 3, nombre: "zapato", precio: 1111},
    { id: 4, nombre: "zapatilla", precio: 2222},
    { id: 1, nombre: "pantalaon", precio: 3333},
];

let nombre = prompt("Ingrese el nombre del producto para buscar disponibilidad");

if(productos.some (item => item.nombre === nombre)) {
    alert("Producto disponible")
} else {
    alert("Producto no disponible")
}
 */
/* 
*                       MAP
*       modifica o transforma el arreglo
 */
/* 
const productos = [
    { id: 2, nombre: "camisa", precio: 1010},
    { id: 3, nombre: "zapato", precio: 1111},
    { id: 4, nombre: "zapatilla", precio: 2222},
    { id: 1, nombre: "pantalaon", precio: 3333},
];

let nombres = productos.map((item) => item.nombre);
console.log(nombres);

let precios = productos.map((item) => item.precio)
console.log(precios);
 */
/* 
*           OTRO EJEMPLO, con el map modificamos los precios sacandoles el IVA.
 */
/* 
const productos = [
    { id: 2, nombre: "camisa", precio: 1010},
    { id: 3, nombre: "zapato", precio: 1111},
    { id: 4, nombre: "zapatilla", precio: 2222},
    { id: 1, nombre: "pantalaon", precio: 3333},
];

const nuevosPrecios = productos.map ((item) => {
    return {
        id:item.id,
        nombre: item.nombre,
        precio: item.precio - item.precio * 0.21,
    };
});

console.log(nuevosPrecios);
 */
/* 
*                          REDUCE
*                   Reduce un arreglo a un unico valor

*/
/* 
const productos = [
    { id: 2, nombre: "camisa", precio: 1000},
    { id: 3, nombre: "zapato", precio: 700},
    { id: 4, nombre: "zapatilla", precio: 785},
    { id: 1, nombre: "pantalaon", precio: 300},
];

const numeros = [4, 5, 6, 7, 8];

let total = numeros.reduce((acum, item) => acum + item, 0)
console.log(total);
 */

/* 
*               EJEMPLO CARRITO DE COMPRAS = Precio total
*en este caso el reduce podria ser usado para sumar el total de todo el carrito de compras del usuario 
*/
/* 
const productos = [
    { id: 2, nombre: "camisa", precio: 1000},
    { id: 3, nombre: "zapato", precio: 700},
    { id: 4, nombre: "zapatilla", precio: 785},
    { id: 1, nombre: "pantalaon", precio: 300},
];

let total = productos.reduce((acum, item) => acum + item.precio, 0)
console.log(total);
 */
/* 
*                           SORT
*               Lo utilizamos para ordenar los elementos dentro de un arreglo, nosotros elegimos los parametros a tener en cuenta (.precio .nombre)
 */
/* 
const numeros = [40, 1, 5, 200];
console.log(numeros.sort ((a, b) => a - b)); //ascendente 1, 5, 40, 200
console.log(numeros.sort ((a, b) => b - a)); // decreciente 200, 40, 5, 1 
*/
/* 
const items = [
    { nombre: 'Pikachu', price: 21 },
    { nombre: 'Charmander', price: 37 },
    { nombre: 'Pidgey', price: 45 },
    { nombre: 'Squirtle', price: 60 }
  ]
console.log(items.sort((a, b) => {
    if (a.nombre > b.nombre) {
        return 1;
    }
    if (a.nombre < b.nombre) {
        return -1;
    }
    // a es igual a b
    return 0;
}));
 */
/* 
*                            Resumen

*                   Funciones de orden superior

*               METODOS DE BUSQUEDA y TRANSFORMACION
-----------------------------------------------------
*     forEach
*                   recorre cada uno de los elementos del arreglo
* (nos muestra todos los elementos del arreglo)
-----------------------------------------------------
*       find
*           encuentra el primer elemento que cumpla la condición.
* (ejemplo que tira todos los datos del producto especifico)
-----------------------------------------------------
*       filter
*               Encuentra todos los elementos que cumplan la condición.
* (ejemplo del precio minimo que tiene que tener un producto / precio maximo)
-----------------------------------------------------
*       some
*                Valida si existe al menos un elemento que cumple la condición
*  (ejemplo de la camisa en el buscador) "si está disponible"
-----------------------------------------------------
*       map
*                   modifica o transforma el arreglo
*(ejemplo quitandole el iva a todos los items)
-----------------------------------------------------
*       reduce
*                   Reduce un arreglo a un unico valor
*(ejemplo sumando el precio de todos los items general el total del carrito)
-----------------------------------------------------
*       sort
* ordena segun el criterio que nosotros coloquemos
* ejemplo de los numeros a - b y b - a
* ejemplo con los nombres 
* a.name > b.name
* a.name < b.name

-----------------------------------------------------
*/
/* const productos = [
    { id: 1, nombre: "camisa", precio: 1000 },  
    { id: 2, nombre: "gorra", precio: 1000 },  
    { id: 3, nombre: "zapato", precio: 1000 }, 
    { id: 4, nombre: "media", precio: 1000 }, 
];
const agregarProducto = (nombre, precio) => {
    let objeto = {
        id: productos.length + 1,
        nombre: nombre,
        precio: precio,
    };

    productos.unshift(objeto);
}
agregarProducto("pantalon", 1000);
console.log(productos); */
/*

* para iniciar cualquier metodos de abajo se necesita esta parte del codigo

 const productos = [
    { id: 1, nombre: "camisa", precio: 1000 },  
    { id: 2, nombre: "gorra", precio: 1000 },  
    { id: 3, nombre: "zapato", precio: 250 }, 
    { id: 4, nombre: "media", precio: 400 }, 
];
*                   FOREACH

productos.forEach(item => {
    console.log(`
    Id: ${item.id}
    Nombre: ${item.nombre}
    Precio: $${item.precio}
    `);
})

*                   FIND

const producto = productos.find(item => item.nombre === "camisa"); //find
console.log(producto);

*                   FILTER

const filtrados = productos.filter (item => item.precio > 500); // filter
console.log(filtrados);

*                   MAP

let precios = productos.map ((item) => item.precio); //map
let nombres = productos.map ((item) => item.nombre); //map

console.log(nombres);
console.log(precios);
 */

/* 


*           FUNCIONES DE ORDEN SUPERIOR & DOM
 *           /funciones de alto orden


*/


/* 
*               OBJETO MATH

*/
/* 
*                   Euler y PI
console.log(Math.E);
console.log(Math.PI);
 */
/* 
*                   MIN y MAX 
console.log(Math.min(5,5,5,6,7,-Infinity, 7,8,10));
console.log(Math.max(5,5,5,6,7,7,Infinity,8,1,2,10));

*/
/* 
*                       ceil 
*           REDONDEA HACIA EL ENTERO DE ARRIBA

console.log(Math.ceil(3.1));
console.log(Math.ceil(3.7));

*                       floor 
*           REDONDEA HACIA EL ENTERO DE ABAJO


console.log(Math.floor(3.1));
console.log(Math.floor(3.7));

*/

/* 
*                       round 
*               REDONDEA HACIA EL MAS CERCANO

console.log(Math.round(3.14));
console.log(Math.round(3.7));
 */
/* 
*                       sqrt
*                   Raiz cuadrada de un numero

console.log(Math.sqrt(9));
console.log(Math.sqrt(2));
console.log(Math.sqrt(1));
console.log(Math.sqrt(-1));
 */
/* 
*           random
*           genera un numero aleatorio entre 0 y 1
 */
/* 
* En este caso combinamos un numero random y a la vez la propiedad de math que redondea, por ende obtenemos un numero aleatorio entero

console.log(Math.round(Math.random() * 10));
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

 */
/* 
*               numeros entre un numero y otro

*       Math.random() * amplitud (20-7 = 13 ) + inicial (+7) 
*           EJEMPLO ABAJO
*/
/* 
            console.log(Math.round(Math.random() * 13 + 7)); 

*/
/* 
*                Ejercicio: numeros randoms entre 20 y 35

console.log(Math.round(Math.random() * 15 + 20));
console.log(Math.round(Math.random() * 15 + 20));
console.log(Math.round(Math.random() * 15 + 20));
console.log(Math.round(Math.random() * 15 + 20));
console.log(Math.round(Math.random() * 15 + 20));
console.log(Math.round(Math.random() * 15 + 20));
console.log(Math.round(Math.random() * 15 + 20));


*                Ejercicio: numeros randoms entre 77 y 101
 */
/* 
console.log(Math.round(Math.random() * 24 + 77));
console.log(Math.round(Math.random() * 24 + 77));
console.log(Math.round(Math.random() * 24 + 77));
console.log(Math.round(Math.random() * 24 + 77));
console.log(Math.round(Math.random() * 24 + 77));
console.log(Math.round(Math.random() * 24 + 77));
console.log(Math.round(Math.random() * 24 + 77));
console.log(Math.round(Math.random() * 24 + 77));
 */
/* 
*           genera numeros aleatorios entre 5 y 90

const generarAleatorio = (amplitud, desplazamiento) => {
    return Math.round(Math.random() * amplitud + desplazamiento);
};

console.log(generarAleatorio(85, 5));
console.log(generarAleatorio(85, 5));
console.log(generarAleatorio(85, 5));
 */

/* 

let nombres = ["camila", "andres", "juan", "mario", "pedro", "carlitos"];


const generarAleatorio = () => {
    let aleatorio = Math.floor(Math.random() * nombres.length)
    
    return nombres[aleatorio];
};
 */
/* 

*               la clase           DATE 


*/
/* 
console.log(new Date(2023,11,16));

const navidad = new Date(2023, 11, 24, 23, 59, 59)
console.log(navidad);

 */
/* 
const navidad = new Date("December 24, 2023 23:59:59")
console.log(navidad);

console.log(navidad.toDateString());
console.log(navidad.toLocaleString());
console.log(navidad.toLocaleDateString()); //devuelve la fecha normalita
console.log(navidad.toTimeString());

console.log(navidad.getFullYear());
console.log(navidad.getMonth()); // devuelve mes empezando por el cero
console.log(navidad.getDay()); //devuelve días del 0 al 6 empezando por el domingo
console.log(navidad.toTimeString());
console.log(navidad.toLocaleString());
console.log(navidad.toLocaleDateString()); 
*/

/* 

*               DOCUMENT OBJECTS MODELS
*                       DOM
*/
/* 
console.log(document.body);

*
Los más comunes

*       getElementById()
*       getElementsByClassName()
*       getElementsByTagName()
 */
/* 
let aplicacion = document.getElementById("aplicacion");

console.log(aplicacion.innerHTML);
 */
/* 
let parrafo = document.getElementById("parrafo");

console.log(parrafo.innerText);
console.log(parrafo.innerHTML); */

/* 
let saludo = document.getElementById("saludo");
let seccion = prompt("Ingrese la sección a ingresar.");

if (seccion === "carrito") {
    saludo.innerHTML = `<h1> Bienvenidos al ${seccion} </h1>`;
    saludo.className = "rojo";
} else if (seccion === "favoritos") {
    saludo.innerHTML = `<h1> Bienvenidos al ${seccion} </h1>`;
    saludo.className = "azul";
} else {
    saludo.innerHTML = `<h1> Bienvenidos a nuestra super página </h1>`;
    saludo.className = "verde";
}
 */

/* 
*               CREACION DE NODOS

*/

/* 
//creacion de la etiqueta
let parrafo = document.createElement ("p");

//asignacion de contenido
parrafo.innerHTML = "<h1> Hola Coder!</h1>";

//asignacion de padre 
document.body.append(parrafo)

 */

// let cantidad = prompt("¿cuantos alumnos son?");
// let alumnosTotales = [];

// for (i = 0; i < cantidad; i++) {
// 	alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0];
// }

// const tomarAsistencia = (nombre,p)=>{
// 	let presencia = prompt(nombre);
// 	if (presencia == "p" || presencia == "P") {
// 	    alumnosTotales[p][1]++;
// 	}
// }


// for (i = 0; i < 30; i++) {
// 	for (alumno in alumnosTotales) {
// 	    tomarAsistencia(alumnosTotales[alumno][0],alumno);
// 	}
// }

// for (alumno in alumnosTotales) {
// 	let resultado = `${alumnosTotales[alumno][0]}:<br>
//     ________Presentes: <b>${alumnosTotales[alumno][1]}</b> <br>
//     ________Ausencias: <b>${30 - alumnosTotales[alumno][1]} </b>`;
// 	if (30 - alumnosTotales[alumno][1] > 18) {
// 	    resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>";
// 	} else {
// 	    resultado+= "<br><br>"
// 	}
// 	document.write(resultado)
// }
