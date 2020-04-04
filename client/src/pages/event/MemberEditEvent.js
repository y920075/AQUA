import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'
import SweetAlert from '../../components/class/SellerClassComponents/Sweetalert2'

//引入redux元件
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//引入action
import {
  getMemberEventDetailDataAsync,
  editEventDataAsync,
  memberUnOtherJoinEventAsync,
  getEventTypeDataAsync,
} from '../../actions/event/event_Actions'
import { getCityDataAsync, getDistDataAsync } from '../../actions/seller/index'

function MemberEditEvent(props) {
  const [eventId, setEventId] = useState(props.match.params.eventId)
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
  //儲存表單值的本地state

  useEffect(() => {
    props.getMemberEventDetailDataAsync(eventId)
    props.getEventTypeDataAsync()
    props.getCityDataAsync()
  }, [])

  //每當response改變時就秀出提示視窗
  useEffect(() => {
    if (response) {
      if (props.memberActionResponse.status === 201) {
        SweetAlert.success('已成功變更一筆資料!')
        setResponse(false)
        props.getMemberEventDetailDataAsync(eventId)
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

  //把取得的資料放進本地state
  useEffect(() => {
    if (props.memberEventDetailData.eventData) {
      props.getDistDataAsync(
        props.memberEventDetailData.eventData[0].eventLocation.substr(0, 3)
      )

      setEventName(props.memberEventDetailData.eventData[0].eventName)
      setEventType(props.memberEventDetailData.eventData[0].eventType)
      setEventTypeId(props.memberEventDetailData.eventData[0].eventTypeId)
      setEventFullLocation(
        props.memberEventDetailData.eventData[0].eventFullLocation
      )
      setEventStartDate(props.memberEventDetailData.eventData[0].eventStartDate)
      setEventEndDate(props.memberEventDetailData.eventData[0].eventEndDate)
      setEventDesc(props.memberEventDetailData.eventData[0].eventDesc)
      setEventNeedPeople(
        props.memberEventDetailData.eventData[0].eventNeedPeople
      )
      setEventImg(props.memberEventDetailData.eventData[0].eventImg)
      setAddressCity(
        props.memberEventDetailData.eventData[0].eventLocation.substr(0, 3)
      )
      setAddressDist(
        props.memberEventDetailData.eventData[0].eventLocation.substr(3)
      )
    }
  }, [props.memberEventDetailData.eventData])

  //編輯一筆活動資料用的函式
  const editEventData = async () => {
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
    //跳出確認視窗
    SweetAlert.sendConfirm(
      '確定要送出嗎?',
      setResponse,
      true,
      props.editEventDataAsync,
      EventFormData,
      eventId
    )
  }

  return (
    <>
      <div className="container JY-container-member-editevent">
        <div className="row addClassForm py-3">
          <div className="col-xl-6">
            <div className="form-group">
              <label htmlFor="">活動名稱</label>
              <input
                type="text"
                name="className"
                className="form-control"
                placeholder="15字以內"
                defaultValue={eventName}
                onChange={event => {
                  setEventName(event.target.value) //設定課程名稱到本地state
                }}
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="">活動類型</label>
                <select
                  name="eventTypeId"
                  className="form-control"
                  defaultValue=""
                  onChange={event => {
                    const type = event.target.value
                    const index = event.target.selectedIndex
                    setEventTypeId(type)
                    setEventType(event.target.options[index].textContent) //設定活動類型到本地state
                  }}
                >
                  <option value="">請選擇類型</option>
                  {props.eventTypeData.length > 0
                    ? props.eventTypeData.map((value, index) => {
                        return (
                          <option
                            value={value.eventTypeId}
                            key={index}
                            selected={
                              eventTypeId === value.eventTypeId
                                ? 'selected'
                                : ''
                            }
                          >
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
              <div className="form-group col-md-6">
                <select
                  className="form-control"
                  defaultValue=""
                  onChange={event => {
                    const city = event.target.value
                    props.getDistDataAsync(city) //取得相對應的地區資料
                    setAddressCity(city) //設定課程地點(縣市)到本地state
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
                          <option
                            value={value.name}
                            key={index}
                            selected={
                              addressCity === value.name ? 'selected' : ''
                            }
                          >
                            {value.name}
                          </option>
                        )
                      })
                    : ''}
                </select>
              </div>
              <div className="form-group col-md-6">
                <select
                  className="form-control"
                  defaultValue=""
                  onChange={event => {
                    const dist = event.target.value
                    setAddressDist(dist) //設定課程地區到本地state
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
                          <option
                            value={value}
                            key={index}
                            selected={
                              addressDist === value.name ? 'selected' : ''
                            }
                          >
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
                  defaultValue={eventFullLocation}
                  onChange={event => {
                    setEventFullLocation(
                      addressCity + addressDist + event.target.value
                    ) //設定活動地點(完整)到本地state
                  }}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-8">
                <label htmlFor="">活動日期</label>
                <input
                  type="datetime-local"
                  name="eventStartDate"
                  className="form-control"
                  defaultValue={eventStartDate}
                  onChange={event => {
                    setEventStartDate(event.target.value) //設定活動日期到本地state
                  }}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-8">
                <label htmlFor="">報名截止日期</label>
                <input
                  type="datetime-local"
                  name="EventEndDate"
                  className="form-control"
                  defaultValue={eventEndDate}
                  onChange={event => {
                    setEventEndDate(event.target.value) //設定報名截止日期到本地state
                  }}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-8">
                <label htmlFor="">徵求人數</label>
                <input
                  type="number"
                  name="classMAXpeople"
                  className="form-control"
                  defaultValue={eventNeedPeople}
                  onChange={event => {
                    setEventNeedPeople(event.target.value) //設定徵求人數到本地state
                  }}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="">上傳一張圖片</label>
              <input
                type="file"
                name="eventImg"
                className="form-control-file"
                onChange={event => {
                  setEventImg(event.target.files[0]) //設定活動圖片到本地state
                }}
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="form-group classDescBox">
              <label htmlFor="">活動說明(3000字內)</label>
              <textarea
                className="form-control"
                name="eventDesc"
                rows="5"
                defaultValue={eventDesc}
                onChange={event => {
                  setEventDesc(event.target.value) //設定活動說明到本地state
                }}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 bg-white">
            <p>報名者名單</p>
          </div>
        </div>
        <div className="row mb-4 joinMemberList-JY">
          {props.memberEventDetailData.eventMemberData &&
          props.memberEventDetailData.eventMemberData.length > 0 ? (
            props.memberEventDetailData.eventMemberData.map((value, index) => {
              return (
                <div className="col-xl-3 col-6 mt-3">
                  <div class="card">
                    <div className="avatar">
                      <img
                        class="card-img-top"
                        src="http://127.0.0.1:5000/images/memberImg/DefaultImage.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title text-center">{value.loginId}</h5>
                      <div className="text-group">
                        <p className="card-text">
                          <i class="fas fa-envelope-square"></i>電子郵件
                        </p>
                        <p class="card-text">{value.email}</p>
                      </div>
                      <div className="text-group">
                        <p className="card-text">
                          <i class="fas fa-mobile-alt"></i>手機號碼
                        </p>
                        <p class="card-text">{value.mobileNumber}</p>
                      </div>
                      <div className="text-group">
                        <p className="card-text">
                          <i class="fas fa-clipboard"></i>備註訊息
                        </p>
                        <p class="card-text">{value.memberMemo}</p>
                      </div>
                      <div className="d-flex justify-content-end">
                        <button
                          type="button"
                          class="btn btn-warning"
                          data-memberId={value.memberId}
                          onClick={event => {
                            const memberId = event.target.getAttribute(
                              'data-memberId'
                            )
                            console.log(memberId)
                            SweetAlert.sendConfirm(
                              '確定要取消嗎?',
                              setResponse,
                              true,
                              props.memberUnOtherJoinEventAsync,
                              eventId,
                              memberId
                            )
                          }}
                        >
                          <i class="fas fa-user-minus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <div className="col-12">
              <p className="text-center">目前還沒有人報名喔~</p>
            </div>
          )}

          <div className="col-12 btn-box d-flex mt-4">
            <button
              type="button"
              className="btn btn-outline-warning"
              onClick={() => {
                //觸發編輯活動資料的事件
                editEventData()
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
    memberEventDetailData: store.eventReducer.memberEventDetailData,
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getCityDataAsync,
      getDistDataAsync,
      getEventTypeDataAsync,
      getMemberEventDetailDataAsync,
      editEventDataAsync,
      memberUnOtherJoinEventAsync,
    },
    dispatch
  )
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MemberEditEvent)
)
