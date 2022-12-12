import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartDropdownContext } from '../../contexts/CartDropdownContext';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const {cartItems} = useContext(CartDropdownContext);
    const navigate = useNavigate();
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
               {
                cartItems.map(cartItem => {
                    return <CartItem key={cartItem.id} cartItem={cartItem}/>
                })
               }
            </div>
            <Button onClick={() => navigate('/checkout')}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;