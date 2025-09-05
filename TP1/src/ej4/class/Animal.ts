export abstract class Animal{
    public nombre:string;

    constructor(nombre:string){
        this.nombre = nombre
    }
    
    abstract hacerSonido():void
}