import React from 'react'
// import ReactDOM from 'react-dom'
import { SectionsContainer, Section } from 'react-fullpage'

import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Header />
      <div className="CW index" id="fullpage">
        <section className="index-video overflow-hidden">
          <div className="index-video-bg">
            <video
              src="http://127.0.0.1:5000/video/Big_Buck_Bunny_1080_10s_2MB.mp4"
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
            <h1>潛點</h1>
          </div>
        </section>
        <section className="index-event">
          <div className="container">
            <h1>揪團</h1>
          </div>
        </section>
        <section className="index-class">
          <div className="container">
            <h1>課程</h1>
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
