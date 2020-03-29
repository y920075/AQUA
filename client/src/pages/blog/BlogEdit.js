import React ,{ useEffect,useState } from 'react'
import { Link } from 'react-router-dom'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getBlogDataAsync } from '../../actions/blog/blog_Actions'


import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BlogRside from '../../components/blog/BlogRside'
import BlogRelatedPost from '../../components/blog/BlogRelatedPost'




import '../../style/BlogEdit.scss'
import addImg from '../../image/image.png'


function BlogAdd(props) {
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
              <Link to="">文章列表</Link>
            </li>
            <li>
              <Link to=""> > </Link>
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
                <p>修改</p>
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
                    <h6>上傳圖片</h6>
                    <input  className="inputavatar" type="file" onChange={(event) => handleChange(event)}   /> 
                  </label>
                  <img className="blah" src={ avatarFile ? avatarFile: addImg} width="40" height="40" />
                </div>
                <div>
                <button className="badge badge-pill delete" type="button">
                    送出
                  </button>
                  <button className="badge badge-pill editSend" type="button">
                    送出
                  </button>
                  </div>
                </div>    
                </div>
              <BlogRelatedPost blogData={props.blogData}/>
            <div className="addHr">
              <hr align="left" />
            </div>
          </div>

          {/* <!--rSide--> */}
          <BlogRside />
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
