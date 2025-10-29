import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('HU3 - Calcular total del pedido', () => {
  it('debería mostrar el total en $0 cuando no hay productos', async () => {
    render(<App />);

    // Esperamos a que se cargue el menú
    await waitFor(() => {
      expect(screen.getByText(/Café/)).toBeInTheDocument();
    });

    // Verificamos que el total es $0
    expect(screen.getByText(/total: \$0/i)).toBeInTheDocument();
  });

  it('debería calcular el total al agregar un producto', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Esperamos a que se cargue el menú
    await waitFor(() => {
      expect(screen.getByText(/Café/)).toBeInTheDocument();
    });

    // Agregamos Café ($150)
    const addButtons = screen.getAllByRole('button', { name: /agregar/i });
    await user.click(addButtons[0]);

    // Verificamos que el total es $150
    await waitFor(() => {
      expect(screen.getByText(/total: \$150/i)).toBeInTheDocument();
    });
  });

  it('debería calcular el total al agregar múltiples productos', async () => {
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
  });

  it('debería calcular el total correctamente al agregar el mismo producto múltiples veces', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Esperamos a que se cargue el menú
    await waitFor(() => {
      expect(screen.getByText(/Café/)).toBeInTheDocument();
    });

    // Agregamos Café ($150) tres veces
    const addButtons = screen.getAllByRole('button', { name: /agregar/i });
    await user.click(addButtons[0]); // Café
    await user.click(addButtons[0]); // Café
    await user.click(addButtons[0]); // Café

    // Verificamos que el total es $450
    await waitFor(() => {
      expect(screen.getByText(/total: \$450/i)).toBeInTheDocument();
    });
  });
});
