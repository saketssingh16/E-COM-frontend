/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from "react";

const CART_STORAGE_KEY = "cartItems";

const CartContext = createContext(null);

const readInitialCart = () => {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(readInitialCart);

  const persist = (next) => {
    setCartItems(next);
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(next));
  };

  const addToCart = (product, quantity = 1, size = "M") => {
    if (!product?.id) return;

    const existing = cartItems.find(
      (item) => item.id === product.id && item.size === size,
    );

    if (existing) {
      persist(
        cartItems.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        ),
      );
      return;
    }

    persist([
      ...cartItems,
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size,
        quantity,
      },
    ]);
  };

  const removeFromCart = (id, size) => {
    persist(cartItems.filter((item) => !(item.id === id && item.size === size)));
  };

  const updateQuantity = (id, size, quantity) => {
    const safeQty = Math.max(1, Number(quantity) || 1);
    persist(
      cartItems.map((item) =>
        item.id === id && item.size === size ? { ...item, quantity: safeQty } : item,
      ),
    );
  };

  const clearCart = () => persist([]);

  const totals = useMemo(() => {
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    return { itemCount, subtotal };
  }, [cartItems]);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    ...totals,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
