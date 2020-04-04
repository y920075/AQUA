import React from 'react'
import Navgation from './Navgation'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './Navbar.scss'
import '../../style/variable.scss'
import Container from './Container'
import Footer from './Footer'
function SellerBack(props) {
  console.log(props)
  return (
    <React.Fragment>
      <Router>
        <Navgation />
        <Container />
        <Footer />
      </Router>
    </React.Fragment>
  )
}

export default SellerBack
