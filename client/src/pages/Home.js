import React, { useEffect } from 'react'
// import ReactDOM from 'react-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import sr from './ScrollReveal'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  useEffect(() => {
    // if (localStorage.getItem('cart')) {
    //   const cart = JSON.parse(localStorage.getItem('cart'))
    //   this.props.data.cart = cart
    //   this.setState({ cart })
    // } else {
    //   localStorage.setItem('cart', JSON.stringify(this.props.data.cart))
    // }

    sr.reveal('.fst', { delay: 500 })
    AOS.init({
      // initialise with other settings
      duration: 2000,
    })
  })
  return (
    <>
      <Header />
      <div className="CW index" id="fullpage">
        <section className="index-video overflow-hidden">
          <div className="index-video-bg">
            <video
              src="http://127.0.0.1:5000/video/indexvideo.mp4"
              loop
              autoPlay
              muted
            ></video>
          </div>
          <div className="index-video-title"></div>
          <div className="index-video-arrow"></div>
        </section>
        <section className="index-location">
          <div className="container">
            <h1 className="display-2 font-italic">精選潛點</h1>
            <Carousel
              showArrows={false}
              showStatus={false}
              autoPlay={true}
              showThumbs={false}
              infiniteLoop={true}
              interval={3000}
              emulateTouch={true}
              showIndicators={false}
            >
              <div>
                <img
                  data-aos="fade-up"
                  src="http://127.0.0.1:5000/images/locationImg/L0001-1.png"
                  alt=""
                />
                <h1 className="loca-name" data-aos="fade-up">
                  東北角龍洞
                </h1>
                <div className="legend">Legend 1</div>
                <div className="loca-weather"></div>
              </div>
              <div>
                <img
                  data-aos="fade-up"
                  src="http://127.0.0.1:5000/images/locationImg/L0001-2.png"
                  alt=""
                />
                <h1 className="loca-name">宜蘭豆腐峽</h1>
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img
                  data-aos="fade-up"
                  src="http://127.0.0.1:5000/images/locationImg/L0001-3.jpg"
                  alt=""
                />
                <h1 className="loca-name">綠島石朗</h1>
                <p className="legend">Legend 3</p>
              </div>
              <div>
                <img
                  data-aos="fade-up"
                  src="http://127.0.0.1:5000/images/locationImg/L0001-4.jpg"
                  alt=""
                />
                <h1 className="loca-name">小琉球花瓶岩</h1>
                <p className="legend">Legend 4</p>
              </div>
              <div>
                <img
                  data-aos="fade-up"
                  src="http://127.0.0.1:5000/images/locationImg/L0002-2.jpg"
                  alt=""
                />
                <h1 className="loca-name">墾丁萬里桐</h1>
                <p className="legend">Legend 5</p>
              </div>
            </Carousel>
            <button className="index-btn btn btn-lg">更多潛點</button>
          </div>
        </section>
        <section className="index-event">
          <div className="container">
            <h1 className="fst">揪團</h1>
            <div className="card" data-aos="fade-up">
              123
            </div>
          </div>
        </section>
        <section className="index-class">
          <div className="container">
            <h1 data-aos={'fade-up'}>課程</h1>
          </div>
        </section>
        <section className="index-footer">
          <div className="container">
            <h1>回饋</h1>
          </div>
          <Footer />
        </section>
      </div>
    </>
  )
}

export default Home
