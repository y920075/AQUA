import React,{ useEffect, useState } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  getBlogDataAsync,
} from '../../actions/blog/blog_Actions'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../../style/BlogRside.scss'
import { animation } from 'react-reveal/globals'

function BlogRside(props) {

  const re = e =>{
    // if( window.scrollTo(0, 700)< )
    window.scrollTo(0, 0)
  }
  const [blogData, setBlogData] = useState([])
  // console.log(props)
  let tagNameData = [];
  if(props.blogData.newpost && props.blogData.newpost.length){
    tagNameData = [...props.blogData.newpost];
    tagNameData = tagNameData.slice(0,8);
  }
  return (
    <>
      <div className="col-md-4 rSide ">
        <p className="justify-content-start d-flex">最新文章</p>
        <div className="newsPost  rounded-lg mb-5">
          {/* <!--newPost--> */}
          {props.blogData.newpost ? (props.blogData.newpost.map((value , index)=>{
            {/* console.log(props.blogData.newpost) */}
            if(index < 4)
            return (
          <div className="d-flex newpostLine">
            <figure className="newpostPic mr-3">
              <img src={"http://localhost:5000/images/memberImg/" + value.memberImg } />
            </figure>
            <div className="newspostContent">
              <span className="d-flex test justify-content-start">
                <Link className=" test rounded-lg" href="">
                  {value.tagName1}
                </Link>
                <Link className="test  rounded-lg" href="">
                {value.tagName2}
                </Link>
              </span>
              <div className="newspostTitle">
               <Link to={'/blog/' + value.id}>{value.blogTitle}</Link> 
              </div>
            </div>
          </div>
          )}
            )) : ''}
        </div>

        {/* <!--search--> */}
        <div className="input-group  input-group-lg mb-5 search">
          <input type="text" className="form-control  " />
          <div className="input-group-append">
            <button className="btn btn-lg" type="button">
              <i className="fas fa-search fa-sm	"></i>
            </button>
          </div>
        </div>
        {/* <!--tag--> */}
        <div className="popularTag">
          <p className="justify-content-start d-flex">熱門標籤</p>
          <div>
            <ul className="justify-content-start d-flex">
            {tagNameData ? tagNameData.map((value , index)=>{
            return (
              
              <>
              <li className="rounded-lg">
                <Link href="#">{value.tagName1}</Link>
              </li>
              <li className="rounded-lg">
                <Link href="#">{value.tagName2}</Link>
              </li>
              </>
              )}
            ): ''}

            </ul>
          </div>
        </div>
        <button 
                className="scrolltop"
                onClick={e => {
                  re(e)
              }}
        >
        <i class="fas fa-angle-up fa-2x	"></i>        
        </button>

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
export default connect(mapStateToProps, mapDispatchToProps)(BlogRside)
// export default Rside
