// sum.test.ts
import { describe, test, expect, it } from 'vitest'; // No necesario si globals: true
import { OrderService } from '../services/orderService';


// TESTEAR EL SERVIDOR Y CONEXIÓN DE BASE DE DATOS
// CONSOLE.LOG DIGA "Escuchando en el puerto 3000"

// describe('Servidor y base de datos', () => {
//     it('El servidor debería estar corriendo y la base de datos conectada', () => {
    
//   });

// });
// describe('Validación del GET de orders', () => {

//     // que tenga un id
//     // el formato del id
//     // que tenga un orderSize
//     // que tenga un orderStatus
//     // que tenga toppings
//     // que tenga address
//     test('El GET debería retornar un objeto de tipo order', () => {
//     console.log("Test funcionando");
//   });

// });

// describe('Validación de POST de orders', () => {
//     test('Otro test de ejemplo', () => {
//     expect(1 + 1).toBe(2);
//   });

// });

//npm test para correrlo
describe("OrderService", () => {
  const svc = new OrderService(); // instancia del servicio
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
    id = created.getId();
  });
});
