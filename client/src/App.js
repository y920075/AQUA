import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

//賣家後台page
import SellerBack from '../src/components/seller_back/SellerBack'
//課程相關page
import ClassList from './pages/class/ClassList'
import ClassDetail from './pages/class/ClassDetail'
//活動相關page
import EventList from './pages/event/EventList'
import EventMapList from './pages/event/EventMapList'
import EventDetail from './pages/event/EventDetail'

function App() {
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
        </Switch>
      </>
    </Router>
  )
}

export default App
