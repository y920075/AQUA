import React, { useState, useEffect } from 'react'

//引入redux元件
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//引入action
import {
  getSellerClassDataAsync,
  getCityDataAsync,
  getDistDataAsync,
  getClassTypeLevelDataForSellerAsync,
  addClassDataAsync,
  delClassDataAsync,
  getCoachDataAsync,
} from '../../actions/seller/index'

import ManageClassContent from '../../components/class/SellerClassComponents/ManageClassContent'
import ManageCoachContent from '../../components/class/SellerClassComponents/ManageCoachContent'
import AddClassContent from '../../components/class/SellerClassComponents/AddClassContent'

function SellerClass(props) {
  const [nowClickTag, setNowClickTag] = useState(1)
  const [isEnable, setIsEnable] = useState(false) //是否按下 "包含已過期資料的按鈕"

  useEffect(() => {
    props.getSellerClassDataAsync()
    props.getCityDataAsync()
    props.getCoachDataAsync()
    props.getClassTypeLevelDataForSellerAsync(true, false)
  }, [])

  //每次按鈕被點擊時，就取得新資料
  useEffect(() => {
    getSellerClassData()
  }, [isEnable])

  //向伺服器取得新資料
  const getSellerClassData = page => {
    //取得select的值，作為類型、等級的篩選參數
    const sort = document.querySelector('select[name="sort"]').value
    props.getSellerClassDataAsync(sort, page, isEnable)
  }

  const handleNavActive = event => {
    const navButtons = document.querySelectorAll('button.nav-item.nav-link')
    navButtons.forEach((value, index) => {
      value.classList.remove('active')
    })
    event.target.classList.add('active')
  }

  return (
    <>
      <div className="container JY-Seller-Class">
        <nav className="nav nav-pills nav-justified">
          <button
            className="nav-item nav-link active"
            onClick={event => {
              handleNavActive(event)
              setNowClickTag(1)
            }}
          >
            管理課程
          </button>
          <button
            className="nav-item nav-link"
            onClick={event => {
              handleNavActive(event)
              setNowClickTag(2)
            }}
          >
            新增課程
          </button>
          <button
            className="nav-item nav-link "
            onClick={event => {
              handleNavActive(event)
              setNowClickTag(3)
            }}
          >
            管理教練資訊
          </button>
        </nav>
        <div className="col-12">
          {(() => {
            switch (nowClickTag) {
              case 2:
                return (
                  <AddClassContent
                    cityData={props.cityData}
                    handleGetDistData={props.getDistDataAsync}
                    handleGetLevelData={
                      props.getClassTypeLevelDataForSellerAsync
                    }
                    distData={props.distData}
                    typeData={props.typeDataForSeller}
                    levelData={props.levelDataForSeller}
                    addClassData={props.addClassDataAsync}
                    addClassDataResponse={props.addClassDataResponse}
                    SellerCoachData={props.SellerCoachData}
                  />
                )
              case 3:
                return (
                  <ManageCoachContent SellerCoachData={props.SellerCoachData} />
                )
              default:
                return (
                  <ManageClassContent
                    sellerClassData={props.sellerClassData}
                    getSellerClassData={getSellerClassData}
                    delClassDataAsync={props.delClassDataAsync}
                    delClassDataResponse={props.delClassDataResponse}
                    setIsEnable={setIsEnable}
                    isEnable={isEnable}
                  />
                )
            }
          })()}
        </div>
      </div>
    </>
  )
}

// 取得Redux中store的值
const mapStateToProps = store => {
  return {
    sellerClassData: store.sellerReducer.sellerClassData,
    cityData: store.sellerReducer.cityData,
    distData: store.sellerReducer.distData,
    typeDataForSeller: store.sellerReducer.typeDataForSeller,
    levelDataForSeller: store.sellerReducer.levelDataForSeller,
    addClassDataResponse: store.sellerReducer.addClassDataResponse,
    delClassDataResponse: store.sellerReducer.delClassDataResponse,
    SellerCoachData: store.sellerReducer.SellerCoachData,
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getSellerClassDataAsync,
      getCityDataAsync,
      getDistDataAsync,
      getClassTypeLevelDataForSellerAsync,
      addClassDataAsync,
      delClassDataAsync,
      getCoachDataAsync,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SellerClass)
