export abstract class Empleado{

    public nombre: string;
    public salarioBase: number;

    constructor(nombre:string, salarioBase:number){
        this.nombre = nombre;
        this.salarioBase = salarioBase;
    }

    abstract calcularSalario():number;
}