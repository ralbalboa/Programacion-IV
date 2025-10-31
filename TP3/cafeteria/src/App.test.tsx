import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('HU1 - Visualización inicial del menú', () => {
  it('debería mostrar un listado de productos disponibles', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/Café/)).toBeInTheDocument();
    });

    expect(screen.getByText(/Té/)).toBeInTheDocument();
    expect(screen.getByText(/Medialunas/)).toBeInTheDocument();
    expect(screen.getByText(/Tostado/)).toBeInTheDocument();
  });

  it('debería mostrar los productos como items de lista', async () => {
    render(<App />);

    await waitFor(() => {
      const listItems = screen.getAllByRole('listitem');
      expect(listItems).toHaveLength(4);
    });
  });
});
