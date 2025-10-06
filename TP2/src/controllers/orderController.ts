import { Request, Response } from "express";
import { OrderService } from "../services/orderService";
import { CreateOrder, createOrderSchema } from "../types/orderTypes";

//post order
export const createOrder = (req: Request, res: Response) => {
  const parsed = createOrderSchema.safeParse(req.body); // valido que el body sea del tipo CreateOrder con zod
  if (!parsed.success) {
    // si la validación falla, devuelvo un error 422 (Unprocessable Entity)
    return res
      .status(422)
      .json({ message: "Datos inválidos", errors: parsed.error });
  }
  const validatedData: CreateOrder = parsed.data; // si la validación es exitosa, extraigo los datos validados
  const orderService = new OrderService();

  try {
    const created = orderService.createOrder(validatedData);
    res.status(201).json(created); //llamo al servicio para crear la orden y devuelvo la orden creada
  } catch (error) {
    res.status(400).json({ message: "Error creando la orden", error });
  }
};

//get order por id
export const getOrderById = (req: Request, res: Response) => {
  const { id } = req.params;
  const orderService = new OrderService();
  if (!id) {
    return res.status(400).json({ message: "ID de orden es requerido" });
  }
  try {
    const order = orderService.getOrderById(id);
    if (!order) {
      return res.status(404).json({ message: "Orden no encontrada" });
    }
    res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({ message: "Error obteniendo la orden", error });
  }
};

//cancelar orden
export const cancelOrder = (req: Request, res: Response) => {
  const { id } = req.params;
  const orderService = new OrderService();

  if (!id) {
    return res.status(400).json({ message: "ID de orden es requerido" });
  }

  try {
    const canceledOrder = orderService.cancelOrder(id);
    res.status(200).json({
      id: canceledOrder.getId(),
      status: canceledOrder.getStatus(),
      message: "Orden cancelada exitosamente"
    });
  } catch (error) {
    // Manejar diferentes tipos de errores
    if (error instanceof Error) {
      if (error.message === "Order not found") {
        return res.status(404).json({ message: "Orden no encontrada" });
      }
      if (error.message === "No se puede cancelar una orden que ya fue entregada" ||
          error.message === "La orden ya está cancelada") {
        return res.status(409).json({ message: error.message });
      }
    }
    return res.status(500).json({ message: "Error cancelando la orden", error });
  }
};

//get all orders con filtro opcional por status
export const getAllOrders = (req: Request, res: Response) => {
  const { status } = req.query; // Extraer query param ?status=pending
  const orderService = new OrderService();

  try {
    const orders = orderService.getOrdersByStatus(status as string | undefined);
    res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ message: "Error obteniendo las órdenes", error });
  }
};
