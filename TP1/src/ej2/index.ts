import { Circulo } from "./class/Circulo";
import { Cuadrado } from "./class/Cuadrado.class";
import { Triangulo } from "./class/Triangulo";

export function ejecutarInciso2(){
    console.log('========ej2==========');
    const circulo = new Circulo(5)
    const cuadrado = new Cuadrado(10);
    const triangulo = new Triangulo(8,10);
    console.log(`Area del circulo = ${circulo.calcularArea()}`);
    console.log(`Area del cuadrado = ${cuadrado.calcularArea()}`);
    console.log(`Area del triangulo = ${triangulo.calcularArea()}`);
}
ejecutarInciso2();