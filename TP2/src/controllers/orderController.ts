import { Request, Response } from "express";
import { OrderService } from "../services/orderService";
import { CreateOrder, createOrderSchema } from "../types/orderTypes";

//post order
export const createOrder = (req: Request, res: Response) => {
  const parsed = createOrderSchema.safeParse(req.body); // valido que el body sea del tipo CreateOrder con zod
  if (!parsed.success) {
    // si la validación falla, devuelvo un error 400 con los errores de validación
    return res
      .status(400)
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
