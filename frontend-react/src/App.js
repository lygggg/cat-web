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
import SearchResult from './components/SearchResult';
import Search from "./components/Search";
import Header from './components/Header';

function App() {
  return (
    <Router>
     
        <Switch>
          <Route path="/search/:searchTerm">
            <Header />
            <SearchResult />
          </Route>
          <Route path="/login">
            <Header />
            <Login/>
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/billingpage">
            <BillingPage />
          </Route>
          <Route path="/categories/:categoryId">
            <Header />
            <ProductList />
          </Route>
         <Route path="/products/new">
            <Header />
           <ProductNew/>
           </Route>
          <Route path="/products/:productId">
            <Header />
            <ProductDetail />
          </Route>
          <Route path="/basket">
            <Header />
            <BasketList/>
          </Route>
          <Route path="/signup">
            <Header />
            <SignUp/>
          </Route>
          <AuthRoute path="/purchase">
            <Header />
              <PurchaseList/>
            </AuthRoute>

        </Switch>
    </Router>
  );
}

export default App;

