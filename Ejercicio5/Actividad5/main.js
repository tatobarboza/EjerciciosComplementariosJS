class Cliente {
    constructor(nombre, presupuesto, tarjeta, contacto) {
        this.nombre = nombre;
        this.presupuesto = Number(presupuesto);
        this.tarjeta = tarjeta;
        this.contacto = contacto;
        this.exitosa 
    }

    transferirDinero() {
        let valor = parseFloat(prompt("Ingrese un valor a verificar"));

        if (valor > 0 && valor <= this.presupuesto) {
            this.presupuesto -= valor
            this.exitosa = true
        } else {
            this.exitosa = false
            alert("La transferencia no es válida. Verifique el valor ingresado y su presupuesto.");
        }

        return this.presupuesto;   
         
    }
    saberSi() {
        return `${this.exitosa ? "El monto fue correcto. Su nuevo balance es:" : "Lamentablemente no fue correcta la transacción, usted continúa teniendo:"}`
    }

}

const persona1 = new Cliente("juan", 1150, true, 1150505050);
const persona2 = new Cliente("manolito", 1550, true, 1150305050);
const persona3 = new Cliente("juancito", 3230, true, 1150405050);

alert(`${persona1.nombre}: ${persona1.saberSi()} ${persona1.transferirDinero()}`);
alert(`${persona2.nombre}: ${persona2.saberSi()} ${persona2.transferirDinero()}`);
alert(`${persona3.nombre}: ${persona3.saberSi()} ${persona3.transferirDinero()}`);

