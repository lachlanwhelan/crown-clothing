import './product-card.styles.scss';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { useContext } from 'react';
import { CartDropdownContext } from '../../contexts/CartDropdownContext';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

const ProductCard = ({id, name, imageUrl, price}) => {

    const cartItems = useSelector(selectCartItems);

    const dispatch = useDispatch();

    //const {addItemToCart} = useContext(CartDropdownContext);

    //const addProductToCart = () => addItemToCart({id, name, imageUrl, price});

    const addProductToCart = () => dispatch(addItemToCart(cartItems, {id, name, imageUrl, price}));

    

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={name}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to cart</Button>
        </div>
    )
}

export default ProductCard;