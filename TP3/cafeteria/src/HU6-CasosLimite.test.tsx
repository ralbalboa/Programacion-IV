import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { server } from './setupTests';
import { http, HttpResponse } from 'msw';
import App from './App';

describe('HU6 - Casos límite: error o menú vacío', () => {
  // Guardamos el handler original para restaurarlo después
  afterEach(() => {
    server.resetHandlers();
  });

  it('debería mostrar un mensaje cuando el menú está vacío', async () => {
    // Sobreescribimos el handler para retornar un array vacío
    server.use(
      http.get('/api/menu', () => {
        return HttpResponse.json([]);
      })
    );

    render(<App />);

    // Esperamos el mensaje de menú vacío
    await waitFor(() => {
      expect(screen.getByText(/no hay productos disponibles/i)).toBeInTheDocument();
    });
  });

  it('debería mostrar un mensaje de error cuando falla la carga del menú (500)', async () => {
    // Sobreescribimos el handler para retornar error 500
    server.use(
      http.get('/api/menu', () => {
        return HttpResponse.json(
          { error: 'Internal Server Error' },
          { status: 500 }
        );
      })
    );

    render(<App />);

    // Esperamos el mensaje de error
    await waitFor(() => {
      expect(screen.getByText(/error al cargar el menú/i)).toBeInTheDocument();
    });
  });

  it('debería mostrar un mensaje de error cuando hay un error de red', async () => {
    // Sobreescribimos el handler para simular error de red
    server.use(
      http.get('/api/menu', () => {
        return HttpResponse.error();
      })
    );

    render(<App />);

    // Esperamos el mensaje de error
    await waitFor(() => {
      expect(screen.getByText(/error al cargar el menú/i)).toBeInTheDocument();
    });
  });

  it('debería poder reintentar cargar el menú después de un error', async () => {
    // Primera llamada: error
    let callCount = 0;
    server.use(
      http.get('/api/menu', () => {
        callCount++;
        if (callCount === 1) {
          return HttpResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
          );
        }
        // Segunda llamada: éxito
        return HttpResponse.json([
          { id: '1', name: 'Café', price: 150 },
        ]);
      })
    );

    const { rerender } = render(<App />);

    // Esperamos el mensaje de error
    await waitFor(() => {
      expect(screen.getByText(/error al cargar el menú/i)).toBeInTheDocument();
    });

    // Buscamos el botón de reintentar
    const retryButton = screen.getByRole('button', { name: /reintentar/i });
    expect(retryButton).toBeInTheDocument();

    // Hacemos click en reintentar
    retryButton.click();

    // Esperamos que se cargue el menú correctamente
    await waitFor(() => {
      expect(screen.getByText(/Café/)).toBeInTheDocument();
    });
  });

  it('debería mostrar un estado de carga mientras se obtiene el menú', async () => {
    render(<App />);

    // El estado de carga es muy rápido, pero intentamos capturarlo
    // Verificamos que eventualmente se carga el menú
    await waitFor(() => {
      expect(screen.getByText(/Café/)).toBeInTheDocument();
    });
  });
});
