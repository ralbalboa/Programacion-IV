export abstract class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    hacerSonido(sonido: string): void {
        console.log(`${this.name} hace: ${sonido}`);
    }
}