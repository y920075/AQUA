import React from 'react'
// scss
import '../../style/divelocation/divelocation.scss'
// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { BrowserRouter, Route, Link } from 'react-router-dom'
// Action

// 通用conmponent
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
// conmponent
import Area from '../../components/divelocation/Area'
import Map from '../../components/divelocation/map'
import Images from '../../components/divelocation/Images'
import Locusinfo from '../../components/divelocation/Locusinfo'
import Weather from '../../components/divelocation/Weather'
import Comment from '../../components/comment/Comment'

function Divelocation() {
  return (
    <div>
      <Header />
      <Banner BannerImgSrc="/images/locationbanner.jpg" />
      <div className="container locationcontent">
        <section className="divelocussection">
          <h1 className="locationh1">AQUA 精選潛點地圖</h1>
          <div className="row">
            <div className="col-sm-3">
              <Area />
            </div>
            <div className="col-sm-9">
              <Map />
            </div>
          </div>
        </section>
        <section className="divelocussection divelocusinfos">
          <h1 className="locationh1">潛點資訊</h1>
          <div className="row">
            <div className="col-sm-6">
              <Images />
            </div>
            <div className="col-sm-6 locusinfo">
              <Locusinfo />
            </div>
          </div>
        </section>
        <section className="divelocussection regionwether">
          <h1 className="locationh1">地區天氣預報與實時海象</h1>
          <Weather />
        </section>
        <section className="divelocussection">
          <h1 className="locationh1">潛友評論</h1>
          <Comment />
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Divelocation
