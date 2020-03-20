import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../../style/Rside.scss'

function Rside() {
  return (
    <>
      <div className="col-md-4 rSide ">
        <p className="justify-content-center d-flex">最新文章</p>
        <div className="content rounded-lg mb-5">
          {/* <!--newPost--> */}
          <div className="d-flex">
            <figure className="newpostPic mr-3">
              <img src="./images/blog/newPost2.jpg" />
            </figure>
            <div className="">
              <span className="d-flex test ">
                <Link className=" test rounded-lg" href="">
                  旅遊
                </Link>
                <Link className="test  rounded-lg" href="">
                  女孩
                </Link>
              </span>
              <div className="title">
                <Link href="">第一次的海外潛旅，獻給夏威夷</Link>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex">
            <figure className="newpostPic mr-3">
              <img src="./images/blog/newPost3.jpg" />
            </figure>
            <div className="">
              <span className="d-flex">
                <Link className="rounded-lg" href="">
                  旅遊
                </Link>
                <Link className="rounded-lg" href="">
                  女孩
                </Link>
              </span>
              <Link href="">第一次的海外潛旅，獻給夏威夷</Link>
            </div>
          </div>
        </div>
        {/* <!--search--> */}
        <div className="input-group  input-group-lg mb-5">
          <input type="text" className="form-control  " />
          <div className="input-group-append">
            <button className="btn btn-lg" type="button">
              <i className="fas fa-search fa-sm	"></i>
            </button>
          </div>
        </div>
        {/* <!--tag--> */}
        <div className="popularTag">
          <p className="justify-content-center d-flex">熱門標籤</p>
          <div>
            <ul>
              <li className="rounded-lg">
                <Link href="#">生活方式</Link>
              </li>
              <li className="rounded-lg">
                <Link href="#">水藍色</Link>
              </li>
              <li className="rounded-lg">
                <Link href="#">相機</Link>
              </li>
              <li className="rounded-lg">
                <Link href="#">連續假期</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Rside
