import React ,{ useEffect, useState }from 'react'
import {Link,withRouter } from 'react-router-dom'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getBlogDataAsync, addContentDataAsync} from '../../actions/blog/blog_Actions'


import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BlogRside from '../../components/blog/BlogRside'
import BlogRelatedPost from '../../components/blog/BlogRelatedPost'


import '../../style/BlogAdd.scss'
import addImg from '../../image/imgicon.png'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function BlogAdd(props) {
  const [blogData, setBlogData] = useState([])
  const [contentData, setContentData] =  useState([])

  const [addContentTitle, setAddContentTitle] =  useState([null])
  const [addContentCategory, setAddContentCategory] =  useState([null])
  const [addContent, setAddContent] =  useState([null])
  const [addTag1, setAddTag1] =  useState([null])
  const [addTag2, setAddTag2] =  useState([null])
  const [imgFile, setImgFile] =  useState([null])
  const [imgDataFiles, setImgDataFiles] =  useState([null])
  const handleImgChange = event => {
    setImgFile(URL.createObjectURL(event.target.files[0]))
    setImgDataFiles(event.target.files[0])
  }


  useEffect(() => {
    props.getBlogDataAsync()
    props.addContentDataAsync()
  }, [])

  const handleSubmit = (event)=>{


      const addContentData = { 
        addContentTitle,
        addContentCategory,
        addContent,
        addTag1,
        addTag2,
        imgDataFiles,
      }
    
      const addContentData_fd = new FormData()
      addContentData_fd.append('blogTitle', addContentData.addContentTitle)
      addContentData_fd.append('categoryName', addContentData.addContentCategory)
      addContentData_fd.append('blogContent', addContentData.addContent)
      addContentData_fd.append('tagName1', addContentData.addTag1)
      addContentData_fd.append('tagName2', addContentData.addTag2)
      addContentData_fd.append('addImg', addContentData.imgDataFiles)
    
      props.addContentDataAsync(addContentData_fd, () => alert('成功新增'))
    
  }


  //相關文章隨機
  let relatedPostData = [];
  if(props.blogData.result && props.blogData.result.length){
    relatedPostData = [...props.blogData.result];
    relatedPostData.sort((_a,b)=>Math.random()-.5);
    relatedPostData = relatedPostData.slice(0,3);
  }

  //上傳圖片 即時顯示
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
              <Link to="/blog">文章列表 </Link>
            </li>
            <li>
              <Link> > </Link>
            </li>
            <li>
              <Link to="/blogadd">新增文章</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container rao">
        {/* <!--cardContent--> */}
        <div className="row add_content">
          <div className=" col-md-8 ">
            <div className="add">
              <div>
                <p>新增</p>
              </div>
              <div className="d-flex form-group mb-3">
                <input
                  type="text"
                  name="addContentTitle"
                  placeholder="請輸入標題"
                  className="form-control addInput"
                  onChange={event => setAddContentTitle(event.target.value)}
                />
                <select 
                className="custom-select"                  name="addContentCategory"
                onChange={event => setAddContentCategory(event.target.value)}
                >
                  <option>類型</option>
                  <option>心得</option>
                  <option>閒聊</option>
                  <option>討論</option>
                  <option>裝備</option>
                </select>
              </div>
              <textarea
                name="addContent"
                className="form-control mb-3"
                placeholder="請輸入內文"
                onChange={event => setAddContent(event.target.value)}
              />
              <div className="addFooter d-flex justify-content-between algin-content-center">

              <div className="addTag d-flex">
                <input
                  name="addTag1"
                  type="text"
                  placeholder="輸入標籤"
                  className="form-control addInput tagName1"
                  onChange={event => setAddTag1(event.target.value)}
                />
                <input
                  name="addTag2"
                  type="text"
                  placeholder="輸入標籤"
                  className="form-control addInput tagName2"
                  onChange={event => setAddTag2(event.target.value)}
                />
                <label class="  addImg ml-3 mr-1 ">
                  <h6>上傳檔案</h6>
                  <input  
                  name="addImg"
                  className="inputavatar" 
                  type="file" 
                  onChange={event => {
                    handleChange(event)
                    handleImgChange(event)                 
                     }}   

                  /> 
                </label>
                <img className="blah" src={ avatarFile ? avatarFile: addImg} width="40" height="40" />
              </div>
                <button 
                  onClick={e => {
                  e.preventDefault()
                  handleSubmit()
                    props.history.push('/blog')
                  }}
                  className="badge badge-pill addSend" type="button"
                >
                  送出
                </button>
              </div>
              {/* <CKEditor editor={ClassicEditor}/> */}
            </div>
            <BlogRelatedPost blogData={props.blogData}/>
          </div>

          {/* <!--rSide--> */}
          <BlogRside blogData={props.blogData}/>
        </div>
      </div>
    </>
  )
}


const mapStateToProps = store => {
  return {
    blogData: store.blogReducer.blogData,
    contentData: store.blogReducer.contentData,
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getBlogDataAsync, addContentDataAsync}, dispatch)
}
export default withRouter( connect(mapStateToProps, mapDispatchToProps)(BlogAdd))
// export default BlogAdd
