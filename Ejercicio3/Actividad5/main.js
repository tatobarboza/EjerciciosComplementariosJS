const productos = {
    1: "Tomate",
    2: "Papa",
    3: "Carne",
    4: "Pollo"
  };
  
  while (true) {
    const entrada = prompt("Ingresa un número (o escribe 'ESC' para salir):");
  
    if (entrada === null || entrada.toUpperCase() === 'ESC') {
      break;
    }
  
    const numero = parseInt(entrada);
  
    if (!isNaN(numero) && numero >= 1 && numero <= 4) {
      console.log(productos[numero]);
    } else {
      console.log("Número no válido. Ingresa 1, 2, 3 o 4.");
    }
  }
  
  console.log("¡Hasta luego!");
  