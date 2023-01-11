import {createSelector} from 'reselect';

export const getCartCount = (state) => state.cart.cartCount;
export const getCartTotal = (state) => state.cart.cartTotal;
export const getCartItems = (state) => state.cart.cartItems;
export const getIsCartOpen = (state) => state.cart.isCartOpen;


const cartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
    [cartReducer],
    (cart) => cart.cartItems
)


export const selectIsCartOpen = createSelector(
    [cartReducer],
    (cart) => cart.isCartOpen
)

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
    cartItems.reduce((prev, curr) => {
                
        return prev + curr.quantity;
    
    }, 0)
)

export const selectCartTotal = createSelector( [selectCartItems],(cartItems) => 
    cartItems.reduce((prev, curr) => {
        
        return prev + (curr.price * curr.quantity);
    
    }, 0)
)
