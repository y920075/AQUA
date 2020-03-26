import React, { useEffect } from 'react'
// import ReactDOM from 'react-dom'

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
            <div className="card" data-aos="fade-up">
              123
            </div>
            <h1>潛點</h1>
          </div>
        </section>
        <section className="index-event">
          <div className="container">
            <h1 className="fst">揪團</h1>
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
