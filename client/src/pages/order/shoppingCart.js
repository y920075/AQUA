import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../../style/CW_items.scss'
// import { userRegisterAsync } from '../actions/index'

//引入元件
import Header from '../../components/Header'
import Banner from '../../components/Banner'
// import Breadcrumb from '../../components/item/Breadcrumb'

function ShoppingCart(props) {
  const [mycart , setMycart] =useState([])
  const [hasLoading, setHasLoading] = useState(false)

  async function getCartFromSession() {
    setHasLoading(true)

    let newCart = []
    newCart = localStorage.getItem('cart')

    console.log(JSON.parse(newCart))

    setMycart(JSON.parse(newCart))
  }

  useEffect(()=>{
    getCartFromSession()
  }, [])

  useEffect(()=>{
    setTimeout(()=>{
      setHasLoading(false)
    }, 500)

    for (let i = 0; i < mycart.length; i++) {

      
    }
  }, [mycart])

  console.log(props)
  return (
    <>
      <Header />
      <Banner BannerImgSrc="./images/ClassBanner.jpg" />
      <div class="container CW">
        <div class="row CW-shoppingCart">
          <div class="col-12 cart-header">{/* <Breadcrumb /> */}</div>
          <div class="col-8 table-wrapper">
            <div class="card">
              <div class="card-header d-flex ">
                <div class="col-1">
                  <input type="checkbox" name="" id="" />
                </div>
                <div class="col d-flex align-items-center">
                  <i class="material-icons">storefront</i>
                  <span>{}</span>
                </div>
                <div class="col">
                  <h6>數量</h6>
                </div>
                <div class="col">
                  <h6>金額</h6>
                </div>
              </div>
              <div class="card-body d-flex cart-item">
                {/* {<CartItem />} */}
              </div>
            </div>
          </div>
          <div class="col-4 check-wrapper">
            <div class="card">
              <div class="card-header bg-light">
                <h6>訂單摘要</h6>
              </div>
              <div class="check-main card-body">
                <div class="d-flex justify-content-between">
                  <span>商品總計</span>
                  <span>NT$300</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span>折扣金額</span>
                  <span>-60</span>
                </div>
                <br />>
                <div class="d-flex justify-content-between">
                  <span>輸入折扣碼</span>
                  <input type="text" name="" class="w-50" id="" />
                </div>
              </div>
              <div class="card-footer">
                <div class="d-flex justify-content-between">
                  <h5>結帳總金額</h5>
                  <h5>NT$100000</h5>
                </div>
                <br />
                <button class="check-btn btn btn-lg w-100">前往結帳</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default connect()(ShoppingCart)
