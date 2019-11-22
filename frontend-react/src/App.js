import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Food from "./components/Food"
import Canner from "./components/Canner";
import Send from "./components/Send";
import Snack from "./components/Snack";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import ProductNew from "./components/ProductNew";



function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
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
        </Switch>
    </Router>
  );
}

export default App;

