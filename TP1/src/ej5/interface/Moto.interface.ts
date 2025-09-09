import { Vehiculo } from "./Vehiculo.interface"

export interface Moto extends Vehiculo {
    get Cilindrada(): number
    set Cilindrada(cilindrada: number)
}
