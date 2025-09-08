import { PerroType } from "../interface/Perro.interface";

export class Perro implements PerroType {
    name: string;
    raza: string;
    edad: number;

    constructor(name: string, raza: string, edad: number) {
        this.name = name;
        this.raza = raza;
        this.edad = edad;
    }

    hacerSonido(): void {
        console.log(`${this.name} hace: Guau!`);
    }

    moverse(): void {
        console.log(`${this.name}: El perro corre!`);
    }
}