import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cardData, setCartData] =useState(()=>{
        cart =localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : []
    })
    
 useEffect(() => {
  localStorage.setItem('cart',setCartData);

  }, [categoriesChecked, brandChecked])    // useState(JSON.parse(localStorage.getItem('cart')) || [])

    const addToCart = (product, size = null) => {
        const updatedCart = [...cardData];
        if (cardData.length === 0) {
            updatedCart.push({
                id: Date.now(),
                product_id: product.id,
                title: product.title,
                image_url: product.image_url,
                qty: 1,
                size: size,
                price: product.price,
            })
        }
        setCartData(updatedCart)
    }

    return (
        <CartContext.Provider value={{addToCart}}>
            {children}
        </CartContext.Provider>
    )

}