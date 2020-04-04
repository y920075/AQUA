import React, { useState } from 'react'
import { addGiviDataAsync } from '../../../actions/seller/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, withRouter } from 'react-router-dom'
import './Styles/CupOrder.scss'
import '../pages/Style/Coupon.scss'
import './Styles/CoupAddGivi.scss'
function CouponAddGivi(props) {
  const [givi_cate_id, setGivi_id] = useState(null)

  const [givi_name, setGivi_name] = useState(null)

  const [givi_num, setGivi_num] = useState(null)

  const [givi_img, setGiviFile] = useState(null)

  const [givi_img_upload, setGivi_Img] = useState(null)

  const form = React.createRef()

  const handleGiviChange = event => {
    console.log(event.target.files)
    setGiviFile(URL.createObjectURL(event.target.files[0]))
    console.log(event.target.files[0])
    setGivi_Img(event.target.files[0])
  }
  const addGiviData = async () => {
    const GiviFormData = {
      givi_cate_id,
      givi_name,
      givi_num,
      givi_img_upload,
    }
    props.addGiviDataAsync(GiviFormData)
  }
  return (
    <div className="container inpput-givi-chin bgSet bg-image-chin border-bottom border-left border-right">
      <div className="my-5"></div>

      <div className="row">
        <div className="col-sm-12 bgSet tab-main-add-content-chin text-color-chin input-style-chin">
          <h2 className="bgSet text-color-chin">贈品優惠設定</h2>
        </div>
      </div>
      <div className="row ml-5  input-style-chin text-center">
        <form name="addGiviForm" ref={form}>
          <div className="container">
            <div className="row mx-auto">
              <div className="col-lg-4 text-color-chin input-style-chin">
                <div className="form-group my-3 input-text-middle-chin">
                  <label htmlFor="nameInput">贈品種類(可自行設定)</label>
                  <input
                    type="text"
                    name="givi_cate_id"
                    className="form-control my-3"
                    id="nameInput"
                    aria-describedby="nameHelp"
                    onChange={event => setGivi_id(event.target.value)}
                  />
                </div>
                <div className="form-group my-3 input-text-middle-chin">
                  <label htmlFor="nameInput">贈品名稱</label>
                  <input
                    type="text"
                    name="givi_name"
                    className="form-control my-3"
                    id="nameInput"
                    aria-describedby="nameHelp"
                    onChange={event => setGivi_name(event.target.value)}
                  />
                </div>
                <div className="form-group my-3 input-text-middle-chin">
                  <label htmlFor="nameInput">贈品庫存</label>
                  <input
                    type="number"
                    name="givi_num"
                    className="form-control my-3"
                    id="nameInput"
                    aria-describedby="nameHelp"
                    placeholder="最大限制300個"
                    onChange={event => setGivi_num(event.target.value)}
                  />
                </div>
              </div>
              <div className="mx-3"></div>
              <div className="col-lg-4 text-color-chin my-3 input-style-chin">
                <div className="form-group input-text-middle-chin">
                  <label htmlFor="">贈品圖片(請上傳)</label>
                  <input
                    type="file"
                    name="givi_img"
                    className="form-control-file my-3"
                    onChange={event => {
                      handleGiviChange(event)
                    }}
                  />
                  <img width="300" height="300" src={givi_img} />
                </div>
              </div>
            </div>

            <div className="row text-center">
              <div className="col-lg-12 input-style-chin">
                <button
                  type="button"
                  className="btn btn-primary inpput-givi-chin text-color-chin"
                  onClick={() => {
                    addGiviData()
                  }}
                >
                  送出
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
const mapStateToProps = store => {
  return { giviAdd: store.sellerReducer.giviAdd }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addGiviDataAsync }, dispatch)
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CouponAddGivi)
)
