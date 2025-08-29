interface Volador{
    volar():void;
}

abstract class Animal{
    public nombre:string;

    constructor(nombre:string){
        this.nombre = nombre
    }
    
    abstract hacerSonido():void
}


class Pajaro extends Animal implements Volador{
    public especie:string;
    constructor(nombre:string, especie:string){
        super(nombre);
        this.especie = especie;
    }

    hacerSonido(): void {
        console.log(`${this.nombre} canta: (como un pajaro)`);
    }

    volar(): void {
        console.log(`${this.nombre} esta volandooo`);
    }
}

class Zorro extends Animal{
    public especie:string;
    constructor(nombre:string, especie:string){
        super(nombre);
        this.especie = especie
    }

    hacerSonido(): void {
        console.log(`${this.nombre} hace el sonido de un zorro`);
        
    }
}

export function ejecutarInciso4(){
    console.log("=========ej4=========");
    const pajaro = new Pajaro("Loro", "Bostero")
    pajaro.hacerSonido();
    pajaro.volar();

    const zorro = new Zorro("Zorro", "Colorado");
    zorro.hacerSonido();
}