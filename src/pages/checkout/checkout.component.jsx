import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartDropdownContext } from "../../contexts/CartDropdownContext";
import './checkout.styles.scss';

const Checkout = () => {

    const {cartItems, cartTotal} = useContext(CartDropdownContext);


    return(
        <div className="checkout-container">
            <header className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </header>
            {
                cartItems.map(cartItem => {
                    return <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                })
            }
           <span className="total">Total:  {cartTotal}</span>
        </div>
    )
}

export default Checkout;