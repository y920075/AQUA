import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../../style/CW_items.scss'
// import { userRegisterAsync } from '../actions/index'

//引入元件
import Header from '../../components/Header'
import Banner from '../../components/Banner'
// import Breadcrumb from '../../components/item/Breadcrumb'

function CheckOut(props) {
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
                <button className="check-btn btn btn-lg w-100">完成訂單</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default connect()(CheckOut)
