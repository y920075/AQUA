import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

//傳入參數 props.eventData = 存放活動資料的陣列
//2020-03-21
function EventDataList(props) {
  return (
    <>
      <div className="row">
        {props.eventData && props.eventData.length > 0 ? (
          props.eventData.map((value, index) => {
            let progress = (value.eventNowPeople / value.eventNeedPeople) * 100

            return (
              <Fade right key={index}>
                <div
                  className={
                    index === 0
                      ? 'col-xl-12 col-10 eventInfoBox eventMapList-JY mt-0'
                      : 'col-xl-12 col-10 eventInfoBox eventMapList-JY boxHide'
                  }
                  key={index}
                  data-eventId={value.eventId}
                >
                  <div className="eventContentBox d-flex">
                    <div className="eventImgBox col-7">
                      <img
                        src={
                          'http://127.0.0.1:5000/images/eventImg/' +
                          value.eventImg
                        }
                        alt=""
                      />
                    </div>
                    <div className="eventDetailBox col-5">
                      <h2 className="eventTitle">{value.eventName}</h2>
                      <ul className="d-flex">
                        <li>
                          <img src="/images/eventImg/icons/type.svg" alt="" />
                          {value.eventType}
                        </li>
                        <li>
                          <img src="/images/eventImg/icons/local.svg" alt="" />
                          {value.eventLocation}
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <img src="/images/eventImg/icons/member.svg" alt="" />
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
                      <p className="quota">
                        徵求 <span>{value.eventNeedPeople}</span> 人 還剩{' '}
                        <span>
                          {value.eventNeedPeople - value.eventNowPeople}
                        </span>{' '}
                        名額
                      </p>
                      <div
                        className="progress_container"
                        data-progress={parseInt(progress) + '%'}
                      >
                        <div className="progress progress-danger progress-striped active">
                          <div
                            className="bar"
                            style={{ width: progress + '%' }}
                          ></div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <Link
                          className="btn-more btn btn-raised btn-warning mt-3"
                          to={'/event/' + value.eventId}
                        >
                          了解詳情
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            )
          })
        ) : (
          <div className="col-12">
            <h2 className="text-white text-center">查無相關資料</h2>
          </div>
        )}
      </div>
    </>
  )
}

export default EventDataList
