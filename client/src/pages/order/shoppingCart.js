import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import swal from 'sweetalert2'
import '../../style/CW_items.scss'
// import { userRegisterAsync } from '../actions/index'

import { memberCheckOutAsync } from '../../actions/order/order_Actions'

//得到買家的優惠券資料動作
import { getUserCouponDetaiAsync } from '../../actions/member/memberActions'

//引入rodal
import Rodal from 'rodal'
import '../../../node_modules/rodal/lib/rodal.css'

// import { getNowCoupDataAsync } from '../../actions/seller/index'

//引入元件
import Header from '../../components/Header'
import Banner from '../../components/Banner'
// import Breadcrumb from '../../components/item/Breadcrumb'
import CartItem from '../../components/order/CartItem'
import Loading from '../../components/seller_back/components/components/Loading'

function ShoppingCart(props) {
  const [mycart, setMycart] = useState([])
  const [mycartDisplay, setMycartDisplay] = useState([])
  const [hasLoading, setHasLoading] = useState(false)
  const localCart = JSON.parse(localStorage.getItem('cart'))

  const [coupCode, setCouponCode] = useState('')

  const [rodalState, setRodal] = useState({
    visible: false,
  })

  const [couponChoose, setCouponChoose] = useState({})

  console.log(couponChoose)

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

  function typeInputActive(event) {
    //找到所有代表等級的li元素
    let customerMenuList = document.querySelectorAll('tr.tr-chin td')
    customerMenuList.forEach(value => {
      value.classList.remove('active-chin-check') //移除active
    })

    event.target.classList.add('active-chin-check') //為被點擊的目標新增active
  }

  useEffect(() => {
    getCartFromLocalStorage()
    props.getUserCouponDetaiAsync()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setHasLoading(false)
    }, 500)
    if (mycart) {
      let newMycartDisplay = [...mycartDisplay]
      for (let i = 0; i < mycart.length; i++) {
        const index = newMycartDisplay.findIndex(
          value => value.id === mycart[i].id
        )
        if (index !== -1) {
          console.log('findindex', index)
          newMycartDisplay[index].amount++
        } else {
          const newItem = { amount: 1, ...mycart[i] }
          newMycartDisplay = [...newMycartDisplay, newItem]
        }
      }
      console.log('newMycartDisplay', newMycartDisplay)
      setMycartDisplay(newMycartDisplay)
    }
  }, [mycart])

  //優惠券彈跳視窗函式
  //開啟
  const show = event => {
    setRodal({ visible: true })
  }
  // //關閉
  const hide = event => {
    setRodal({ visible: false })
  }

  const sum = (items, coupCode) => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    return total

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
  const coupTableData = props.userCouponData ? (
    Object.keys(props['userCouponData']).map(key => {
      if (key === 'CouponResultData') {
        const coupon_info = props['userCouponData'][key]
        return coupon_info.map((value, index) => {
          const {
            order_coup_name,
            goods_coup_name,
            givi_coup_name,
            order_coup_img,
            goods_coup_img,
            givi_coup_img,
            goods_coup_code,
            order_coup_code,
            givi_coup_code,
            order_coup_start,
            givi_coup_start,
            goods_coup_start,
            givi_coup_end,
            goods_coup_end,
            order_coup_end,
          } = value
          return (
            <tr
              className="tr-chin"
              onClick={event => {
                typeInputActive(event)
                setCouponChoose({
                  ...couponChoose,
                  order_coup_name,
                  goods_coup_name,
                  givi_coup_name,
                  goods_coup_code,
                  order_coup_code,
                  givi_coup_code,
                })
              }}
            >
              <td></td>
              <td className="check_box_ex">
                <p>
                  {order_coup_name ? (
                    order_coup_name
                  ) : (
                    <h2 hidden>"其他種類優惠券名稱"</h2>
                  )}
                  {goods_coup_name ? (
                    goods_coup_name
                  ) : (
                    <h2 hidden>"其他種類優惠券名稱"</h2>
                  )}
                  {givi_coup_name ? (
                    givi_coup_name
                  ) : (
                    <h2 hidden>"其他種類優惠券名稱"</h2>
                  )}
                </p>
              </td>
              <td className="check_box_ex">
                {<img
                  width="50"
                  height="50"
                  src={'http://localhost:5000/images/coup/' + order_coup_img}
                  alt=""
                /> ? (
                  <img
                    width="50"
                    height="50"
                    src={'http://localhost:5000/images/coup/' + order_coup_img}
                    alt=""
                  />
                ) : (
                  <img hidden />
                )}
                {<img
                  width="50"
                  height="50"
                  src={'http://localhost:5000/images/coup/' + goods_coup_img}
                  alt=""
                /> ? (
                  <img
                    width="50"
                    height="50"
                    src={'http://localhost:5000/images/coup/' + goods_coup_img}
                    alt=""
                  />
                ) : (
                  <img hidden />
                )}
                {<img
                  height="50"
                  width="50"
                  src={'http://localhost:5000/images/coup/' + givi_coup_img}
                  alt=""
                /> ? (
                  <img
                    width="50"
                    height="50"
                    src={'http://localhost:5000/images/coup/' + givi_coup_img}
                    alt=""
                  />
                ) : (
                  <img hidden />
                )}
              </td>
              <td className="check_box_ex">
                <p>
                  {goods_coup_code ? (
                    goods_coup_code
                  ) : (
                    <h2 hidden>"其他種類coup_code"</h2>
                  )}
                  {order_coup_code ? (
                    order_coup_code
                  ) : (
                    <h2 hidden>"其他種類coup_code"</h2>
                  )}
                  {givi_coup_code ? (
                    givi_coup_code
                  ) : (
                    <h2 hidden>"其他種類coup_code"</h2>
                  )}
                </p>
              </td>
              <td className="check_box_ex">
                <p>
                  {givi_coup_start ? (
                    givi_coup_start
                  ) : (
                    <h2 hidden>"其他種類coup_start"</h2>
                  )}
                  {order_coup_start ? (
                    order_coup_start
                  ) : (
                    <h2 hidden>"其他種類coup_start"</h2>
                  )}
                  {goods_coup_start ? (
                    goods_coup_start
                  ) : (
                    <h2 hidden>"其他種類coup_start"</h2>
                  )}
                </p>
              </td>
              <td className="check_box_ex">
                {givi_coup_end ? (
                  givi_coup_end
                ) : (
                  <h2 hidden>"其他種類coup_end"</h2>
                )}
                {order_coup_end ? (
                  order_coup_end
                ) : (
                  <h2 hidden>"其他種類coup_end"</h2>
                )}
                {goods_coup_end ? (
                  goods_coup_end
                ) : (
                  <h2 hidden>"其他種類coup_end"</h2>
                )}
              </td>
            </tr>
          )
        })
      }
    })
  ) : (
    <Loading />
  )

  // handleDelete = product => {
  //   const cart = this.props.data.cart
  //   const index = cart.indexOf(product)
  //   cart.splice(index, 1)
  //   this.setState({ cart })
  //   document.body.style.overflow = 'auto'
  // }

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
              <div className="card-header d-flex justify-content-lg-around bg-light">
                <h6 className="mt-2">訂單摘要</h6>
                <button onClick={event => show(event)} className="btn chin_btn">
                  使用優惠
                </button>
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
                    type="text"
                    name=""
                    className="w-50"
                    id=""
                  />
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <h5>結帳總金額</h5>
                  <h5>NT$ {sum(mycartDisplay, coupCode)}</h5>
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
        <Rodal
          width="800"
          height="500"
          visible={rodalState.visible}
          onClose={event => hide(event)}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <table className="table table-chin">
                  <thead>
                    <tr>
                      <th scope="col">請選擇</th>
                      <th scope="col">優惠券名</th>
                      <th scope="col">優惠圖片</th>
                      <th scope="col">優惠碼</th>
                      <th scope="col">起始時間</th>
                      <th scope="col">結束時間</th>
                    </tr>
                  </thead>
                  <tbody>{coupTableData}</tbody>
                </table>
              </div>
            </div>
          </div>
        </Rodal>
      </div>
    </>
  )
}
const mapStateToProps = store => {
  return {
    userCouponData: store.memberReducer.userCouponData,
    // getNowCoupData : store.sellerReducer.getNowCoupData
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  // return bindActionCreators({getUserCouponDetaiAsync,getNowCoupDataAsync}, dispatch)
  return bindActionCreators({ getUserCouponDetaiAsync }, dispatch)
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
)

// export default connect()(ShoppingCart)
