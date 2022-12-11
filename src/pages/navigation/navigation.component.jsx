import { useContext } from "react";
import { Link, Outlet } from "react-router-dom"
import {ReactComponent as Crown} from '../../assets/crown.svg';
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { AuthContext } from "../../contexts/AuthContext";
import { CartDropdownContext } from "../../contexts/CartDropdownContext";
import { signOutAuthUser } from "../../utils/firebase.utils";
import './navigation.styles.scss';

const Navigation = () => {

   const {currentUser} = useContext(AuthContext);
   const {isCartOpen} = useContext(CartDropdownContext);

    return (
      <>
         <div className="navigation">
         <Link className="logo-container" to='/'>
            <Crown className="logo"/>
         </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>Shop</Link>
                <Link className="nav-link" to='/contact'>Contact</Link>
                {
                  currentUser ? (<span className="nav-link" onClick={signOutAuthUser}>Sign Out</span>)
                  : (<Link className="nav-link" to='/signin'>Sign In</Link>)
                }
                <CartIcon/>
                {isCartOpen && <CartDropdown/>}
            </div>
         </div>
            <Outlet/>
      </>
    )
}

export default Navigation; 
  