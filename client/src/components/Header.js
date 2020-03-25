import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [rwdOpen, setRwdOpen] = useState(false)
  async function openMenu() {
    if (rwdOpen) {
      await setRwdOpen(false)
    } else {
      await setRwdOpen(true)
    }
  }

  return (
    <>
      <nav className="Header-Navbar navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          {/* menu toggle */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => {
              openMenu()
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img
              style={{ verticalalign: 'baseline' }}
              src="../images/logo/aquaLogo.png"
              alt=""
            />
          </Link>
          {/* cart icon */}
          <button id="num" className="navbar-toggler" type="button">
            <img
              className="navbar-shopping-cart-icon"
              src="../images/logo/shopping_cart.png"
              alt=""
              onClick={() => {
                window.location = `/member/mycart`
              }}
            />
          </button>
          {/* web menu */}
          <div
            className={
              rwdOpen
                ? 'collapse navbar-collapse JY_navMenuShow'
                : 'collapse navbar-collapse'
            }
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/eventlist">
                  揪團潛水
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  文章分享
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/location/L0002">
                  自由潛點
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Class">
                  課程平台
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/items">
                  線上商店
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  實用工具
                </Link>
              </li>
            </ul>
          </div>
          {/* member Login */}
          <div className="collapse navbar-collapse" id="navbarMember">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/memberlogin">
                <button type="button" className="btn btn-outline-light btn-sm">
                  Login
                </button>
                </Link>
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
