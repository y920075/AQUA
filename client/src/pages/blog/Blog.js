import React , { useEffect, useState }from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  getBlogDataAsync,
  // getAsideDataAsync,
} from '../../actions/blog/blog_Actions'
import categoryData from './category'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
// import Footer from '../../components/Footer'
import Rside from '../../components/blog/Rside'
import { Link } from 'react-router-dom'
import '../../style/Blog.scss'
import _ from 'lodash'
import RcViewer from '@hanyk/rc-viewer'


function Blog(props) {
  const options={}
  console.log(categoryData)

  const [blogData, setBlogData] = useState([])
  // const [asideData, setAsideData] = useState([])
  const [hasloading, setHasLoading] = useState(false)
  // console.log('cateData', cateData)


  useEffect(() => {
    props.getBlogDataAsync()
    // props.getAsideDataAsync()
  }, [])
  console.log(props.blogData.result)

  // useEffect(() => {
  //   setHasLoading(true)

  //   setTimeout(() => {
  //     if (props.blogData) {
  //       setBlogData(props.blogData.totalRows)
  //       setHasLoading(false)
  //     }
  //   }, 500)
  // }, [props.blogData])

  // useEffect(() => {
  //   setHasLoading(true)

  //   setTimeout(() => {
  //     if (props.asideData.status) {
  //       setAsideData(props.asideData.asideData)
  //       setHasLoading(false)
  //     }
  //   }, 500)
  // }, [props.asideData])

  // function getBlogData(page) {
  //   const type = document.querySelector('.typeMenu .active')
  //     ? document.querySelector('.typeMenu .active').getAttribute('data-type')
  //     : ''
  //   // const brand = document.querySelector('.typeMenu .active')
  //   //   ? document.querySelector('.typeMenu .active').getAttribute('data-level')
  //   //   : ''
  //   //取得sort的select的值
  //   const price = document.querySelector('select[name="sort"]').value
  //   props.getClassDataAsync(type, brand, price, page)

  //   props.getBlogDataAsync(page)
  // }




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
              {categoryData ? (categoryData.map((value , index)=>{
              return(
              <Link to="#" className="badge badge-pill " key = {index}>
                {value.categoryName}
              </Link>
              )}
            )) : ''}
              </div>

     
          </div>
        </div>
        {/* <!--card--> */}
        <div className="row justify-content-around">
          <div className=" col-md-8 rounded-lg d-flex
  justify-content-around cardContent">
            <div className=" col-sm-6 lCard " >

            {/* <!--lCard--> */}
            {props.blogData.result ? (props.blogData.result.map((value , index)=>{
              if( value.id%2===0)
              return (
              <div className="card  rounded-lg " key = {index} >
              <RcViewer options={options}>
                <img
                  className="card-img-top rounded-top "
                  src="./images/blog/card1.jpg"
                />
                </RcViewer>
                <div className="card-body">
                  <Link to={'/blog/'+value.id}>
                  <div className="author mb-3">
                    <Link to="">AUQA</Link> -<time>{value.created_at.substring(0, 10)}</time>
                  </div>
                  <Link to={'/blog/'+value.id}>
                    <h1 className="card-title  mb-3">
                      {value.blogTitle}
                    </h1>
                  </Link>
                  <p className="card-text mb-3">
                    {value.blogContent.substring(0 , 150)+ "..."}
                  </p>
                  </Link>
                  <hr align="left" />
                  <div className="d-flex justify-content-around">
                    <div className="card-tag d-flex justify-content-center">
                      <Link to={'/blog/7'}>{value.tagName1}</Link>
                      、
                      <Link to="">{value.tagName2}</Link>
                    </div>
                    <div className="comment">
                      <i className="far fa-comment">1</i>
                    </div>
                  </div>
                </div>
              </div>
              )}
            )) : ''}
            {/* <!--rCard--> */}
            </div>
            <div className="col-md-6 rCard">
            {props.blogData.result ? (props.blogData.result.map((value , index)=>{
              if( value.id%2===1)
              return (
              <div className="card  rounded-lg ">
              <RcViewer options={options}>
                <img
                  className="img-fluid rounded-top "
                  src="./images/blog/card3.jpg"
                  alt="Card3 image cap"
                />
                </RcViewer>
                <div className="card-body">
                  <div className="author mb-3">
                    <Link to="">AUQA</Link> -<time>{value.created_at.substring(0, 10)}</time>
                  </div>
                  <Link to="">
                    <h1 className="card-title font-weight-bold mb-3">
                      {value.blogTitle}
                    </h1>
                  </Link>
                  <p className="card-text ">
                    {value.blogContent.substring(0, 50)+ "..."}
                  </p>
                  <hr align="left" />
                  <div className="d-flex justify-content-around">
                    <div className="card-tag">
                      <Link to="">{value.tagName1}</Link>
                      、
                      <Link to="">{value.tagName2}</Link>
                    </div>
                    <div className="comment">
                      <i className="far fa-comment">1</i>{' '}
                    </div>
                  </div>
                </div>
              </div>
              )}
            )) : ''}
            </div>
          </div>
          {/* <!--rSide--> */}
          <Rside blogData={props.blogData}/>
        </div>
        <div class=" col-md-12 d-flex justify-content-center page">
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


// 取得Redux中store的值
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
export default connect(mapStateToProps, mapDispatchToProps)(Blog)