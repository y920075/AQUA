import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'

//引入redux元件
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//引入action
import { getSellerClassDetailDataAsync } from '../../actions/seller/index'

function SellerEditClass(props) {
  useEffect(() => {
    const classId = props.match.params.classId
    props.getSellerClassDetailDataAsync(classId)
  }, [])

  return (
    <>
      <div className="container JY-container-seller-editclass"></div>
    </>
  )
}

// 取得Redux中store的值
const mapStateToProps = store => {
  return { SellerClassDetailData: store.sellerReducer.SellerClassDetailData }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getSellerClassDetailDataAsync,
    },
    dispatch
  )
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SellerEditClass)
)
