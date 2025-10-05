export type orderSize = "s" | "m" | "l"
export type orderStatus = "delivered" | "pending"

export type Order = {
    id:string;
    orderSize: orderSize;
    orderStatus: orderStatus;
    toppings: string[];
    address:string;
}

