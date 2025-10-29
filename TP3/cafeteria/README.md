# Simulador de Pedidos de Cafetería

Trabajo Práctico 3 - Desarrollo Guiado por Pruebas (TDD) con React, TypeScript y MSW.

## 🎯 Descripción

Aplicación de cafetería que permite:
- Visualizar menú de productos
- Agregar productos al pedido
- Calcular el total automáticamente
- Eliminar items del pedido
- Enviar pedido al servidor (simulado con MSW)
- Manejo de errores y casos límite

## 🧰 Stack Tecnológico

- **React 19** + **TypeScript**
- **Vite** - Build tool
- **Vitest** - Framework de testing
- **React Testing Library** - Testing de componentes
- **MSW (Mock Service Worker)** - Mock de API
- **Zod** - Validación de schemas

## 📦 Instalación

```bash
npm install --legacy-peer-deps
```

## 🚀 Comandos

```bash
# Modo desarrollo
npm run dev

# Ejecutar tests
npm test

# Ejecutar tests en modo watch
npm test -- --watch

# Ejecutar tests con UI
npm run test:ui

# Ejecutar tests con cobertura
npm run test:coverage

# Build para producción
npm run build
```

## 🧪 Testing

El proyecto fue desarrollado siguiendo **TDD (Test-Driven Development)** con el ciclo **Rojo → Verde → Refactor**.

### Estructura de tests

```
src/
├── App.test.tsx              # HU1: Visualización del menú
├── HU2-AgregarItem.test.tsx  # HU2: Agregar items al pedido
├── HU3-CalcularTotal.test.tsx # HU3: Calcular total
├── HU4-EliminarItem.test.tsx  # HU4: Eliminar items
├── HU5-EnviarPedido.test.tsx  # HU5: Enviar pedido
├── HU6-CasosLimite.test.tsx   # HU6: Manejo de errores
└── Integration.test.tsx       # Tests de integración end-to-end
```

### Ejecutar tests específicos

```bash
# Ejecutar solo tests de HU2
npm test HU2

# Ejecutar solo tests de integración
npm test Integration
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Menu.tsx           # Componente del menú
│   └── Order.tsx          # Componente del pedido
├── hooks/
│   └── useOrder.ts        # Hook personalizado para manejar el pedido
├── mocks/
│   ├── handlers.ts        # Handlers de MSW
│   └── server.ts          # Configuración del servidor MSW
├── types/
│   └── product.ts         # Tipos y schemas de Zod
├── App.tsx                # Componente principal
├── setupTests.ts          # Configuración de tests
└── *.test.tsx             # Archivos de tests
```

## 🔄 Flujo de la Aplicación

1. **Cargar menú** - La app obtiene los productos desde `/api/menu` (mockeado)
2. **Agregar productos** - Usuario clickea "Agregar" en cada producto
3. **Calcular total** - El total se actualiza automáticamente
4. **Eliminar items** - Usuario puede eliminar items individuales
5. **Enviar pedido** - POST a `/api/orders` (mockeado)
6. **Confirmación** - Muestra mensaje y limpia el pedido

## 🧩 Historias de Usuario Implementadas

### ✅ HU1 - Visualización inicial del menú
Muestra listado de productos disponibles desde la API.

### ✅ HU2 - Agregar ítem al pedido
Permite agregar productos al pedido mediante botones.

### ✅ HU3 - Calcular total del pedido
Calcula y muestra el total dinámicamente.

### ✅ HU4 - Eliminar ítem del pedido
Permite remover items individuales del pedido.

### ✅ HU5 - Enviar pedido
Envía el pedido al servidor y muestra confirmación.

### ✅ HU6 - Casos límite
Maneja errores de red, servidor y menú vacío con mensajes apropiados.

## 🎨 Características Adicionales

- **Estado de carga** - Muestra "Cargando..." mientras obtiene datos
- **Manejo de errores** - Mensajes claros y opción de reintentar
- **Botón deshabilitado** - No permite enviar pedidos vacíos
- **Feedback visual** - "Enviando..." durante el proceso
- **Confirmación** - Mensaje verde "Pedido confirmado"
- **Reset automático** - Limpia el pedido tras confirmar

## 🧪 Cobertura de Tests

Todos los tests pasan exitosamente:
- ✅ 6 Historias de Usuario completas
- ✅ 3 Tests de integración end-to-end
- ✅ Casos límite y manejo de errores
- ✅ Total: ~25 tests

## 📚 Metodología TDD

Cada funcionalidad fue desarrollada siguiendo:

1. **🔴 ROJO** - Escribir test que falle
2. **🟢 VERDE** - Implementar código mínimo para pasar el test
3. **🔵 REFACTOR** - Mejorar el código manteniendo los tests en verde

## 🔗 API Endpoints (Mockeados con MSW)

### GET `/api/menu`
Retorna el listado de productos disponibles.

```json
[
  { "id": "1", "name": "Café", "price": 150 },
  { "id": "2", "name": "Té", "price": 120 },
  { "id": "3", "name": "Medialunas", "price": 80 },
  { "id": "4", "name": "Tostado", "price": 200 }
]
```

### POST `/api/orders`
Recibe el pedido y retorna confirmación.

**Request:**
```json
[
  { "id": "1", "name": "Café", "price": 150, "orderId": "..." },
  { "id": "2", "name": "Té", "price": 120, "orderId": "..." }
]
```

**Response:**
```json
{
  "id": "abc123",
  "status": "confirmed",
  "items": [...],
  "timestamp": "2025-10-29T..."
}
```

## 👨‍💻 Desarrollo

Este proyecto fue desarrollado completamente con **TDD**, escribiendo primero los tests y luego implementando la funcionalidad mínima necesaria para hacerlos pasar.

## 📄 Licencia

Proyecto académico
