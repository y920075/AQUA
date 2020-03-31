import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from '../class/SellerClassComponents/Sweetalert2'

//引入自訂元件
import EventWeatherContent from './EventWeatherContent' //天氣資料的框框

//傳入參數 props.eventData = 活動詳細資料
//傳入參數 props.weatherData = 當地天氣資料
//2020-03-21
function EventDetailDataContent(props) {
  const [progress, setProgress] = useState(0) //計算進度條用的state

  const [response, setResponse] = useState(false) //確認是否有收到response資料

  //每當response改變時就秀出提示視窗
  useEffect(() => {
    if (response) {
      if (props.memberJoinEventResponse.status === 201) {
        SweetAlert.success('報名成功!')
        setResponse(false)
      } else {
        SweetAlert.errorAlert(
          props.memberJoinEventResponse.status,
          props.memberJoinEventResponse.msg
        )
        setResponse(false)
      }
    }
  }, [response])

  useEffect(() => {
    const progressNum =
      (props.eventData.eventNowPeople / props.eventData.eventNeedPeople) * 100
    setProgress(progressNum)
  }, [props.eventData])

  return (
    <>
      {props.eventData ? (
        <>
          <div className="row eventDataBox">
            <div className="col-xl-6">
              <div className="eventImgBox">
                <img
                  src={
                    'http://127.0.0.1:5000/images/eventImg/' +
                    props.eventData.eventImg
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-5 eventInfoBox">
              <h1>{props.eventData.eventName}</h1>
              <p>
                <img src="/images/eventImg/icons/detail/member.svg" alt="" />
                {props.eventData.loginId + ' 發起的揪團'}
              </p>
              <p>
                <img src="/images/eventImg/icons/detail/date.svg" alt="" />
                {'報名期限：' + props.eventData.eventEndDate}
              </p>
              <p>
                <img src="/images/eventImg/icons/detail/date.svg" alt="" />
                {'活動日期：' + props.eventData.eventStartDate}
              </p>
              <p>
                <img src="/images/eventImg/icons/detail/local.svg" alt="" />
                {'活動地點：' + props.eventData.eventFullLocation}
              </p>
              <p className="quota">
                徵求 <span>{props.eventData.eventNeedPeople}</span> 人 還剩{' '}
                <span>
                  {props.eventData.eventNeedPeople -
                    props.eventData.eventNowPeople}
                </span>{' '}
                名額
              </p>

              <div
                className="progress_container"
                data-progress={parseInt(progress) + '%'}
              >
                <div className="progress progress-danger progress-striped active">
                  <div className="bar" style={{ width: progress + '%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 weatherTitle d-flex justify-content-center">
              <h2>{props.eventData.eventFullLocation + ' 附近的天氣'}</h2>
              <a
                href={`https://www.windy.com/${props.eventData.eventLocation_lat}/${props.eventData.eventLocation_lng}waves?waves,24.112,121.841,8,m:el8ajyf`}
                target="_blank"
              >
                查看更詳細的天氣
              </a>
            </div>
          </div>
          <EventWeatherContent weatherData={props.weatherData} />
          <div className="row">
            <div className="col-12 weatherTitle">
              <h2>活動說明</h2>
            </div>
          </div>
          <div className="eventDesc">
            <pre>{props.eventData.eventDesc}</pre>
          </div>
          <div className="d-flex justify-content-center btn-box">
            <button
              className="btn-join btn btn-raised btn-warning"
              disabled={
                props.eventData.eventNowPeople >=
                  props.eventData.eventNeedPeople ||
                new Date(props.eventData.eventStartDate).getTime() <
                  new Date().getTime()
                  ? true
                  : false
              }
              onClick={() => {
                let msgArr = [
                  {
                    title: '輸入備註訊息',
                    text: '輸入你想給主辦者的備註 ex: 只吃素食等',
                    input: 'text',
                  },
                  {
                    title: '確認報名資訊',
                    html: `<h2>主題：${props.eventData.eventName}</h2>
                            <p>類型：${props.eventData.eventType}</p>
                            <p>活動地點：${props.eventData.eventFullLocation}</p>
                            <p>開始日期：${props.eventData.eventStartDate}</p>
                            `,
                  },
                ]
                SweetAlert.questionAlert(
                  ['1', '2'],
                  msgArr,
                  setResponse,
                  true,
                  props.memberJoinEventAsync,
                  props.eventData.eventId
                )
              }}
            >
              {props.eventData.eventNowPeople >= props.eventData.eventNeedPeople
                ? '已額滿'
                : '參加揪團'}
            </button>
          </div>
        </>
      ) : (
        ''
      )}
    </>
  )
}

export default EventDetailDataContent
