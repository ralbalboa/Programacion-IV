import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Integración Completa - Flujo end-to-end', () => {
  it('debería completar el flujo completo: cargar menú, agregar items, calcular total, enviar pedido y resetear', async () => {
    const user = userEvent.setup();

    // 1. Renderizar la aplicación
    render(<App />);

    // 2. CARGAR MENÚ (mock) - Esperar que se cargue el menú desde /api/menu
    await waitFor(() => {
      expect(screen.getByText(/Café/)).toBeInTheDocument();
    });

    // Verificar que todos los productos están disponibles
    expect(screen.getByText(/Té/)).toBeInTheDocument();
    expect(screen.getByText(/Medialunas/)).toBeInTheDocument();
    expect(screen.getByText(/Tostado/)).toBeInTheDocument();

    // Verificar que hay 4 productos en el menú
    const menuItems = screen.getAllByRole('listitem');
    expect(menuItems.length).toBeGreaterThanOrEqual(4);

    // 3. AGREGAR ÍTEMS - Agregar varios productos al pedido
    const addButtons = screen.getAllByRole('button', { name: /agregar/i });

    // Agregar Café ($150)
    await user.click(addButtons[0]);

    // Agregar Té ($120)
    await user.click(addButtons[1]);

    // Agregar Café de nuevo ($150)
    await user.click(addButtons[0]);

    // Verificar que los items aparecen en el pedido
    await waitFor(() => {
      const orderList = screen.getByRole('list', { name: /pedido/i });
      expect(orderList).toBeInTheDocument();
    });

    // 4. CALCULAR TOTAL - Verificar que el total se calcula correctamente
    // Café (150) + Té (120) + Café (150) = 420
    await waitFor(() => {
      expect(screen.getByText(/total: \$420/i)).toBeInTheDocument();
    });

    // 5. ENVIAR PEDIDO (mock POST) - Enviar el pedido al servidor
    const sendButton = screen.getByRole('button', { name: /enviar pedido/i });
    expect(sendButton).toBeEnabled();

    // No esperamos el click para poder capturar el estado intermedio
    user.click(sendButton);

    // Verificar que muestra el estado de envío
    await screen.findByText(/enviando/i);

    // Esperar confirmación
    await waitFor(() => {
      expect(screen.getByText(/pedido confirmado/i)).toBeInTheDocument();
    });

    // 6. RESETEAR INTERFAZ - Verificar que el pedido se limpió
    await waitFor(() => {
      expect(screen.getByText(/total: \$0/i)).toBeInTheDocument();
    });

    // Verificar que no hay items en el pedido
    const orderList = screen.getByRole('list', { name: /pedido/i });
    const orderItems = orderList.querySelectorAll('li');
    expect(orderItems.length).toBe(0);

    // Verificar que el botón de enviar está deshabilitado nuevamente
    expect(sendButton).toBeDisabled();

    // Verificar que el menú sigue disponible para nuevos pedidos
    expect(screen.getByText(/Café/)).toBeInTheDocument();
  });

  it('debería manejar el flujo completo con eliminación de items', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Esperar menú
    await waitFor(() => {
      expect(screen.getByText(/Café/)).toBeInTheDocument();
    });

    // Agregar 3 productos
    const addButtons = screen.getAllByRole('button', { name: /agregar/i });
    await user.click(addButtons[0]); // Café $150
    await user.click(addButtons[1]); // Té $120
    await user.click(addButtons[2]); // Medialunas $80

    // Total debería ser 350
    await waitFor(() => {
      expect(screen.getByText(/total: \$350/i)).toBeInTheDocument();
    });

    // Eliminar el segundo item (Té)
    const orderList = screen.getByRole('list', { name: /pedido/i });
    const removeButtons = screen.getAllByRole('button', { name: /eliminar/i });
    await user.click(removeButtons[1]);

    // Total debería ser 230 (150 + 80)
    await waitFor(() => {
      expect(screen.getByText(/total: \$230/i)).toBeInTheDocument();
    });

    // Enviar el pedido
    const sendButton = screen.getByRole('button', { name: /enviar pedido/i });
    await user.click(sendButton);

    // Confirmar envío
    await waitFor(() => {
      expect(screen.getByText(/pedido confirmado/i)).toBeInTheDocument();
    });

    // Verificar reset
    await waitFor(() => {
      expect(screen.getByText(/total: \$0/i)).toBeInTheDocument();
    });
  });

  it('debería permitir hacer múltiples pedidos en secuencia', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Esperar menú
    await waitFor(() => {
      expect(screen.getByText(/Café/)).toBeInTheDocument();
    });

    // PRIMER PEDIDO
    const addButtons = screen.getAllByRole('button', { name: /agregar/i });
    await user.click(addButtons[0]); // Café

    await waitFor(() => {
      expect(screen.getByText(/total: \$150/i)).toBeInTheDocument();
    });

    let sendButton = screen.getByRole('button', { name: /enviar pedido/i });
    await user.click(sendButton);

    await waitFor(() => {
      expect(screen.getByText(/pedido confirmado/i)).toBeInTheDocument();
    });

    // Esperar que se limpie
    await waitFor(() => {
      expect(screen.getByText(/total: \$0/i)).toBeInTheDocument();
    });

    // SEGUNDO PEDIDO
    await user.click(addButtons[1]); // Té
    await user.click(addButtons[1]); // Té

    await waitFor(() => {
      expect(screen.getByText(/total: \$240/i)).toBeInTheDocument();
    });

    sendButton = screen.getByRole('button', { name: /enviar pedido/i });
    await user.click(sendButton);

    await waitFor(() => {
      expect(screen.getByText(/pedido confirmado/i)).toBeInTheDocument();
    });

    // Verificar reset final
    await waitFor(() => {
      expect(screen.getByText(/total: \$0/i)).toBeInTheDocument();
    });
  });
});
