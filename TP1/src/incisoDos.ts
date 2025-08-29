abstract class Figura {
    abstract calcularArea(): number;
}

class Circulo extends Figura {
    public radio:number
    constructor(radio:number){
        super(); // hereda de la clase figura
        this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * this.radio * this.radio
    }
}

class Rectangulo extends Figura {
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

class Triangulo extends Figura{
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

export function ejecutarInciso2(){
    console.log('========ej2==========');
    const circulo = new Circulo(5)
    const rectangulo = new Rectangulo(10,5);
    const triangulo = new Triangulo(8,10);
    console.log(`Area del circulo = ${circulo.calcularArea()}`);
    console.log(`Area del rectangulo = ${rectangulo.calcularArea()}`);
    console.log(`Area del triangulo = ${triangulo.calcularArea()}`);
}