// Recibir funciones por parametros
const numeros = [1, 2, 3, 4]

function porCadaUno(arr, fn) {
    for (const el of arr) {
        fn(el)
    }
}
console.log("Funcion con dos parametros. Recorremos un array pasandole array y funcion");
porCadaUno(numeros, console.log)

// * EJEMPLO -duplicó los valores del array-
const duplicado = []

porCadaUno(numeros, (el)=> {
    duplicado.push(el * 2)
})
console.log("Ejemplo: duplicamos los numeros que contenia el array");
console.log(duplicado) // [2, 4, 6, 8]

// *                    Usa los valores del array numeros:     
// *  const numeros= [1, 2, 3, 4]
// *                Metodo forEach
console.log("recorremos el array numeros con un forEach");
numeros.forEach( (num)=> {
    console.log(num)
} )
// *                Metodo FIND
// *    En resultado le vamos a pedir que devuelva un curso que lleve el nombre de ReactJS
// *    Y debajo le vamos a pedir que devuelva alguno que sea DW, como no existe devuelve undefined.

const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]

const resultadoa = cursos.find((el) => el.nombre === "ReactJS")
const resultadob = cursos.find((el) => el.nombre === "DW")

console.log("Buscamos con find por parametros.");
console.log(resultadoa) 
console.log(resultadob) 

// *        Metodo FILTER
// * Este devuelve arrays vacios en caso de no encontrar lo que le pusimos dentro del filtro
// * Devuelve los elementos dentro del array que coincidan con los valores dados.


const resultado = cursos.filter((el) => el.nombre.includes('JS'))
const resultado2 = cursos.filter((el) => el.precio < 14000)

console.log("Recorremos con metodo filter, por palabras/letras (includes) o comparaciones");
console.log(resultado)
/* [
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'Angular', precio: 22000}
] */

console.log("En este caso no se cumplia ninguna condicion = array vacio");
console.log(resultado2) // []


// *    Metodo SOME
// * Este sólo nos va a devolver true or false en caso de que la condicion se cumpla
console.log("Some nos va a devolver true or false con la condicion colocada");
console.log( cursos.some((el) => el.nombre == "Desarrollo Web")) 
// true
console.log( cursos.some((el) => el.nombre == "VueJS")) 
// false


// *    Metodo MAP

// const cursos = [
//     {nombre: 'Javascript', precio: 15000},
//     {nombre: 'ReactJS', precio: 22000},
//     {nombre: 'AngularJS', precio: 22000},
//     {nombre: 'Desarrollo Web', precio: 16000},
// ]

console.log("Metodo map , nos devuelve un array con la clave que le pedimos");
const nombres = cursos.map((el) => el.nombre)
console.log(nombres)
// [ 'Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web' ]

// *   Muy interesante el metodo map, nos ayuda a modificar arrays y obtener actualizaciones, nos devuelve los elementos dentro de la clave que le pidamos y tambien podemos hacerle modificaciones dentro.

// * EJEMPLO

const actualizado = cursos.map((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio * 1.25
    }
})
console.log(`Y en este caso le pedimos que busque por una clave, y a esa clave la modifique y reemplace en otro array. En este caso un array llamado "actualizado"`);
console.log(actualizado)
/* [
     { nombre: 'Javascript', precio: 18750 },
     { nombre: 'ReactJS', precio: 27500 },
     { nombre: 'AngularJS', precio: 27500 },
     { nombre: 'Desarrollo Web', precio: 20000 }
] */

// const numeros = [1, 2, 3, 4, 5, 6]

// *    METODO Reduce

const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)
console.log(`Metodo reduce, tiene dos parametros, el callback y el elemento a sumar. Va sumando y almacenandolo en "acumulador", el cero en el final es el inicio que toma el metodo reduce. `);
console.log(total) // 21

console.log(`Otro ejemplo de reduce. Toma todos los precios de lo que podria ser un carrito de compras y los devuelve sumados.`);

const miCompra = [
    { nombre: 'Desarrollo Web', precio: 20000 },
    { nombre: 'Javascript', precio: 18750 },
    { nombre: 'ReactJS', precio: 27500 }
]

// *    Otro ejemplo de metodo reduce
const total2 = miCompra.reduce((acc, el) => acc + el.precio, 0)
console.log(total2) // 66250


// *    METODO SORT


const numeros2 = [ 40, 1, 5, 200 ];
numeros2.sort((a, b) => a - b);  // [ 1, 5, 40, 200 ]
numeros2.sort((a, b) => b - a);  // [ 200, 40, 5, 1 ]
// * Este metodo es capaz de reordenar las cosas dentro del mismo array y volverlo a sobrescribir.


// * Otro ejemplo de sort:
const items = [
    { name: 'Pikachu', price: 21 },
    { name: 'Charmander', price: 37 },
    { name: 'Pidgey', price: 45 },
    { name: 'Squirtle', price: 60 }
  ]
items.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    // a es igual a b
    return 0;
})

