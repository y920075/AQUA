import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import emailjs from 'emailjs-com'
import '../../style/CW_items.scss'
// import { userRegisterAsync } from '../actions/index'

//引入元件
import Header from '../../components/Header'
import Banner from '../../components/Banner'
// import Breadcrumb from '../../components/item/Breadcrumb'

function CheckOut(props) {
  // let member_email, member_name
  console.log(props)
  const sendmail = () => {
    let templateParams = {
      // userMail: `${member_email}`,
      userEmail: `chuangwgfd@gmail.com`,
      // user:`${member_name}`,
      user: `振維`,
      orderId: ``,
      img:
        "<img src='http://127.0.0.1:5000/images/locationImg/L0001-1.png'></img>",
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
      <Banner BannerImgSrc="/images/ClassBanner.jpg" />
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
                  />
                  <input
                    className="form-control"
                    type="text"
                    name="area"
                    id="area"
                  />
                  <input
                    className="form-control"
                    type="text"
                    name="address"
                    id="address"
                  />
                  <input
                    className="form-control"
                    type="phone"
                    name="phone"
                    id="phone"
                  />
                  <textarea
                    className="form-control"
                    name="note"
                    id="note"
                    cols="30"
                    rows="5"
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
                    () => {}
                    // sendmail
                  }
                >
                  完成訂單
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = store => {
  return {
    orderData: store.orderReducer.memberCheckOutResponse,
  }
}

// 指示dispatch要綁定哪些action creators

export default connect(mapStateToProps)(CheckOut)
