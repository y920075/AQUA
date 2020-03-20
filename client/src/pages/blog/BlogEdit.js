import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Rside from '../../components/blog/Rside'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../../style/BlogEdit.scss'

function BlogAdd() {
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
              <Link to="">修改文章</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container rao">
        {/* <!--cardContent--> */}
        <div className="row addContent">
          <div className=" col-md-8 ">
            <div className="add">
              <div>
                <h5>修改</h5>
              </div>
              <div className="d-flex form-group mb-3">
                <input
                  type="text"
                  placeholder="請輸入標題"
                  className="form-control addInput"
                />
                <select className="custom-select">
                  <option selected>類型</option>
                  <option>心得</option>
                  <option>閒聊</option>
                  <option>討論</option>
                  <option>裝備</option>
                </select>
              </div>
              <textarea
                className="form-control mb-3"
                placeholder="請輸入內文"
              ></textarea>
              <div className="addFooter d-flex justify-content-between">
                <input
                  type="text"
                  placeholder="請輸入標籤"
                  className="form-control addInput"
                />
                <div>
                  <button class="badge badge-pill delete" type="submit">
                    刪除
                  </button>
                  <button className="badge badge-pill send" type="button">
                    送出
                  </button>
                </div>
              </div>
            </div>
            <div className="addHr">
              <hr align="left" />
            </div>
            <div className="relatedPost">
              <div className="relatedpostTitle">
                <h5 className="mb-3">相關文章</h5>
              </div>
              <div className="relatedpostContent">
                <ul>
                  <li>
                    <Link href="">
                      <figure>
                        <img src="./images/blog/card1.jpg" alt="" />{' '}
                      </figure>
                    </Link>
                    <h5>放鬆時刻</h5>
                  </li>
                  <li>
                    <Link href="">
                      <figure>
                        <img src="./images/blog/card2.jpg" alt="" />{' '}
                      </figure>
                    </Link>
                    <h5>跳水假期</h5>
                  </li>
                  <li>
                    <Link href="">
                      <figure>
                        <img src="./images/blog/card4.jpg" alt="" />{' '}
                      </figure>
                    </Link>
                    <h5>以自由潛水的方式，認識人之島</h5>
                  </li>
                </ul>
              </div>
            </div>
            <div className="addHr">
              <hr align="left" />
            </div>
          </div>

          {/* <!--rSide--> */}
          <Rside />
        </div>
      </div>
    </>
  )
}

export default BlogAdd
