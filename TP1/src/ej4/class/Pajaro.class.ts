import { Animal } from "./Animal.class";
import { Pajaro as PajaroInterface } from "../interface/Pajaro.interface";

export class Pajaro extends Animal implements PajaroInterface {
    especie: string;

    constructor(name: string, especie: string) {
        super(name);
        this.especie = especie;
    }

    volar(): void {
        console.log(`${this.name} está volando`);
    }

    hacerSonido(): void {
        console.log(`${this.name} dice: Pío Pío!`);
    }
}