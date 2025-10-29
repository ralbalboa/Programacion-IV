# ✅ Checklist Completo - TP3 Cafetería

## 🧩 Parte I — Configuración del entorno de pruebas

- [x] Crear el proyecto base con `npm create vite@latest cafeteria -- --template react-ts`
- [x] Instalar dependencias de testing
  - [x] vitest
  - [x] @testing-library/react
  - [x] @testing-library/user-event
  - [x] @testing-library/jest-dom
  - [x] msw
  - [x] zod
- [x] Configurar `vite.config.ts`
  - [x] environment: 'jsdom'
  - [x] globals: true
  - [x] setupFiles: './src/setupTests.ts'
- [x] Configurar `setupTests.ts`
  - [x] import '@testing-library/jest-dom'
  - [x] import { server } from './mocks/server'
  - [x] beforeAll(() => server.listen())
  - [x] afterEach(() => server.resetHandlers())
  - [x] afterAll(() => server.close())

---

## 🧠 Parte II — Desarrollo Guiado por Pruebas

### 🧾 Tipado base
- [x] Definir `ProductSchema` con Zod
  - [x] id: z.string()
  - [x] name: z.string().min(2)
  - [x] price: z.number().positive()
- [x] Exportar type `Product = z.infer<typeof ProductSchema>`

### 🔹 HU1 — Visualización inicial del menú
- [x] **ROJO**: Test que verifique productos mockeados (`screen.getByText('Café')`)
- [x] **VERDE**: Implementar fetch a `/api/menu` (interceptado por MSW)
- [x] **REFACTOR**: Separar componente `<Menu />`
- [x] Testear con `await waitFor(...)`
- [x] Testear con `screen.getAllByRole('listitem')`

### 🔹 HU2 — Agregar ítem al pedido
- [x] Test: simular click sobre botón "Agregar"
- [x] Verificar que aparece en área de pedido (`getByRole('list')`)
- [x] Implementar estado con hook `useOrder()`

### 🔹 HU3 — Calcular total del pedido
- [x] Test: agregar varios productos y verificar "Total: $..."
- [x] Implementar cálculo dinámico
- [x] Validar con `expect(screen.getByText(/total: \$\d+/i)).toBeInTheDocument()`

### 🔹 HU4 — Eliminar ítem del pedido
- [x] Test: verificar que clic en "Eliminar" remueve solo ese producto
- [x] Implementar con `setState` funcional
- [x] Considerar `e.stopPropagation()` si se anidan botones (no fue necesario)

### 🔹 HU5 — Enviar pedido (MSW + Contexto)
- [x] Mockear endpoint `/api/orders` con MSW
- [x] Test: Agregar varios ítems
- [x] Test: Click en "Enviar pedido"
- [x] Test: Esperar `await waitFor(...)` mensaje "Pedido confirmado"
- [x] Implementar envío y limpiar estado tras éxito

### 🔹 HU6 — Caso límite: error o menú vacío
- [x] Usar `server.use()` para simular error 500
- [x] Usar `server.use()` para simular lista vacía
- [x] Verificar mensaje "No hay productos disponibles"
- [x] Verificar mensaje "Error al cargar menú"
- [x] Implementar botón "Reintentar"

---

## 🧪 Parte III — Integración Completa

- [x] Test end-to-end que cubra flujo completo:
  - [x] Cargar menú (mock)
  - [x] Agregar ítems
  - [x] Calcular total
  - [x] Enviar pedido (mock POST)
  - [x] Resetear interfaz

- [x] Test adicional con eliminación de items
- [x] Test de múltiples pedidos en secuencia

---

## 📚 Requisitos Técnicos Cumplidos

### React Testing Library
- [x] Uso de `screen` para queries
- [x] Uso de `waitFor` para operaciones asíncronas
- [x] Uso de `userEvent` para interacciones
- [x] Queries accesibles (`getByRole`, `getByText`, etc.)
- [x] `findBy` para elementos que aparecen asincrónicamente

### MSW (Mock Service Worker)
- [x] Configuración de servidor MSW
- [x] Handlers para GET `/api/menu`
- [x] Handlers para POST `/api/orders`
- [x] Uso de `server.use()` para sobrescribir handlers en tests
- [x] Integración con setupTests

### TypeScript + Zod
- [x] Tipado fuerte en todos los archivos
- [x] Validación de schemas con Zod
- [x] Inferencia de tipos con `z.infer`
- [x] Interfaces para props de componentes

### TDD (Test-Driven Development)
- [x] Ciclo Rojo → Verde → Refactor aplicado
- [x] Tests escritos ANTES del código
- [x] Commits organizados por fase TDD (opcional)
- [x] Código mínimo para hacer pasar tests

### Estado
- [x] Hook personalizado `useOrder`
- [x] Estado local con `useState`
- [x] Actualización de estado funcional
- [x] Estado compartido entre componentes

---

## 📄 Documentación

- [x] README.md del proyecto
- [x] Instrucciones de instalación
- [x] Instrucciones para correr tests
- [x] Descripción de estructura del proyecto
- [x] Documentación de API endpoints

---

## 🎯 Resultados

### Tests
- **Total de archivos de test**: 7
- **Total de tests**: 25
- **Tests pasando**: 25 ✅
- **Tests fallando**: 0
- **Cobertura**: Todas las HU + Integración

### Código
- **Componentes**: 2 (Menu, Order)
- **Hooks personalizados**: 1 (useOrder)
- **Tipos/Schemas**: 1 (Product)
- **Mocks MSW**: 2 endpoints
- **Líneas de código**: ~500

---

## ✨ Extras Implementados

Más allá de lo requerido:
- [x] Manejo de estado de carga ("Cargando...")
- [x] Feedback visual durante envío ("Enviando...")
- [x] Auto-ocultamiento de mensaje de confirmación (3 segundos)
- [x] Botón "Reintentar" en errores
- [x] Botón deshabilitado cuando pedido vacío
- [x] Validación de `response.ok` en fetch
- [x] Manejo de errores de red
- [x] Mensajes de error descriptivos
- [x] Tests de múltiples pedidos en secuencia
- [x] README completo con documentación

---

## 🚀 Comandos Verificados

- [x] `npm install --legacy-peer-deps` funciona
- [x] `npm run dev` levanta la app
- [x] `npm test` ejecuta tests en watch mode
- [x] `npm test -- --run` ejecuta tests una vez
- [x] `npm run build` genera build de producción

---

## ✅ PROYECTO 100% COMPLETO

**Todos los requisitos de la consigna han sido implementados y verificados.**

**Estado Final**: ✅ APROBADO PARA ENTREGA
