import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Swal from 'sweetalert2'

import {
  customerGetAsync,
  customerUseAsync,
  customerMailDataAsync,
} from '../../../actions/seller/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import $ from 'jquery'
import ProgressToMailBar from './ProgressToMailBar'

import TagSvg from '../../../image/customer/tickMenu.svg'
import CrossSvg from '../../../image/customer/cancel.svg'
import CouponTableList from './CouponTableList'
import './Style/CustomerMan.scss'

function CustomerManager(props) {
  //試用
  const [customerdata, setCustomerData] = useState([])

  //選取使用者的name資料成為一個陣列
  const [customername, setCustomerName] = useState([])

  //選取使用者的email資料成為一個陣列
  const [customermail, setCustomerMail] = useState([])

  const [childcoupon, setChildCoupon] = useState({})

  // console.log(childcoupon)
  useEffect(() => {
    props.customerGetAsync()
    props.customerUseAsync()
  }, [])

  //類別選單的點擊active事件
  const handleChange = event => {
    const selectType = event.target.value
    props.customerGetAsync(selectType)
  }

  //類別選單的點擊掛上active
  function typeInputActive(event) {
    //找到所有代表等級的li元素
    let customerMenuList = document.querySelectorAll('tr.tr-chin td')
    customerMenuList.forEach(value => {
      value.classList.remove('active-chin-user') //移除active
    })

    event.target.classList.add('active-chin-user') //為被點擊的目標新增active
  }

  function triggerDelete(index) {
    Swal.fire({
      // title: 'Error!',
      text: `確定刪除傳送的顧客嗎?`,
      icon: 'warning',
      confirmButtonText: '確定',
      showCancelButton: true,
      cancelButtonText: '取消',
    }).then(result => {
      if (result.value) {
        customerdata.splice(index, 1)
        setCustomerMail([...customerdata])
      }
    })
    // if (window.confirm('你確定要刪除這個顧客嗎?')) {
    // customerdata.splice(index, 1)
    // setCustomerMail([...customerdata])
    // }
  }
  const handleTransferData = e => {
    const mailData = {
      customerData: customerdata,
      couponData: childcoupon,
    }

    props.customerMailDataAsync(mailData, () =>
      Swal.fire({
        position: 'middle',
        icon: 'success',
        title: '新增成功呢！',
        showConfirmButton: false,
        timer: 1500,
      })
    )
  }
  console.log(customerdata)

  const tableData = props.customer.result ? (
    props.customer.result.map((element, index) => {
      const {
        comcus_id,
        memberId,
        seller_id,
        comcus_name,
        comcus_img,
        comcus_gmail,
        comcus_buy_perc,
        comcus_visit_perc,
      } = element
      return (
        <tr className="tr-chin" key={index}>
          <td
            data-type={comcus_gmail}
            onClick={event => {
              typeInputActive(event)
              setCustomerMail([...customermail, comcus_gmail])
              setCustomerName([...customername, comcus_name])
              setCustomerData([
                ...customerdata,
                {
                  memberId: memberId,
                  seller_id: seller_id,
                  cutomerName: comcus_name,
                  cutomerEmail: comcus_gmail,
                },
              ])
            }}
          ></td>
          <td>{comcus_name}</td>
          <td>
            <img
              width="50"
              height="50"
              src={'http://localhost:5000/images/customerImg/' + comcus_img}
              className="img-fluid"
              alt="Responsive image"
            />
          </td>
          <td>{comcus_gmail}</td>
          <td>{comcus_buy_perc}</td>
          <td>{comcus_visit_perc}</td>
        </tr>
      )
    })
  ) : (
    <tr>
      <td></td>
    </tr>
  )

  return (
    <div>
      <div className="container">
        <h3 className="text-center my-5">顧客管理</h3>
        <div className="row">
          <div className="col-sm-12">
            <select
              className="custom-select"
              onChange={event => handleChange(event)}
            >
              <option defaultValue>請選擇顧客族群:</option>
              <option value="buyPercentHight">購買率高的顧客</option>
              <option value="visitPercentHight">到訪率高的顧客</option>
              <option value="commonPercentHight">常客</option>
              <option value="other">其他顧客</option>
              <option value="xxx">全部顧客</option>
            </select>
            <table className="table table-borderless">
              <thead className="table-bgcolor-chin thead-dark">
                <tr>
                  <th scope="col">
                    <img width="30" height="30" src={TagSvg} />
                  </th>
                  <th scope="col">顧客名</th>
                  <th scope="col">照片</th>
                  <th scope="col">email</th>
                  <th scope="col">購買率</th>
                  <th scope="col">到訪點擊率</th>
                </tr>
              </thead>
              <tbody>{tableData}</tbody>
            </table>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <h1 className="display-4 mb-2">寄送名單:</h1>
            <div>
              {customerdata.map((element, index) => {
                return (
                  <div key={index} className="active-chin-td my-2 rounded">
                    <div
                      onClick={event => {
                        event.stopPropagation()
                        event.preventDefault()
                        triggerDelete(index)
                      }}
                    >
                      <img width="30" height="30" src={CrossSvg} />
                    </div>

                    <p className="pl-5">{element.cutomerName}:</p>
                    <p className="pl-5">{element.cutomerEmail}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="col-lg-4">
            {/* <ProgressToMailBar people={customermail}/> */}

            <div className="row">
              <div className="col-sm-12 text-center ">
                <button
                  onClick={e => {
                    e.preventDefault()
                    // handleTransferEmail()
                    handleTransferData()
                  }}
                  className="btn bg-btn-chin"
                >
                  寄送優惠券
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <h1 className="display-4 mb-2">優惠券選擇名單:</h1>
            <div>
              <span className="active-chin-td my-2 rounded">
                {childcoupon.coup_name}
              </span>
            </div>
          </div>
        </div>
      </div>
      <CouponTableList setChildCoupon={setChildCoupon} />
    </div>
  )
}
const mapStateToProps = store => {
  return {
    customer: store.sellerReducer.customer,
    customermailtransfer: store.sellerReducer.customermailtransfer,
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  // postToBack
  // storeEmail(email)
  return bindActionCreators(
    { customerGetAsync, customerUseAsync, customerMailDataAsync },
    dispatch
  )
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CustomerManager)
)
