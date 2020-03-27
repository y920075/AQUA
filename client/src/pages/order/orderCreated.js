import React from 'react'

function OrderCreated(props) {
  return (
    <>
      <div>
        <div className="col-12 order-wrapper">
          <div className="card">
            <div className="card-header bg-light">
              <h6>賣場名稱：戴靖選品</h6>
            </div>
            <div className="card-body d-flex ">
              <div className="col">
                <h6>訂單編號：1234547</h6>
                <h6>訂購時間：2020-04-01 10:00</h6>
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
              <div className="row py-3 border-bottom order-item">
                <div className="col">
                  <span className="d-md-none d-inline">名稱： </span>C4 - DEEP
                  SPEARO碳纖維長蛙鞋
                </div>
                <div className="col-md-2">
                  <span className="d-md-none d-inline">規格： </span>S size
                </div>
                <div className="col-md-2">
                  <span className="d-md-none d-inline">數量： </span>1
                </div>
                <div className="col-md-2">
                  <span className="d-md-none d-inline">小計： </span>NT$11000
                </div>
              </div>
              <div className="row py-3 border-bottom order-item">
                <div className="col">
                  <span className="d-md-none d-inline">名稱：</span> C4 - DEEP
                  SPEARO碳纖維長蛙鞋
                </div>
                <div className="col-md-2">
                  <span className="d-md-none d-inline">規格：</span>S size
                </div>
                <div className="col-md-2">
                  <span className="d-md-none d-inline">數量：</span>1
                </div>
                <div className="col-md-2">
                  <span className="d-md-none d-inline">小計：</span>NT$11000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderCreated
