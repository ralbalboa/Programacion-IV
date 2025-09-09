export abstract class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    get Name(): string {
        return this.name;
    }

    abstract hacerSonido(): void;
}