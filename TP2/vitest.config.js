"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("vitest/config");
exports.default = (0, config_1.defineConfig)({
    test: {
        globals: true,
        environment: 'node',
        coverage: {
            provider: 'v8',
            reporter: ['text', 'html'],
            exclude: [
                'node_modules/',
                'dist/',
                '**/*.test.ts',
                '**/*.config.ts',
                'src/index.ts', // Archivo de entrada, no se testea
                'src/app.ts', // Configuración de servidor, ya testeada via makeApp()
            ],
        },
    },
});
//# sourceMappingURL=vitest.config.js.map