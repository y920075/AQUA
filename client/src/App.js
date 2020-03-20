import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Class from './pages/class/class'
// import Sidebar from './components/member/Sidebar'

// Member
import MemberLogin from './pages/members/MemberLogin'
import MemberRegister from './pages/members/MemberRegister'
import MemberUser from './pages/members/MemberUser'
import MemberOrder from './pages/members/MemberOrder'
import MemberClass from './pages/members/MemberClass'
import MemberEvent from './pages/members/MemberEvent'
import MemberHomepage from './pages/members/MemberHomepage'
import MemberSellerLogin from './pages/members/ＭemberSellerLogin'
import MemberBlog from './pages/members/MemberBlog'
import MemberMessage from './pages/members/MemberMessage'




function App() {
  return (
    < Router >
      <>
        <Switch>
          <Route path="/class">
            <Class />
          </Route>

          {/* Member Routes */}
          <Route path="/memberhomepage">
            <MemberHomepage />
          </Route>
          <Route path="/memberuser">
            <MemberUser />
          </Route>
          <Route path="/memberlogin">
            <MemberLogin />
          </Route>
          <Route path="/membersellerlogin">
            <MemberSellerLogin />
          </Route>
          <Route path="/memberregister">
            <MemberRegister />
          </Route>
          <Route path="/memberorder">
            <MemberOrder />
          </Route>
          <Route path="/memberclass">
            <MemberClass />
          </Route>
          <Route path="/memberevent">
            <MemberEvent />
          </Route>
          <Route path="/memberblog">
            <MemberBlog />
          </Route>
          <Route path="/membermessage">
            <MemberMessage />
          </Route>
        </Switch>
      </>
    </Router >
  )
}

export default App
