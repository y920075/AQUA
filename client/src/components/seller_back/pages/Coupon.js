import React, { useState, useEffect } from 'react'
import './Style/Coupon.scss'
import { FormControl, Form } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

import $ from 'jquery'
import Loading from '../components/Loading'
import CouponDetail from './CouponDetail'
import './Style/AllSeller.scss'

//redux相關

import { getSellerCouponAsync } from '../../../actions/seller/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function Coupon(props) {
  console.log(props.coupon)

  const [showPanel, togglePanel] = useState(false)

  const [couponCoup, setCoupon] = useState([])
  const [hasloading, setHasLoading] = useState(false) //是否正在載入中

  useEffect(() => {
    props.getSellerCouponAsync()
  }, [])

  //將從資料庫取得的資料存放到本地的state
  useEffect(() => {
    setHasLoading(true)
    const nowCouponData = props.couponCoup ? props.couponCoup : ''

    //0.5秒後判斷是否有成功載入資料
    setTimeout(() => {
      // if (props.couponCoup.status) {
      setHasLoading(false)
      // }
    }, 500)

    setCoupon(nowCouponData) //將優惠券資料設定到本地state
  }, [couponCoup])
  //類別選單的點擊active事件
  function typeMenuActive(event) {
    //找到所有代表等級的li元素
    let coupMenuLiList = document.querySelectorAll('ul.couponMenu li')
    coupMenuLiList.forEach(value => {
      value.classList.remove('active-chin') //移除active
    })

    //找到所有代表類型的span元素
    let coupMenuLiListspan = document.querySelectorAll('ul.couponMenu li span')

    coupMenuLiListspan.forEach(value => {
      value.classList.remove('active-chin') //移除active
    })
    event.target.classList.add('active-chin') //為被點擊的目標新增active
    // console.log(coupMenuLiList)
    // console.log(coupMenuLiListspan)
  }

  //向伺服器取得優惠券資料
  function getCouponData(event) {
    const coup_cate_id = $('.couponMenu').find(
      'li.nav-item span.nav-link.active-chin'
    )
      ? $('.couponMenu')
          .find('li.nav-item span.nav-link.active-chin')
          .attr('data-type')
      : ''
    console.log(coup_cate_id)

    props.getSellerCouponAsync(coup_cate_id)
  }

  return (
    <div className="container main-style-chin">
      <div className="row mt-5 ml-5">
        <div className="col-sm-12 bgSet text-white rounded">
          <div>
            <div className="d-flex bgSet justify-content-between ">
              <h2>ToolBox</h2>
              <button onClick={() => togglePanel(!showPanel)}>
                <i className="fas fa-sort-down"></i>
              </button>
            </div>

            {showPanel ? (
              <div className="row text-center">
                <div className="col-sm-6 input-style-chin">
                  <Link className="text-white" to="coupon/coupon_add">
                    <span className="btn bg-btn-chin text-white">新增優惠</span>
                  </Link>
                </div>
                <div className="col-sm-6 input-style-chin">
                  <Link className="text-white" to="coupon/coupon_add_givi">
                    <span className="btn bg-btn-chin text-white">贈品設定</span>
                  </Link>
                </div>
              </div>
            ) : (
              <h2 hidden>non show</h2>
            )}
          </div>
        </div>
      </div>

      <div className="row mt-3 ml-5">
        <div className="col-sm-12 col-lg-12">
          <ul className="nav nav-tabs justify-content-around bgSet couponMenu">
            <li
              className="nav-item tabBar-chin"
              onClick={event => {
                typeMenuActive(event)
                getCouponData()
              }}
            >
              <span data-type="coup001" className="nav-link text-white">
                全單優惠
              </span>
            </li>
            <li
              className="nav-item tabBar-chin"
              onClick={event => {
                typeMenuActive(event)
                getCouponData()
              }}
            >
              <span data-type="coup002" className="nav-link  text-white">
                商品優惠
              </span>
            </li>
            <li
              className="nav-item tabBar-chin"
              onClick={event => {
                typeMenuActive(event)
                getCouponData()
              }}
            >
              <span data-type="coup003" className="nav-link  text-white">
                贈品優惠
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="row mt-5 ml-5">
        {hasloading ? <Loading /> : <CouponDetail status={props} />}
      </div>
      {/* <div className="row mt-5 ml-5">
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="" tabIndex="-1">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="">
                3
              </a>
            </li>

            <li className="page-item disabled">
              <a className="page-link" href="/">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div> */}
    </div>
  )
}

const mapStateToProps = store => {
  return { coupon: store.sellerReducer.coupon }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getSellerCouponAsync }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Coupon))
