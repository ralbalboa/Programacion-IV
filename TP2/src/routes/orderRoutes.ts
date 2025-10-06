import { Router } from "express";
import { createOrder, getOrderById } from "../controllers/orderController";

const router = Router();

router.post("/orders", createOrder);
router.get("/orders/:id", getOrderById);

export default router;