import React, { useEffect, useState } from 'react'

//引入自訂元件
import EventWeatherContent from './EventWeatherContent'

function EventDetailDataContent(props) {
  const [progress, setProgress] = useState(0)

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
                  src="http://127.0.0.1:5000/images/eventImg/noImg.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-4 eventInfoBox">
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
            <div className="col-12 weatherTitle">
              <h2>{props.eventData.eventFullLocation + ' 附近的天氣'}</h2>
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
            <button className="btn-join btn btn-raised btn-warning">
              參加揪團
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
