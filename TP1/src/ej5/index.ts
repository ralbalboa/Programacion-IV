import { Moto } from "./classes/Moto.class";
import {Auto} from "./classes/Auto.class"
import { Moto as MotoInterface } from "./interface/Moto.interface";
import { Auto as AutoInterface } from "./interface/Auto.interface";

const motoNueva:MotoInterface = new Moto("Mondial", 45000, 110, 2022, "ABC123", false, 150)
const autoNuevo: AutoInterface = new Auto("Toyota", 11000, 2003, 110, "ACF125", true, 4, "delantera", true)

console.log("Patente:", motoNueva.Patente)
console.log("Marca:", motoNueva.Marca)
console.log("Cilindrada:", motoNueva.Cilindrada)

console.log(autoNuevo)
