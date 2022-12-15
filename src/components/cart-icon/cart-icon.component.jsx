import { useContext } from 'react';
import { CartDropdownContext } from '../../contexts/CartDropdownContext';
import {CartIconContainer, ShoppingIcon, ItemCount} from './cart-icon.styles.jsx';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartDropdownContext);

    const {cartCount} = useContext(CartDropdownContext);

    const toggleIsCartOpent = () => setIsCartOpen(!isCartOpen);

    return(
        <CartIconContainer className='cart-icon-container' onClick={toggleIsCartOpent}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;