import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//引入元件
import Header from '../../components/Header'
import Banner from '../../components/Banner'

function Class() {
  return (
    <>
      <Header />
      <Banner BannerImgSrc="./images/ClassBanner.jpg" />
    </>
  )
}

export default connect()(Class)
