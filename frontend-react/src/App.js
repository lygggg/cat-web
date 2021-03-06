import React, { useState } from 'react';
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
import UserModify from './components/UserModify';
import SearchResult from './components/SearchResult';
import Header from './components/Header';
import Bottom from './components/Bottom';
import Payment from './Payment';
import PaymentResult from './PaymentResult';
import ProductReview from './components/ProductReviewList';
import WriteReviewPage from './components/WriteReviewPage';

function App() {

  const [searchText, setSearchText] = useState('');

  const searchTermRoute = (text) => {
    setSearchText(text);
  }

  return (
    <Router>
        <Switch>
          <Route path="/categories/:categoryId/page/:pageNum">
            <Header searchCallback={searchTermRoute}/>
            <ProductList/>
            <Bottom />
          </Route>
          <Route path="/search">
            <Header searchCallback={searchTermRoute}/>
            <SearchResult searchText={searchText}/>
            <Bottom />
          </Route>
          <Route path="/user/login">
            <Header searchCallback={searchTermRoute}/>
            <Login/>
            <Bottom/>
          </Route>
          <Route exact path="/">
            <Header searchCallback={searchTermRoute}/>
            <Home />
            <Bottom />
          </Route>
         <Route path="/products/new">
            <Header searchCallback={searchTermRoute}/>
           <ProductNew/>
           <Bottom />
           </Route>
          <Route path="/products/:productId">
            <Header searchCallback={searchTermRoute}/>
            <ProductDetail />
            <Bottom />
          </Route>
          <Route path="/basket">
            <Header searchCallback={searchTermRoute}/>
            <BasketList/>
            <Bottom />
          </Route>
          <Route path="/signup">
            <Header searchCallback={searchTermRoute}/>
            <SignUp/>
            <Bottom />
          </Route>
          <Route path="/usermodify">
            <Header searchCallback={searchTermRoute}/>
            <UserModify/>
            <Bottom />
          </Route>
          <Route exact path="/review">
            <Header searchCallback={searchTermRoute}/>
            <ProductReview/>
          </Route>
          <Route exact path="/review/:productId">
            <Header searchCallback={searchTermRoute}/>
            <WriteReviewPage/>
            <Bottom />
          </Route>
          <AuthRoute exact path="/purchase">
            <Header searchCallback={searchTermRoute}/>
              <PurchaseList/>
            </AuthRoute>
            <Route exact path="/payment/result" component={PaymentResult}/>
            <AuthRoute path="/payment">
            <Route exact path="/payment" component={Payment}/>
            <Bottom />
            </AuthRoute>
        </Switch>
    </Router>
  );
}

export default App;
