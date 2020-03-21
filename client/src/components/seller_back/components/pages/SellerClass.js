import React, { useState, useEffect } from 'react'

//引入redux元件
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//引入action
import { getSellerClassDataAsunc } from '../../../../actions/seller/index'

import ManageClassContent from './SellerClassComponents/ManageClassContent'
import ManageCoachContent from './SellerClassComponents/ManageCoachContent'
import AddClassContent from './SellerClassComponents/AddClassContent'

function SellerClass(props) {
  useEffect(() => {
    props.getSellerClassDataAsunc()
  }, [])

  //向伺服器取得新資料
  const getSellerClassData = page => {
    //取得select的值，作為類型、等級的篩選參數
    const sort = document.querySelector('select[name="sort"]').value
    props.getSellerClassDataAsunc(sort, page)
  }

  return (
    <>
      <div className="container JY-Seller-Class">
        <nav className="nav nav-pills nav-justified">
          <button className="nav-item nav-link active">管理課程</button>
          <button className="nav-item nav-link">新增課程</button>
          <button className="nav-item nav-link ">管理教練資訊</button>
        </nav>
        <div className="col-12">
          <ManageClassContent
            sellerClassData={props.sellerClassData}
            getSellerClassData={getSellerClassData}
          />
        </div>
      </div>
    </>
  )
}

// 取得Redux中store的值
const mapStateToProps = store => {
  return { sellerClassData: store.sellerReducer.sellerClassData }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getSellerClassDataAsunc }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SellerClass)
