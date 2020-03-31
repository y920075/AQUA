import React ,{ useEffect,useState } from 'react'
import { Link, withRouter } from 'react-router-dom'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getBlogDataAsync, editContentDataAsync} from '../../actions/blog/blog_Actions'


import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BlogRside from '../../components/blog/BlogRside'
import BlogRelatedPost from '../../components/blog/BlogRelatedPost'




import '../../style/BlogEdit.scss'
import addImg from '../../image/image.png'
import Swal from 'sweetalert2'


function BlogAdd(props) {
  const [blogData, setBlogData] = useState([])
  useEffect(() => {
    props.getBlogDataAsync()
    props.editContentDataAsync()
  }, [])

  let relatedPostData = [];
  if(props.blogData.result && props.blogData.result.length){
    relatedPostData = [...props.blogData.result];
    relatedPostData.sort((_a,b)=>Math.random()-.5);
    relatedPostData = relatedPostData.slice(0,3);
  }

    console.log(props.blogData.result)
  let blogItem = null
  let blogItemTitle = ""
  let blogItemCategory= ""
  let blogItemContent= ""
  let blogItemTag1 = ""
  let blogItemTag2 = ""
  let blogItemImg = ""

  if(props.blogData.result){
    blogItem=props.blogData.result.find((value , index)=>
    value.id==props.match.params.id)
    
    blogItemTitle = blogItem.blogTitle
    blogItemCategory = blogItem.categoryName
    blogItemContent = blogItem.blogContent
    blogItemTag1 = blogItem.tagName1
    blogItemTag2 = blogItem.tagName2
    blogItemImg = blogItem.blogImages
  }

  console.log("blogItem",blogItem)
  console.log()
 

  const [editContentTitle, setEditContentTitle] = useState(blogItemTitle);
  const [editContentCategory, setEditContentCategory] = useState(blogItemCategory);
  const [editContent, setEditContent] = useState(blogItemContent);
  const [editTag1, setEditTag1] = useState(blogItemTag1);
  const [editTag2, setEditTag2] = useState(blogItemTag2);
  const [imgFile, setImgFile] =  useState(null)
  const [imgDataFiles, setImgDataFiles] =  useState(blogItemImg)
  const handleImgChange = event => {
    setImgFile(URL.createObjectURL(event.target.files[0]))
    setImgDataFiles(event.target.files[0])
  }
  const [avatarFile, setAvatarFile] = useState('');
  const [avatarDataFiles, setAvatarDataFiles] = useState('');
  const handleChange = (event) => {
      console.log(event.target.files)
      setAvatarFile(URL.createObjectURL(event.target.files[0]))
      console.log(event.target.files[0])
      setAvatarDataFiles(event.target.files[0])
  }

  const handleSubmit = (event)=>{


    const editContentData = { 
      editContentTitle,
      editContentCategory,
      editContent,
      editTag1,
      editTag2,
      imgDataFiles,
    }
  
    const editContentData_fd = new FormData()
    editContentData_fd.append('blogTitle', editContentData.editContentTitle)
    editContentData_fd.append('categoryName', editContentData.editContentCategory)
    editContentData_fd.append('blogContent', editContentData.editContent)
    editContentData_fd.append('tagName1', editContentData.editTag1)
    editContentData_fd.append('tagName2', editContentData.editTag2)
    editContentData_fd.append('addImg', editContentData.imgDataFiles)
    editContentData_fd.append('id', props.match.params.id)
    
  
    props.editContentDataAsync(editContentData_fd)

    Swal.fire(
      '修改成功!',
      '',
      'success'
    )

        setTimeout(function () {
          window.location.href = '/blog'
        }, 1500)

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
              <Link to="/blog">文章列表</Link>
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
              {props.blogData.result ? (props.blogData.result.map((value , index)=>{
              if( value.id==props.match.params.id)

               return (
                <>
              <div className="d-flex form-group mb-3">
                <input
                  name="editTitle"
                  type="text"
                  placeholder="請輸入標題"
                  className="form-control editInput"
                  value={editContentTitle}
                  onChange={event => setEditContentTitle(event.target.value)}
                />
                <select className="custom-select"              
                        defaultValue={editContentCategory}
                        name="editCategoryName"
                        onChange={event => setEditContentCategory(event.target.value)}
                >
                  <option value='潛點'>潛點</option>
                  <option value='情報'>情報</option>
                  <option value='討論'>討論</option>
                  <option value='裝備'>裝備</option>
                  <option value='教學'>教學</option>
                </select>
              </div>
              <textarea
                name="editContent"
                className="form-control mb-3"
                placeholder="請輸入內文"
                value={editContent}
                onChange={event => setEditContent(event.target.value)}
              >
              </textarea>
              <div className="addFooter d-flex justify-content-between algin-content-center">
                <div className="addTag d-flex">
                  <input
                    name="editTag1"
                    type="text"
                    placeholder="輸入標籤"
                    className="form-control editInput tagName1"
                    value={editTag1}
                    onChange={event => setEditTag1(event.target.value)}
                  />
                  <input
                    name="editTag2"
                    type="text"
                    placeholder="輸入標籤"
                    className="form-control editInput tagName2"
                    value={editTag2}
                    onChange={event => setEditTag2(event.target.value)}
                  />
                  <label class="  addImg ml-3 mr-1 ">
                    <h6>更改圖片</h6>
                    <input  
                          value={setImgDataFiles}
                          name="editImg"
                          className="inputavatar" 
                          type="file" 
                          onChange={event => {
                                    handleChange(event)
                                    handleImgChange(event)                 
                                    }}    
                    /> 
                  </label>
                  <img className="blah" 
                  src={ avatarFile ? avatarFile:'http://localhost:5000/images/blogImg/'+ value.blogImages} width="40" height="40" />
                </div>
                <div>
                <button className="badge badge-pill delete" type="button">
                    刪除
                  </button>
                  <button 
                          onClick={e => {
                          e.preventDefault()
                          handleSubmit()
                          }}
                          className="badge badge-pill editSend" 
                          type="button"
                  >
                    送出
                  </button>
                  </div>
                </div>    
               </>
                )}
            )) : ''}
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
    editContentData: store.blogReducer.editContentData,
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getBlogDataAsync, editContentDataAsync}, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogAdd))
// export default BlogAdd
