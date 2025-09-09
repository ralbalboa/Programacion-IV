import { Animal } from "./Animal.class";
import { PerroInterface } from "../interface/Perro.interface";

export class Perro extends Animal implements PerroInterface {
    raza: string;
    edad: number;

    constructor(name: string, raza: string, edad: number) {
        super(name);
        this.raza = raza;
        this.edad = edad;
    }

    moverse(): void {
        console.log(`${this.name} corre felizmente.`);
    }

    hacerSonido(): void {
        console.log(`${this.name} dice: Guau Guau!`);
    }

}