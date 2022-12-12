import { createContext, useEffect, useState } from "react";


const addCartItem = (cartItems, productToAdd) => {

    const existingItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

    if(existingItem){
        return cartItems.map(cartItem => cartItem.id === productToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1} 
            : cartItem
        )
    }                                                                                         

    return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
        
    const existingItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if(existingItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id 
        ? {...cartItem, quantity: cartItem.quantity - 1} 
        : cartItem
    )
}

const clearCartItem = (cartItems, checkoutItem) => {

    return cartItems.filter(cartItem => cartItem.id !== checkoutItem.id)

}


export const CartDropdownContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    cartTotal: 0,
    removeItemFromCart: () => {},
    clearCartItem: () => {}
});

const CartDropdownProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (cartItemToRemove) => {
       setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }

    const clearItemFromCart = (checkoutItem) => {
        setCartItems(clearCartItem(cartItems, checkoutItem));
    } 

    
    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, cartTotal, clearItemFromCart};


    //good practice to split effects based on focus/concern

    useEffect(() => {

        const newCartCount = cartItems.reduce((prev, curr) => {
            
            return prev + curr.quantity;

        }, 0);

        
        setCartCount(newCartCount);

    }, [cartItems]);



    useEffect(() => {

        const newCartTotal = cartItems.reduce((prev, curr) => {
            
            return prev + (curr.price * curr.quantity);

        }, 0);

        setCartTotal(newCartTotal);

    }, [cartItems])

    return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>

}

export default CartDropdownProvider;


