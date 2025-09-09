
import { Perro } from "./class/Perro.class";

const miPerro = new Perro("Firulais", "Labrador", 3);
miPerro.moverse();
miPerro.hacerSonido();

console.log(`Mi perro se llama ${miPerro.name}, es de raza ${miPerro.raza} y tiene ${miPerro.edad} años.`);