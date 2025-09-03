import { Figura } from "./Figura";
export class Triangulo extends Figura{
    public base:number;
    public altura:number

    constructor(base:number, altura:number) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): number {
        return this.base* this.altura
    }
}
