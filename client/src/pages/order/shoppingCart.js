import React, { useState, useEffect } from 'react'
import { link, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../../style/CW_items.scss'
// import { userRegisterAsync } from '../actions/index'

//引入元件
import Header from '../../components/Header'
import Banner from '../../components/Banner'
// import Breadcrumb from '../../components/item/Breadcrumb'
import CartItem from '../../components/order/CartItem'

function ShoppingCart(props) {
  const [mycart, setMycart] = useState([])
  const [mycartDisplay, setMycartDisplay] = useState([])
  const [hasLoading, setHasLoading] = useState(false)

  async function getCartFromLocalStorage() {
    setHasLoading(true)

    let newCart = []
    newCart = localStorage.getItem('cart')

    console.log(JSON.parse(newCart))

    setMycart(JSON.parse(newCart))
  }

  useEffect(() => {
    getCartFromLocalStorage()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setHasLoading(false)
    }, 500)

    let newMycartDisplay = [...mycartDisplay]
    for (let i = 0; i < mycart.length; i++) {
      const index = newMycartDisplay.findIndex(
        value => value.id === mycart[i].id
      )
      if (index !== -1) {
        console.log('findindex', index)
        newMycartDisplay[index].amount++
      } else {
        const newItem = { amout: 1, ...mycart[i] }
        newMycartDisplay = [...newMycartDisplay, newItem]
      }
    }
    console.log(newMycartDisplay)
    setMycartDisplay(newMycartDisplay)
  }, [mycart])

  const sum = items => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    return total
  }

  console.log(props)
  return (
    <>
      <Header />
      <Banner BannerImgSrc="/images/ClassBanner.jpg" />
      <div className="container CW">
        <div className="row CW-shoppingCart">
          <div className="col-12 cart-header">{/* <Breadcrumb /> */}</div>
          <div className="col-8 table-wrapper">
            <div className="card">
              <div className="card-header d-flex ">
                <div className="col-1">
                  <input type="checkbox" name="" id="" />
                </div>
                <div className="col d-flex align-items-center">
                  <i className="material-icons">storefront</i>
                  <span>{}</span>
                </div>
                <div className="col">
                  <h6>數量</h6>
                </div>
                <div className="col">
                  <h6>金額</h6>
                </div>
              </div>
              <div className="card-body cart-item">
                {<CartItem mycartDisplay={mycartDisplay} />}
              </div>
            </div>
          </div>
          <div className="col-4 check-wrapper">
            <div className="card">
              <div className="card-header bg-light">
                <h6>訂單摘要</h6>
              </div>
              <div className="check-main card-body">
                <div className="d-flex justify-content-between">
                  <span>商品總計</span>
                  <span>NT$ {sum(mycartDisplay)}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>折扣金額</span>
                  <span>-60</span>
                </div>
                <br />
                <div className="d-flex justify-content-between">
                  <span>輸入折扣碼</span>
                  <input type="text" name="" className="w-50" id="" />
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <h5>結帳總金額</h5>
                  <h5>NT$ {sum(mycartDisplay)}</h5>
                </div>
                <br />
                <Link className="check-btn btn btn-lg w-100" to="/checkout">
                  前往結帳
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default connect()(ShoppingCart)
