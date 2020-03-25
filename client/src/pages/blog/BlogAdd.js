import React ,{ useEffect, useState }from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Rside from '../../components/blog/Rside'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../../style/BlogAdd.scss'
import addImg from '../../image/imgicon.png'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {
  getBlogDataAsync,
  // getAsideDataAsync,
} from '../../actions/blog/blog_Actions'

function BlogAdd(props) {
  const [blogData, setBlogData] = useState([])

  useEffect(() => {
    props.getBlogDataAsync()
    // props.getAsideDataAsync()
  }, [])


  const [avatarFile, setAvatarFile] = useState('');
    const [avatarDataFiles, setAvatarDataFiles] = useState('');
    const handleChange = (event) => {
        console.log(event.target.files)
        setAvatarFile(URL.createObjectURL(event.target.files[0]))
        console.log(event.target.files[0])
        setAvatarDataFiles(event.target.files[0])
    }

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
              <Link to="/blog">首頁</Link>
            </li>
            <li>
              <Link to="">></Link>
            </li>
            <li>
              <Link to="/blogadd">新增文章</Link>
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
                <h5>新增</h5>
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
              <div className="addFooter d-flex justify-content-between algin-content-center">

              <div className="addTag d-flex">
                <input
                  type="text"
                  placeholder="輸入標籤"
                  className="form-control addInput tagName1"
                />
                <input
                  type="text"
                  placeholder="輸入標籤"
                  className="form-control addInput tagName2"
                />
                <label class="  addImg ml-3 mr-1 ">
                  <p>上傳檔案</p>
                  <input  className="inputavatar" type="file" onChange={(event) => handleChange(event)}   /> 
                </label>
                <img className="blah" src={ avatarFile ? avatarFile: addImg} width="40" height="40" />
              </div>
                <button className="badge badge-pill addSend" type="button">
                  送出
                </button>
              </div>
              <CKEditor editor={ClassicEditor}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(BlogAdd)
// export default BlogAdd