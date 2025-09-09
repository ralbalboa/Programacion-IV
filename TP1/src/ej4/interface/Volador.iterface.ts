import { Animal } from "./Animal.interface";

export interface Volador extends Animal {
    volar(): void;
}