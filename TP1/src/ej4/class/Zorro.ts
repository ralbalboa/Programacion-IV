import { Animal } from "./Animal";

export class Zorro extends Animal{
    public especie:string;
    constructor(nombre:string, especie:string){
        super(nombre);
        this.especie = especie
    }

    hacerSonido(): void {
        console.log(`${this.nombre} hace el sonido de un zorro`);
        
    }
}