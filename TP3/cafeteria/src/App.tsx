import { useState } from 'react'
import { Menu } from './components/Menu'
import { Order } from './components/Order'
import { useOrder } from './hooks/useOrder'
import './App.css'

function App() {
  const { orderItems, addItem, removeItem, clearOrder, getTotal } = useOrder();
  const [isSending, setIsSending] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleSendOrder = async () => {
    setIsSending(true);
    setIsConfirmed(false);

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderItems),
      });

      if (response.ok) {
        setIsConfirmed(true);
        clearOrder();
        // Limpiar el mensaje de confirmación después de 3 segundos
        setTimeout(() => setIsConfirmed(false), 3000);
      }
    } catch (error) {
      console.error('Error al enviar el pedido:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      <h1>Cafetería</h1>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Menu onAddItem={addItem} />
        <Order
          items={orderItems}
          total={getTotal()}
          onRemoveItem={removeItem}
          onSendOrder={handleSendOrder}
          isSending={isSending}
          isConfirmed={isConfirmed}
        />
      </div>
    </div>
  )
}

export default App
