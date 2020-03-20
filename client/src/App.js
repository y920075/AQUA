import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './style/base.scss'
import Class from './pages/class/class'
import Items from './pages/item/itemList'
import ItemDetail from './pages/item/itemDetail'
import ShoppingCart from './pages/order/shoppingCart'

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/Class">
            <Class />
          </Route>
          <Route path="/items">
            <Items />
          </Route>
          <Route path="/ddd">
            <ItemDetail />
          </Route>
          <Route path="/member/mycart">
            <ShoppingCart />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
