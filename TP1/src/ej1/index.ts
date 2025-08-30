
import { Perro } from "./class/Perro.class";
import { PerroType } from "./interface/Perro.interface";

const miPerro: PerroType = new Perro("Firulais", "Labrador", 3);
miPerro.hacerSonido("Woof!"); // "Woof! Woof!"
miPerro.moverse("corre felizmente");

console.log(`Mi perro se llama ${miPerro.name}, es de raza ${miPerro.raza} y tiene ${miPerro.edad} años.`);