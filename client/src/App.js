import React from 'react'
import Cookie from 'js-cookie'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import ProtectedRoute from './utils/ProtectedRoute'

import Divelocation from './pages/divelocation/Divelocation'
//賣家後台page
import SellerBack from '../src/components/seller_back/SellerBack'

//課程相關page
import ClassList from './pages/class/ClassList'
import ClassDetailPage from './pages/class/classDetailPage'

//活動相關page
import EventList from './pages/event/EventList'
import EventMapList from './pages/event/EventMapList'
import EventDetail from './pages/event/EventDetail'

//商品相關
import Items from './pages/item/itemList'
import ItemDetail from './pages/item/itemDetail'
import ShoppingCart from './pages/order/shoppingCart'
import CheckOut from './pages/order/checkOut'
import OrderCreated from './pages/order/orderCreated'

//文章相關
import Blog from './pages/blog/Blog'
import BlogContent from './pages/blog/BlogContent'
import BlogAdd from './pages/blog/BlogAdd'
import BlogEdit from './pages/blog/BlogEdit'

// Member
import MemberLogin from './pages/members/MemberLogin'
import MemberRegister from './pages/members/MemberRegister'
import MemberUser from './pages/members/MemberUser'
import Membersellerlogin from './pages/members/Membersellerlogin'

import Home from './pages/Home'

import Chat from './pages/chat/Chat'

function App(props) {
  // console.log(props)
  return (
    <Router>
      <>
        <Switch>
          <Route path="/chatchatchat">
            <Chat />
          </Route>
          <Route path="/blog/:id/edit">
            <BlogEdit />
          </Route>
          <Route path="/blog/:id">
            <BlogContent />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/blogadd">
            <BlogAdd />
          </Route>
          <Route path="/seller">
            <SellerBack />
          </Route>
          <Route path="/Class/:classId">
            <ClassDetailPage />
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
          <Route path="/member/created">
            <OrderCreated />
          </Route>

          {/* Member Routes */}
          <ProtectedRoute path="/memberuser">
            <MemberUser isAuth={!!Cookie.get('token')} />
          </ProtectedRoute>
          <Route path="/memberlogin">
            <MemberLogin />
          </Route>
          <Route path="/Membersellerlogin">
            <Membersellerlogin />
          </Route>
          <Route path="/memberregister">
            <MemberRegister />
          </Route>
          <Route path="/location/:LocationID">
            <Divelocation />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
