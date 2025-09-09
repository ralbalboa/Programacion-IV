import { Animal as AnimalInterface } from "../interface/Animal.interface";

export abstract class Animal implements AnimalInterface {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    abstract moverse(): void;
    abstract hacerSonido(): void;
}