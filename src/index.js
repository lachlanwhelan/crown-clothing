import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/AuthContext';
import CategoriesProvider from './contexts/CategoriesContext';
import CartDropdownProvider from './contexts/CartDropdownContext';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';

import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <PersistGate persistor={persistor}>
  <BrowserRouter>
       <App />
  </BrowserRouter>
  </PersistGate>
  </Provider>
</React.StrictMode>
 /*  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CategoriesProvider>
        <CartDropdownProvider>
          <App />
        </CartDropdownProvider>
        </CategoriesProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
