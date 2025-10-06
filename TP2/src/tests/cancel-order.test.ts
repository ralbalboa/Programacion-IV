import { describe, it, expect, beforeEach } from 'vitest';
import request from 'supertest';
import { makeApp } from '../app';

const app = makeApp();

describe('POST /orders/:id/cancel - Cancelar Orden', () => {

  let orderId: string;

  // Crear una orden antes de cada test
  beforeEach(async () => {
    const response = await request(app)
      .post('/orders')
      .send({
        orderSize: 'M',
        toppings: ['mozzarella', 'tomate'],
        address: 'Alberdi 2848'
      });
    orderId = response.body.id;
  });

  // TEST ROJO - Cancelar orden pending debe devolver 200
  it('debería devolver 200 al cancelar una orden pendiente', async () => {
    const response = await request(app)
      .post(`/orders/${orderId}/cancel`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'canceled');
    expect(response.body).toHaveProperty('message');
  });

  // TEST ROJO - Cancelar orden inexistente debe devolver 404
  it('debería devolver 404 cuando la orden no existe', async () => {
    const fakeId = '00000000-0000-0000-0000-000000000000';
    const response = await request(app)
      .post(`/orders/${fakeId}/cancel`);

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('message', 'Orden no encontrada');
  });

});
