import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './style/base.scss'
import Class from './pages/class/class'
import Items from './pages/item/itemList'
import ItemDetail from './pages/item/itemDetail'
import ShoppingCart from './pages/order/shoppingCart'
import CheckOut from './pages/order/checkOut'

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/Class">
            <Class />
          </Route>
          <Route path="/items/:itemId">
            <ItemDetail />
          </Route>
          <Route path="/items">
            <Items />
          </Route>
          <Route path="/member/mycart">
            <ShoppingCart />
          </Route>
          <Route path="/member/checkout">
            <CheckOut />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
