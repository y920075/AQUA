import React, { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSellerOrderListDataAsync } from '../../../actions/order/order_Actions'
import '../../../style/CW_items.scss'

function Order(props) {
  console.log(props)
  const [hasloading, setHasLoading] = useState(false)
  const [orderData, setOrderData] = useState([])
  // const orderData = props.orderData[0]
  let data = props.sellerOrderData ? props.sellerOrderData : ''

  useEffect(() => {
    props.getSellerOrderListDataAsync()
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
      <div className="container CW">
        {orderData.length > 0 ? (
          <>
            <div className="col-12 CW-sellerOrder">
              <div className="card">
                <div className="card-header bg-light d-flex justify-content-between">
                  <h6>訂單編號：{orderData[0].orderId}</h6>
                  <h6>訂單狀態：待出貨</h6>
                </div>
                <div className="card-body">
                  <div className="col-12 d-flex justify-content-between">
                    <h6>賣家編號：{orderData[0].orderMemberId}</h6>
                    <h6>訂購時間：{orderData[0].created_at}</h6>
                  </div>
                  <div className="col-12 d-flex justify-content-between">
                    <h6>付款方式：信用卡</h6>
                    <h6>物流方式：宅配到家</h6>
                  </div>
                  <div className="col-12 d-flex justify-content-between">
                    <h6>收件人：{orderData[0].recipName}</h6>
                    <h6>寄送地址：{orderData[0].address}</h6>
                  </div>
                  <div className="col-12 d-flex justify-content-between">
                    <h6>備註：{orderData[0].note}</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 CW-sellerOrder">
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
                                名稱：{' '}
                              </span>
                              {value.itemName}
                            </div>
                            <div className="col-md-2">
                              <span className="d-md-none d-inline">
                                規格：{' '}
                              </span>
                              {value.itemSize}
                            </div>
                            <div className="col-md-2">
                              <span className="d-md-none d-inline">
                                數量：{' '}
                              </span>
                              {value.checkQty}
                            </div>
                            <div className="col-md-2">
                              <span className="d-md-none d-inline">
                                小計：{' '}
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
    sellerOrderData: store.orderReducer.sellerOrderData,
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getSellerOrderListDataAsync,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
