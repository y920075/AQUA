import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  getItemDataAsync,
  getAsideDataAsync,
} from '../../actions/item/item_Actions'

import { cateData } from './itemType'
import '../../style/CW_items.scss'
// import { userRegisterAsync } from '../actions/index'

//引入元件
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Aside from '../../components/item/Aside'
import Pages from '../../components/item/Pages'
import Footer from '../../components/Footer'
// import Loading from '../../components'
// import Breadcrumb from '../../components/item/Breadcrumb'
import ItemCard from '../../components/item/ItemCard'

function Items(props) {
  // console.log(props)
  const [itemData, setItemData] = useState([])
  const [asideData, setAsideData] = useState([])
  // const [sort, setSort] = useState('0')
  const [hasloading, setHasLoading] = useState(false)

  useEffect(() => {
    props.getItemDataAsync()
    props.getAsideDataAsync()
  }, [])
  // 渲染後載入商品
  useEffect(() => {
    setHasLoading(true)

    setTimeout(() => {
      if (props.itemData.status) {
        setItemData(props.itemData.result)
        setHasLoading(false)
      }
    }, 500)
  }, [props.itemData])
  // 渲染後 載入側欄
  useEffect(() => {
    setHasLoading(true)

    setTimeout(() => {
      if (props.asideData.status) {
        setAsideData(props.asideData.asideData)
        setHasLoading(false)
      }
    }, 500)
  }, [props.asideData])
  // 取得參數傳入 action
  function getItemData(page) {
    const type = document.querySelector('.type-li.active')
      ? document.querySelector('.type-li.active').getAttribute('data-type')
      : ''
    const brand = document.querySelector('.brand-li.active')
      ? document.querySelector('.brand-li.active').getAttribute('data-brand')
      : ''
    //取得sort的select的值
    console.log(type, brand)
    const price = document.querySelector('.price-li.active')
      ? document.querySelector('.price-li.active').getAttribute('data-price')
      : ''
    const sort = document.querySelector('select[name="item-sort"]').value || '0'
    props.getItemDataAsync(type, brand, price, sort, page)
  }

  return (
    <>
      <Header />
      <Banner BannerImgSrc="/images/ItemBanner.jpg" />
      <div className="container CW">
        <div className="row CW-itemList">
          <div className="col-3 aside d-none d-md-block">
            <Aside
              cateData={cateData}
              asideData={asideData}
              getDataFromServer={getItemData}
              // asideList={props.asideData}
            />
          </div>
          <div className="col-md-9 list">
            <div className="row justify-content-between list-header">
              <div className="col">
                {/* <Breadcrumb /> */}
                <span class="material-icons d-md-none" onClick={() => {}}>
                  filter_list
                </span>
              </div>

              <div className="col text-right d-flex justify-content-end">
                <form className="form-inline">
                  <label className="my-1 mr-2" htmlFor="item-sort">
                    排序方式
                  </label>
                  <select
                    className="custom-select my-1 mr-sm-2"
                    name="item-sort"
                    onChange={() => {
                      // setSort(e.target.value)
                      getItemData()
                      // console.log(sort)
                    }}
                  >
                    <option value="0" selected>
                      價格高至低
                    </option>
                    <option value="1">價格低至高</option>
                    <option value="2">熱門程度高至低</option>
                    <option value="3">新增時間最新</option>
                  </select>
                </form>
              </div>
            </div>
            <div className="row list-wrapper">
              {hasloading ? <h1>載入中</h1> : <ItemCard itemData={itemData} />}
            </div>
            <div className="row list-page d-flex justify-content-center mt-3">
              {hasloading ? (
                ''
              ) : (
                <Pages
                  totalPages={props.itemData.totalPages}
                  getDataFromServer={getItemData}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

// 取得Redux中store的值
const mapStateToProps = store => {
  return {
    itemData: store.itemReducer.itemData,
    asideData: store.itemReducer.asideData,
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getItemDataAsync, getAsideDataAsync }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Items)
