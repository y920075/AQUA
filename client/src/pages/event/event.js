import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//引入redux元件
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//引入action
import {
  getEventDataAsync,
  getEventTypeDataAsync,
} from '../../actions/event/event_Actions'

//引入自訂元件
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'

function EventList(props) {
  const [eventData, serEventData] = useState([])

  useEffect(() => {
    props.getEventDataAsync()
    props.getEventTypeDataAsync()
  }, [])

  useEffect(() => {
    serEventData(props.eventData.result)
  }, [props.eventData])

  return (
    <>
      <Header />
      <Banner BannerImgSrc="./images/ClassBanner.jpg" />
      <div className="container JY-event-container">
        <div className="row d-flex searchBox">
          <div className="col-xl col-12">
            <select name="type" className="form-control">
              <option value="">選擇活動類別</option>
              {props.eventTypeData.length > 0
                ? props.eventTypeData.map(value => {
                    return (
                      <option value={value.eventTypeName}>
                        {value.eventTypeName}
                      </option>
                    )
                  })
                : ''}
            </select>
          </div>
          <div className="col-xl col-12">
            <select name="sort" className="form-control">
              <option value="">選擇排序方式</option>
              <option value="eventStartDate,asc">日期由近到遠</option>
              <option value="eventStartDate,desc">日期由遠到近</option>
              <option value="eventNOWpeople,asc">名額由少至多</option>
              <option value="eventNOWpeople,desc">名額由多至少</option>
            </select>
          </div>
          <div className="col-xl col-12">
            <input
              type="text"
              className="form-control searchInput"
              placeholder="搜索主題"
            ></input>
          </div>
          <div className="col-xl col-12">
            <button
              type="button"
              className="btn-search btn btn-outline-secondary"
            >
              搜索
            </button>
          </div>
        </div>
        <div className="row">
          {eventData
            ? eventData.map(value => {
                let status = '火熱揪團中'
                let progress =
                  (value.eventNowPeople / value.eventNeedPeople) * 100

                let nowDate = new Date().getTime()
                if (value.eventNeedPeople === value.eventNowPeople)
                  status = '已額滿'

                return (
                  <div className="col-xl-3 col-10 eventInfoBox">
                    <div className="eventContentBox">
                      <div className="eventImgBox">
                        <img
                          src={
                            'http://127.0.0.1:5000/images/eventImg/' +
                            value.eventImg
                          }
                          alt=""
                        />
                      </div>
                      <div className="eventDetailBox">
                        <h2>{value.eventName}</h2>
                        <ul className="d-flex">
                          <li>
                            <img src="/images/eventImg/icons/type.svg" alt="" />
                            {value.eventType}
                          </li>
                          <li>
                            <img
                              src="/images/eventImg/icons/local.svg"
                              alt=""
                            />
                            {value.eventLocation}
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <img
                              src="/images/eventImg/icons/member.svg"
                              alt=""
                            />
                            {value.loginId}
                          </li>
                          <li>
                            <img src="/images/eventImg/icons/date.svg" alt="" />
                            報名期限：{value.eventEndDate} 止
                          </li>
                          <li>
                            <img src="/images/eventImg/icons/date.svg" alt="" />
                            活動日期：{value.eventStartDate}
                          </li>
                        </ul>
                        <p className="status">火熱揪團中</p>
                        <p className="quota">
                          徵求 <span>{value.eventNeedPeople}</span> 人 還剩{' '}
                          <span>
                            {value.eventNeedPeople - value.eventNowPeople}
                          </span>{' '}
                          名額
                        </p>
                        <div className="progress_container">
                          <div className="progress progress-danger progress-striped active">
                            <div
                              className="bar"
                              style={{ width: progress + '%' }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button className="btn-more btn btn-raised btn-warning">
                          了解詳情
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })
            : ''}
        </div>
        {/* row */}
      </div>
      {/* container */}
    </>
  )
}

// 取得Redux中store的值
const mapStateToProps = store => {
  return {
    eventData: store.eventReducer.eventData,
    eventTypeData: store.eventReducer.eventTypeData,
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { getEventDataAsync, getEventTypeDataAsync },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList)
