import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Users from './user/Users';
import Signup from './user/Signup';
import Signin from './auth/Signin';
import Profile from './user/Profile';
import Menu from './core/Menu';
import EditProfile from './user/EditProfile';
import PrivateRoute from './auth/PrivateRoute';
import NewShop from './shop/NewShop';
import Shops from './shop/Shops';
import MyShops from './shop/MyShops';
import Shop from './shop/Shop'; 
import EditShop from './shop/EditShop';
import NewProduct from './product/NewProduct';
import Product from './product/Product';
import EditProduct from './product/EditProduct'
import Cart from './cart/cart';
import StripeConnect from './user/StripeConnect';
import ShopOrders from './order/ShopOrders'

class MainRouter extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/signin" component={Signin}/>
          <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
          <Route path="/user/:userId" component={Profile}/>
          <Route path="/shops/all" component={Shops}/>
          <PrivateRoute path="/seller/shop/new" component={NewShop}/>
          <PrivateRoute path="/seller/shops" component={MyShops}/>
          <Route path="/shops/:shopId" component={Shop}/>
          <PrivateRoute path="/seller/shop/edit/:shopId" component={EditShop}/>
          <PrivateRoute path="/seller/:shopId/products/new" component={NewProduct}/>
          <Route path="/product/:productId" component={Product}/>
          <PrivateRoute path="/seller/:shopId/:productId/edit" component={EditProduct}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/seller/stripe/connect" component={StripeConnect}/>
          <PrivateRoute path="/seller/orders/:shop/:shopId" component={ShopOrders}/>
        </Switch>
      </div>
    );
  }
}
export default MainRouter;
