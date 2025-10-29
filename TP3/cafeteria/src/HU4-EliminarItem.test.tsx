import { describe, it, expect } from 'vitest';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('HU4 - Eliminar ítem del pedido', () => {
  it('debería eliminar un item específico del pedido', async () => {
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

    // Verificamos que hay 2 items
    await waitFor(() => {
      const orderList = screen.getByRole('list', { name: /pedido/i });
      const orderItems = within(orderList).getAllByRole('listitem');
      expect(orderItems).toHaveLength(2);
    });

    // Buscamos el botón "Eliminar" del primer item y lo clickeamos
    const orderList = screen.getByRole('list', { name: /pedido/i });
    const removeButtons = within(orderList).getAllByRole('button', { name: /eliminar/i });
    await user.click(removeButtons[0]);

    // Verificamos que ahora hay solo 1 item
    await waitFor(() => {
      const orderItems = within(orderList).getAllByRole('listitem');
      expect(orderItems).toHaveLength(1);
    });
  });

  it('debería actualizar el total al eliminar un item', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Esperamos a que se cargue el menú
    await waitFor(() => {
      expect(screen.getByText(/Café/)).toBeInTheDocument();
    });

    // Agregamos Café ($150) y Té ($120)
    const addButtons = screen.getAllByRole('button', { name: /agregar/i });
    await user.click(addButtons[0]); // Café
    await user.click(addButtons[1]); // Té

    // Verificamos que el total es $270
    await waitFor(() => {
      expect(screen.getByText(/total: \$270/i)).toBeInTheDocument();
    });

    // Eliminamos un item
    const orderList = screen.getByRole('list', { name: /pedido/i });
    const removeButtons = within(orderList).getAllByRole('button', { name: /eliminar/i });
    await user.click(removeButtons[0]);

    // El total debería ser $120 (si eliminamos Café) o $150 (si eliminamos Té)
    await waitFor(() => {
      const totalText = screen.getByText(/total: \$/i).textContent;
      expect(totalText).toMatch(/total: \$(120|150)/i);
    });
  });

  it('debería eliminar solo el item clickeado cuando hay productos repetidos', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Esperamos a que se cargue el menú
    await waitFor(() => {
      expect(screen.getByText(/Café/)).toBeInTheDocument();
    });

    // Agregamos Café 3 veces
    const addButtons = screen.getAllByRole('button', { name: /agregar/i });
    await user.click(addButtons[0]); // Café
    await user.click(addButtons[0]); // Café
    await user.click(addButtons[0]); // Café

    // Verificamos que hay 3 items
    await waitFor(() => {
      const orderList = screen.getByRole('list', { name: /pedido/i });
      const orderItems = within(orderList).getAllByRole('listitem');
      expect(orderItems).toHaveLength(3);
    });

    // Eliminamos uno
    const orderList = screen.getByRole('list', { name: /pedido/i });
    const removeButtons = within(orderList).getAllByRole('button', { name: /eliminar/i });
    await user.click(removeButtons[1]); // Eliminamos el segundo

    // Verificamos que ahora hay 2 items
    await waitFor(() => {
      const orderItems = within(orderList).getAllByRole('listitem');
      expect(orderItems).toHaveLength(2);
    });

    // Y el total debería ser $300 (150 * 2)
    expect(screen.getByText(/total: \$300/i)).toBeInTheDocument();
  });

  it('debería mostrar total $0 cuando se eliminan todos los items', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Esperamos a que se cargue el menú
    await waitFor(() => {
      expect(screen.getByText(/Café/)).toBeInTheDocument();
    });

    // Agregamos un producto
    const addButtons = screen.getAllByRole('button', { name: /agregar/i });
    await user.click(addButtons[0]); // Café

    // Verificamos que el total es $150
    await waitFor(() => {
      expect(screen.getByText(/total: \$150/i)).toBeInTheDocument();
    });

    // Eliminamos el item
    const orderList = screen.getByRole('list', { name: /pedido/i });
    const removeButtons = within(orderList).getAllByRole('button', { name: /eliminar/i });
    await user.click(removeButtons[0]);

    // El total debería ser $0
    await waitFor(() => {
      expect(screen.getByText(/total: \$0/i)).toBeInTheDocument();
    });
  });
});
