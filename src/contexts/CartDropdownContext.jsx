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


export const CartDropdownContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
});

const CartDropdownProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    
    

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount};


    useEffect(() => {

        const newCartCount = cartItems.reduce((prev, curr) => {
            
            return prev + curr.quantity;

        }, 0);

        setCartCount(newCartCount);

    }, [cartItems]);

    return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>

}

export default CartDropdownProvider;


