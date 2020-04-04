import React, { useState, useRef, useEffect } from 'react'
// import Menu from './SidebarBox/Menu'
// import Sidebar from './Sidebar'
// import Topbar from './Topbar'
// import './Navbar.css'
// import '../../style/variable.scss'
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
  .navbar {
    background-color: #4e5f76;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: white;
    &:hover {
      color: white;
    }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: white;
    &:hover {
      color: white;
    }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`

export const Navgation = () => (
  <Styles>
    <Navbar className="sticky-top" expand="lg">
      <Navbar.Brand href="/">賣家中心</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

// function Navgation(){

//   return(
//     <>
//   <nav className="navbar navbar-expand-md navbar-light">
//   <button className="navbar-toggler ml-auto mb-2 bg-light" type="button" data-toggle="collapse" data-target="#myNavbar">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse">
//         <div className="container-fluid">
//           <div className="row">
//           <Sidebar/>
//            <Topbar/>
//             </div>
//             </div>
//           </div>
//     </nav>
//     </>
//   )
// }

export default Navgation
