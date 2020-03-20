import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
// import Footer from '../../components/Footer'
import Rside from '../../components/blog/Rside'
import { Link } from 'react-router-dom'
import '../../style/Blog.scss'

function Blog() {
  return (
    <>
      <Header />
      <Banner BannerImgSrc="./images/blog/banner.jpg" />
      <div className="container rao">
        {/* <!--category--> */}

        <div className="row">
          <div className="col-sm-12 d-flex justify-content-center">
            <div className="category">
              <Link to="#" className="badge badge-pill  addPost">
                發文
              </Link>
              <Link to="#" className="badge badge-pill ">
                全部
              </Link>
              <Link to="#" className="badge badge-pill ">
                教學
              </Link>
              <Link to="#" className="badge badge-pill ">
                情報
              </Link>
              <Link to="#" className="badge badge-pill ">
                潛點
              </Link>
              <Link to="#" className="badge badge-pill ">
                裝備
              </Link>
              <Link to="#" className="badge badge-pill ">
                議題
              </Link>
              <Link to="#" className="badge badge-pill ">
                閒聊
              </Link>
              <Link to="#" className="badge badge-pill ">
                課程
              </Link>
              <Link to="#" className="badge badge-pill ">
                揪團
              </Link>
              <Link to="#" className="badge badge-pill ">
                討論
              </Link>
              <Link to="#" className="badge badge-pill ">
                其他
              </Link>
            </div>
          </div>
        </div>
        {/* <!--card--> */}
        <div className="row justify-content-around">
          <div className=" col-md-8 rounded-lg d-flex  justify-content-around cardContent">
            {/* <!--lCard--> */}
            <div className=" col-sm-6 lCard ">
              <div className="card  rounded-lg  ">
                <img
                  className="card-img-top rounded-top "
                  src="./images/blog/card1.jpg"
                  alt="Card1 image cap"
                />
                <div className="card-body">
                  <div className="author mb-3">
                    <Link to="">AUQA</Link> -<time>2020-3-14</time>
                  </div>
                  <Link to="">
                    <h1 className="card-title  mb-3">
                      第一次的海外潛旅，獻給夏威夷
                    </h1>
                  </Link>
                  <p className="card-text">
                    在這趟旅行後，發現夏威夷其實有很多平易近人的潛點，尤其以浮潛著名的景點很多，生態豐富，有很多魚群或大型生物可以看，對於初學潛水的新手或是只想浮潛玩水的人來說，都是不錯的選擇。在這趟旅行後，發現夏威夷其實有很多平易近人的潛點，尤其以浮潛著名的景點很多，生態豐富，有很多魚群或大型生物可以看，對於初學潛水的新手{' '}
                  </p>
                  <hr align="left" />
                  <div className="d-flex justify-content-around">
                    <div className="card-tag">
                      <Link to="">旅行、</Link>
                      <Link to="">女孩</Link>
                    </div>
                    <div className="comment">
                      <i className="far fa-comment">1</i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card  rounded-lg ">
                <img
                  className="card-img-top rounded-top "
                  src="./images/blog/card2.jpg"
                  alt="Card2 image cap"
                />
                <div className="card-body">
                  <div className="author mb-3">
                    <Link to="">AUQA</Link> -<time>2020-3-14</time>
                  </div>
                  <Link to="">
                    <h1 className="card-title font-weight-bold mb-3">
                      第一次的海外潛旅，獻給夏威夷
                    </h1>
                  </Link>
                  <p className="card-text">
                    在這趟旅行後，發現夏威夷其實有很多平易近人的潛點，尤其以浮潛著名的景點很多，生態豐富，有很多魚群或大型生物可以看，對於初學潛水的新手或是只想浮潛玩水的人來說，都是不錯的選擇。在這趟旅行後，發現夏威夷其實有很多平易近人的潛點，尤其以浮潛著名的景點很多，生態豐富，有很多魚群或大型生物可以看，對於初學潛水的新手{' '}
                  </p>
                  <hr align="left" />
                  <div className="d-flex justify-content-around">
                    <div className="card-tag">
                      <Link to="">旅行、</Link>
                      <Link to="">女孩</Link>
                    </div>
                    <div className="comment">
                      <i className="far fa-comment">1</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--rCard--> */}
            <div className="col-md-6 rCard">
              <div className="card  rounded-lg ">
                <img
                  className="img-fluid rounded-top "
                  src="./images/blog/card3.jpg"
                  alt="Card3 image cap"
                />
                <div className="card-body">
                  <div className="author mb-3">
                    <Link to="">AUQA</Link> -<time>2020-3-14</time>
                  </div>
                  <Link to="">
                    <h1 className="card-title font-weight-bold mb-3">
                      第一次的海外潛旅，獻給夏威夷
                    </h1>
                  </Link>
                  <p className="card-text">
                    在這趟旅行後，發現夏威夷其實有很多平易近人的潛點，尤其以浮潛著名的景點很多，生態豐富，有很多魚群或大型生物可以看，對於初學潛水的新手或是只想浮潛玩水的人來說，都是不錯的選擇。在這趟旅行後，發現夏威夷其實有很多平易近人的潛點，尤其以浮潛著名的景點很多，生態豐富，有很多魚群或大型生物可以看，對於初學潛水的新手{' '}
                  </p>
                  <hr align="left" />
                  <div className="d-flex justify-content-around">
                    <div className="card-tag">
                      <Link to="">旅行、</Link>
                      <Link to="">女孩</Link>
                    </div>
                    <div className="comment">
                      <i className="far fa-comment">1</i>{' '}
                      {/* <!--帶數量變數--> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card  rounded-lg ">
                <img
                  className="card-img-top rounded-top "
                  src="./images/blog/card4.jpg"
                  alt="Card4 image cap"
                />
                <div className="card-body">
                  <div className="author mb-3">
                    <Link to="">AUQA</Link> -<time>2020-3-14</time>
                  </div>
                  <Link to="">
                    <h1 className="card-title font-weight-bold mb-3">
                      第一次的海外潛旅，獻給夏威夷
                    </h1>
                  </Link>
                  <p className="card-text">
                    在這趟旅行後，發現夏威夷其實有很多平易近人的潛點，尤其以浮潛著名的景點很多，生態豐富，有很多魚群或大型生物可以看，對於初學潛水的新手或是只想浮潛玩水的人來說，都是不錯的選擇。在這趟旅行後，發現夏威夷其實有很多平易近人的潛點，尤其以浮潛著名的景點很多，生態豐富，有很多魚群或大型生物可以看，對於初學潛水的新手{' '}
                  </p>
                  <hr align="left" />
                  <div className="d-flex justify-content-around">
                    <div className="card-tag">
                      <Link to="">旅行、</Link>
                      <Link to="">女孩</Link>
                    </div>
                    <div className="comment">
                      <i className="far fa-comment">1</i>{' '}
                      {/* <!--帶數量變數--> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--rSide--> */}
          <Rside />
        </div>
        <div class=" col-md-8 d-flex justify-content-center page">
          <ul>
            <li>
              <a href="">
                <i class="fas fa-chevron-left"></i>
              </a>
            </li>
            <li class="ative">
              <a href="">1</a>
            </li>
            <li>
              <a href="">2</a>
            </li>
            <li>
              <a href="">3</a>
            </li>
            <li>
              <a href="">4</a>
            </li>
            <li>
              <a href="">5</a>
            </li>
            <li>
              <a href="">
                <i class="fas fa-chevron-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Blog
