import { Figura } from "./Figura";
export class Rectangulo extends Figura {
    public largo:number;
    public ancho:number;

    constructor(largo:number, ancho:number){
        super();
        this.ancho = ancho;
        this.largo = largo;
    }

    calcularArea(): number {
        return this.ancho * this.largo
    }
}