import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Class from './pages/class/class'
import Divelocation from './pages/divelocation/Divelocation'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <>
        <Header/>
        <Switch>
          <Route path="/Class">
            <Class />
          </Route>
          <Route path="/location/:LocationID">
            <Divelocation />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
