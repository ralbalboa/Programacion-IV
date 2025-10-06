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
    //get order por id
    public getOrderById(id: string): Order | null {
        const order = orders.find(o => o.getId() === id);
        return order || null;
    }

    //cancelar orden
    public cancelOrder(id: string): Order {
        const order = this.getOrderById(id);
        if (!order) {
            throw new Error("Order not found");
        }

        // REGLA DE NEGOCIO: No se puede cancelar si ya fue entregada
        if (order.getStatus() === "delivered") {
            throw new Error("No se puede cancelar una orden que ya fue entregada");
        }

        // REGLA DE NEGOCIO: No se puede cancelar si ya está cancelada
        if (order.getStatus() === "canceled") {
            throw new Error("La orden ya está cancelada");
        }

        // Cambiar el status a "canceled"
        order.setStatus("canceled");
        return order;
    }

    //get orders con filtro por status
    public getOrdersByStatus(status?: string): Order[] {
        // Si no se especifica status, devolver todas
        if (!status) {
            return orders;
        }

        // Filtrar por status
        return orders.filter(order => order.getStatus() === status);
    }

}