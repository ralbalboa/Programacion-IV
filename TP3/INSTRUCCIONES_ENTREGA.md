# 📦 Instrucciones de Entrega - TP3 Cafetería

## 📁 Archivos a Entregar

Entregar la carpeta `cafeteria/` completa con:

```
cafeteria/
├── src/                    # Código fuente
├── public/                 # Assets públicos
├── node_modules/          # (opcional, puede omitirse)
├── package.json           # Dependencias
├── package-lock.json      # Lock de dependencias
├── vite.config.ts         # Configuración de Vite
├── tsconfig.json          # Configuración TypeScript
├── tsconfig.app.json      # Config TS para app
├── tsconfig.node.json     # Config TS para Node
└── README.md              # Documentación del proyecto
```

## 🔍 Verificación Antes de Entregar

### 1. Tests pasando
```bash
cd cafeteria
npm test -- --run
```

**Resultado esperado:**
```
Test Files  7 passed (7)
Tests  25 passed (25)
```

### 2. Build exitoso
```bash
npm run build
```

**Resultado esperado:**
```
✓ built in XXXms
```

### 3. App funciona en desarrollo
```bash
npm run dev
```

Verificar que abre en `http://localhost:5173` y:
- ✅ Se muestra el menú con 4 productos
- ✅ Los botones "Agregar" funcionan
- ✅ El total se calcula correctamente
- ✅ Los botones "Eliminar" funcionan
- ✅ El botón "Enviar pedido" funciona
- ✅ Muestra mensaje de confirmación

## 📝 Documentos Adicionales Incluidos

### En la raíz del TP3:
- `README.md` - Consigna original del trabajo práctico
- `RESUMEN.md` - Resumen ejecutivo del proyecto
- `CHECKLIST.md` - Checklist completo de requisitos
- `INSTRUCCIONES_ENTREGA.md` - Este archivo

### Dentro de cafeteria/:
- `README.md` - Documentación técnica del proyecto
- `src/` - Todo el código fuente

## 🎯 Puntos Clave para Destacar

1. **TDD Completo**: Todos los tests fueron escritos ANTES del código
2. **25 Tests**: Cobertura completa de todas las HU + integración
3. **MSW**: API completamente mockeada
4. **TypeScript + Zod**: Tipado fuerte y validaciones
5. **Accesibilidad**: Queries semánticas en todos los tests
6. **Manejo de errores**: Casos límite cubiertos

## 📊 Métricas del Proyecto

| Métrica | Valor |
|---------|-------|
| Tests totales | 25 |
| Tests pasando | 25 (100%) |
| Historias de Usuario | 6 (completas) |
| Tests de integración | 3 |
| Componentes | 2 (Menu, Order) |
| Hooks personalizados | 1 (useOrder) |
| Endpoints mockeados | 2 |

## 🚀 Cómo el Profesor Puede Probar

### Opción 1: Instalar y probar
```bash
cd cafeteria
npm install --legacy-peer-deps
npm test -- --run
npm run dev
```

### Opción 2: Solo tests
```bash
cd cafeteria
npm install --legacy-peer-deps
npm test -- --run
```

### Opción 3: Revisar código
Los archivos clave están en:
- `src/App.test.tsx` - HU1
- `src/HU2-AgregarItem.test.tsx` - HU2
- `src/HU3-CalcularTotal.test.tsx` - HU3
- `src/HU4-EliminarItem.test.tsx` - HU4
- `src/HU5-EnviarPedido.test.tsx` - HU5
- `src/HU6-CasosLimite.test.tsx` - HU6
- `src/Integration.test.tsx` - Integración E2E

## 📸 Evidencias (Opcional)

Si se solicitan capturas de pantalla, incluir:
1. Tests en ROJO (fase inicial)
2. Tests en VERDE (tras implementación)
3. Tests de integración pasando
4. Aplicación funcionando en el navegador

## ⚠️ Notas Importantes

- **Usar `--legacy-peer-deps`**: Necesario por compatibilidad React 19
- **Node.js**: Versión 18+ recomendada
- **npm**: Versión 9+ recomendada

## ✅ Checklist de Entrega

Antes de entregar, verificar:

- [ ] Tests pasan (25/25)
- [ ] Build funciona
- [ ] README.md completo
- [ ] Código comentado donde necesario
- [ ] No hay archivos innecesarios (node_modules puede omitirse)
- [ ] package.json tiene todas las dependencias
- [ ] .gitignore configurado correctamente
- [ ] Estructura de carpetas correcta

## 📧 Contacto

En caso de consultas sobre el proyecto:
- Revisar primero el README.md en cafeteria/
- Consultar RESUMEN.md para visión general
- Ver CHECKLIST.md para verificar completitud

---

**Proyecto listo para entrega** ✅

Desarrollado siguiendo estrictamente **TDD (Test-Driven Development)** con el ciclo **Rojo → Verde → Refactor**.
