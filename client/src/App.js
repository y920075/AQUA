import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Class from './pages/class/class'
import ClassDetail from './pages/class/classDetail'

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
        </Switch>
      </>
    </Router>
  )
}

export default App
