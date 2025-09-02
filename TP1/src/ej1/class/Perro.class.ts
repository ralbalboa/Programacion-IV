import { Animal } from "./Animal.class";

export class Perro extends Animal {
    raza: string;
    edad: number;

    constructor(name: string, raza: string, edad: number) {
        super(name);
        this.raza = raza;
        this.edad = edad;
    }

}