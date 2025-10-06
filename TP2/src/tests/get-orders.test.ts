import { describe, it, expect, beforeEach } from 'vitest';
import request from 'supertest';
import { makeApp } from '../app';

const app = makeApp();

describe('GET /orders - Obtener órdenes con filtro', () => {

  // Crear varias órdenes antes de los tests
  beforeEach(async () => {
    // Orden 1 - pending
    await request(app)
      .post('/orders')
      .send({
        orderSize: 'S',
        toppings: ['mozzarella'],
        address: 'Paraguay 578'
      });

    // Orden 2 - pending
    await request(app)
      .post('/orders')
      .send({
        orderSize: 'M',
        toppings: ['ananá', 'aceitunas'],
        address: 'Caseros 1458'
      });

    // Orden 3 - pending (la cancelaremos)
    const response3 = await request(app)
      .post('/orders')
      .send({
        orderSize: 'L',
        toppings: ['jamón', 'morrones'],
        address: 'Tres Lomas 333'
      });

    // Cancelamos la orden 3
    await request(app).post(`/orders/${response3.body.id}/cancel`);
  });

  // TEST ROJO - GET /orders sin query devuelve todas las órdenes
  it('debería devolver todas las órdenes cuando no se especifica status', async () => {
    const response = await request(app).get('/orders');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThanOrEqual(3); // Al menos las 3 que creamos
  });

  // TEST ROJO - GET /orders?status=pending devuelve solo pending
  it('debería devolver solo órdenes con status "pending"', async () => {
    const response = await request(app).get('/orders?status=pending');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThanOrEqual(2);

    // Verificar que todas tengan status "pending"
    response.body.forEach((order: any) => {
      expect(order.status).toBe('pending');
    });
  });

  // TEST ROJO - GET /orders?status=canceled devuelve solo canceled
  it('debería devolver solo órdenes con status "canceled"', async () => {
    const response = await request(app).get('/orders?status=canceled');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThanOrEqual(1);

    // Verificar que todas tengan status "canceled"
    response.body.forEach((order: any) => {
      expect(order.status).toBe('canceled');
    });
  });

});
