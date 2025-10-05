// sum.test.ts
import { describe, test, expect } from 'vitest'; // No necesario si globals: true


// TESTEAR EL SERVIDOR Y CONEXIÓN DE BASE DE DATOS
// CONSOLE.LOG DIGA "Escuchando en el puerto 3000"

describe('Servidor y base de datos', () => {
    it('El servidor debería estar corriendo y la base de datos conectada', () => {
    
  });

});
describe('Validación del GET de orders', () => {

    // que tenga un id
    // el formato del id
    // que tenga un orderSize
    // que tenga un orderStatus
    // que tenga toppings
    // que tenga address
    test('El GET debería retornar un objeto de tipo order', () => {
    console.log("Test funcionando");
  });

});

describe('Validación de POST de orders', () => {
    test('Otro test de ejemplo', () => {
    expect(1 + 1).toBe(2);
  });

});
