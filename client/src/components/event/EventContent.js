import React from 'react'

function EventContent(props) {
  return (
    <>
      <div className="row">
        {props.eventData && props.eventData.length > 0 ? (
          props.eventData.map((value, index) => {
            let status = '火熱揪團中'
            let progress = (value.eventNowPeople / value.eventNeedPeople) * 100

            if (value.eventNeedPeople === value.eventNowPeople)
              status = '已額滿'

            if (new Date(value.eventEndDate).getTime() < new Date().getTime())
              status = '已過期'

            return (
              <div className="col-xl-3 col-10 eventInfoBox" key={index}>
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
                    <p className="status">{status}</p>
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
        ) : (
          <h2>查無相關資料</h2>
        )}
      </div>
    </>
  )
}

export default EventContent
