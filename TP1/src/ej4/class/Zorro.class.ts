import { Animal } from "./Animal.class";

export class Zorro extends Animal {
    especie: string;
    constructor(name: string, especie: string) {
        super(name);
        this.especie = especie;
    }

    hacerSonido(): void {
        console.log(`${this.name} dice: Auuuu!`);
    }
}