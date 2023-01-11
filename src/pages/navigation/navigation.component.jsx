import { useContext } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom"
import {ReactComponent as Crown} from '../../assets/crown.svg';
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { AuthContext } from "../../contexts/AuthContext";
import { CartDropdownContext } from "../../contexts/CartDropdownContext";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutAuthUser } from "../../utils/firebase.utils";
import {LogoContainer, NavigationContainer, NavLink, NavLinksContainer} from './navigation.styles.jsx';

const Navigation = () => {
   const currentUser = useSelector(selectCurrentUser);
   const isCartOpen = useSelector(selectIsCartOpen);
   console.log(isCartOpen);
   //const {currentUser} = useContext(AuthContext);
   //const {isCartOpen} = useContext(CartDropdownContext);

    return (
      <>
         <div className="navigation">
         {/* <Link className="logo-container" to='/'>
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
            </div> */}

            <NavigationContainer>
            <LogoContainer to='/'>
               <Crown/>
            </LogoContainer>
               <NavLinksContainer>
                  <NavLink to='/shop'>Shop</NavLink>
                  <NavLink to='/contact'>Contact</NavLink>
                  {
                     currentUser 
                     ? (<NavLink as='span' onClick={signOutAuthUser}>Sign Out</NavLink>)
                     : (<NavLink to='/signin'>Sign In</NavLink>)
                  }
                  <CartIcon/>
                  {isCartOpen && <CartDropdown/>}
               </NavLinksContainer>
            </NavigationContainer>
         </div>
            <Outlet/>
      </>
    )
}

export default Navigation; 
  