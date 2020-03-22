import React,{useState} from 'react'
import { addGiviDataAsync } from '../../../../actions/seller/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, withRouter } from 'react-router-dom'


function CouponAddGivi(props) {
    
    const [givi_cate_id,setGivi_id] = useState(null)

    const [givi_name, setGivi_name] = useState(null)
    
    const [givi_num,setGivi_num] = useState(null)

    const [givi_img,setGivi_Img] = useState(null)

    const form = React.createRef()
    
    const addGiviData = async () => {
        const GiviFormData = {
            givi_cate_id,
            givi_name,
            givi_num,
            givi_img,
        }
        props.addGiviDataAsync(GiviFormData)
      }
    return (
        <div className="container-fluid border-dark">
        <div className="row text-center">
        <form name="addGiviForm" ref={form}>
       
            <div className="col-lg-12 input-style-chin">
            <div className="form-group my-3 input-text-middle-chin">
                
                <label htmlFor="nameInput">贈品種類(可自行設定)</label>
                <input
                    type="text"
                    name="givi_cate_id"
                    className="form-control my-3"
                    id="nameInput"
                    aria-describedby="nameHelp"
                    onChange={event =>setGivi_id(event.target.value)}                  
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
                    onChange={event =>setGivi_name(event.target.value)}                  
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
                    onChange={event =>setGivi_num(event.target.value)}                  
                />
                </div>
            </div>
            <div className="col-lg-6 input-style-chin">
            <div className="form-group">
              <label htmlFor="">贈品圖片(請上傳)</label>
              <input
                type="file"
                name="givi_img"
                className="form-control-file"
                onChange={event => {
                  setGivi_Img(event.target.files[0])
                }}
              />
            </div>
          
            </div>
            <div className="row text-center">
                <div className="col-lg-12 input-style-chin">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                addGiviData()
              }}
            >
              送出
            </button>
            </div>
            </div>
            </form>
        </div>
    </div>
    )
}
const mapStateToProps = store => {
    return { giviAdd : store.sellerReducer.giviAdd  }
  }
  
  // 指示dispatch要綁定哪些action creators
  const mapDispatchToProps = dispatch => {
    return bindActionCreators({ addGiviDataAsync}, dispatch)
  }
  
  export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(CouponAddGivi)
  )

