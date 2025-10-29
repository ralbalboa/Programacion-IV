import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('HU5 - Enviar pedido', () => {
  it('debería enviar el pedido al servidor y mostrar confirmación', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Esperamos a que se cargue el menú
    await waitFor(() => {
      expect(screen.getByText(/Café/)).toBeInTheDocument();
    });

    // Agregamos algunos productos
    const addButtons = screen.getAllByRole('button', { name: /agregar/i });
    await user.click(addButtons[0]); // Café
    await user.click(addButtons[1]); // Té

    // Verificamos que hay productos en el pedido
    await waitFor(() => {
      expect(screen.getByText(/total: \$270/i)).toBeInTheDocument();
    });

    // Buscamos y clickeamos el botón "Enviar pedido"
    const sendButton = screen.getByRole('button', { name: /enviar pedido/i });
    await user.click(sendButton);

    // Esperamos el mensaje de confirmación
    await waitFor(() => {
      expect(screen.getByText(/pedido confirmado/i)).toBeInTheDocument();
    });
  });

  it('debería limpiar el pedido después de enviarlo exitosamente', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Esperamos a que se cargue el menú
    await waitFor(() => {
      expect(screen.getByText(/Café/)).toBeInTheDocument();
    });

    // Agregamos productos
    const addButtons = screen.getAllByRole('button', { name: /agregar/i });
    await user.click(addButtons[0]); // Café

    // Verificamos que hay productos
    await waitFor(() => {
      expect(screen.getByText(/total: \$150/i)).toBeInTheDocument();
    });

    // Enviamos el pedido
    const sendButton = screen.getByRole('button', { name: /enviar pedido/i });
    await user.click(sendButton);

    // Esperamos confirmación
    await waitFor(() => {
      expect(screen.getByText(/pedido confirmado/i)).toBeInTheDocument();
    });

    // Verificamos que el pedido se limpió (total en $0)
    await waitFor(() => {
      expect(screen.getByText(/total: \$0/i)).toBeInTheDocument();
    });
  });

  it('no debería poder enviar un pedido vacío', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Esperamos a que se cargue el menú
    await waitFor(() => {
      expect(screen.getByText(/Café/)).toBeInTheDocument();
    });

    // Buscamos el botón "Enviar pedido"
    const sendButton = screen.getByRole('button', { name: /enviar pedido/i });

    // El botón debería estar deshabilitado
    expect(sendButton).toBeDisabled();
  });

  it('debería mostrar un estado de carga mientras envía el pedido', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Esperamos a que se cargue el menú
    await waitFor(() => {
      expect(screen.getByText(/Café/)).toBeInTheDocument();
    });

    // Agregamos un producto
    const addButtons = screen.getAllByRole('button', { name: /agregar/i });
    await user.click(addButtons[0]); // Café

    // Enviamos el pedido
    const sendButton = screen.getByRole('button', { name: /enviar pedido/i });

    // No esperamos el click para poder capturar el estado intermedio
    user.click(sendButton);

    // Verificamos que muestra "Enviando..." mientras se procesa (usando findBy que espera)
    await screen.findByText(/enviando/i);

    // Esperamos la confirmación
    await waitFor(() => {
      expect(screen.getByText(/pedido confirmado/i)).toBeInTheDocument();
    });
  });
});
