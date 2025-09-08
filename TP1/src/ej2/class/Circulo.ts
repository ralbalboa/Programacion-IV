import { FiguraGeometrica } from "./Figura";
export class Circulo extends FiguraGeometrica {
    public radio:number
    constructor(radio:number){
        super(); // hereda de la clase figura
        this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * this.radio * this.radio
    }
}