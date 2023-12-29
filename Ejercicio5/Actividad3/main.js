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

let primerConsulta = new Tienda("Farolito", Number(prompt("Hora")));
let segundaConsulta = new Tienda("Farolito", Number(prompt("Hora")));
let tercerConsulta = new Tienda("Farolito", Number(prompt("Hora")));


alert(`El local ${primerConsulta.lugar} a las ${primerConsulta.hora} se encuentra: ${primerConsulta.abierto ? "Abierto" : "Cerrado"} \n
El local ${segundaConsulta.lugar} a las ${segundaConsulta.hora} se encuentra: ${segundaConsulta.abierto ? "Abierto" : "Cerrado"} \n
El local ${tercerConsulta.lugar} a las ${tercerConsulta.hora} se encuentra: ${tercerConsulta.abierto ? "Abierto" : "Cerrado"} 
`)

// * creando un string con backtics y preguntando si `${persona1.abierto ? "Abierto" : "Cerrado"}`
// * para valores booleanos que pueda aplicar una opcion o la otra en caso de que sea true o false.