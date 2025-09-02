abstract class Vehiculo {

    private marca: string
    private kilometraje: number
    private velocidadMaxima: number
    private anio: number
    private patente: string
    private esElectrico: boolean = false

    constructor(marca: string, kilometraje: number, velocidadMaxima: number, anio: number, patente:string, esElectrico: boolean) {
        this.marca = marca
        this.kilometraje = kilometraje
        this.velocidadMaxima = velocidadMaxima
        this.anio = anio
        this.patente = patente
        this.esElectrico = esElectrico
    } 

    // GETERS Y SETTERS

    protected get Marca(){
        return this.marca
    }
    protected get Kilometraje(){
        return this.kilometraje
    }
    protected get VelocidadMaxima(){
        return this.velocidadMaxima
    }
    protected get Anio(){
        return this.anio
    }
    protected get Patente(){
        return this.patente
    }
    protected get Electrico(){
        return this.esElectrico
    }
    protected set Marca(marca:string){
        this.marca = marca
    }
    protected set Kilometraje(kilometraje:number){
        this.kilometraje = kilometraje
    }
    protected set VelocidadMaxima(velocidadMaxima:number){
        this.velocidadMaxima = velocidadMaxima
    }
    protected set Anio(anio:number){
        this.anio = anio
    }
    protected set Patente(patente:string){
        this.patente = patente
    }

   protected set Electrico(valor: boolean) {
    this.esElectrico = valor;
}

}