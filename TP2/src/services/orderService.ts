import {Order} from "../models/Order";
import { CreateOrder } from "../types/orderTypes";

let orders: Order[] = []; 

export class OrderService {
    // crear orden
    public createOrder(orderData: CreateOrder): Order {
        const newOrder = new Order(orderData.orderSize, orderData.toppings, orderData.address);
        orders.push(newOrder);
        return newOrder;
    }
    //buscar por id

    //cancelar orden

    //listar

    //listar por estado
}