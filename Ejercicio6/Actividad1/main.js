// let nombres = ["Homero", "Sr. Berns", "Mou", "Apu"];

// for (let i = 0; i < nombres.length; i++) {
//   let nombre = nombres[i];
//   alert(`En la posición ${i} del array "nombres" se encuentra: ${nombre}`);
// }

// * Ahora con for of

let nombres = ["Homero", "Sr. Berns", "Mou", "Apu"];

let i = 0;
for (let nombre of nombres) {
  alert(`En la posición ${i} del array "nombres" se encuentra: ${nombre}`);
  i++;
}