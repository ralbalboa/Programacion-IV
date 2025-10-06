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
