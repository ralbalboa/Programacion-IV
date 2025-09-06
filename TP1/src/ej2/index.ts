import { Circulo } from "./class/Circulo";
import { Rectangulo } from "./class/Rectangulo";
import { Triangulo } from "./class/Triangulo";

export function ejecutarInciso2(){
    console.log('========ej2==========');
    const circulo = new Circulo(5)
    const rectangulo = new Rectangulo(10,5);
    const triangulo = new Triangulo(8,10);
    console.log(`Area del circulo = ${circulo.calcularArea()}`);
    console.log(`Area del rectangulo = ${rectangulo.calcularArea()}`);
    console.log(`Area del triangulo = ${triangulo.calcularArea()}`);
}
ejecutarInciso2();