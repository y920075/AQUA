import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
// import { userLoginAsync } from '../../actions/member/memberActions'
import '../../style/HS.scss'

// functional component
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Sidebar from '../../components/member/Sidebar'
import UserContent from '../mContent/UserContent'
import UserClass from '../../pages/class/MemberClass'
import UserEvent from '../../pages/event/MemberEvent'
import UserOrder from '../mContent/UserOrder'
import UserBlog from '../mContent/UserBlog'
import UserMessage from '../mContent/UserMessage'
import MemberCoupon from '../mContent/MemberCoupon'
import image from '../../image/memberImage/coralreef.jpg'

function MemberUser() {
  return (
    <>
      <Header />
      <Banner BannerImgSrc={image} />
      {/* <!-- Page Content --> */}
      <div className="container hsuser">
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <Switch>
              <Route path="/memberuser/user">
                <UserContent />
              </Route>
              <Route path="/memberuser/order">
                <UserOrder />
              </Route>
              <Route path="/memberuser/class">
                <UserClass />
              </Route>
              <Route path="/memberuser/event">
                <UserEvent />
              </Route>
              <Route path="/memberuser/blog">
                <UserBlog />
              </Route>
              <Route path="/memberuser/message">
                <UserMessage />
              </Route>
              <Route path="/memberuser/coupon">
                <MemberCoupon />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default withRouter(MemberUser)
