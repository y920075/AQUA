import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Rside from '../../components/blog/Rside'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../../style/BlogContent.scss'
import '../../image/image.png'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  getBlogDataAsync,
  // getAsideDataAsync,
} from '../../actions/blog/blog_Actions'

function BlogContent(props) {
  const [blogData, setBlogData] = useState([])

  useEffect(() => {
    props.getBlogDataAsync()
    // props.getAsideDataAsync()
  }, [])
  console.log(props.blogData.result)
  
  return (
    <>
      <Header />
      {/* <!-- titlebar --> */}
      <div className="titlebarFix"></div>
      <div className="titlebar">
        <div className="container">
          <p>部落格</p>
              {props.blogData.result ? (props.blogData.result.map((value , index)=>{
              if( value.id==props.match.params.id)
              return (
          <ul key = {index}>
            <li>
              <Link to="/blog">首頁</Link>
            </li>
            <li>
              <Link to="">></Link>
            </li>
        

            <li>
              <Link to="">{value.categoryName}</Link>
            </li>
            <li>
              <Link to="">></Link>
            </li>
            <li>
              <Link to={'/blog/'+value.id}>{value.blogTitle}</Link>
            </li>
          </ul>
          )}
            )) : ''}

        </div>
      </div>

      <div className="container rao">

        {/* <!--blogContent--> */}
        <div className="row postContent">
        {props.blogData.result ? (props.blogData.result.map((value , index)=>{
              if( value.id==props.match.params.id)
              return (
          <div className=" col-md-8 " key = {index}>
            <div className="postImg">
            <Link to="">{value.blogImages}</Link>
            </div>
            <div className="postTitle">
              {' '}
              <Link to="">
                <h2>{value.blogTitle}</h2>
              </Link>
            </div>
            <div className="postNav mb-3 d-flex justify-content-between">
              <div className="author">
                <Link to="">AUQA</Link> -<time>{value.created_at.substring(0, 10)}</time>
              </div>
              <div className="postTag">
                <ul>
                  <li>
                    <Link to="">{value.categoryName}</Link>
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
              {value.blogContent}
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
                      {value.tagName1}
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="rounded-lg">
                    {value.tagName2}
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
                        <img src="../../images/blog/card3.jpg" alt="" />
                      </figure>
                    </Link>
                    <h5>跳水假期</h5>
                  </li>
                  <li>
                    <Link to="">
                      <figure>
                        <img src="../../images/blog/card4.jpg" alt="" />
                      </figure>
                    </Link>
                    <h5>跳水假期</h5>
                  </li>
                  <li>
                    <Link to="">
                      <figure>
                        <img src="../../images/blog/card1.jpg" alt="" />
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
                  <img src="../../images/blog/newPost2.jpg" alt="" />
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
                  <img src="../../images/blog/newPost4.jpeg" alt="" />
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
                <button className="badge badge-pill contentSend" type="button">
                  送出
                </button>
              </div>
            </div>
          </div>
          )}
            )) : ''}
          {/* <!--rSide--> */}
          <Rside blogData={props.blogData}/>
        </div>
      </div>
    </>
  )
}


const mapStateToProps = store => {
  return {
    blogData: store.blogReducer.blogData,
    // asideData: store.itemReducer.asideData,
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getBlogDataAsync }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogContent))
// export default BlogContent
