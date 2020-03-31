import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Cookie from 'js-cookie'

//引入action
import { memberLogoutAsync } from '../actions/member/memberActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function Header(props) {
  //console.log(props)
  const { handleDelete } = props
  const [showCart, setShowCart] = useState(false)
  const [showMemberMenu, setShowMemberMenu] = useState(false)
  const [reload, setReload] = useState(false)
  const [count, setCount] = useState(0)
  const [mycart, setMycart] = useState([])
  const [mycartDisplay, setMycartDisplay] = useState([])
  const [hasLoading, setHasLoading] = useState(false)
  const [rwdOpen, setRwdOpen] = useState(false)

  const localCart = JSON.parse(localStorage.getItem('cart'))

  async function openMenu() {
    if (rwdOpen) {
      await setRwdOpen(false)
    } else {
      await setRwdOpen(true)
    }
  }
  // shopping cart toggle menu
  async function showMenu(event) {
    setShowCart(!showCart)
    event.stopPropagation()
  }
  // shopping cart toggle menu
  async function showMenu2(event) {
    setShowMemberMenu(!showMemberMenu)
    event.stopPropagation()
  }
  // close toggle by click window
  window.addEventListener('click', () => {
    setShowCart(false)
  })
  // defult localstorage cart
  async function getCartFromLocalStorage() {
    setHasLoading(true)
    setMycart(localCart)
  }
  // 渲染後上動畫
  useEffect(() => {
    AOS.init({
      // initialise with other settings
      duration: 300,
    })
  })
  //
  useEffect(() => {
    getCartFromLocalStorage()
  }, [])

  // useEffect(() => {
  //   getCartFromLocalStorage()
  //   setReload(false)
  // }, [reload])

  // useEffect(() => {
  //   setInterval(() => {
  //     setReload(true)
  //     console.log(reload)
  //   }, 1000)
  // }, [])

  useEffect(() => {
    setTimeout(() => {
      setHasLoading(false)
    }, 500)
    if (mycart) {
      let newMycartDisplay = [...mycartDisplay]
      for (let i = 0; i < mycart.length; i++) {
        const index = newMycartDisplay.findIndex(
          value => value.id === mycart[i].id
        )
        if (index !== -1) {
          //console.log('findindex', index)
          newMycartDisplay[index].amount++
        } else {
          const newItem = { amount: 1, ...mycart[i] }
          newMycartDisplay = [...newMycartDisplay, newItem]
        }
      }
      // console.log('newMycartDisplay', newMycartDisplay)
      setMycartDisplay(newMycartDisplay)
      setCount(newMycartDisplay.length)
    }
  }, [mycart])

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
          <div className="navbar-rside d-flex">
            {/* cart icon */}
            <div className="navbar-cart mr-4 align-self-end">
              <img
                className="navbar-shopping-cart-icon"
                src="../images/logo/cart_icon.png"
                alt=""
                // onMouseOver={hover}
                // onMouseOut={hover}
                onClick={showMenu}
                // onClick={() => {
                //   window.location = `/member/mycart`
                // }}
              />
              <div className="cart-dot">
                <p>{count}</p>
              </div>
              {showCart ? (
                <div class="card mt-5 cart-card" data-aos="zoom-in-down">
                  <div class="card-body">
                    {mycartDisplay.length != 0 ? (
                      mycartDisplay.map((value, index) => {
                        return (
                          <div className="d-flex cart-item" key={index}>
                            <figure>
                              <img
                                className=""
                                src={`http://127.0.0.1:5000/images/itemImg/${value.img}`}
                              />
                            </figure>
                            <div className="d-flex flex-column row-info">
                              <div className="">
                                <div className="text-nowrap">{value.name}</div>
                              </div>
                              <div className="d-flex justify-content-between">
                                <span>NT$ {value.price}</span>
                                <span
                                  className="del"
                                  onClick={() =>
                                    handleDelete({
                                      id: `${value.id}`,
                                    })
                                  }
                                >
                                  刪除
                                </span>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    ) : (
                      <h2>購物車是空的喔!</h2>
                    )}
                  </div>
                  <div className="card-footer">
                    <Link
                      className="d-flex justify-content-center"
                      to="/member/mycart"
                    >
                      查看我的購物車
                    </Link>
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>

            {/* member Login */}
            <div className="collapse navbar-collapse" id="navbarMember">
              {!Cookie.get('token') ? (
                <Link to="/memberlogin">
                  <button
                    type="button"
                    className="btn btn-outline-light btn-sm"
                  >
                    Login
                  </button>
                </Link>
              ) : (
                <div>
                  <figure className="avatar-wrapper">
                    <img
                      className="memberimg"
                      src={require('../image/memberImage/avatarDefult.jpg')}
                      onClick={showMenu2}
                    />
                    {showMemberMenu ? (
                      <div class="card mt-5" data-aos="zoom-in-down">
                        <div class="card-body">
                          <div class="border-bottom pb-3 d-flex flex-column justify-content-center">
                            <Link to="/memberuser">會員中心</Link>
                            <Link to="/memberuser/order">我的訂單</Link>
                            <Link to="/memberuser/class">我的課程</Link>
                            <Link to="/memberuser/event">我的揪團</Link>
                            <Link to="/memberuser/blog">我的文章</Link>
                            <Link to="/memberuser/coupon">我的優惠券</Link>
                          </div>

                          <button
                            type="button"
                            className="btn btn-sm mt-3"
                            onClick={() => {
                              props.memberLogoutAsync()
                            }}
                          >
                            登出
                            {/* <i class="fas fa-sign-out-alt" style={{fontSize:'20px'}}></i> */}
                          </button>
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                  </figure>
                </div>
              )}

              {/* <div className="avatar" onClick={showMenu}>
                <img />
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

// 取得Redux中store的值
const mapStateToProps = store => {
  return {}
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      memberLogoutAsync,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
