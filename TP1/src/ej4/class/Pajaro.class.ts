import { Animal } from "./Animal.class";

export class Pajaro extends Animal {
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