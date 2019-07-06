import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import './App.css';
import Home from './containers/Home'
import ProductDetails from './containers/ProductDetails';
import NavbarCustom from './components/Navbars';
import CategoryProducts from './containers/CategoryProducts';
import FooterCustom from './components/FooterCustom/FooterCustom';
import AdminPanel from './containers/AdminPanel';
import Cart from './containers/Cart';


// //import About from './containers/About'
// import ProductDetail from './containers/ProductDetail'
// import NotFound from './containers/NotFound'

function App() {
  return <BrowserRouter>
   <NavbarCustom />
  <Switch>
    <Route exact path="/" component={Home} />
      {/* <Route path="/product/details" component={ProductDetails} />  */}
    <Route path="/products/:Id" component={ProductDetails} />
    <Route path="/category/:Id" component={CategoryProducts} />
    <Route path="/admin" component={AdminPanel} />
    <Route path="/cart" component={Cart} />

    {/* <Route path="*" component={NotFound} />  */}
  </Switch>
  <FooterCustom/>
</BrowserRouter>;
}

export default App;
