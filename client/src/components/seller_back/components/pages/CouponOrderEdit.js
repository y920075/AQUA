import React, { useState, useEffect } from 'react'
import SwitchButton from './SwitchButton'
import SwitchPercent from './SwitchPercent'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function CouponOrderEdit(props) {}

const mapStateToProps = store => {
  return { coupon: store.sellerReducer.coupon }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getSellerCouponAsync }, dispatch)
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CouponOrderEdit)
)
