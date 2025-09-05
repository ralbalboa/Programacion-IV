import { Animal } from "./class/Animal";
import { Pajaro } from "./class/Pajaro";
import { Zorro } from "./class/Zorro";

export function ejecutarInciso4(){
    console.log("=========ej4=========");
    const pajaro = new Pajaro("Loro", "Bostero")
    pajaro.hacerSonido();
    pajaro.volar();

    const zorro = new Zorro("Zorro", "Colorado");
    zorro.hacerSonido();
}

ejecutarInciso4()