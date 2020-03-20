import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Rside from '../../components/blog/Rside'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../../style/BlogContent.scss'

function BlogContent() {
  return (
    <>
      <Header />
      {/* <!-- titlebar --> */}
      <div className="titlebarFix"></div>
      <div className="titlebar">
        <div className="container">
          <h2>部落格</h2>
          <ul>
            <li>
              <Link to="">首頁</Link>
            </li>
            <li>
              <Link to="">></Link>
            </li>
            <li>
              <Link to="">旅行</Link>
            </li>
            <li>
              <Link to="">></Link>
            </li>
            <li>
              <Link to="">第一次的海外潛旅，獻給夏威夷</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container rao">
        {/* <!--blogContent--> */}
        <div className="row postContent">
          <div className=" col-md-8 ">
            <div className="postImg">
              <img src="./images/blog/card3.jpg" alt="" />
            </div>
            <div className="postTitle">
              {' '}
              <Link to="">
                <h2>第一次的海外潛旅，獻給夏威夷</h2>
              </Link>
            </div>
            <div className="postNav mb-3 d-flex justify-content-between">
              <div className="author">
                <Link to="">AUQA</Link> -<time>2020-3-14</time>
              </div>
              <div className="postTag">
                <ul>
                  <li>
                    <Link to="">閒聊</Link>
                  </li>
                  <li>
                    <Link to="">討論</Link>
                  </li>
                  <li>
                    <Link to="">
                      <i className="far fa-comment"> 0</i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="postBody">
              <hr align="left" />
              <p className="">
                在這趟旅行後，發現夏威夷其實有很多平易近人的潛點，尤其以浮潛著名的景點很多，生態豐富，有很多魚群或大型生物可以看，對於初學潛水的新手或是只想浮潛玩水的人來說，都是不錯的選擇。在這趟旅行後，發現夏威夷其實有很多平易近人的潛點，尤其以浮潛著名的景點很多，生態豐富，有很多魚群或大型生物可以看，對於初學潛水的新手在這趟旅行後，發現夏威夷其實有很多平易近人的潛點，尤其以浮潛著名的景點很多，生態豐富，有很多魚群或大型生物可以看，對於初學潛水的新手或是只想浮潛玩水的人來說，都是不錯的選擇。在這趟旅行後，發現夏威夷其實有很多平易近人的潛點，尤其以浮潛著名的景點很多，生態豐富，有很多魚群或大型生物可以看，對於初學潛水的新手
                在這趟旅行後，發現夏威夷其實有很多平易近人的潛點，尤其以浮潛著名的景點很多，生態豐富，有很多魚群或大型生物可以看，對於初學潛水的新手或是只想浮潛玩水的人來說，都是不錯的選擇。在這趟旅行後，發現夏威夷其實有很多平易近人的潛點，尤其以浮潛著名的景點很多，生態豐富，有很多魚群或大型生物可以看，對於初學潛水的新手
                在這趟旅行後，發現夏威夷其實有很多平易近人的潛點，尤其以浮潛著名的景點很多，生態豐富，有很多魚群或大型生物可以看，對於初學潛水的新手或是只想浮潛玩水的人來說，都是不錯的選擇。在這趟旅行後，發現夏威夷其實有很多平易近人的潛點，尤其以浮潛著名的景點很多，生態豐富，有很多魚群或大型生物可以看，對於初學潛水的新手
                在這趟旅行後，發現夏威夷其實有很多平易近人的潛點，尤其以浮潛著名的景點很多，生態豐富，有很多魚群或大型生物可以看，對於初學潛水的新手或是只想浮潛玩水的人來說，都是不錯的選擇。在這趟旅行後，發現夏威夷其實有很多平易近人的潛點，尤其以浮潛著名的景點很多，生態豐富，有很多魚群或大型生物可以看，對於初學潛水的新手態豐富，有很多魚群或大型生物可以看，對於初學潛水的新手對於初學潛水的新
              </p>
            </div>
            <div className="postFooter">
              <div className="">
                <h5 className="mb-3">標籤</h5>
              </div>
              <div className="justify-content-between d-flex">
                <ul>
                  <li>
                    <Link to="#" className="rounded-lg">
                      生活方式
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="rounded-lg">
                      水藍色
                    </Link>
                  </li>
                </ul>
                <ul className="blogcontentPage">
                  <li>
                    <Link to="">
                      <i className="fas fa-chevron-left"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <i className="fas fa-chevron-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <hr align="left" />
            </div>
            <div className="relatedPost">
              <div className="relatedpostTitle">
                <h5 className="mb-3">相關文章</h5>
              </div>
              <div className="relatedpostContent">
                <ul>
                  <li>
                    <Link to="">
                      <figure>
                        <img src="./images/blog/card2.jpg" alt="" />{' '}
                      </figure>
                    </Link>
                    <h5>跳水假期</h5>
                  </li>
                  <li>
                    <Link to="">
                      <figure>
                        <img src="./images/blog/card4.jpg" alt="" />{' '}
                      </figure>
                    </Link>
                    <h5>跳水假期</h5>
                  </li>
                  <li>
                    <Link to="">
                      <figure>
                        <img src="./images/blog/card5.jpg" alt="" />{' '}
                      </figure>
                    </Link>
                    <h5>以自由潛水的方式，認識人之島</h5>
                  </li>
                </ul>
              </div>
            </div>
            <div className="comment mb-3">
              <div className="commentTitle">
                <h5>評論</h5>
              </div>
              <div className="commentContent ">
                <figure>
                  <img src="./images/blog/newPost2.jpg" alt="" />
                </figure>
                <div className="commmentBody p-2">
                  <div className="commentAuthor">
                    {' '}
                    <Link to="">AUQA</Link>
                  </div>
                  <time>2020-3-14</time>
                  <div className="commmentbodyText">
                    <p>
                      從模具生產出來的氯丁橡膠發泡海綿原床是像床墊般一片一片，表面是光滑，但切開後裡面是佈滿許多氣孔(cell)的肉身。生產氯丁橡膠的工廠很多，例如日本Yamamoto、NJN、韓國Jako，還有臺灣的薛長興、南良。每個工廠生產的氯丁橡膠通常都會分許多型號，有著不同延展性、密度、強度等，成本不一樣，適合的用途也會不一樣。
                    </p>
                  </div>
                </div>
              </div>
              <div className="commentContent ">
                <figure>
                  <img src="./images/blog/newPost4.jpeg" alt="" />
                </figure>
                <div className="commmentBody p-2">
                  <div className="commentAuthor">
                    {' '}
                    <Link to="">AUQA</Link>
                  </div>
                  <time>2020-3-14</time>
                  <div className="commmentbodyText">
                  <p>
                    從模具生產出來的氯丁橡膠發泡海綿原床是像床墊般一片一片，表面是光滑，但切開後裡面是佈滿許多氣孔(cell)的肉身。生產氯丁橡膠的工廠很多，例如日本Yamamoto、NJN、韓國Jako，還有臺灣的薛長興、南良。每個工廠生產的氯丁橡膠通常都會分許多型號，有著不同延展性、密度、強度等，成本不一樣，適合的用途也會不一樣。從模具生產出來的氯丁橡膠發泡海綿原床是像床墊般一片一片，表面是光滑，但切開後裡面是佈滿許多氣孔(cell)的肉身。生產氯丁橡膠的工廠很多，例如日本Yamamoto、NJN、韓國Jako，還有臺灣的薛長興、南良。每個工廠生產的氯丁橡膠通常都會分許多型號，有著不同延展性、密度、強度等，成本不一樣，適合的用途也會不一樣。{' '}
                  </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="postComment">
              <div className="postcommentTitle">
                <h5>發表評論</h5>
              </div>
              <div className="postcommentBody">
                <textarea name="" id="" className="col-md-12"></textarea>
              </div>
              <div className="d-flex justify-content-end">
                <button className="badge badge-pill" type="button">
                  送出
                </button>
              </div>
            </div>
          </div>
          {/* <!--rSide--> */}
          <Rside />
        </div>
      </div>
    </>
  )
}

export default BlogContent
