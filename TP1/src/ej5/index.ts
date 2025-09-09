import { Moto } from "./classes/Moto.class";
import {Auto} from "./classes/Auto.class"


const motoNueva = new Moto("Mondial", 45000, 110, 2022, "ABC123", false, 150)
const autoNuevo = new Auto("Toyota", 11000, 2003, 110, "ACF125", true, 4, "delantera", true)

// marca, kilometraje, velocidadMaxima, anio, patente, esElectrico, cilindrada
console.log('motoNueva', motoNueva)
motoNueva.colgarMoto(motoNueva)
motoNueva.acelerar()
motoNueva.frenar()

console.log('autoNuevo', autoNuevo)
autoNuevo.acelerar()
autoNuevo.frenar()

