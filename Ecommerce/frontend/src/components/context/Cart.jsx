import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

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
  const shipping = () => {
    return 0;
  };
  const subTotal = () => {
    return cartData.reduce((total, item) => total + item.qty * item.price, 0);
  };
  const grandTotal = () => {
    return shipping() + subTotal();
  };

  const updateCartqty = (productId, qty, size = null) => {
    if (qty < 0) {
      return;
    }
    setCartData(cartData.map(item =>
      item.product_id === productId && item.size === size
        ? { ...item, qty }
        : item
    )
    )
  };

  const removeItem = (id) => {

    setCartData(cartData.filter(item => item.id !== id));
    toast.success("Remove Item Successfully!");
  };

  return (
    <CartContext.Provider value={{ cartData, addToCart, shipping, updateCartqty, subTotal, grandTotal, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
