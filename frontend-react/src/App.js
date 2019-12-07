import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AuthRoute from './AuthRoute';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import ProductNew from './components/ProductNew';
import BasketList from './components/BasketList';
import Login from './components/Login';
import PurchaseList from './components/MyPagePurchaselist';
import SignUp from './components/SignUp';
import BillingPage from './components/BillingPage';


function App() {
  return (
    <Router>
     
        <Switch>
        
          <Route path="/login">
            <Login/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/billingpage">
            <BillingPage />
          </Route>
          <Route path="/categories/:categoryId">
            <ProductList />
          </Route>
         <Route path="/products/new">
           <ProductNew/>
           </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
          <Route path="/basket">
            <BasketList/>
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <AuthRoute>
              <PurchaseList/>
            </AuthRoute>

        </Switch>
    </Router>
  );
}

export default App;

