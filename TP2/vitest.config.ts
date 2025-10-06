import { defineConfig } from 'vitest/config';

export default defineConfig({
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
        'src/app.ts',   // Configuración de servidor, ya testeada via makeApp()
      ],
    },
  },
});
