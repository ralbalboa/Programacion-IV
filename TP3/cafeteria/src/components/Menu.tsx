import { useState, useEffect } from 'react';
import { Product } from '../types/product';

interface MenuProps {
  onAddItem: (product: Product) => void;
}

export function Menu({ onAddItem }: MenuProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadMenu = () => {
    setIsLoading(true);
    setError(null);

    fetch('/api/menu')
      .then(async response => {
        if (!response.ok) {
          throw new Error('Error al cargar el menú');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar el menú:', error);
        setError('Error al cargar el menú');
        setIsLoading(false);
      });
  };

  useEffect(() => {
    loadMenu();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Menú</h2>
        <p>Cargando menú...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2>Menú</h2>
        <p>{error}</p>
        <button onClick={loadMenu}>Reintentar</button>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div>
        <h2>Menú</h2>
        <p>No hay productos disponibles</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Menú</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => onAddItem(product)}>Agregar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
