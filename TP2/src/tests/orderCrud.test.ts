// sum.test.ts
import { describe, expect, it } from 'vitest';
import { OrderService } from '../services/orderService';


describe("OrderService", () => {
  const svc = new OrderService();
  let id: string;

  it("createOrder -> devuelve id, price y verifica que el total sea calculado correctamente", () => {
    const created = svc.createOrder({
      orderSize: "M",
      toppings: ["mozzarella"],
      address: "Calle Falsa 1234"
    });
    expect(created).toHaveProperty("id");
    expect(created).toHaveProperty("price");
    expect(created.getPrice()).toBe(4700); // 4000 + 700 (M + 1 topping)
    id = created.getId(); // para validar en el siguiente test
  });

  it("getOrderById -> devuelve la orden creada por id", () => {
    const order = svc.getOrderById(id);
    expect(order).not.toBeNull();
    expect(order?.getId()).toBe(id); // el id debe coincidir
  });

  // TEST ROJO para probar la cancelación de un pedido
  it("cancelOrder -> cancela una orden pendiente", () => {
    // Crear una orden primero
    const created = svc.createOrder({
      orderSize: "L",
      toppings: ["pepperoni", "aceitunas"],
      address: "Alem 742"
    });

    // Intentar cancelarla
    const canceled = svc.cancelOrder(created.getId());

    // Verificar que el status cambió a "canceled"
    expect(canceled.getStatus()).toBe("canceled");
  });

  // TEST ROJO - Validación de regla de negocio
  it("cancelOrder -> NO debe cancelar una orden con status 'delivered'", () => {
    // Crear una orden
    const created = svc.createOrder({
      orderSize: "S",
      toppings: ["mozzarella"],
      address: "Alem 1234"
    });

    // Simular que la orden fue entregada
    created.setStatus("delivered");

    // Intentar cancelarla debería dar un error
    expect(() => {
      svc.cancelOrder(created.getId());
    }).toThrow("No se puede cancelar una orden que ya fue entregada");
  });
});
