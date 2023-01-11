
import {createAction} from '../../utils/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';

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

export const clearCartItem = (cartItems, checkoutItem) => {
    return cartItems.filter(cartItem => cartItem.id !== checkoutItem.id)
}


export const setIsCartOpen = (boolean) => 
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, addCartItem(cartItems, productToAdd));
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, removeCartItem(cartItems, cartItemToRemove))
}

export const clearItemFromCart = (cartItems, checkoutItem) => {
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, clearCartItem(cartItems, checkoutItem));
} 


/* export const updateCartItemsReducer = (newCartItems) => {

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

    return createAction(CART_ACTION_TYPES.UPDATE_CART, newCart)
    //dispatch({type: CART_ACTION_TYPES.UPDATE_CART , payload: newCart});
} */