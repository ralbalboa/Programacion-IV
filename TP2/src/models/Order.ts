import { v4 as uuidv4 } from "uuid";

type orderSize = 'S' | 'M' | 'L'; 

type orderStatus = 'delivered' | 'pending' | 'canceled'; 

const basePrice = {
  S: 3000,
  M: 4000,
  L: 5000,
} as const; // as const para solo lectura

const toppingPrice = 700; 

export class Order {
  private address: string; 
  private status: orderStatus; 
  private orderSize: orderSize; 
  private toppings: string[];
  private id: string;
  private price: number;

  
  constructor(orderSize: orderSize, toppings: string[], address: string) {
    this.id = uuidv4();
    this.orderSize = orderSize;
    this.toppings = toppings;
    this.address = address;
    this.status = "pending";
    this.price = this.calculatePrice();
  }

  // Getters
  public getId(): string {
    return this.id;
  }
  public getAddress(): string {
    return this.address;
  }
  public getStatus(): orderStatus {
    return this.status;
  }
  public getOrderSize(): orderSize {
    return this.orderSize;
  }
  public getToppings(): string[] {
    return this.toppings;
  }
  public getPrice(): number {
    return this.price;
  }

  // Método para cambiar el estado
  public setStatus(newStatus: orderStatus): void {
    this.status = newStatus;
  }

  public setToppings(toppings: string[]): void {
    this.toppings = toppings;
  }

  // METHODS
  public calculatePrice(): number {
    return basePrice[this.orderSize] + this.toppings.length * toppingPrice;
  }
}
