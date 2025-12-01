const request = require('supertest');
const express = require('express');
const authRoutes = require('../../src/routes/auth');

describe('Seguridad: Brute Force', () => {
  let app;

  beforeEach(() => {
    app = express();
    app.use(express.json());
    app.use('/api', authRoutes);
  });

  test('❌ DEBE FALLAR: El endpoint de login debe tener protección contra fuerza bruta', async () => {
    const loginAttempts = [];
    const maxAttempts = 10;
    
    // Intentar 10 logins fallidos rápidamente
    for (let i = 0; i < maxAttempts; i++) {
      loginAttempts.push(
        request(app)
          .post('/api/login')
          .send({
            username: 'admin',
            password: `wrongpassword${i}`
          })
      );
    }

    const responses = await Promise.all(loginAttempts);
    
    // Verificar que alguna respuesta sea 429 (Too Many Requests)
    const hasRateLimiting = responses.some(res => res.status === 429);
    
    // Este test DEBE FALLAR inicialmente porque no hay rate limiting
    expect(hasRateLimiting).toBe(true);
  }, 15000);

  test('❌ DEBE FALLAR: Debe haber un delay después de varios intentos fallidos', async () => {
    const startTime = Date.now();
    
    // Hacer 5 intentos fallidos
    for (let i = 0; i < 5; i++) {
      await request(app)
        .post('/api/login')
        .send({
          username: 'admin',
          password: 'wrongpassword'
        });
    }
    
    const endTime = Date.now();
    const totalTime = endTime - startTime;
    
    // Debería haber al menos 2 segundos de delay acumulado
    expect(totalTime).toBeGreaterThan(2000);
  });

/*  test('❌ DEBE FALLAR: Debe requerir CAPTCHA después de varios intentos fallidos', async () => {
    // Hacer 3 intentos fallidos
    for (let i = 0; i < 3; i++) {
      await request(app)
        .post('/api/login')
        .send({
          username: 'admin',
          password: 'wrongpassword'
        });
    }
    
    // El siguiente intento debería requerir captcha
    const response = await request(app)
      .post('/api/login')
      .send({
        username: 'admin',
        password: 'password'
      });
    
    // Debe devolver error indicando que se requiere captcha
    expect(response.status).toBe(400);
    expect(response.body.error).toContain('captcha');
  });
  */
});

// Instrucciones para los alumnos
describe('📝 INSTRUCCIONES PARA CORREGIR BRUTE FORCE', () => {
  test('Implementar las siguientes medidas de seguridad:', () => {
    const instrucciones = `
    1. Instalar y configurar express-rate-limit:
       - Limitar a 5 intentos por IP cada 15 minutos
       - Devolver status 429 cuando se exceda el límite
    
    2. Implementar delay progresivo:
       - Agregar delay exponencial después de cada intento fallido
       - Ejemplo: 1s, 2s, 4s, 8s...
    
    3. Integrar CAPTCHA después de 3 intentos:
       - Requerir verificación de CAPTCHA
       - No permitir login sin CAPTCHA válido
    
    4. Registrar intentos fallidos:
       - Guardar logs de intentos sospechosos
       - Implementar alertas para patrones anormales
    `;
    
    console.log(instrucciones);
    expect(true).toBe(true); // Este test es solo informativo
  });
});
