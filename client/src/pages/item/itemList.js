import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../../styles/CW_items.scss'
// import { userRegisterAsync } from '../actions/index'

//引入元件
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Aside from '../../components/item/Aside'
import ItemCard from '../../components/item/ItemCard'

function Items() {
  return (
    <>
      <Header />
      <Banner BannerImgSrc="./images/ClassBanner.jpg" />
      <div className="container CW">
        <div className="row CW-itemList">
          <div className="col-3 aside d-none d-md-block">
            <Aside />
          </div>
          <div className="col-md-9 list">
            <div className="row justify-content-between list-header">
              <div className="col">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">自由潛水蛙鞋</a>
                  </li>
                  <li className="breadcrumb-item active" ariaCurrent="page">
                    碳纖維蛙鞋
                  </li>
                </ol>
              </div>

              <div className="col text-right d-flex justify-content-end">
                <form className="form-inline">
                  <label className="my-1 mr-2" for="item-sort">
                    排序方式
                  </label>
                  <select className="custom-select my-1 mr-sm-2" id="item-sort">
                    <option selected>依價格高至低</option>
                    <option value="1">依價格低至高</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </form>
              </div>
            </div>
            <div className="row list-wrapper">
              <ItemCard
              // img={item.img} name={item.name} price={item.price}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default connect()(Items)
