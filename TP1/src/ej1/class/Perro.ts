import { Animal } from "../interface/Animal"
export class Perro implements Animal {

    hacerSonido(): void {
        console.log("Guau!!!")
    }

    moverse(): void {
        console.log('El perro se movio')
    }
}