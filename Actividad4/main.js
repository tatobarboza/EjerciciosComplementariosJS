const nombres = [];

for (let i = 0; i < 5; i++) {
    let valor = prompt(`Ingrese un nombre` + (i+1));
    nombres.push(valor);
}

console.log(`nombres:`, nombres);
alert(`Nombres: ${[nombres]}`);
