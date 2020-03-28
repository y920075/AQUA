import React,{ useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import { getBlogDataAsync } from '../../actions/blog/blog_Actions'
  
import { Link } from 'react-router-dom'

import '../../style/BlogRelatedPost.scss'
import Zoom from 'react-reveal/Zoom'
import RcViewer from '@hanyk/rc-viewer'


function RelatedPost(props) {
  const [blogData, setBlogData] = useState([])


  useEffect(() => {
    props.getBlogDataAsync()
    // props.getAsideDataAsync()
  }, [])


  let relatedPostData = [];
  if(props.blogData.result && props.blogData.result.length){
    relatedPostData = [...props.blogData.result];
    relatedPostData.sort((_a,b)=>Math.random()-.5);
    relatedPostData = relatedPostData.slice(0,3);
  }

  return (
    <>
        <div className="relatedPost">
          <div className="relatedpostTitle">
            <h5 className="mb-3">推薦文章</h5>
          </div>
          <div className="relatedpostContent">
            <ul>
              {relatedPostData ? relatedPostData.map((value, index) => {
                return (
                <li>
                    <Zoom>
                      <RcViewer>
                        <figure>
                          <img to="" src={'http://localhost:5000/images/blogImg/'+ value.blogImages}/>
                        </figure>
                      </RcViewer>  
                    </Zoom>
                  <Link to={'/blog/' + value.id}>
                  <p>{value.blogTitle}</p>
                  </Link>
                </li>
              )}): ''}
            </ul>
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
  export default connect(mapStateToProps, mapDispatchToProps)(RelatedPost)