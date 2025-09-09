import { Pajaro } from "../ej4/class/Pajaro.class";
import { Zorro } from "../ej4/class/Zorro.class";

const miPajaro = new Pajaro("Tweety", "Canario");
miPajaro.hacerSonido();
miPajaro.volar();
console.log(`Mi pájaro se llama ${miPajaro.Name} y es un ${miPajaro.especie}.`);

const miZorro = new Zorro("Foxy", "Zorro Rojo");
miZorro.hacerSonido();
console.log(`Mi zorro se llama ${miZorro.Name} y es un ${miZorro.especie}.`);