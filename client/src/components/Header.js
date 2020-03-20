import React, { useState, useEffect } from 'react'
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

  return (<>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        {/* menu toggle */}
        <button class="navbar-toggler" type="button" onClick={() => { openMenu() }}>
          <span class="navbar-toggler-icon"></span>
        </button>
        {/* Logo */}
        <Link class="navbar-brand" to="/">
          <img style={{ verticalalign: "baseline" }} src="../images/logo/aquaLogo.png" alt="" />
        </Link>
        {/* cart icon */}
        <button id="num" class="navbar-toggler" type="button" >
          <img class="navbar-shopping-cart-icon" src="../images/logo/shopping_cart.png" />
        </button>
        {/* web menu */}
        <div class={rwdOpen ? "collapse navbar-collapse JY_navMenuShow" : "collapse navbar-collapse"} >
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/event">揪團潛水</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/blog">文章分享</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/location">自由潛點</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Class">課程平台</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/store">線上商店</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#">實用工具</Link>
            </li>
          </ul>
        </div>
        {/* member Login */}
        <div class="collapse navbar-collapse" id="navbarMember">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link to="/memberlogin">
                <button type="button" class="btn btn-outline-light btn-sm">Login</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>)
}

export default Header