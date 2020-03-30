import React from 'react'
import Navgation from './components/Navgation'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { Home } from '../AQUA_ChinDai/Home';
// import { Logout } from '../AQUA_ChinDai/Logout';
// import { NoMatch } from '../AQUA_ChinDai/NoMatch';
import './components/Navbar.scss'
import '../../style/variable.scss'
import Container from './components/Container'
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
