abstract class Empleado{

    public nombre: string;
    public salarioBase: number;

    constructor(nombre:string, salarioBase:number){
        this.nombre = nombre;
        this.salarioBase = salarioBase;
    }

    abstract calcularSalario():number;
}

class EmpleadoTiempoCompleto extends Empleado {
    calcularSalario(): number {
        return this.salarioBase + 20000;
    }
}

class EmpleadoMedioTiempo extends Empleado {
    calcularSalario(): number {
        return this.salarioBase * 0.5;
    }
}

export function ejecutarInciso3(){
    console.log("======ej3=======");
    const empleados: Empleado[] = [
        new EmpleadoTiempoCompleto('Mateo', 70000),
        new EmpleadoMedioTiempo('Lu', 50000),
        new EmpleadoTiempoCompleto('Rodri', 90000),
        new EmpleadoMedioTiempo('Fran', 43000),
    ];

    empleados.forEach((e)=> 
        console.log(`${e.nombre} cobra => $${e.calcularSalario()}`)
    )
}