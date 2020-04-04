import React, { useState, useEffect } from 'react'

import { withRouter } from 'react-router-dom'
import { FormControl, Form } from 'react-bootstrap'

import './Styles/CouponAdd.scss'
import Loading from './Loading'

import $ from 'jquery'

import CupOrder from './CupOrder'
import CupItem from './CupItem'
import CupGivi from './CupGivi'
//redux相關
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//顯示資料的動作函數

import { getSellerNewInsertCouponAsync } from '../../../actions/seller/index'

function CouponAdd(props) {
  const [insertCoup, setInsertCoupon] = useState([])
  const [hasloading, setHasLoading] = useState(false) //是否正在載入中

  const [orderCup, setOrderCup] = useState('')

  useEffect(() => {
    props.getSellerNewInsertCouponAsync()
  }, [])

  console.log(props)
  function typeMenuActive(event) {
    //找到所有代表等級的li元素
    let coupMenuLiList = document.querySelectorAll('ul.couponMenu li')
    coupMenuLiList.forEach(value => {
      value.classList.remove('active') //移除active
    })

    //找到所有代表類型的span元素
    let coupMenuLiListspan = document.querySelectorAll('ul.couponMenu li span')

    coupMenuLiListspan.forEach(value => {
      value.classList.remove('active') //移除active
    })
    event.target.classList.add('active') //為被點擊的目標新增active
    // console.log(coupMenuLiList)
    // console.log(coupMenuLiListspan)
  }

  function getCouponFormData(event) {
    const coup_cate_id = $('.couponMenu').find(
      'li.nav-item span.nav-link.active'
    )
      ? $('.couponMenu')
          .find('li.nav-item span.nav-link.active')
          .attr('data-type')
      : ''
    return coup_cate_id
  }

  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="row mt-3 ml-5">
        <div className="col-sm-12">
          <ul className="nav nav-tabs justify-content-around tab-main-add-chin border-main-chin couponMenu">
            <li
              className="nav-item "
              onClick={event => {
                typeMenuActive(event)
                setOrderCup(getCouponFormData())
              }}
            >
              <span data-type="coup001" className="nav-link text-white">
                全單優惠
              </span>
            </li>
            <li
              className="nav-item "
              onClick={event => {
                typeMenuActive(event)
                setOrderCup(getCouponFormData())
              }}
            >
              <span data-type="coup002" className="nav-link text-white">
                設定商品優惠
              </span>
            </li>
            <li
              className="nav-item "
              onClick={event => {
                typeMenuActive(event)
                setOrderCup(getCouponFormData())
              }}
            >
              <span data-type="coup003" className="nav-link text-white">
                設定贈品優惠
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="row mt-3 ml-5 tab-main-add-content-chin input-style-chin text-center">
        {(() => {
          switch (orderCup) {
            case 'coup001':
              return <CupOrder order={props} />
            case 'coup002':
              return <CupItem item={props} />
            default:
              return <CupGivi givi={props} />
          }
        })()}
      </div>
    </div>
  )
}
const mapStateToProps = store => {
  return { coupon: store.sellerReducer.coupon }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getSellerNewInsertCouponAsync }, dispatch)
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CouponAdd)
)
