import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { apiUrl, UserToken } from "../common/Http";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [shippingCost, setShippingCost] = useState(0);
  const [cartData, setCartData] = useState(() => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  });
  // cart data
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cartData));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [cartData]);
  // shipping cost fetch
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await fetch(`${apiUrl}/customer-shipping`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json",
            "Authorization": `Bearer ${UserToken()}`

          },

        })
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await res.json();
        if (result.status == 200) {
          setShippingCost(result.data.shipping_charge)
        }

      }
      catch (error) {
        setShippingCost(0)
        console.error("Fetch error:", error);
        toast.error("Something Went Wrong!")
      }
    }
    fetchApi();
  }, [])



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
    let shippingcharge = 0;
    shippingCost.map(item =>
      shippingcharge +=
      item.qty * shippingCost
    )
    return shippingcharge;
  };
  // subtotal
  const subTotal = () => {
    return cartData.reduce((total, item) => total + item.qty * item.price, 0);
  };
  // grandtotal
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
