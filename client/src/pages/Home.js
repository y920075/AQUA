import React, { useEffect } from 'react'
// import ReactDOM from 'react-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import * as Scroll from 'react-scroll'
// import { Link } from 'react-router-dom'

import sr from './ScrollReveal'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

let Link = Scroll.Link
let Element = Scroll.Element

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
          <Link
            activeClass="active"
            className="index-video-arrow"
            to="test1"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <p>SCROLL</p>
            <span className="material-icons">keyboard_arrow_down</span>
          </Link>
        </section>
        <section id="location" className="index-location">
          <Element name="test1" className="element">
            <div className="container">
              <h1
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="500"
                className="display-2 font-italic"
              >
                精選潛點
              </h1>
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
                    data-aos-duration="2000"
                    // data-aos-delay="500"
                    src="http://127.0.0.1:5000/images/homeImg/L0001.png"
                    alt=""
                  />
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="500"
                    className="loca-name"
                  >
                    東北角.龍洞
                  </h1>
                  <div className="legend">
                    <img
                      src="http://127.0.0.1:5000/images/locationImg/W0001.png"
                      alt=""
                    />
                  </div>
                  <div className="loca-weather"></div>
                </div>
                <div>
                  <img
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    // data-aos-delay="500"
                    src="http://127.0.0.1:5000/images/homeImg/L0002.png"
                    alt=""
                  />
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="500"
                    className="loca-name"
                  >
                    宜蘭.豆腐岬
                  </h1>
                  <p className="legend">
                    <img
                      src="http://127.0.0.1:5000/images/locationImg/W0002.png"
                      alt=""
                    />
                  </p>
                </div>
                <div>
                  <img
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    // data-aos-delay="500"
                    src="http://127.0.0.1:5000/images/homeImg/L0003.png"
                    alt=""
                  />
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="500"
                    className="loca-name"
                  >
                    綠島.石朗
                  </h1>
                  <p className="legend">
                    <img
                      src="http://127.0.0.1:5000/images/locationImg/W0003.png"
                      alt=""
                    />
                  </p>
                </div>
                <div>
                  <img
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    // data-aos-delay="500"
                    src="http://127.0.0.1:5000/images/homeImg/L0004.png"
                    alt=""
                  />
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="500"
                    className="loca-name"
                  >
                    小琉球.花瓶岩
                  </h1>
                  <p className="legend">
                    <img
                      src="http://127.0.0.1:5000/images/locationImg/W0004.png"
                      alt=""
                    />
                  </p>
                </div>
                <div>
                  <img
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-delay="500"
                    src="http://127.0.0.1:5000/images/homeImg/L0005.png"
                    alt=""
                  />
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="500"
                    className="loca-name"
                  >
                    墾丁.萬里桐
                  </h1>
                  <p className="legend">
                    <img
                      src="http://127.0.0.1:5000/images/locationImg/W0005.png"
                      alt=""
                    />
                  </p>
                </div>
              </Carousel>
              <Link className="index-btn btn btn-lg" to="/location">
                更多潛點
              </Link>
            </div>
          </Element>
        </section>
        <section className="index-event">
          <div className="container">
            <h1
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="500"
              className="display-2 font-italic"
              className="display-2 font-italic fst"
            >
              熱門揪團
            </h1>
            <div className="event-wrapper">
              <div className="row ">
                <div className="col-6 big-box big-box-l" data-aos="fade-up">
                  <img
                    className="card-img-top"
                    src="http://127.0.0.1:5000/images/homeImg/E0001.jpg"
                    alt=""
                  />
                </div>
                <div className="col-6 big-box big-box-r" data-aos="fade-up">
                  <div className="row">
                    <div className="col-6 box-t box-l" data-aos="fade-up">
                      <img
                        className="card-img-top"
                        src="http://127.0.0.1:5000/images/homeImg/E0001.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-6 box-t box-r" data-aos="fade-up">
                      {/* <img
                        className="card-img-top"
                        src="http://127.0.0.1:5000/images/homeImg/E0002.jpg"
                        alt=""
                      /> */}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6 box-b box-l" data-aos="fade-up">
                      <img
                        className="card-img-top"
                        src="http://127.0.0.1:5000/images/homeImg/E0002.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-6 box-b box-r" data-aos="fade-up">
                      <img
                        className="card-img-top"
                        src="http://127.0.0.1:5000/images/homeImg/E0003.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-3 box-b box-l" data-aos="fade-up">
                  <img
                    className="card-img-top"
                    src="http://127.0.0.1:5000/images/homeImg/E0004.jpg"
                    alt=""
                  />
                </div>
                <div className="col-3 box-b box-l box-r" data-aos="fade-up">
                  <img
                    className="card-img-top"
                    src="http://127.0.0.1:5000/images/homeImg/E0005.jpg"
                    alt=""
                  />
                </div>
                <div className="col-3 box-b box-l box-r" data-aos="fade-up">
                  <img
                    className="card-img-top"
                    src="http://127.0.0.1:5000/images/homeImg/E0006.jpg"
                    alt=""
                  />
                </div>
                <div className="col-3 box-b box-r" data-aos="fade-up">
                  <img
                    className="card-img-top"
                    src="http://127.0.0.1:5000/images/homeImg/E0007.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="index-class">
          <div className="container">
            <h1
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="500"
              className="display-2 font-italic"
            >
              課程平台
            </h1>
            <div className="row class-wrapper d-flex justify-content-between">
              <div
                data-aos="zoom-in"
                data-aos-duration="3000"
                data-aos-delay="500"
                className="card col"
              >
                <img
                  className="card-img-top"
                  src="http://127.0.0.1:5000/images/homeImg/C0001.png"
                  alt=""
                />
                <div className="card-body">
                  <span class="material-icons">arrow_drop_up</span>
                  <p className="card-text">查看課程</p>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="3000"
                data-aos-delay="1000"
                className="card col"
              >
                <img
                  className="card-img-top"
                  src="http://127.0.0.1:5000/images/homeImg/C0002.png"
                  alt=""
                />
                <div className="card-body">
                  <span class="material-icons">arrow_drop_up</span>
                  <p className="card-text">查看課程</p>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="3000"
                data-aos-delay="1500"
                className="card col"
              >
                <img
                  className="card-img-top"
                  src="http://127.0.0.1:5000/images/homeImg/C0003.png"
                  alt=""
                />
                <div className="card-body">
                  <span class="material-icons">arrow_drop_up</span>
                  <p className="card-text">查看課程</p>
                </div>
              </div>
            </div>
            <div className=""></div>
          </div>
        </section>
        <section className="index-footer">
          <div className="container">{/* <h1>回饋</h1> */}</div>
          <Footer />
        </section>
      </div>
    </>
  )
}

export default Home
