import { useState, useEffect } from 'react';
import { Product } from '../types/product';

interface MenuProps {
  onAddItem: (product: Product) => void;
}

export function Menu({ onAddItem }: MenuProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadMenu = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/menu');
      if (!response.ok) throw new Error('Error al cargar el menú');
      const data = await response.json();
      setProducts(data);
    } catch {
      setError('Error al cargar el menú');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMenu();
  }, []);

  if (isLoading) return <div><h2>Menú</h2><p>Cargando menú...</p></div>;
  if (error) return <div><h2>Menú</h2><p>{error}</p><button onClick={loadMenu}>Reintentar</button></div>;
  if (products.length === 0) return <div><h2>Menú</h2><p>No hay productos disponibles</p></div>;

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
