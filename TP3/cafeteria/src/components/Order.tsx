import { OrderItem } from '../hooks/useOrder';

interface OrderProps {
  items: OrderItem[];
  total: number;
  onRemoveItem: (orderId: string) => void;
  onSendOrder: () => void;
  isSending: boolean;
  isConfirmed: boolean;
}

export function Order({ items, total, onRemoveItem, onSendOrder, isSending, isConfirmed }: OrderProps) {
  return (
    <div>
      <h2>Pedido</h2>
      <ul aria-label="pedido">
        {items.map(item => (
          <li key={item.orderId}>
            {item.name} - ${item.price}
            <button onClick={() => onRemoveItem(item.orderId)}>Eliminar</button>
          </li>
        ))}
      </ul>
      {items.length === 0 && <p>No hay productos en el pedido</p>}
      <p><strong>Total: ${total}</strong></p>

      <button
        onClick={onSendOrder}
        disabled={items.length === 0 || isSending}
      >
        {isSending ? 'Enviando...' : 'Enviar pedido'}
      </button>

      {isConfirmed && <p style={{ color: 'green' }}>Pedido confirmado</p>}
    </div>
  );
}
