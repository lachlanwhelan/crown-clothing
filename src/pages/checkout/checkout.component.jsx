import { useContext } from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import { CartDropdownContext } from "../../contexts/CartDropdownContext";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import './checkout.styles.scss';

const Checkout = () => {

    //const {cartItems, cartTotal} = useContext(CartDropdownContext);

    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

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

           <PaymentForm/>
        </div>
    )
}

export default Checkout;