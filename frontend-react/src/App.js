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
import Bttom from './components/Bottom';
import Bottom from "./components/Bottom";

function App() {
  return (
    <Router>
     
        <Switch>
          <Route path="/categories/:categoryId/page/:pageNum">
            <Header />
            <ProductList />
            <Bottom />
          </Route>
          <Route path="/search/:searchTerm">
            <Header />
            <SearchResult />
            <Bottom />
          </Route>
          <Route path="/user/login">
            <Header />
            <Login/>
            <Bottom />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
            <Bottom />
          </Route>
          <Route path="/billingpage">
            <BillingPage />
            <Bottom />
          </Route>
          {/* <Route path="/categories/:categoryId">
            <Header />
            <ProductList />
            <Bottom />
          </Route> */}
         <Route path="/products/new">
            <Header />
           <ProductNew/>
           <Bottom />
           </Route>
          <Route path="/products/:productId">
            <Header />
            <ProductDetail />
            <Bottom />
          </Route>
          <Route path="/basket">
            <Header />
            <BasketList/>
            <Bottom />
          </Route>
          <Route path="/signup">
            <Header />
            <SignUp/>
            <Bottom />
          </Route>
          <AuthRoute path="/purchase">
            <Header />
              <PurchaseList/>
              <Bottom />
            </AuthRoute>

        </Switch>
    </Router>
  );
}

export default App;

