import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Class from './pages/class/class'
import SellerBack from '../src/components/seller_back/SellerBack'


function App() {
  return (
    <Router>
      <>
      <SellerBack/>
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
