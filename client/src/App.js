
// Michal Franczel
import React, { useState, useEffect } from 'react';
import {Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import Order from './views/Order'
import Admin from './views/Admin'

function App() {

  const [cart, setCart] = useState([])

  const addToCart = (product) => {
        var foundProd = cart.find(el => el.productID === product.productID)
        if (foundProd) {
          foundProd.num += 1
        } else {
          product.num = 1
          setCart([...cart, product])
        }
  }

  const remove = () => {
    setCart([])
    localStorage.setItem("cart", [])
  }

  useEffect(() => {
    const lcCart = JSON.parse(localStorage.getItem("cart")) || []
    setCart(lcCart)
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route 
            path="/" 
            render={(props) => (
              <Home {...props} cart={cart} addToCart={(item) => addToCart(item)} remove={() => remove()}/>
            )} 
            exact>
          </Route>
          <Route 
            path="/order" 
            render={(props) => (
              <Order {...props} cart={cart} setCart={(cart) => setCart(cart)} remove={() => remove()}/>
            )} 
            exact>
          </Route>
          <Route path="/admin" component={Admin} ></Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
