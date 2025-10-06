import { Router } from "express";
import { createOrder, getOrderById, cancelOrder, getAllOrders } from "../controllers/orderController";

const router = Router();

// Las rutas son relativas a /orders (definido en app.ts)
router.post("/", createOrder);           // POST /orders
router.get("/", getAllOrders);           // GET /orders (con ?status opcional)
router.get("/:id", getOrderById);        // GET /orders/:id
router.post("/:id/cancel", cancelOrder); // POST /orders/:id/cancel

export default router;