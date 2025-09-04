import { Vehiculo } from "./Vehiculo.class"
import { traccion } from "../interface/Auto.interface"

export class Auto extends Vehiculo {
    protected cantidadDePuertas: number
    protected traccion: traccion
    protected airbags: boolean

    constructor(marca: string, kilometraje: number, 
        velocidadMaxima: number, anio: number, patente:string, 
        esElectrico: boolean,
        cantidadDePuertas: number,
        traccion: traccion,
        airbags: boolean

    ) {
        super(marca, kilometraje, velocidadMaxima, anio, patente, esElectrico)
        this.cantidadDePuertas = cantidadDePuertas
        this.traccion = traccion
        this.airbags = airbags
    }

    //Geters y Setters
    public get CantidadDePuertas():number {
        return this.cantidadDePuertas
    }

    public get Traccion():traccion {
        return this.traccion
    }

    public get Airbags():boolean {
        return this.airbags
    }

    protected set CantidadDePuertas(cantidadDePuertas: number) {
        this.CantidadDePuertas = cantidadDePuertas
    }

    protected set Traccion(traccion: traccion) {
        this.traccion = traccion
    }

    protected set Airbags(valor: boolean) {
        this.airbags = valor
    }
}
