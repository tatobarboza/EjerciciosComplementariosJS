// * Declarar un método para la clase Tienda con la siguiente cabecera estaAbierto(hora). Este retorna true si la hora enviada está entre las 08 y 12, o entre las 15 y 19. Caso contrario, se retorna false.
//  * Luego invocar al menos un (1) objeto usando esta clase, y solicitar al usuario tres (3) horas. Informar por alerta si la tienda está abierta, en función de la hora ingresada.

//notas

//* Notas actividad 3
// * Considerando que por prompt sólo podemos ingresar cadenas, se sugiere asumir que se trabaja sólo con horas en punto, de 0 a 22. El if debe verificar dos intervalos válidos.

class Tienda {
    constructor(lugar, hora) {
        this.hora = hora;
        this.lugar = lugar;
        this.abierto = false
        if ((this.hora >= 15 && this.hora <= 19) || (this.hora >= 8 && this.hora <= 12)) {
            this.abierto = true;
        }
    }
}

let persona1 = new Tienda(prompt("Ingrese el nombre del local"),Number(prompt("Hora"))
);
console.log(`${persona1.abierto ? "Abierto" : "Cerrado"}`);
alert(`El local ${persona1.lugar} se encuentra: ${persona1.abierto ? "Abierto" : "Cerrado"}`)

// * creando un string con backtics y preguntando si `${persona1.abierto ? "Abierto" : "Cerrado"}`
// * para valores booleanos que pueda aplicar una opcion o la otra en caso de que sea true o false.