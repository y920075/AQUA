import React from 'react'
import { Link } from 'react-router-dom'
import '../../style/HS.scss'
import { bindActionCreators } from 'redux'

//引入action
import { memberLogoutAsync } from '../../actions/member/memberActions'
import { connect } from 'react-redux'

function Sidebar(props) {
  console.log(props)
  return (
    <>
      <div>
        <img
          className="rounded-circle avatar mb-5"
          src={'http://127.0.0.1:5000/images/memberImg/' + props.SidebarImgSrc}
          alt=""
        ></img>
      </div>

      <ul className="nav flex-column hssidebar" style={{ width: '150px' }}>
        <li className="nav-item">
          <Link className="nav-link sidebarlink-hs" to="/memberuser/homepage">
            <i className="fas fa-home"></i>首頁
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link sidebarlink-hs"
            to="/memberuser/user/:memberId"
          >
            <i className="far fa-user"></i>個人資料
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link sidebarlink-hs" to="/memberuser/order">
            <i className="fas fa-receipt"></i>我的訂單
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link sidebarlink-hs" to="/memberuser/class">
            <i className="far fa-calendar-alt"></i>我的課程
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link sidebarlink-hs" to="/memberuser/event">
            <i className="fas fa-swimmer"></i>我的活動
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link sidebarlink-hs" to="/memberuser/blog">
            <i className="far fa-edit"></i>我的PO文
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link sidebarlink-hs" to="/memberuser/message">
            <i className="far fa-envelope"></i>訊息管理
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link sidebarlink-hs" to="/memberuser/coupon">
            <i class="fas fa-ticket-alt"></i>優惠券
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link sidebarlink-hs" to="/help">
            <i className="far fa-question-circle"></i>幫助
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link sidebarlink-hs"
            to="/"
            onClick={event => {
              event.preventDefault()
              props.memberLogoutAsync()
            }}
          >
            <i className="fas fa-sign-out-alt"></i>登出
          </Link>
        </li>
      </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
