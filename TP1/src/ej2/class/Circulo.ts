import { FiguraGeometrica } from "./FiguraGeometrica.class";
export class Circulo extends FiguraGeometrica {
    protected radio:number
    protected nombre:string = "Circulo"
    constructor(radio:number){
        super("Circulo");
        this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * this.radio * this.radio
    }
}