
import { Route, Routes } from 'react-router-dom';
import Checkout from './pages/checkout/checkout.component';
import Contact from './pages/contact/contact.component';
import Home from './pages/home/home.component';
import Navigation from './pages/navigation/navigation.component';
import Shop from './pages/shop/shop.component';
import Signin from './pages/signin/signin.component';



const App = () => {
  
  return (
        <Routes>
          <Route path='/' element={<Navigation/>}>
            <Route index element={<Home/>}/>
            <Route path='/shop/*' element={<Shop/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Route>
        </Routes>
  );
}

export default App;
