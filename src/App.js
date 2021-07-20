import Menu from './components/Menu'
import React from 'react'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import Productcart from './components/Productcart'
import Cart from './components/Cart'
import Product from './components/Product'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/" > 
          <Main />         
        </Route>
        <Route path="/product/:id" children={<Productcart />}></Route>
        <Route path="/cart">
          <Cart />        
        </Route>
        <Route path="/products">
          <Product />
        </Route>
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
