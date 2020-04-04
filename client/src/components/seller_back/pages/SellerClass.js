import React, { useState, useEffect } from 'react'

//引入redux元件
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//引入action
import {
  getSellerClassDataAsunc,
  getCityDataAsunc,
  getDistDataAsunc,
  getClassTypeLevelDataForSellerAsunc,
  addClassDataAsunc,
  delClassDataAsunc,
} from '../../../actions/seller/index'

import ManageClassContent from './SellerClassComponents/ManageClassContent'
import ManageCoachContent from './SellerClassComponents/ManageCoachContent'
import AddClassContent from './SellerClassComponents/AddClassContent'

function SellerClass(props) {
  const [nowClickTag, setNowClickTag] = useState(1)

  useEffect(() => {
    props.getSellerClassDataAsunc()
    props.getCityDataAsunc()
    props.getClassTypeLevelDataForSellerAsunc(true, false)
  }, [])

  //向伺服器取得新資料
  const getSellerClassData = page => {
    //取得select的值，作為類型、等級的篩選參數
    const sort = document.querySelector('select[name="sort"]').value
    props.getSellerClassDataAsunc(sort, page)
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
                    handleGetDistData={props.getDistDataAsunc}
                    handleGetLevelData={
                      props.getClassTypeLevelDataForSellerAsunc
                    }
                    distData={props.distData}
                    typeData={props.typeDataForSeller}
                    levelData={props.levelDataForSeller}
                    addClassData={props.addClassDataAsunc}
                    addClassDataResponse={props.addClassDataResponse}
                  />
                )
              case 3:
                return <ManageCoachContent />
              default:
                return (
                  <ManageClassContent
                    sellerClassData={props.sellerClassData}
                    getSellerClassData={getSellerClassData}
                    delClassDataAsunc={props.delClassDataAsunc}
                    delClassDataResponse={props.delClassDataResponse}
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
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getSellerClassDataAsunc,
      getCityDataAsunc,
      getDistDataAsunc,
      getClassTypeLevelDataForSellerAsunc,
      addClassDataAsunc,
      delClassDataAsunc,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SellerClass)
