import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { makeApp } from '../app';

const app = makeApp();

describe('HTTP Validation Tests - Error Codes', () => {

  describe('POST /orders - Validaciones con Zod', () => {

    it('debería devolver error 422 si el array está vacío', async () => {
      const response = await request(app)
        .post('/orders')
        .send({
          orderSize: 'M',
          toppings: [],
          address: 'Calle Falsa 123'
        });

      expect(response.status).toBe(422);
      expect(response.body).toHaveProperty('message');
    });

    it('devería devolver error 422 si hay más de 5 toppings', async () => {
      const response = await request(app)
        .post('/orders')
        .send({
          orderSize: 'L',
          toppings: ['topping1', 'topping2', 'topping3', 'topping4', 'topping5', 'topping6'], // ❌ 6 toppings
          address: 'Calle Falsa 123'
        });

      expect(response.status).toBe(422);
      expect(response.body).toHaveProperty('message');
      expect(response.body).toHaveProperty('errors');
    });

    it('devería devolver error si la dirección es demasiado corta', async () => {
      const response = await request(app)
        .post('/orders')
        .send({
          orderSize: 'S',
          toppings: ['mozzarella'],
          address: 'Corta'
        });

      expect(response.status).toBe(422);
      expect(response.body).toHaveProperty('message');
      expect(response.body).toHaveProperty('errors');
    });

    it('devería devolver 422 cuando el tamaño de la orden es inválido', async () => {
      const response = await request(app)
        .post('/orders')
        .send({
          orderSize: 'XL',
          toppings: ['mozzarella'],
          address: 'Calle Falsa 123'
        });

      expect(response.status).toBe(422);
    });

  });

});
