import { Animal } from "./Animal";
import { Volador } from "../interface/Volador";

export class Pajaro extends Animal implements Volador{
    public especie:string;
    constructor(nombre:string, especie:string){
        super(nombre);
        this.especie = especie;
    }

    hacerSonido(): void {
        console.log(`${this.nombre} canta: (como un pajaro)`);
    }

    volar(): void {
        console.log(`${this.nombre} esta volandooo`);
    }
}