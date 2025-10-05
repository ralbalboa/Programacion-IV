import { v4 as uuidv4 } from 'uuid';
import { orderSize, orderStatus } from '../types/orderTypes';

const basePrice = {
  s: 3000,
  m: 4000,
  l: 5000,
} as const;

const toppings = 700;

export class Order {
    protected address
    protected status
    protected orderSize
    protected toppings: string[]
    protected id:string

    constructor(id: string, orderSize: orderSize, toppings: string[], address: string, status: "pending") {
        this.id = uuidv4();
        this.orderSize = orderSize;
        this.toppings = toppings;
        this.address = address;
        this.status = status;
    }
    //Getters
    public getId(): string {
        return this.id;
    }

    public getAddress(): string {
        return this.address;
    }

    public getStatus():orderStatus {
        return this.status;
    }

    public getOrderSize(): orderSize {
        return this.orderSize;
    }

    public getToppings(): string[] {
        return this.toppings;
    }

    // SETTERS
    public setToppings(toppings: string[]): void {
        if(toppings.length > 4 || toppings.length < 0) {
            this.toppings = toppings;   
        }
    }

    public setOrderSize(orderSize: orderSize): void {
        this.orderSize = orderSize
    }

    // METHODS
    public calculatePrice(): number {
        return basePrice[this.orderSize] + (this.toppings.length * toppings);
    }
    
}

