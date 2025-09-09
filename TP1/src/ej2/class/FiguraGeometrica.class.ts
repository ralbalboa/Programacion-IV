export abstract class FiguraGeometrica {
    protected nombre: string = "Figura Geometrica";
    constructor(nombre: string) {
        this.nombre = nombre;
    }

    get Nombre(): string {
        return this.nombre;
    }
    abstract calcularArea(): number;
}