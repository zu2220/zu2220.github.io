import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const CartIcon: React.FC = () => {
  const { getTotalItems, openCart } = useCart();
  const { state: authState } = useAuth();
  const totalItems = getTotalItems();

  // 🔒 Solo mostrar carrito si el usuario es CUSTOMER
  if (authState.user?.role !== 'CUSTOMER') {
    return null;
  }

  return (
    <button
      onClick={openCart}
      className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
      aria-label="Ver carrito de compras"
    >
      <ShoppingCart className="h-6 w-6" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </button>
  );
};

export default CartIcon;
