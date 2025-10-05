import { orderSize, orderStatus } from '../types/orderTypes';
export declare class Order {
    protected address: string;
    protected status: "pending";
    protected orderSize: orderSize;
    protected toppings: string[];
    protected id: string;
    constructor(id: string, orderSize: orderSize, toppings: string[], address: string, status: "pending");
    getId(): string;
    getAddress(): string;
    getStatus(): orderStatus;
    getOrderSize(): orderSize;
    getToppings(): string[];
    setToppings(toppings: string[]): void;
    setOrderSize(orderSize: orderSize): void;
    calculatePrice(): number;
}
//# sourceMappingURL=Order.d.ts.map