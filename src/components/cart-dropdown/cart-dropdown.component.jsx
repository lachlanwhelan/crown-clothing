import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartDropdownContext } from '../../contexts/CartDropdownContext';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import {CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
    const {cartItems} = useContext(CartDropdownContext);
    const navigate = useNavigate();


    return(
        <CartDropdownContainer className='cart-dropdown-container'>
            <CartItems className='cart-items'>
               {
                cartItems.length ? cartItems.map(cartItem => {
                    return <CartItem key={cartItem.id} cartItem={cartItem}/>
                })
                : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )
               }
            </CartItems>
            <Button onClick={() => navigate('/checkout')}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;