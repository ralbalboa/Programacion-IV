import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('HU2 - Agregar ítem al pedido', () => {
  it('debería agregar un producto al pedido al hacer click en "Agregar"', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Esperamos a que se cargue el menú
    await waitFor(() => {
      expect(screen.getByText(/Café/)).toBeInTheDocument();
    });

    // Buscamos el botón "Agregar" del primer producto (Café)
    const addButtons = screen.getAllByRole('button', { name: /agregar/i });

    // Hacemos click en el primer botón
    await user.click(addButtons[0]);

    // Verificamos que el producto aparece en el área de pedido
    const orderList = screen.getByRole('list', { name: /pedido/i });
    expect(orderList).toBeInTheDocument();

    // Verificamos que "Café" está en el pedido
    const orderItems = screen.getAllByRole('listitem');
    const orderText = orderItems.map(item => item.textContent).join(' ');
    expect(orderText).toMatch(/Café/);
  });

  it('debería agregar múltiples productos al pedido', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Esperamos a que se cargue el menú
    await waitFor(() => {
      expect(screen.getByText(/Café/)).toBeInTheDocument();
    });

    // Agregamos dos productos diferentes
    const addButtons = screen.getAllByRole('button', { name: /agregar/i });
    await user.click(addButtons[0]); // Café
    await user.click(addButtons[1]); // Té

    // Verificamos que hay items en el pedido
    await waitFor(() => {
      const orderList = screen.getByRole('list', { name: /pedido/i });
      const orderItems = orderList.querySelectorAll('li');
      expect(orderItems.length).toBeGreaterThanOrEqual(2);
    });
  });

  it('debería agregar el mismo producto múltiples veces', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Esperamos a que se cargue el menú
    await waitFor(() => {
      expect(screen.getByText(/Café/)).toBeInTheDocument();
    });

    // Agregamos el mismo producto 3 veces
    const addButtons = screen.getAllByRole('button', { name: /agregar/i });
    await user.click(addButtons[0]); // Café
    await user.click(addButtons[0]); // Café
    await user.click(addButtons[0]); // Café

    // Verificamos que hay 3 items en el pedido
    await waitFor(() => {
      const orderList = screen.getByRole('list', { name: /pedido/i });
      const orderItems = orderList.querySelectorAll('li');
      expect(orderItems.length).toBe(3);
    });
  });
});
