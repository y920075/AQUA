import React from 'react'
// import ReactDOM from 'react-dom'
import { SectionsContainer, Section } from 'react-fullpage'

import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  //   return (
  //     //   <ReactFullpage
  //     //     pluginWrapper={pluginWrapper}
  //     //     //fullpage options
  //     //     licenseKey={'YOUR_KEY_HERE'}
  //     //     scrollingSpeed={1000} /* Options here */
  //     //     scrollHorizontally={true} /* Because we are using the extension */
  //     //     scrollHorizontallyKey={'YOUR KEY HERE'}
  //     //     render={({ state, fullpageApi }) => {
  //     //       return (
  //     <ReactFullpage.Wrapper>
  //       <div className="section">
  //         <p>Section 1 (welcome to fullpage.js)</p>
  //         {/* <button onClick={() => fullpageApi.moveSectionDown()}>
  //           Click me to move down
  //         </button> */}
  //       </div>
  //       <div className="section">
  //         <p>Section 2</p>
  //       </div>
  //     </ReactFullpage.Wrapper>
  //     //   )
  //     // }}
  //     //   />
  //   )

  let options = {
    activeClass: 'active', // the class that is appended to the sections links
    anchors: [], // the anchors for each sections
    arrowNavigation: true, // use arrow keys
    className: 'SectionContainer', // the class name for the section container
    delay: 1000, // the scroll animation speed
    navigation: true, // use dots navigatio
    scrollBar: false, // use the browser default scrollbar
    sectionClassName: 'Section', // the section class name
    sectionPaddingTop: '0', // the section top padding
    sectionPaddingBottom: '0', // the section bottom padding
    verticalAlign: false, // align the content of each section vertical
  }

  return (
    <>
      {/* <Header /> */}
      {/* <Header>
        <a href="#sectionOne">Section One</a>
        <a href="#sectionTwo">Section Two</a>
        <a href="#sectionThree">Section Three</a>
      </Header>
      <Footer>
        <a href="">Dcoumentation</a>
        <a href="">Example Source</a>
        <a href="">About</a>
      </Footer> */}
      <SectionsContainer {...options}>
        <Section>
          Page 1
          <video
            src="http://127.0.0.1:5000/video/Big_Buck_Bunny_1080_10s_2MB.mp4"
            loop
            autoPlay
            muted
          ></video>
        </Section>
        <Section>
          Page 2
          <video
            src="http://127.0.0.1:5000/video/Big_Buck_Bunny_1080_10s_2MB.mp4"
            loop
            autoPlay
            muted
          ></video>
        </Section>
        <Section>Page 3</Section>
      </SectionsContainer>
      {/* <div className="CW index" id="fullpage">
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
      </div> */}
    </>
  )
}

export default Home
