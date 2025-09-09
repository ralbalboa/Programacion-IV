import { Vehiculo } from "./Vehiculo.class";
import { Moto as MotoInterface } from "../interface/Moto.interface";

export class Moto extends Vehiculo implements MotoInterface {
    protected cilindrada: number 

    constructor(marca: string, kilometraje: number, velocidadMaxima: number, anio: number, patente:string, esElectrico: boolean, cilindrada: number) {
    super(marca, kilometraje, velocidadMaxima, anio, patente, esElectrico)
    this.cilindrada = cilindrada
    }

    // GETERS Y SETTERS
    public get Cilindrada():number {
        return this.cilindrada
    }

    public set Cilindrada(cilindrada: number) {
        this.cilindrada = cilindrada
    }

    public colgarMoto(moto: Moto): void {
        console.log(
            `Moto colgada: ${moto.Cilindrada}cc, año ${moto["anio"]}, patente ${moto["patente"]}, marca ${moto["marca"]}`
        )
    }
    
    public acelerar(): void {
        console.log("La moto esta acelerando")
    }
    public frenar(): void {
        console.log("La moto esta frenando")
    }
}