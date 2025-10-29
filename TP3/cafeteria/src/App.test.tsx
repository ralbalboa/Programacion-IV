import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('HU1 - Visualización inicial del menú', () => {
  it('debería mostrar un listado de productos disponibles', async () => {
    render(<App />);

    // Esperamos a que se carguen los productos desde la API
    await waitFor(() => {
      expect(screen.getByText(/Café/)).toBeInTheDocument();
    });

    // Verificamos que se muestran todos los productos mockeados
    expect(screen.getByText(/Té/)).toBeInTheDocument();
    expect(screen.getByText(/Medialunas/)).toBeInTheDocument();
    expect(screen.getByText(/Tostado/)).toBeInTheDocument();
  });

  it('debería mostrar los productos como items de lista', async () => {
    render(<App />);

    // Esperamos a que se rendericen los productos
    await waitFor(() => {
      const listItems = screen.getAllByRole('listitem');
      expect(listItems).toHaveLength(4); // 4 productos mockeados
    });
  });
});
