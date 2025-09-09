import { Vehiculo } from "./Vehiculo.interface"

export type traccion= "4x4" | "delantera" | "trasera"

export interface Auto extends Vehiculo{
    CantidadDePuertas: number
    Traccion: traccion
    Airbags: boolean
}