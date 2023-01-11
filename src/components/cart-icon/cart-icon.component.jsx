import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartDropdownContext } from '../../contexts/CartDropdownContext';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import {CartIconContainer, ShoppingIcon, ItemCount} from './cart-icon.styles.jsx';

const CartIcon = () => {
    //const {isCartOpen, setIsCartOpen} = useContext(CartDropdownContext);

    //const {cartCount} = useContext(CartDropdownContext);
    
    const dispatch = useDispatch();

    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);

    //const toggleIsCartOpent = () => setIsCartOpen(!isCartOpen);
    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return(
        <CartIconContainer className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;