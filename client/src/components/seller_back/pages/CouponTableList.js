import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { customerUseAsync } from '../../../actions/seller'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TagSvg from '../../../image/customer/tickMenu.svg'

import './Style/CustomerMan.scss'

function CouponTableList(props) {
  console.log(props.cutomeruse.table1)
  const [couponObj, setCouponObj] = useState({})

  // props.setChildCoupon
  useEffect(() => {
    props.customerUseAsync()
  }, [])

  useEffect(() => {
    props.setChildCoupon(couponObj)
  }, [couponObj])

  function typeInputActive(event) {
    //找到所有代表等級的li元素
    let customerMenuList = document.querySelectorAll('tr.tr-chin td')
    customerMenuList.forEach(value => {
      value.classList.remove('active-chin-coupon') //移除active
    })

    event.target.classList.add('active-chin-coupon') //為被點擊的目標新增active
    // console.log(coupMenuLiList)
    // console.log(coupMenuLiListspan)
  }

  const tableData1 = props.cutomeruse.table1
    ? props.cutomeruse.table1.map((element, index) => {
        const {
          coup_img,
          coup_over,
          coup_PriOrPer,
          coup_name,
          coup_code,
          datecoup_time_start,
          datecoup_time_end,
        } = element
        return (
          <tr
            className="tr-chin"
            onClick={event => {
              typeInputActive(event)
              setCouponObj({
                ...couponObj,
                coup_img,
                coup_over,
                coup_PriOrPer,
                coup_name,
                coup_code,
                datecoup_time_start,
                datecoup_time_end,
              })
            }}
            key={index}
          >
            <td></td>
            <td>{coup_name}</td>
            <td>{datecoup_time_start}</td>
            <td>{datecoup_time_end}</td>
          </tr>
        )
      })
    : ' '

  const tableData2 = props.cutomeruse.table1
    ? props.cutomeruse.table2.map((element, index) => {
        const {
          coup_over,
          coup_PriOrPer,
          coup_img,
          coup_name,
          coup_code,
          datecoup_time_start,
          datecoup_time_end,
        } = element
        return (
          <tr
            className="tr-chin"
            onClick={event => {
              typeInputActive(event)
              setCouponObj({
                ...couponObj,
                coup_over,
                coup_PriOrPer,
                coup_img,
                coup_name,
                coup_code,
                datecoup_time_start,
                datecoup_time_end,
              })
              // getCustomerData(event)
            }}
            key={index}
          >
            <td></td>
            <td>{coup_name}</td>
            <td>{datecoup_time_start}</td>
            <td>{datecoup_time_end}</td>
          </tr>
        )
      })
    : ' '
  const tableData3 = props.cutomeruse.table1
    ? props.cutomeruse.table3.map((element, index) => {
        const {
          coup_img,
          coup_name,
          coup_code,
          datecoup_time_start,
          datecoup_time_end,
        } = element
        return (
          <tr
            className="tr-chin"
            onClick={event => {
              typeInputActive(event)
              setCouponObj({
                ...couponObj,
                coup_img,
                coup_name,
                coup_code,
                datecoup_time_start,
                datecoup_time_end,
              })
              // getCustomerData(event)
            }}
            key={index}
          >
            <td></td>
            <td>{coup_name}</td>
            <td>{datecoup_time_start}</td>
            <td>{datecoup_time_end}</td>
          </tr>
        )
      })
    : ' '

  return (
    <div class="container">
      <h3 className="text-center my-5">優惠總表</h3>
      <div className="row">
        <div className="col-sm-4">
          <table className="table table-borderless">
            <thead className="table-bgcolor-chin thead-dark">
              <tr>
                <th scope="col">
                  <img width="30" height="30" src={TagSvg} />
                </th>
                <th scope="col">優惠名</th>
                <th scope="col">優惠開始</th>
                <th scope="col">優惠結束</th>
              </tr>
            </thead>
            <tbody>{tableData1}</tbody>
          </table>
        </div>
        <div className="col-sm-4">
          <table className="table table-borderless">
            <thead className="table-bgcolor-chin thead-dark">
              <tr>
                <th scope="col">
                  <img width="30" height="30" src={TagSvg} />
                </th>
                <th scope="col">優惠名</th>
                <th scope="col">優惠開始</th>
                <th scope="col">優惠結束</th>
              </tr>
            </thead>
            <tbody>{tableData2}</tbody>
          </table>
        </div>
        <div className="col-sm-4">
          <table className="table table-borderless">
            <thead className="table-bgcolor-chin thead-dark">
              <tr>
                <th scope="col">
                  <img width="30" height="30" src={TagSvg} />
                </th>
                <th scope="col">優惠名</th>
                <th scope="col">優惠開始</th>
                <th scope="col">優惠結束</th>
              </tr>
            </thead>
            <tbody>{tableData3}</tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = store => {
  return { cutomeruse: store.sellerReducer.cutomeruse }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ customerUseAsync }, dispatch)
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CouponTableList)
)
