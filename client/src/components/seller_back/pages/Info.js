import React, { useState, useEffect } from 'react'

//Router相關
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import Avajpg from '../../../image/20180615_201523.jpg'
import './Style/Info.scss'

//redux相關

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sellerInfoAsync } from '../../../actions/seller/index'

function Info(props) {
  //傳過來的props.seller_Inof是一個物件
  console.log(props)
  const [hasloading, setHasLoading] = useState(false) //是否正在載入中

  useEffect(() => {
    props.sellerInfoAsync()
  }, [])

  //把從後端傳回的資料進行處理,他是一個物件
  //使用Object.key進行拆解

  const sellerInfoData_left = props.sellerInfo ? (
    Object.keys(props.sellerInfo).map(key => {
      if (key === 'basic_info') {
        const basic_info = props.sellerInfo[key]
        return basic_info.map((value, index) => {
          console.log(JSON.parse(value.shop_img))
          return (
            <div className="col-lg-6 chin" key={index}>
              <div className="pb-3 flex-column text-center">
                <div className="mb-3">
                  <div>
                    <figure>
                      <img
                        alt=""
                        src={
                          'http://localhost:5000/images/sellerImg/' +
                          value.seller_img
                        }
                        height="150"
                        width="150"
                        className="rounded-circle mr-3"
                      />
                    </figure>
                  </div>
                  <div>
                    <i className="fas fa-user-circle mt-3 font-middle-chin"></i>
                  </div>
                </div>
                <span className="text-dark mr-2 mt-3 font-middle-chin">
                  {value.seller_name}
                </span>
              </div>
              <hr />

              <div className="d-flex mx-3 my-4 font-middle-chin text-center">
                <p className="mx-4 mt-3">
                  <i className="fas fa-user-alt mx-3"></i>賣家帳號:
                </p>
                <p className="card-text mt-3 mx-3">{value.seller_account}</p>
              </div>
              <div className="d-flex mx-3 my-4 font-middle-chin">
                <p className="mx-4">
                  <i className="fas fa-unlock-alt mx-3"></i>賣家密碼:
                </p>
                <p className="card-text mx-3">{value.seller_password}</p>
              </div>
              <div className="d-flex mb-3 mx-3 my-4 font-middle-chin">
                <p className="mx-4">
                  <i className="fas fa-toggle-on mx-3"></i>帳號狀態:
                </p>
                <p className="card-text mx-3">{value.seller_status}</p>
              </div>
            </div>
          )
        })
      }
    })
  ) : (
    <h2>沒有相關資料</h2>
  )
  const sellerInfoData_right = props.sellerInfo ? (
    Object.keys(props.sellerInfo).map(key => {
      if (key === 'basic_info') {
        const basic_info = props.sellerInfo[key]
        return basic_info.map((value, index) => {
          return (
            <div className="col-lg-6" key={index}>
              <div className="d-flex mb-3 mx-3 my-4 font-middle-chin">
                <p className="mx-4">
                  {' '}
                  <i className="fas fa-store mx-3"></i>賣場名:
                </p>
                <p className="card-text mx-3">{value.seller_shop}</p>
              </div>
              <div className="mb-3 mx-3 my-4 font-middle-chin">
                <p className="mx-4 my-4">
                  {' '}
                  <i className="fas fa-store mx-3"></i>賣場描述:
                </p>
                <p className="card-text mx-4">{value.seller_decrip}</p>
              </div>
              <div className="mb-3 mx-3 my-4 font-middle-chin">
                <p className="mx-4 my-4">
                  {' '}
                  <i className="fas fa-store mx-3"></i>賣場圖片:
                </p>
                {(JSON.parse(value.shop_img) || []).map((url, index) => {
                  return (
                    <img
                      key={index}
                      width="100"
                      height="100"
                      src={
                        url.originalname
                          ? 'http://localhost:5000/images/shopimg/' +
                            url.originalname
                          : 'https://images.unsplash.com/photo-1474203383385-8a34c1a55ebc?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                      }
                      alt="..."
                    />
                  )
                })}
              </div>
            </div>
          )
        })
      }
    })
  ) : (
    <h2>沒有相關資料</h2>
  )

  return (
    <div className="container-fluid chin">
      <div className="py-4 d-flex justify-content-between">
        <h2 className="mb-3">基本資料:</h2>

        <NavLink exact className="nav-link" to="/info/selleredit">
          <button className="btn bg-aqua-chin text-white">編輯</button>
        </NavLink>
      </div>
      <hr />

      <div className="row mt-3">
        {sellerInfoData_left}
        {sellerInfoData_right}
      </div>
    </div>
  )
}
// 取得Redux歸納函式中的值
const mapStateToProps = store => {
  return { sellerInfo: store.sellerReducer.sellerInfo }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ sellerInfoAsync }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Info))
