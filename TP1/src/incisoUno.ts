export interface Animal{
    hacerSonido():void;
    moverse():void;
}

export class Perro implements Animal {

    hacerSonido(): void {
        console.log("Guau!!!")
    }

    moverse(): void {
        console.log('El perro se movio')
    }
}

export function ejecutarInciso1(){
    console.log("=========Ej 1===========");
    const perro = new Perro;
    perro.hacerSonido();
    perro.moverse();
}