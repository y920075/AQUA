import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getOrderDetailDataAsync } from '../../actions/order/order_Actions'

import '../../style/CW_items.scss'

import Header from '../../components/Header'
import Banner from '../../components/Banner'

function OrderCreated(props) {
  console.log(props)
  const [hasloading, setHasLoading] = useState(false)
  const [orderData, setOrderData] = useState([])
  // const orderData = props.orderData[0]
  let data = props.orderData ? props.orderData : ''
  useEffect(() => {
    props.getOrderDetailDataAsync(props.orderId.orderId)
  }, [])
  useEffect(() => {
    setHasLoading(true)

    setTimeout(() => {
      if (data) {
        setHasLoading(false)
        setOrderData(data)
      }
    }, 500)
  }, [data])
  return (
    <>
      <Header />
      <Banner BannerImgSrc="/images/ShoppingBanner.jpg" />
      <div className="container CW">
        {orderData[0] ? (
          <>
            <div className="col-12 order-wrapper">
              <div className="card">
                <div className="card-header bg-light">
                  <h6>賣場名稱：戴靖選品</h6>
                </div>
                <div className="card-body d-flex ">
                  <div className="col">
                    <h6>訂單編號：{props.orderId.orderId}</h6>
                    <h6>訂購時間：{orderData[0].created_at}</h6>
                    <h6>付款方式：信用卡</h6>
                    <h6>物流方式：宅配到家</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 order-detail-wrapper">
              <div className="card">
                <div className="card-header bg-light">
                  <h6>訂單明細</h6>
                </div>
                <div className="order-detail card-body">
                  <div className="row d-none d-md-flex">
                    <div className="col">名稱</div>
                    <div className="col-2">規格</div>
                    <div className="col-2">數量</div>
                    <div className="col-2">小計</div>
                  </div>
                  {orderData
                    ? orderData.map((value, index) => {
                        return (
                          <div
                            className="row py-3 border-bottom order-item"
                            key={index}
                          >
                            <div className="col">
                              <span className="d-md-none d-inline">
                                名稱：{value.itemName}
                              </span>
                              {value.itemName}
                            </div>
                            <div className="col-md-2">
                              <span className="d-md-none d-inline">
                                規格：{' '}
                              </span>
                              無規格
                            </div>
                            <div className="col-md-2">
                              <span className="d-md-none d-inline">
                                數量：{value.checkQty}
                              </span>
                              {value.checkQty}
                            </div>
                            <div className="col-md-2">
                              <span className="d-md-none d-inline">
                                小計：NT${value.checkPrice}
                              </span>
                              NT${value.checkPrice}
                            </div>
                          </div>
                        )
                      })
                    : ''}
                </div>
              </div>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

const mapStateToProps = store => {
  return {
    orderId: store.orderReducer.memberCheckOutResponse,
    orderData: store.orderReducer.orderData,
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getOrderDetailDataAsync,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderCreated)
