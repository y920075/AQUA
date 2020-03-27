import React, { useState, useEffect } from 'react'
import { Link , withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import swal from 'sweetalert2'
import '../../style/CW_items.scss'
// import { userRegisterAsync } from '../actions/index'
import { memberCheckOutAsync } from '../../actions/order/order_Actions'
import { getUserCouponDetaiAsync } from '../../actions/member/memberActions'

// import { getNowCoupDataAsync } from '../../actions/seller/index'

//引入元件
import Header from '../../components/Header'
import Banner from '../../components/Banner'
// import Breadcrumb from '../../components/item/Breadcrumb'
import CartItem from '../../components/order/CartItem'

function ShoppingCart(props) {
  const [mycart, setMycart] = useState([])
  const [mycartDisplay, setMycartDisplay] = useState([])
  const [hasLoading, setHasLoading] = useState(false)
  const localCart = JSON.parse(localStorage.getItem('cart'))

  const [coupCode, setCouponCode] = useState("")

  console.log(coupCode)
  console.log(mycartDisplay)
  // console.log(JSON.parse(localStorage.getItem('cart')).length)
  function checkOut() {
    if (localCart && localCart.length < 1) {
      alert({
        text: '購物車沒有商品',
        icon: 'warning',
        button: 'OK',
      })
    } else {
      // props.changeSteps(1)
      // props.memberCheckOutAsync(cartData)
    }
  }

  async function getCartFromLocalStorage() {
    setHasLoading(true)

    let newCart = []
    newCart = localStorage.getItem('cart')

    console.log(JSON.parse(newCart))

    setMycart(JSON.parse(newCart))
  }

  useEffect(() => {
    getCartFromLocalStorage()
    props.getUserCouponDetaiAsync()

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
    console.log('newMycartDisplay', newMycartDisplay)
    setMycartDisplay(newMycartDisplay)
  }, [mycart])

  const sum = (items, coupCode, userCouponData)=> {
    console.log(userCouponData)
    const userCupdata = userCouponData
    // if(coupCode.substr(0,2) == "PI" || coupCode.substr(0,2) == "PM"){
      let total = 0
      for (let i = 0; i < items.length; i++) {
        total += items[i].amount * items[i].price
      }
      return total

      console.log(coupCode)
    // }
   
  //優惠券函式
  //第一種類的優惠券:全單優惠
  //全單滿__件__打__折
  //全單滿__件__減__元
  //全單滿__元__減__元
  //全單滿__元__打__折
      //  if(coupCode.substr(0,2) == "II" || coupCode.substr(0,2) == "PI" || coupCode.substr(0,2) == "PM" ||  coupCode.substr(0,2) == "PI"){
          
      //   }else if(coupCode.substr(0,3) == "III" || coupCode.substr(0,3) == "PII" || coupCode.substr(0,3) == "PMI" ||  coupCode.substr(0,3) == "IMI"){
          
           
      //   }else{
           

           
      //   }


  }





  // handleDelete = product => {
  //   const cart = this.props.data.cart
  //   const index = cart.indexOf(product)
  //   cart.splice(index, 1)
  //   this.setState({ cart })
  //   document.body.style.overflow = 'auto'
  // }

  console.log(props)
  return (
    <>
      <Header />
      <Banner BannerImgSrc="/images/ClassBanner.jpg" />
      <div className="container CW">
        <div className="row CW-shoppingCart">
          <div className="col-12 cart-header">{/* <Breadcrumb /> */}</div>
          <div className="col-md-8 mb-3 table-wrapper">
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
              <div className="card-body">
                {<CartItem mycartDisplay={mycartDisplay} />}
              </div>
            </div>
          </div>
          <div className="col-md-4 check-wrapper">
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
                  <input
                    readOnly
                    value={coupCode}
                    type="text" name="" className="w-50" id="" />
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <h5>結帳總金額</h5>
                  <h5>NT$ {sum(mycartDisplay,coupCode,props.userCouponData)}</h5>
                </div>
                <br />
                <button
                  className="check-btn btn btn-lg w-100"
                  onClick={() => {
                    checkOut()
                  }}
                >
                  前往結帳
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
    userCouponData : store.memberReducer.userCouponData
    // getNowCoupData : store.sellerReducer.getNowCoupData
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  // return bindActionCreators({getUserCouponDetaiAsync,getNowCoupDataAsync}, dispatch)
  return bindActionCreators({getUserCouponDetaiAsync}, dispatch)
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
)

// export default connect()(ShoppingCart)
