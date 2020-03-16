import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../../components/Header'
import Banner from '../../components/Banner'

function ClassDetail(props) {
  return (
    <>
      <Header />
      <Banner BannerImgSrc="/images/ClassBanner.jpg" />
      <div className="container JY-container-detail"></div>
    </>
  )
}

export default ClassDetail
