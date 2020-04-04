import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { customerUseAsync } from '../../../../actions/seller/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './Style/CustomerMan.scss'

function CouponTableList(props) {
  const [couponObj, setCouponObj] = useState({})

  // props.setChildCoupon
  useEffect(() => {
    props.customerUseAsync()
  }, [props])

  useEffect(() => {
    props.setChildCoupon(couponObj)
  }, [couponObj, props])

  function typeInputActive(event) {
    //找到所有代表等級的li元素
    let customerMenuList = document.querySelectorAll('tr.tr-chin td')
    customerMenuList.forEach(value => {
      value.classList.remove('active-chin-td') //移除active
    })

    event.target.classList.add('active-chin-td') //為被點擊的目標新增active
    // console.log(coupMenuLiList)
    // console.log(coupMenuLiListspan)
  }

  const tableData1 = props.cutomeruse.table1
    ? props.cutomeruse.table1.map((element, index) => {
        const { coup_name, coup_code, datecoup_one, datecoup_two } = element
        return (
          <tr
            className="tr-chin"
            onClick={event => {
              typeInputActive(event)
              setCouponObj({
                ...couponObj,
                coup_name,
                coup_code,
                datecoup_one,
                datecoup_two,
              })

              // getCustomerData(event)
            }}
            key={index}
          >
            <td>
              <input
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
            </td>
            <td>{coup_name}</td>
            <td>{datecoup_one}</td>
            <td>{datecoup_two}</td>
          </tr>
        )
      })
    : ' '

  const tableData2 = props.cutomeruse.table1
    ? props.cutomeruse.table2.map((element, index) => {
        const { coup_name, coup_code, datecoup_three, datecoup_four } = element
        return (
          <tr
            className="tr-chin"
            onClick={event => {
              typeInputActive(event)
              setCouponObj({
                ...couponObj,
                coup_name,
                coup_code,
                datecoup_three,
                datecoup_four,
              })
              // getCustomerData(event)
            }}
            key={index}
          >
            <td>
              <input
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
            </td>
            <td>{coup_name}</td>
            <td>{datecoup_three}</td>
            <td>{datecoup_four}</td>
          </tr>
        )
      })
    : ' '
  const tableData3 = props.cutomeruse.table1
    ? props.cutomeruse.table3.map((element, index) => {
        const { coup_name, coup_code, datecoup_five, datecoup_six } = element
        return (
          <tr
            className="tr-chin"
            onClick={event => {
              typeInputActive(event)
              setCouponObj({
                ...couponObj,
                coup_name,
                coup_code,
                datecoup_five,
                datecoup_six,
              })
              // getCustomerData(event)
            }}
            key={index}
          >
            <td>
              <input
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
            </td>
            <td>{coup_name}</td>
            <td>{datecoup_five}</td>
            <td>{datecoup_six}</td>
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
                <th scope="col">#</th>
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
                <th scope="col">#</th>
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
                <th scope="col">#</th>
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
