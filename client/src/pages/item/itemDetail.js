import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../../style/CW_items.scss'
import Swal from 'sweetalert2'
import '../../style/CW_items.scss'
// import { userRegisterAsync } from '../actions/index'

import { getItemDetailDataAsync } from '../../actions/item/item_Actions'
import { onClickUpdateAsync } from '../../actions/item/item_Actions'

//引入元件
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Store from '../../components/item/Store'
// import Breadcrumb from '../../components/item/Breadcrumb'

function ItemDetail(props) {
  // console.log(props)
  const [itemData, setItemData] = useState({})
  const [hasloading, setHasLoading] = useState(false)

  // 加入購物車
  async function handleAdd(value) {
    setHasLoading(true)
    const localCart = JSON.parse(localStorage.getItem('cart')) || []
    if (localCart == null) {
      localCart.push({ ...value })
      localStorage.setItem('cart', JSON.stringify(localCart))
    } else {
      if (localCart.some(item => item.id === value.id)) {
        const index = localCart.findIndex(item => item.id === value.id)
        localCart[index].amount += value.amount
      } else {
        localCart.push({ ...value })
      }
      localStorage.setItem('cart', JSON.stringify(localCart))
    }
    Swal.fire({
      text: `商品已加入購物車`,
      icon: 'info',
      confirmButtonText: '確定',
    })
  }
  //紀錄使用者到訪的資料
  function recordClick() {
    const clicknum = {
      clicknum: 1,
    }
    props.onClickUpdateAsync(clicknum)
  }
  useEffect(() => {
    const itemId = props.match.params.itemId
    props.getItemDetailDataAsync(itemId)
    props.onClickUpdateAsync()
  }, [])

  useEffect(() => {
    setHasLoading(true)

    setTimeout(() => {
      if (props.itemDetailData.status) {
        setHasLoading(false)
        setItemData(props.itemDetailData.itemData)
      }
    }, 500)
  }, [props.itemDetailData])
  return (
    <>
      <Header />
      <Banner BannerImgSrc="/images/ItemBanner.jpg" />
      <div className="container CW">
        {itemData[0] ? (
          <div className="row CW-itemDetail">
            <div className="col-12 detail-header">{/* <Breadcrumb /> */}</div>
            <div className="row detail-main">
              <div className="col-md-2 lightbox-aside">
                <img
                  className="lightbox-aside-img"
                  src={`http://127.0.0.1:5000/images/itemImg/${itemData[0].itemImg}`}
                  alt=""
                />
                <img
                  className="lightbox-aside-img"
                  src={`http://127.0.0.1:5000/images/itemImg/${itemData[0].itemImg}`}
                  alt=""
                />
                <img
                  className="lightbox-aside-img"
                  src={`http://127.0.0.1:5000/images/itemImg/${itemData[0].itemImg}`}
                  alt=""
                />
              </div>
              <div className="col-md-6 order-md-0 lightbox-main">
                <img
                  className="lightbox-aside-img"
                  src={`http://127.0.0.1:5000/images/itemImg/${itemData[0].itemImg}`}
                  alt=""
                />
              </div>

              <div className="col-md-4 info d-flex flex-column justify-content-between">
                <div className="info-header">
                  <h4>{itemData[0].itemName}</h4>
                  <h4>NT$ {itemData[0].itemPrice}</h4>
                </div>
                <div className="info-size">
                  <h5>尺寸</h5>
                  <div className="btn btn-danger">S</div>
                  <div className="btn btn-danger">M</div>
                  <div className="btn btn-danger">L</div>
                </div>
                <div className="info-qty">
                  <h5>數量</h5>
                  <span>{itemData[0].itemQty}</span>
                </div>
                <div className="info-btn">
                  <button
                    name=""
                    id=""
                    onClick={() => {
                      handleAdd({
                        // id: {itemData.itemId},
                        // name: {itemData.itemName},
                        // amount: 1,
                        // price: {itemData.itemPrice}
                        id: `${itemData[0].itemId}`,
                        img: `${itemData[0].itemImg}`,
                        name: `${itemData[0].itemName}`,
                        amount: 1,
                        price: `${itemData[0].itemPrice}`,
                        itemCategoryId: `${itemData[0].itemCategoryId}`,
                      })
                      recordClick()
                    }}
                    className="addcart-btn btn btn-lg w-100"
                  >
                    加入購物車
                  </button>
                  <div
                    name=""
                    id=""
                    className="btn btn-danger btn-lg w-100"
                    href="#"
                    role="button"
                  >
                    詢問商品細節
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5 detail-desc">
              <div className="col-md-8">
                <h4>商品介紹</h4>
                <hr />
                <p>
                  C4 - SCARPE蛙鞋套
                  來自義大利的複合材料製造商C4，創立於1986年，一開始研發的是自行車使用之碳纖維材料，隨後將這樣的材料技術延伸至自由潛水/水中漁獵的裝備；卓越的性能與粗獷的外型，受到許多專業玩家的喜愛。
                </p>
              </div>
              <div className="col-4 d-none d-md-block store">
                <h4>賣場介紹</h4>
                <Store />
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      <Footer />
    </>
  )
}

const mapStateToProps = store => {
  return {
    itemDetailData: store.itemReducer.itemDetailData,
    clickUpdateData: store.itemReducer.clickUpdateData,
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { getItemDetailDataAsync, onClickUpdateAsync },
    dispatch
  )
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ItemDetail)
)
