import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { itemGetDataAsync } from '../../../actions/seller/index'

function ItemManager(props) {
  return <div>這裡是商品管理</div>
}
const mapStateToProps = store => {
  return {
    ItemUpload: store.sellerReducer.ItemUpload,
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      itemGetDataAsync,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemManager)
