import { Animal } from "./Animal.interface";
export interface PerroType extends Animal {
    raza: string;
    edad: number;
}