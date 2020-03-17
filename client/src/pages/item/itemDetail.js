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
    </>
  )
}

export default connect()(Items)
