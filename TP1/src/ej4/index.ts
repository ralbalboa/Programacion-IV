import { Pajaro } from "../ej4/class/Pajaro.class";
import { Zorro } from "../ej4/class/Zorro.class";
import { Zorro as ZorroType } from "../ej4/interface/Zorro.interface";
import { Pajaro as PajaroType } from "../ej4/interface/Pajaro.interface";

const miPajaro: PajaroType = new Pajaro("Tweety", "Canario");
miPajaro.hacerSonido("piopio");
miPajaro.volar("está volando alto en el cielo.");
console.log(`Mi pájaro se llama ${miPajaro.name} y es un ${miPajaro.especie}.`);

const miZorro: ZorroType = new Zorro("Foxy", "Zorro Rojo");
miZorro.hacerSonido("Auuuu");
console.log(`Mi zorro se llama ${miZorro.name} y es un ${miZorro.especie}.`);