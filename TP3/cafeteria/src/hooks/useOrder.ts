import { useState } from 'react';
import { Product } from '../types/product';

export interface OrderItem extends Product {
  orderId: string; // ID único para cada item en el pedido
}

export function useOrder() {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  const addItem = (product: Product) => {
    const orderItem: OrderItem = {
      ...product,
      orderId: `${product.id}-${Date.now()}-${Math.random()}`,
    };
    setOrderItems(prevItems => [...prevItems, orderItem]);
  };

  const removeItem = (orderId: string) => {
    setOrderItems(prevItems => prevItems.filter(item => item.orderId !== orderId));
  };

  const clearOrder = () => {
    setOrderItems([]);
  };

  const getTotal = () => {
    return orderItems.reduce((total, item) => total + item.price, 0);
  };

  return {
    orderItems,
    addItem,
    removeItem,
    clearOrder,
    getTotal,
  };
}
