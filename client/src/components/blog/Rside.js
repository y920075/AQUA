import React,{ useEffect, useState } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  getBlogDataAsync,
  // getAsideDataAsync,
} from '../../actions/blog/blog_Actions'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../../style/Rside.scss'

function Rside(props) {
  const [blogData, setBlogData] = useState([])

  let tagNameData = [];
  if(props.blogData.result && props.blogData.result.length){
    tagNameData = [...props.blogData.result];
    tagNameData = tagNameData.slice(0,10);
  }
  return (
    <>
      <div className="col-md-4 rSide ">
        <p className="justify-content-center d-flex">最新文章</p>
        <div className="newsPost  rounded-lg mb-5">
          {/* <!--newPost--> */}
          {props.blogData.result ? (props.blogData.result.map((value , index)=>{
            if(index < 4)
            return (
          <div className="d-flex newpostLine">
            <figure className="newpostPic mr-3">
              <img src="./images/blog/newPost2.jpg" />
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
               <Link>{value.blogTitle}</Link> 
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
          <p className="justify-content-center d-flex">熱門標籤</p>
          <div>
            <ul>
            {tagNameData ? tagNameData.map((value , index)=>{
              console.log(value)
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
export default connect(mapStateToProps, mapDispatchToProps)(Rside)
// export default Rside
