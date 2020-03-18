import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './style/base.scss'
import Class from './pages/class/class'
import Items from './pages/item/itemList'

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/Class">
            <Class />
          </Route>
          <Route path="/items">
            <Items />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
