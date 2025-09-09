import { Animal } from "./Animal.interface";
export interface PerroInterface extends Animal {
    raza: string;
    edad: number;
}