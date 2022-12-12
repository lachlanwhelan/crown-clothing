import { useContext } from 'react';
import { CartDropdownContext } from '../../contexts/CartDropdownContext';
import './checkout-item.styles.scss';


const CheckoutItem = ({cartItem}) => {

    const {cartItems, removeItemFromCart, addItemToCart, clearItemFromCart, cartTotal} = useContext(CartDropdownContext);

    const {name, imageUrl, price, quantity} = cartItem;

    const handleRemoveBtnClick = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);
    
    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>

            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                    <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={handleRemoveBtnClick}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;