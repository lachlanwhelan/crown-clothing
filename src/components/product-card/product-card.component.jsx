import './product-card.styles.scss';
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartDropdownContext } from '../../contexts/CartDropdownContext';

const ProductCard = ({id, name, imageUrl, price}) => {

    const {addItemToCart} = useContext(CartDropdownContext);

    const addProductToCart = () => addItemToCart({id, name, imageUrl, price})

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={name}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button onClick={addProductToCart} buttonType='inverted'>Add to cart</Button>
        </div>
    )
}

export default ProductCard;