import { Animal } from "./Animal.class";
import { Zorro as ZorroInterface } from "../interface/Zorro.interface";

export class Zorro extends Animal implements ZorroInterface {
    especie: string;
    constructor(name: string, especie: string) {
        super(name);
        this.especie = especie;
    }

    hacerSonido(): void {
        console.log(`${this.name} dice: Auuuu!`);
    }
}