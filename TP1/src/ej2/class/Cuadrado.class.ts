import { FiguraGeometrica } from "./FiguraGeometrica.class";
export class Cuadrado extends FiguraGeometrica {
    protected lado:number;

    constructor(lado:number){
        super("Cuadrado");
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }
}