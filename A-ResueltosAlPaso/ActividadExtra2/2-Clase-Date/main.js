// * la clase Date nos permite crear objetos date con fechas diferentes

// ! Tambien podemos obtener valores especificos de fechas guardadas.

// * con estos tres metodos:

// * getFullYear()
// * getMonth()
// * getDay()

//  * const milisegundosPorDia = 86400000

// * Ochenta millones cuatrocientos mil milisegundos tiene un día.

const hoy = new Date("December 17, 2021")

console.log(hoy.getFullYear()) // 2021
console.log(hoy.getMonth()) // 11  (diciembre)
console.log(hoy.getDay()) // 5  (viernes)