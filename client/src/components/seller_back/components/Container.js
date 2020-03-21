import React from 'react'
import Avajpg from '../../image/20180615_201523.jpg'
import Logo from '../../image/AQUA.svg'
// import Menu from './SidebarBox/Menu'

import { Route, Switch } from 'react-router-dom'
import MenuUI from './SidebarBox/MenuUI'

//引入個別內容頁的component
import MainPage from './pages/MainPage'
import Info from './pages/Info'
import Coupon from './pages/Coupon'
import Message from './pages/Message'
import Order from './pages/Order'
import Class from './pages/Class'
import SellerEdit from './components/SellerEdit'
import CouponEdit from './components/CouponEdit'

import CouponAdd from './components/CouponAdd'
function Container() {
    return (
     <>
      <div className="container-fluid">
      <div className="row">
      <div className="col-xl-2 col-lg-3 col-md-4 sidebar">
            <span className="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border">
            <img alt="" height="50" width="200" src={Logo}/>
            </span>
            <div className="bottom-border pb-3 flex-column text-center">
            <div className="mb-3">
            <img alt="" src={Avajpg} height="64" width="64" className="rounded-circle mr-3"/> 

            </div>
              <span className="text-white mr-2 mt-3">Chin Dai</span>
            </div>
        {/* <Menu/>    */}
        <MenuUI/>
      </div>
      <div className="col-xl-10 col-lg-9 col-md-8">

      <Switch>
      <Route path="/coupon/couponedit">
        <CouponEdit/>
      </Route>
      <Route path="/info/selleredit">
        <SellerEdit/>
      </Route>
      <Route path="/coupon/coupon_add">
        <CouponAdd/>
        </Route>
      <Route path="/info">
          {/* <Info   loginStatus={login}
                trigger={() => {
                  setLogin(!login)
                }}/> */}
                <Info/>
      </Route>
      <Route path="/coupon">
          <Coupon />
        </Route>
     
      <Route path="/message">
          <Message />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/class">
          <Class />
        </Route>
        <Route path="/"> 
        
        <MainPage/>
        </Route>
     
      </Switch>
      </div>
      </div>
      </div>
       </>
      
    )
}

export default Container
