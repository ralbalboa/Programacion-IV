export abstract class Vehiculo {

    protected marca: string
    protected kilometraje: number
    protected velocidadMaxima: number
    protected anio: number
    protected patente: string
    protected esElectrico: boolean = false

    constructor(marca: string, kilometraje: number, velocidadMaxima: number, anio: number, patente:string, esElectrico: boolean) {
        this.marca = marca
        this.kilometraje = kilometraje
        this.velocidadMaxima = velocidadMaxima
        this.anio = anio
        this.patente = patente
        this.esElectrico = esElectrico
    } 

    // GETERS Y SETTERS
    public get Marca(){
        return this.marca
    }
    public get Kilometraje(){
        return this.kilometraje
    }
    public get VelocidadMaxima(){
        return this.velocidadMaxima
    }
    public get Anio(){
        return this.anio
    }
    public get Patente(){
        return this.patente
    }
    public get Electrico(){
        return this.esElectrico
    }
    public set Marca(marca:string){
        this.marca = marca
    }
    public set Kilometraje(kilometraje:number){
        this.kilometraje = kilometraje
    }
    public set VelocidadMaxima(velocidadMaxima:number){
        this.velocidadMaxima = velocidadMaxima
    }
    public set Anio(anio:number){
        this.anio = anio
    }
    public set Patente(patente:string){
        this.patente = patente
    }

   public set Electrico(valor: boolean) {
    this.esElectrico = valor;
    }

}