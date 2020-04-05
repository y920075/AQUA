import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MenuUI from './MenuUI'

//引入個別內容頁的component
import SellerEdit from '../components/components/SellerEdit'
import Info from '../pages/Info'
import Coupon from '../pages/Coupon'
import Message from '../pages/Message'
import Order from '../pages/Order'
import Class from '../pages/Class'
import Item from '../pages/Item'

function Menu() {
  //login=true表示會員有登入
  //  const [login, setLogin] = useState(true)
  return (
    <Router>
      <>
        <MenuUI />
        <Switch>
          <Route path="/info">
            {/* <Info   loginStatus={login}
                trigger={() => {
                  setLogin(!login)
                }}/> */}
            <Info />
          </Route>
          <Route path="/info/selleredit">
            <SellerEdit />
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
          <Route path="/item">
            <Item />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default Menu
