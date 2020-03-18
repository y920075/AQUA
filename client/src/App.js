import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
//課程相關page
import Class from './pages/class/class'
import ClassDetail from './pages/class/classDetail'
//活動相關page
import EventList from './pages/event/event'

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/Class/:classId">
            <ClassDetail />
          </Route>
          <Route path="/Class">
            <Class />
          </Route>
          <Route path="/eventlist">
            <EventList />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
