import React, { useState, useEffect } from 'react'
import './Styles/CupOrder.scss'
import SwitchButton from './SwitchButton'
import SwitchPercent from './SwitchPercent'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Swal from 'sweetalert2'

import { insertSellerNewInsertCouponAsync } from '../../../actions/seller/index'
// import { getSellerNewInsertCouponAsync } from '../../../actions/index'

function CupOrder(props) {
  console.log(props)
  const [coup_cate_id, setCoup_cate_id] = useState('coup001')

  const [coup_name, setCoupName] = useState(null)

  //圖片的state鉤子
  const [coupfile, setCoupFile] = useState(null)

  //放進資料庫的圖片檔名

  const [coupDataFiles, setCoupDataFiles] = useState(null)
  //優惠券超過模式
  const [coupOver, setCoupOverMode] = useState(null)
  //折扣模式
  const [coupPercent, setCoupPercentMode] = useState(null)

  //優惠起始時間

  const [coupStart, setCoupStart] = useState(null)

  //優惠結束時間

  const [coupEnd, setCoupEnd] = useState(null)

  //優惠使用次數
  const [coupTimes, setCoupTimes] = useState(0)

  //優惠碼
  const code = props.order.coupon['code1']
  const [coupCode, setCoupCode] = useState(code)

  //優惠id
  const [coupId, setcoupId] = useState(props.order.coupon['coup_id'])

  const [price, setPrice] = useState({
    isEnable: false,
  })
  const [minusorpercent, setMinusorpercent] = useState({
    isEnable: false,
  })
  // const [error, setError] = useState(false)
  // const [errorMessages, setErrorMessages] = useState([])
  const inputstyle = {
    textAlign: 'right',
  }
  useEffect(() => {
    props.insertSellerNewInsertCouponAsync()
  }, [])

  // console.log(props.order.coupon["overprice"])
  const handleCoupChange = event => {
    console.log(event.target.files)
    setCoupFile(URL.createObjectURL(event.target.files[0]))
    console.log(event.target.files[0])
    setCoupDataFiles(event.target.files[0])
  }
  const toggleSwitchButton = () => {
    // 修改 state
    setPrice({ isEnable: !price.isEnable })
  }
  const toggleSwitchButtonMinus = () => {
    // 修改 state
    setMinusorpercent({ isEnable: !minusorpercent.isEnable })
  }
  useEffect(() => {
    if (price.isEnable == true && minusorpercent.isEnable == true) {
      setCoupCode('PM' + code)
    } else if (price.isEnable == false && minusorpercent.isEnable == true) {
      setCoupCode('IM' + code)
    } else if (price.isEnable == true && minusorpercent.isEnable == false) {
      setCoupCode('PI' + code)
    } else {
      setCoupCode('II' + code)
    }
  }, [price.isEnable, minusorpercent.isEnable])
  // let input = ( <input
  //             readOnly
  //             type="text"
  //             name="coup_code"
  //             className="form-control my-3"
  //             id="exampleInputPassword1"
  //             defaultValue={"PM" + coupCode}
  //             onChange={(event) => {setCoupCode(event.target.value)}}
  //                />)

  // if (price.isEnable == true && minusorpercent.isEnable == true) {
  //   input = <input
  //                     readOnly
  //                     type="text"
  //                     name="coup_code"
  //                     className="form-control my-3"
  //                     id="exampleInputPassword1"
  //                     defaultValue={"PM" + coupCode}
  //                     // onChange={(event) => {setCoupCode(event.target.value)}}
  //                 />;
  // } else if(price.isEnable == false && minusorpercent.isEnable == true){
  //   input = <input
  //           readOnly
  //           type="text"
  //           name="coup_code"
  //           className="form-control my-3"
  //           id="exampleInputPassword1"
  //           defaultValue={"IM" + coupCode}

  //       />;
  // } else if(price.isEnable == true && minusorpercent.isEnable == false){
  //   input = <input
  //             readOnly
  //             type="text"
  //             name="coup_code"
  //             className="form-control my-3"
  //             id="exampleInputPassword1"
  //             defaultValue={"PP" + coupCode}
  //             // onChange={(event) => {setCoupCode(event.target.value)}}
  //         />;
  // }else {
  //   input = <input
  //           readOnly
  //           type="text"
  //           name="coup_code"
  //           className="form-control my-3"
  //           id="exampleInputPassword1"
  //           defaultValue={"IP" + coupCode}
  //           // onChange={(event) => {setCoupCode(event.target.value)}}
  //       />;
  // }
  const handleSubmit = e => {
    let error = false
    let errorMessages = []

    // const form = event.target;
    // const coup_data = new FormData(form);

    // console.log(coup_data)

    if (!coup_name) {
      error = true
      errorMessages.push('優惠名稱沒填')
    }
    if (!coupfile) {
      error = true
      errorMessages.push('優惠圖片沒上傳')
    }
    if (!coupOver) {
      error = true
      errorMessages.push('超過模式沒填')
    }
    if (!coupPercent) {
      error = true
      errorMessages.push('折扣模式沒填')
    }
    if (!coupStart) {
      error = true
      errorMessages.push('折扣模式沒填')
    }
    if (!coupStart) {
      error = true
      errorMessages.push('開始時間沒填')
    }
    if (!coupEnd) {
      error = true
      errorMessages.push('結束時間沒填')
    }
    if (coup_name.length < 25) {
      error = true
      errorMessages.push('優惠名稱不超過25個字')
    }
    if (coup_name.length > 5) {
      error = true
      errorMessages.push('優惠名稱需要超過5個字')
    }
    if (!coupTimes) {
      error = true
      errorMessages.push('優惠券使用次數沒填')
    }

    console.log(
      coup_cate_id,
      coupId,
      coup_name,
      coupDataFiles,
      coupCode,
      coupOver,
      coupPercent,
      coupStart,
      coupEnd,
      coupTimes
    )
    const coupData = {
      coup_cate_id,
      coupId,
      coup_name,
      coupDataFiles,
      coupCode,
      coupOver,
      coupPercent,
      coupStart,
      coupEnd,
      coupTimes,
    }

    const coupon_fd = new FormData()
    coupon_fd.append('coup_cate_id', coupData.coup_cate_id)
    coupon_fd.append('coup_id', coupData.coupId)
    coupon_fd.append('coup_code', coupData.coupCode)
    coupon_fd.append('coup_name', coupData.coup_name)
    coupon_fd.append('img', coupData.coupDataFiles)
    coupon_fd.append('coup_over', coupData.coupOver)
    coupon_fd.append('coup_percent', coupData.coupPercent)
    coupon_fd.append('coup_start', coupData.coupStart)
    coupon_fd.append('coup_end', coupData.coupEnd)
    coupon_fd.append('coup_times', coupData.coupTimes)

    props.insertSellerNewInsertCouponAsync(coupon_fd, () => {
      if (
        coupData.coup_cate_id !== null &&
        coupData.coupId !== null &&
        coupData.coupCode !== null &&
        coupData.item !== null &&
        coupData.coup_name !== null &&
        coupData.coupDataFiles !== null &&
        coupData.coupOver !== null &&
        coupData.coupPercent !== null &&
        coupData.coupStart !== null &&
        coupData.coupEnd !== null &&
        coupData.coupTimes !== null
      ) {
        Swal.fire({
          position: 'middle',
          icon: 'success',
          title: '新增成功呢！',
          showConfirmButton: false,
          timer: 1500,
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: '難過的是...',
          text: '有些錯誤發生,欄位是空的,請再檢查一次哦!',
        })
      }
    })
    // console.log(props.insertSellerNewInsertCouponAsync());
  }

  return (
    <form name="form1 input-style-chin">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 input-style-chin">
            <div className="form-group my-3 input-text-middle-chin">
              <label htmlFor="nameInput">優惠券種類(無需自行輸入)</label>
              <input
                readOnly
                type="text"
                name="coup_cate_id"
                className="form-control my-3"
                id="nameInput"
                aria-describedby="nameHelp"
                defaultValue={coup_cate_id}
                onChange={event => setCoup_cate_id(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row mx-auto">
          <div className="col-sm-5 col-xl-5 input-style-chin">
            <div className="form-group my-3">
              <label htmlFor="nameInput">優惠券id(無需自行輸入)</label>
              <input
                readOnly
                type="text"
                name="coup_id"
                className="form-control my-3"
                id="nameInput"
                aria-describedby="nameHelp"
                defaultValue={coupId}
                onChange={event => setcoupId(event.target.value)}
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="nameInput">優惠券名</label>
              <input
                type="text"
                name="coup_name"
                className="form-control my-3"
                id="nameInput"
                aria-describedby="nameHelp"
                placeholder="請輸入優惠券名"
                onChange={event => setCoupName(event.target.value)}
              />
            </div>

            <div className="form-group my-3">
              <label htmlFor="nameInput">優惠圖設定</label>
              <input
                type="file"
                name="img"
                className="form-control my-3"
                id="nameInput"
                aria-describedby="nameHelp"
                // value={props.data.value}
                onChange={event => handleCoupChange(event)}
              />
              <img width="200" height="100" src={coupfile} />
            </div>
            <div className="form-group my-3">
              <label htmlFor="exampleInputPassword1">
                優惠券密碼(無需自行輸入)
              </label>

              <input
                readOnly
                type="text"
                name="coup_code"
                className="form-control my-3"
                id="exampleInputPassword1"
                // defaultValue={"PM" + coupCode}
                value={coupCode}
                // onChange={(event) => {setCoupCode(event.target.value)}}
              />
            </div>
          </div>
          <div className="mx-5"></div>
          <div className="col-sm-5 col-xl-5">
            <div className="form-group my-3">
              <div>
                <SwitchButton
                  type="button"
                  active={price.isEnable}
                  clicked={toggleSwitchButton}
                />
              </div>

              <label htmlFor="exampleInputPassword1"></label>
              {price.isEnable === true ? (
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">超過</span>
                  </div>
                  <input
                    name="coup_over"
                    style={inputstyle}
                    type="text"
                    className="form-control"
                    onChange={event => {
                      setCoupOverMode(event.target.value)
                    }}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">元</span>
                  </div>
                </div>
              ) : (
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">超過</span>
                  </div>
                  <input
                    name="coup_over"
                    style={inputstyle}
                    type="text"
                    onChange={event => {
                      setCoupOverMode(event.target.value)
                    }}
                    className="form-control"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">件</span>
                  </div>
                </div>
              )}
            </div>
            <div className="form-group my-3">
              <div>
                <SwitchPercent
                  type="button"
                  active={minusorpercent.isEnable}
                  clicked={toggleSwitchButtonMinus}
                />
              </div>

              <label htmlFor="exampleInputPassword1"></label>
              {minusorpercent.isEnable === true ? (
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">減</span>
                  </div>
                  <input
                    name="coup_percent"
                    style={inputstyle}
                    type="text"
                    className="form-control"
                    onChange={event => {
                      setCoupPercentMode(event.target.value)
                    }}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">元</span>
                  </div>
                </div>
              ) : (
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">打</span>
                  </div>
                  <input
                    name="coup_percent"
                    style={inputstyle}
                    type="text"
                    className="form-control"
                    onChange={event => {
                      setCoupPercentMode(event.target.value)
                    }}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">折</span>
                  </div>
                </div>
              )}
            </div>
            <div className="form-group my-3">
              <label htmlFor="nameInput">優惠起始時間:</label>
              <input
                type="datetime-local"
                name="coup_start"
                className="form-control my-3"
                id="nameInput"
                aria-describedby="nameHelp"
                placeholder="請輸入優惠起始"
                onChange={event => setCoupStart(event.target.value)}
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="nameInput">優惠結束時間:</label>
              <input
                type="datetime-local"
                name="coup_end"
                className="form-control my-3"
                id="nameInput"
                aria-describedby="nameHelp"
                placeholder="請輸入優惠結束"
                onChange={event => setCoupEnd(event.target.value)}
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="nameInput">優惠使用次數:</label>
              <input
                type="number"
                name="coup_times"
                className="form-control my-3"
                id="nameInput"
                aria-describedby="nameHelp"
                onChange={event => setCoupTimes(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-lg-12 input-style-chin">
            {/* <Link to="/coupon"> */}
            <button
              onClick={e => {
                e.preventDefault()
                handleSubmit()
              }}
              className="btn bgcolor-chin-2 text-white"
            >
              提交優惠券
            </button>

            {/* </Link> */}
          </div>
        </div>
      </div>
    </form>
  )
}
const mapStateToProps = store => {
  return { couponInsert: store.sellerReducer.couponInsert }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ insertSellerNewInsertCouponAsync }, dispatch)
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CupOrder)
)
