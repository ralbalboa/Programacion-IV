# TEORIA.md

## 1️ - Ciclo Rojo → Verde → Refactor  
El ciclo Rojo → Verde → Refactor corresponde a el **TDD (Test-Driven Development)**:  
**Rojo:** se escribe en código un test que falla (porque aún no existe la funcionalidad).  
**Verde:** se escribe el código mínimo necesario para que el test pase.  
**Refactor:** se mejora refactoriza el código del paso "verde" tanto en el diseño, nombres como duplicaciones manteniendo los tests en verde.  
El tamaño de los pasos es importante porque que cuanto más pequeños sean, más control y retroalimentación inmediata se obtiene, reduciendo riesgo de errores grandes y hace más fácil el diseño limpio y testeable.

---

## 2️ - Tipos de tests en APIs  
- **Unitarios:** prueban funciones o métodos individuales, aislados del resto del sistema (por ejemplo, la función que calcula el precio de un pedido).  
- **De integración:** revisan la interacción entre componentes (por ejemplo, la ruta HTTP con el servicio que maneja pedidos).  
- **E2E (End-to-End):** simulan el flujo completo de la aplicación, como si un usuario real hace peticiones al servidor para recibir las respuestas.

---

## 3️ - Dobles de prueba: mock, stub y spy  
Un **doble de prueba** reemplaza un componente real en un test.  
- **Stub:** devuelve datos forzados, sin lógica, sirve para simular respuestas estáticas.  
- **Mock:** imita comportamientos esperados y verifica si se llamaron métodos con ciertos argumentos, sirve para revisar interacciones.  
- **Spy:** observa llamadas reales sin alterar el comportamiento, sirve para verificar efectos secundarios.  

---

## 4️ - Separar app de server  
Separar `app` de `server` permite testear la aplicación sin necesidad de abrir un puerto real.  
La función `makeApp()` devuelve una instancia de Express, lista para usar con Supertest, mientras que `server.ts` solo se encarga de hacer `listen()` en producción.  
Ejemplo:

```ts
// app.ts
import express from "express";
export function makeApp() {
  const app = express();
  app.use(express.json());
  app.post("/orders", (req, res) => res.status(201).json({ id: "1", ...req.body }));
  return app;
}

// test con supertest
import request from "supertest";
import { makeApp } from "./app";
test("POST /orders crea un pedido", async () => {
  const res = await request(makeApp()).post("/orders").send({ size: "M", toppings: ["cheese"] });
  expect(res.status).toBe(201);
});
```

---

## 5️ - Zod: diferencia entre parse y safeParse  
`parse()` lanza una excepción si la validación falla, mientras que `safeParse()` devuelve un objeto `{ success: boolean, data | error }`.  
En rutas Express es mejor el `safeParse()` para manejar errores de validación y responder con un `422` sin que la aplicación se caiga.  
En cambio `parse()` es más útil en validaciones internas o tests donde se espera que los datos sean válidos.

---

## 6️ - Reglas de dominio con tests unitarios  
Ejemplos de reglas de negocio que deben tener tests unitarios:  
1. **Cálculo de precio:** el precio depende del tamaño y cantidad de toppings; esto debe verificarse con una función pura.  
2. **Cancelación:** un pedido no puede cancelarse si su estado es `delivered`.  
Estas reglas no dependen de la validación del input, sino del comportamiento del dominio.

---

## 7️ - Malos olores en suites de tests  
Algunos “test smells” comunes:  
- **Nombres poco descriptivos:** no indican claramente qué se prueba.  
- **Duplicación:** mismos datos o configuraciones repetidas en varios tests.  
- **Asserts débiles:** verifican solo que “no tire error” o que algo “no sea null”, sin comprobar el comportamiento esperado.  
Evitar estos problemas mejora la mantenibilidad y confiabilidad de las pruebas.

---

## 8️ - Criterios de aceptación ↔ tests  
Cada criterio funcional debe tener al menos un test que lo verifique. Una **matriz de casos** ayuda a trazar esa relación:

| ID Caso | Descripción                        | Input                | Resultado esperado           | Test                  |
|----------|------------------------------------|----------------------|------------------------------|-----------------------|
| CA1      | Crear pedido válido                | size=M, toppings=1   | status 201, JSON con id      | ordersRoutes.test.ts  |
| ERR1     | Cancelar pedido entregado          | status=delivered     | status 409, mensaje de error | ordersService.test.ts |

---

## 9️ - Cobertura del 100%: riesgos  
Buscar **100% de cobertura** puede ser contraproducente porque genera que se escriban tests superficiales solo para cubrir líneas de código, no comportamientos, así el código más complejo de test puede volverse frágil o costoso de mantener.  
El objetivo debe ser una **cobertura suficiente y significativa**, centrada en reglas críticas del dominio.

---

## 10 - Helpers o builders para tests  
Un **helper** o **test builder** simplifica la creación de datos o instancias repetitivas en las pruebas.  
Por ejemplo, un `makeOrder()` puede generar pedidos con valores por defecto y permitir sobreescribir solo lo necesario:

```ts
function makeOrder(overrides = {}) {
  return {
    id: "1",
    orderSize: "M",
    toppings: ["cheese"],
    address: "Calle Desconocida 123",
    ...overrides
  };
}
```
Esto reduce duplicación, mejora legibilidad y facilita el mantenimiento de los tests.
