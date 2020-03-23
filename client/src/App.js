import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

//賣家後台page
import SellerBack from '../src/components/seller_back/SellerBack'
//課程相關page
import ClassList from './pages/class/ClassList'
import ClassDetail from './pages/class/ClassDetail'
import MemberClass from './pages/class/MemberClass'
//活動相關page
import EventList from './pages/event/EventList'
import EventMapList from './pages/event/EventMapList'
import EventDetail from './pages/event/EventDetail'
import MemberEvent from './pages/event/MemberEvent'

import Items from './pages/item/itemList'
import ItemDetail from './pages/item/itemDetail'
import ShoppingCart from './pages/order/shoppingCart'
import CheckOut from './pages/order/checkOut'

function App(props) {
  console.log(props)
  return (
    <Router>
      <>
        <Switch>
          <Route path="/seller">
            <SellerBack />
          </Route>
          <Route path="/Class/:classId">
            <ClassDetail />
          </Route>
          <Route path="/Class">
            <ClassList />
          </Route>
          <Route path="/event/:eventId">
            <EventDetail />
          </Route>
          <Route path="/eventlist">
            <EventList />
          </Route>
          <Route path="/eventmaplist">
            <EventMapList />
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
          <Route path="/memberclass">
            <MemberClass />
          </Route>
          <Route path="/memberevent">
            <MemberEvent />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
