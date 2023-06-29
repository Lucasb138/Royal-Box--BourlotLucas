import {createContext, useState} from 'react'

export const CartContext = createContext (null);

const ShoppingCartContextProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  if (cart.length > 0 ) {
    localStorage.setItem("cart", JSON.stringify(cart))
  }

  if (cart.length === 0 && localStorage.getItem("cart")){
    setCart(JSON.parse(localStorage.getItem("cart")))
  }

  const addItem = (item, quantity) => {
    const itemAdded = { ...item, quantity };
    const newCart = [...cart];
    const isInCart = newCart.find((item) => item.id === itemAdded.id); 
    if (isInCart) {
        isInCart.quantity += quantity; 
    } else {
        newCart.push(itemAdded);   
    }
    setCart(newCart);
    localStorage.removeItem('cart');

    localStorage.setItem('cart', JSON.stringify(newCart));
}

    const removeItem = (itemId) => {
        const newCart = cart.filter((item) => item.id !== itemId);
        setCart(newCart);
        localStorage.removeItem('cart');
    }

    const totalItems = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    }
    const totalPrices = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    }
    const clean = () => {
        setCart([]);
        localStorage.removeItem('cart');
    }
  

    return <CartContext.Provider value = {{cart, setCart, addItem, removeItem, totalItems, totalPrices, clean}}>{children}</CartContext.Provider>
}

export default ShoppingCartContextProvider
