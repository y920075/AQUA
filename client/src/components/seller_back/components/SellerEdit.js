import React, { useState } from 'react'
import '../pages/Style/Info.scss'

//redux相關
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//顯示資料的動作函數
import { sellerEditAsync } from '../../../actions/seller/index'

//更新資料的動作函數

import { sellerUpdateAsync } from '../../../actions/seller/index'

import { withRouter } from 'react-router-dom'
import { Form } from 'react-bootstrap'

function SellerEdit(props) {
  console.log(props)
  // console.log(props.isAuth)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [address, setAdress] = useState('')
  const [sellerName, setSellerName] = useState('')
  const [mobile, setMobile] = useState('')
  const [phone, setPhone] = useState('')
  const [description, setDescription] = useState('')

  const [infofile, setInfoFile] = useState(null)
  const [shopfile, setShopFile] = useState([])

  const [error, setError] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])

  const handleShopChange = event => {
    let fileObj = []
    let fileArray = []
    fileObj.push(event.target.files)
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]))
    }
    // this.setState({ file: this.fileArray })
    console.log(fileArray)
    setShopFile(fileArray)
  }
  const handleInfoChange = event => {
    setInfoFile(URL.createObjectURL(event.target.files[0]))
  }

  const handleSubmit = () => {
    let error = false
    let errorMessages = []
    if (password1 !== password2) {
      error = true
      errorMessages.push('兩次密碼寫的不同')
    }

    if (!name) {
      error = true
      errorMessages.push('姓名沒填')
    }

    if (!sellerName) {
      error = true
      errorMessages.push('賣場名沒填')
    }
    if (!address) {
      error = true
      errorMessages.push('地址沒填')
    }
    if (name.length < 2) {
      error = true
      errorMessages.push('姓名至少要2個字')
    }

    if (!username) {
      error = true
      errorMessages.push('帳號沒填')
    }

    // if (error) {
    //   setError(error)
    //   setErrorMessages(errorMessages)
    //   return
    // }

    const password = password1
    const userData = {
      name,
      email,
      username,
      password,
      sellerName,
      mobile,
      phone,
      description,
      infofile,
      shopfile,
    }
    props.sellerUpdateAsync(userData, () => alert('成功更改'))
  }
  return (
    <>
      {/* {props.isAuth ? (
           

        ) :    
        (<>
            <div className="alert alert-danger" role="alert">
              你沒有觀看權限呦
            </div>
          </>)} */}
      <Form>
        <div className="container">
          <div className="py-4"></div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="nameInput">大頭照</label>
                <input
                  type="file"
                  name="seller_img"
                  className="form-control"
                  id="nameInput"
                  aria-describedby="nameHelp"
                  // value={props.data.value}
                  onChange={event => handleInfoChange(event)}
                />
                <img width="100" height="100" src={infofile} />
              </div>
              <div className="form-group">
                <label htmlFor="nameInput">姓名</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="nameInput"
                  aria-describedby="nameHelp"
                  placeholder="請輸入姓名"
                  // value={props.data.value}
                  onChange={e => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="usernameInput">帳號</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  id="usernameInput"
                  aria-describedby="emailHelp"
                  placeholder="請輸入帳號"
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">密碼</label>
                <input
                  type="password"
                  name="password1"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="請輸入密碼"
                  onChange={e => setPassword1(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword2">確認密碼</label>
                <input
                  type="password"
                  name="password2"
                  className="form-control"
                  id="exampleInputPassword2"
                  placeholder="請再次輸入密碼"
                  onChange={e => setPassword2(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="請輸入Email"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="nameInput">賣場名:</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="nameInput"
                  aria-describedby="nameHelp"
                  placeholder="請輸入姓名"
                  // value={props.data.value}
                  onChange={e => setSellerName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nameInput">公司地址:</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="nameInput"
                  aria-describedby="nameHelp"
                  placeholder="請輸入姓名"
                  // value={props.data.value}
                  onChange={e => setAdress(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nameInput">公司電話:</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="nameInput"
                  aria-describedby="nameHelp"
                  placeholder="請輸入電話"
                  // value={props.data.value}
                  onChange={e => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nameInput">手機:</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="nameInput"
                  aria-describedby="nameHelp"
                  placeholder="請輸入手機"
                  // value={props.data.value}
                  onChange={e => setMobile(e.target.value)}
                />
              </div>
              <div className="form-group">
                <div>
                  <label htmlFor="nameInput">賣場描述:</label>
                </div>
                <div>
                  <textarea
                    id="w3mission"
                    rows="4"
                    cols="50"
                    onChange={e => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="nameInput">賣場圖片</label>
                <input
                  type="file"
                  multiple
                  name="shop_img"
                  className="form-control"
                  id="nameInput"
                  aria-describedby="nameHelp"
                  // value={props.data.value}
                  onChange={event => handleShopChange(event)}
                />

                {(shopfile || []).map((url, index) => (
                  <img
                    key={index}
                    width="100"
                    height="100"
                    src={url}
                    alt="..."
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="py-4 text-center">
            <button className="btn btn-primary" onClick={() => handleSubmit()}>
              送出
            </button>
          </div>
        </div>
      </Form>
    </>
  )
}
// 取得Redux中isAuth的值
const mapStateToProps = store => {
  return {
    sellerEdit: store.sellerReducer.sellerEdit,
    sellerUpdate: store.sellerReducer.sellerUpdate,
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ sellerUpdateAsync, sellerEditAsync }, dispatch)
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SellerEdit)
)
