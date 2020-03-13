import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Class from './pages/class/class'

function App() {
  return (
    <Router>
    <>
        <Switch>
          <Route path="/Class">
            <Class />
          </Route>
        </Switch>
    </>
  </Router>
  )
}

export default App
