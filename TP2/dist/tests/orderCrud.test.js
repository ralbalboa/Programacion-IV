"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// sum.test.ts
const vitest_1 = require("vitest"); // No necesario si globals: true
(0, vitest_1.describe)('Validación del GET de orders', () => {
    (0, vitest_1.test)('El GET debería retornar un objeto de tipo order', () => {
        console.log("Test funcionando");
    });
});
(0, vitest_1.describe)('Validación de POST de orders', () => {
    (0, vitest_1.test)('Otro test de ejemplo', () => {
        (0, vitest_1.expect)(1 + 1).toBe(2);
    });
});
//# sourceMappingURL=orderCrud.test.js.map