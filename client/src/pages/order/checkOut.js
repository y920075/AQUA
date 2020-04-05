import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import emailjs from 'emailjs-com'
import '../../style/CW_items.scss'
// import { userRegisterAsync } from '../actions/index'

import { getCityDataAsync, getDistDataAsync } from '../../actions/seller/index'
import { memberCheckOutStep2Async } from '../../actions/order/order_Actions'

//引入元件
import Header from '../../components/Header'
import Banner from '../../components/Banner'
// import Breadcrumb from '../../components/item/Breadcrumb'

function CheckOut(props) {
  console.log(props)
  const [addressCity, setAddressCity] = useState('') //儲存使用者選擇的縣市
  const [addressDist, setAddressDist] = useState('') //儲存使用者選擇的地區

  const [name, setName] = useState('')
  const [addcode, setAddcode] = useState('')
  const [area, setArea] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [note, setNote] = useState('')

  // setArea(addressCity + addressDist)
  useEffect(() => {
    props.getCityDataAsync()
    // props.getDistDataAsync()
  }, [])

  const orderInfo = {}
  orderInfo.id = props.orderData.orderId
  orderInfo.name = name
  orderInfo.addcode = addcode
  orderInfo.area = area
  orderInfo.address = address
  orderInfo.phone = phone
  orderInfo.note = note
  function post() {
    // console.log(orderInfo)
    sendmail()
    props.memberCheckOutStep2Async(orderInfo)
  }
  // let member_email, member_name
  const sendmail = () => {
    let templateParams = {
      // userMail: `${member_email}`,
      userEmail: `mfeeaqua@gmail.com`,
      // user:`${member_name}`,
      user: `Harry`,
      orderId: `${props.orderData.orderId}`,
      y: new Date().getFullYear,
      m: new Date().getMonth,
      d: new Date().getDate,
      h: new Date().getHours,
      mi: new Date().getMinutes,
      golink: "<a href='http://127.0.0.1:3000/member/myorder'>前往我的訂單</a>",
    }

    let service_id = 'wei-gmail'
    let template_id = 'order'
    let userID = 'user_roXuGDFzkucpFLYnGvBrE'
    emailjs
      .send(service_id, template_id, templateParams, userID)
      .then(response => {
        // console.log('SUCCESS!', response.status, response.text)
      })
      .catch(error => {
        // console.log('FAILED...', error)
      })
  }

  return (
    <>
      <Header />
      <Banner BannerImgSrc="/images/ShoppingBanner.jpg" />
      <div className="container CW">
        <div className="row CW-checkOut">
          <div className="col-12 cart-header">
            {/* <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">填寫寄件資訊</a>
              </li>
            </ol> */}
          </div>

          <div className="col-md-8 form-wrapper">
            <div className="card mb-3">
              <div className="card-header bg-light">
                <h6>收件人資訊</h6>
              </div>
              <div className="card-body d-flex">
                <div className="col-2 form-label d-flex flex-column">
                  <label htmlFor="name">姓名:</label>
                  <label htmlFor="area">地區:</label>
                  <label htmlFor="address">地址:</label>
                  <label htmlFor="phone">電話:</label>
                  <label htmlFor="note">備註:</label>
                </div>
                <div className="col-10">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    id="name"
                    onChange={event => {
                      const name = event.target.value
                      setName(name)
                    }}
                  />
                  <div className="form-row">
                    <div className="col">
                      <input
                        className="form-control"
                        type="text"
                        name="zip"
                        id="zip"
                        disabled
                        onChange={event => {
                          const addcode = event.target.value
                          setAddcode(addcode)
                        }}
                      />
                    </div>
                    <div className="col">
                      <select
                        name=""
                        className="form-control"
                        onChange={event => {
                          const city = event.target.value
                          props.getDistDataAsync(city) //取得相對應的地區資料
                          setAddressCity(city) //設定課程地點(縣市)到本地state
                          setAddressDist('')
                          // setClassFullLocation('')
                          // setClassLocation('')
                          // document.querySelector(
                          //   'input[name="classFullLocation"]'
                          // ).value = ''
                        }}
                      >
                        <option value="">請選擇縣市</option>
                        {props.cityData.length > 0
                          ? props.cityData.map((value, index) => {
                              return (
                                <option value={value.name} key={index}>
                                  {value.name}
                                </option>
                              )
                            })
                          : ''}
                      </select>
                    </div>
                    <div className="col">
                      <select
                        name=""
                        id=""
                        className="form-control"
                        onBlur={() => {
                          setArea(addressCity + addressDist)
                        }}
                        onChange={event => {
                          const dist = event.target.value
                          setAddressDist(dist)

                          // setClassFullLocation('')
                          // setClassLocation('')
                          // document.querySelector(
                          //   'input[name="classFullLocation"]'
                          // ).value = ''
                        }}
                      >
                        <option value="">請選擇地區</option>
                        {props.distData.length > 0
                          ? props.distData.map((value, index) => {
                              return (
                                <option value={value} key={index}>
                                  {value}
                                </option>
                              )
                            })
                          : ''}
                      </select>
                    </div>
                  </div>
                  <input
                    className="form-control"
                    type="text"
                    name="address"
                    id="address"
                    onChange={event => {
                      const address = event.target.value
                      setAddress(address)
                    }}
                  />
                  <input
                    className="form-control"
                    type="phone"
                    name="phone"
                    id="phone"
                    onChange={event => {
                      const phone = event.target.value
                      setPhone(phone)
                    }}
                  />
                  <textarea
                    className="form-control"
                    name="note"
                    id="note"
                    cols="30"
                    rows="5"
                    onChange={event => {
                      const note = event.target.value
                      setNote(note)
                    }}
                  ></textarea>
                </div>
              </div>
              <div className="card-footer">儲存收件資訊</div>
            </div>
          </div>
          <div className="col-md-4 check-wrapper">
            <div className="card">
              <div className="card-header bg-light">
                <h6>選擇付款方式</h6>
              </div>
              <div className="check-payBy card-body">
                <input type="radio" name="pay" id="cradit" />
                <label htmlFor="cradit">信用卡</label>
                <br />
                <input type="radio" name="pay" id="transfer" />
                <label htmlFor="transfer">帳戶轉帳</label>
              </div>
              <div className="card-header bg-light">
                <h6>選擇物流方式</h6>
              </div>
              <div className="check-shipBy card-body">
                <input type="radio" name="shipping" id="store" />
                <label htmlFor="store">便利商店取貨</label>
                <br />
                <input type="radio" name="shipping" id="home" />
                <label htmlFor="home">宅配</label>
              </div>
              <div className="card-footer">
                <button
                  className="check-btn btn btn-lg w-100"
                  onClick={
                    () => {
                      post()
                    }
                    // sendmail
                  }
                >
                  <Link to="/member/created">完成訂單</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
// 取得Redux中store的值
const mapStateToProps = store => {
  return {
    orderData: store.orderReducer.memberCheckOutResponse,
    cityData: store.sellerReducer.cityData,
    distData: store.sellerReducer.distData,
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getCityDataAsync,
      getDistDataAsync,
      memberCheckOutStep2Async,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut)
