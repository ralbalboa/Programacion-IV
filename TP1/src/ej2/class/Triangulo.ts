import { FiguraGeometrica } from "./FiguraGeometrica.class";
export class Triangulo extends FiguraGeometrica{
    public base:number;
    public altura:number

    constructor(base:number, altura:number) {
        super("Triangulo");
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}
