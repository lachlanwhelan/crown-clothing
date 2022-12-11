import { useContext } from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { CartDropdownContext } from '../../contexts/CartDropdownContext';
import './cart-icon.styles.scss';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartDropdownContext);

    const {cartCount} = useContext(CartDropdownContext);

    const toggleIsCartOpent = () => setIsCartOpen(!isCartOpen);

    return(
        <div className='cart-icon-container' onClick={toggleIsCartOpent}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;