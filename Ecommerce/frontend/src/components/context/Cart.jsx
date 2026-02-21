import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState(() => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cartData));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [cartData]);

  const addToCart = (product, size = null) => {
    const existingItem = cartData.find(
      item => item.product_id === product.id && item.size === size
    );

    if (existingItem) {
      
      const updatedCart = cartData.map(item =>
        item.product_id === product.id && item.size === size
          ? { ...item, qty: item.qty + 1 }
          : item
      );
      setCartData(updatedCart);
    } else {
    
      const newItem = {
        id: Date.now(),
        product_id: product.id,
        title: product.title,
        image_url: product.image_url,
        qty: 1,
        size: size,
        price: product.price,
      };
      setCartData([...cartData, newItem]);
    }
  };

  return (
    <CartContext.Provider value={{ cartData, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
