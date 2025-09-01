abstract class Vehiculo{
    public velMaxima:number;
    public anio:number;
    public patente:string;
    constructor(velMaxima:number, anio:number, patente:string){
        this.velMaxima = velMaxima;
        this.anio = anio ;
        this.patente = patente
    }

    acelerar():void{
        console.log(`Su vehiculo ${this.patente} ha acelerado`);
    }

    frenar():void{
        console.log(`Su vehiculo ${this.patente} a frenado`);
    }
    cargarCombustible():void{
        console.log(`Su vehiculo ${this.patente} a cargado su combustible`);
    }
}

interface Electrico{
    cargarBaterias():void;
}

type marcaAutos='BMW'| 'FIAT' |'TOYOTA';
class Auto extends Vehiculo{

    public marca:marcaAutos;

    constructor(marca: marcaAutos,velMaxima:number, anio:number, patente:string){
        super(velMaxima,anio,patente);
        this.marca = marca
    }
}

type marcaMotos= 'HONDA'| 'DUCATI' | 'KTM'
class Moto extends Vehiculo{
    public marca:marcaMotos;
    constructor(marca: marcaMotos,velMaxima:number, anio:number, patente:string){
        super(velMaxima,anio,patente);
        this.marca = marca
    }
}

class AutoElectrio extends Vehiculo implements Electrico{
    public marca:marcaAutos;

    constructor(marca:marcaAutos, velMaxima:number, anio:number, patente:string){
        super(velMaxima, anio, patente);
        this.marca = marca
    }

    cargarBaterias(): void {
        console.log("El auto electrico se ha cargado");
    }
}

export function ejecutarInciso5(){
    const autoNafta = new Auto('TOYOTA', 300, 1999, 'ABC123');
    const moto = new Moto('DUCATI', 330, 2018, 'MUU123');
    const autoElectrico = new AutoElectrio('BMW', 300, 202,'ASD123');
    console.log('=================EJ5==================');
    
    autoNafta.acelerar();
    moto.frenar();
    autoElectrico.cargarBaterias();
}