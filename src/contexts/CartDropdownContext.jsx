import { createContext, useEffect, useState, useReducer } from "react";


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

const INITIAL_STATE = {
    cartCount: 0,
    cartTotal: 0,
    cartItems: [],
    isCartOpen: false,
}

const CART_ACTION_TYPES = {
    UPDATE_CART: 'UPDATE_CART',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}


const cartReducer = (state, action) => {

    const {type, payload} = action;
    
    
    switch(type){

        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return{
                ...state,
                isCartOpen: payload
            }
        case CART_ACTION_TYPES.UPDATE_CART :
        return {
            ...state,
            ...payload
        }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}


const CartDropdownProvider = ({children}) => {
    
    /*
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    */
    

    //good practice to split effects based on focus/concern 

    /*
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
    */

    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const {isCartOpen, cartItems, cartCount, cartTotal} = state;


    const updateCartItemsReducer = (newCartItems) => {

        const newCartCount = newCartItems.reduce((prev, curr) => {
                
            return prev + curr.quantity;

        }, 0);

        const newCartTotal = newCartItems.reduce((prev, curr) => {
                
            return prev + (curr.price * curr.quantity);

        }, 0);

        
        const newCart = {
            cartTotal: newCartTotal,
            cartCount: newCartCount,
            cartItems: newCartItems
        }

        dispatch({type: CART_ACTION_TYPES.UPDATE_CART , payload: newCart});
    }
    
    const addItemToCart = (productToAdd) => {
        updateCartItemsReducer(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (cartItemToRemove) => {
        updateCartItemsReducer(removeCartItem(cartItems, cartItemToRemove))
    }

    const clearItemFromCart = (checkoutItem) => {
        updateCartItemsReducer(clearCartItem(cartItems, checkoutItem));
    } 

    const setIsCartOpen = (value) => {
        dispatch({type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: value})
    }

    
    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, cartTotal, clearItemFromCart};


    return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>

}

export default CartDropdownProvider;


