import React, { useState, useEffect } from 'react'
import SweetAlert from '../../class/SellerClassComponents/Sweetalert2'

//引入redux元件
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//引入action
import {
  getEventTypeDataAsync,
  addEventDataAsync,
} from '../../../actions/event/event_Actions'
import {
  getCityDataAsync,
  getDistDataAsync,
} from '../../../actions/seller/index'

function AddEventContent(props) {
  const [addressCity, setAddressCity] = useState('') //儲存使用者選擇的縣市
  const [addressDist, setAddressDist] = useState('') //儲存使用者選擇的地區
  const [response, setResponse] = useState(false) //確認是否有收到response資料

  //儲存表單值的本地state
  const [eventName, setEventName] = useState('')
  const [eventType, setEventType] = useState('')
  const [eventTypeId, setEventTypeId] = useState('')
  const [eventLocation, setEventLocation] = useState('')
  const [eventFullLocation, setEventFullLocation] = useState('')
  const [eventStartDate, setEventStartDate] = useState('')
  const [eventEndDate, setEventEndDate] = useState('')
  const [eventDesc, setEventDesc] = useState('')
  const [eventNeedPeople, setEventNeedPeople] = useState('')
  const [eventImg, setEventImg] = useState('')

  useEffect(() => {
    props.getEventTypeDataAsync()
    props.getCityDataAsync()
  }, [])

  //每當response改變時就秀出提示視窗
  useEffect(() => {
    if (response) {
      if (props.memberActionResponse.status === 201) {
        SweetAlert.success('已成功新增一筆資料!')
        setResponse(false)
      } else {
        SweetAlert.errorAlert(
          props.memberActionResponse.status,
          props.memberActionResponse.msg
        )
        setResponse(false)
      }
    }
  }, [response])

  //每當本地state[addressDist]改變時就setEventLocation
  useEffect(() => {
    setEventLocation(
      document.querySelector('input[name="eventLocation"]').value
    )
  }, [addressDist])

  //新增一筆課程資料用的函式
  const addEventData = async () => {
    const EventFormData = {
      eventName,
      eventTypeId,
      eventType,
      eventLocation,
      eventFullLocation,
      eventStartDate,
      eventEndDate,
      eventDesc,
      eventNeedPeople,
      eventImg,
    }
    console.log(EventFormData)
    //跳出確認視窗
    SweetAlert.sendConfirm(
      '確定要送出嗎?',
      setResponse,
      true,
      props.addEventDataAsync,
      EventFormData
    )
  }

  return (
    <>
      <div className="addClassForm">
        <div className="row">
          <div className="col-xl-6 px-5">
            <form>
              <div className="form-group">
                <label htmlFor="">活動名稱</label>
                <input
                  type="text"
                  name="className"
                  className="form-control"
                  placeholder="15字以內"
                  onChange={event => {
                    setEventName(event.target.value) //設定活動名稱到本地state
                  }}
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="">活動類型</label>
                  <select
                    name="classTypeId"
                    className="form-control"
                    onChange={event => {
                      const index = event.target.selectedIndex
                      setEventType(event.target.options[index].textContent)
                      setEventTypeId(event.target.value) //設定活動類型到本地state
                    }}
                  >
                    <option value="">請選擇類型</option>
                    {props.eventTypeData.length > 0
                      ? props.eventTypeData.map((value, index) => {
                          return (
                            <option value={value.eventTypeId} key={index}>
                              {value.eventTypeName}
                            </option>
                          )
                        })
                      : ''}
                  </select>
                </div>
              </div>
              <label htmlFor="">活動地點</label>
              <div className="form-row">
                <div className="form-group col-md-5">
                  <select
                    className="form-control"
                    onChange={event => {
                      const city = event.target.value
                      props.getDistDataAsync(city) //取得相對應的地區資料
                      setAddressCity(city) //設定活動地點(縣市)到本地state
                      setAddressDist('')
                      setEventFullLocation('')
                      setEventLocation('')
                      document.querySelector(
                        'input[name="eventFullLocation"]'
                      ).value = ''
                    }}
                  >
                    <option value="">請選擇縣市</option>
                    {props.cityData.length > 0
                      ? props.cityData.map((value, index) => {
                          return (
                            <option value={value.name} key={index}>
                              {value.name}
                            </option>
                          )
                        })
                      : ''}
                  </select>
                </div>
                <div className="form-group col-md-5">
                  <select
                    className="form-control"
                    onChange={event => {
                      const dist = event.target.value
                      setAddressDist(dist) //設定活動地區到本地state
                      setEventFullLocation('')
                      setEventLocation('')
                      document.querySelector(
                        'input[name="eventFullLocation"]'
                      ).value = ''
                    }}
                  >
                    <option value="">請選擇地區</option>
                    {props.distData.length > 0
                      ? props.distData.map((value, index) => {
                          return (
                            <option value={value} key={index}>
                              {value}
                            </option>
                          )
                        })
                      : ''}
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <input
                    type="text"
                    name="eventLocation"
                    className="form-control"
                    placeholder=""
                    value={addressCity + addressDist}
                    readOnly
                  />
                </div>
                <div className="form-group col-md-8">
                  <input
                    type="text"
                    name="eventFullLocation"
                    className="form-control"
                    placeholder=""
                    onChange={event => {
                      setEventFullLocation(
                        addressCity + addressDist + event.target.value
                      ) //設定課程地點(完整)到本地state
                    }}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label htmlFor="">活動日期</label>
                  <input
                    type="datetime-local"
                    name="classStartDate"
                    className="form-control"
                    onChange={event => {
                      setEventStartDate(event.target.value) //設定活動日期到本地state
                    }}
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="">報名截止日期</label>
                  <input
                    type="datetime-local"
                    name="classEndDate"
                    className="form-control"
                    onChange={event => {
                      setEventEndDate(event.target.value) //設定報名截止日期到本地state
                    }}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="">徵求人數</label>
                  <input
                    type="number"
                    name="classMAXpeople"
                    className="form-control"
                    onChange={event => {
                      setEventNeedPeople(event.target.value) //設定最大人數到本地state
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="">上傳一張圖片</label>
                <input
                  type="file"
                  name="classImg"
                  className="form-control-file"
                  onChange={event => {
                    setEventImg(event.target.files[0]) //設定活動圖片到本地state
                    document.getElementById(
                      'blah-JY'
                    ).src = window.URL.createObjectURL(event.target.files[0])
                  }}
                />
              </div>
            </form>
          </div>
          <div className="col-xl-6 px-5">
            <div className="form-group classDescBox">
              <label htmlFor="">活動說明(3000字內)</label>
              <textarea
                className="form-control"
                name="classDesc"
                rows="5"
                onChange={event => {
                  setEventDesc(event.target.value) //設定活動說明到本地state
                }}
              ></textarea>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center mb-3">
            <img src="" alt="" id="blah-JY" />
          </div>
          <div className="col-12 btn-box d-flex">
            <button
              type="button"
              className="btn btn-outline-warning"
              onClick={() => {
                addEventData() //觸發新增活動資料的事件
              }}
            >
              送出
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

// 取得Redux中store的值
const mapStateToProps = store => {
  return {
    cityData: store.sellerReducer.cityData,
    distData: store.sellerReducer.distData,
    eventTypeData: store.eventReducer.eventTypeData,
    memberActionResponse: store.eventReducer.memberActionResponse,
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addEventDataAsync,
      getCityDataAsync,
      getDistDataAsync,
      getEventTypeDataAsync,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEventContent)
