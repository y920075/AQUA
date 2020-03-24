import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from '../../class/SellerClassComponents/Sweetalert2'

import Loading from '../../class/Loading' //載入中圖示
import EventPageButtons from '../EventPageButtons'

/*
  傳入參數
  

  傳入方法
  

  
*/

function ManageMyEventContent(props) {
  const [hasLoading, setHasLoading] = useState(true)
  const [response, setResponse] = useState(false) //確認是否有收到刪除動作的response資料

  //每次資料有變動就將新資料存進本地state
  useEffect(() => {
    //設定載入中為true
    setHasLoading(true)
    setTimeout(() => {
      if (props.memberEventDataSelf.status) {
        setHasLoading(false)
      }
    }, 500)
  }, [props.memberEventDataSelf])

  //每當response改變時就秀出提示視窗
  useEffect(() => {
    if (response) {
      if (props.delEventDataResponse.status === 201) {
        SweetAlert.success('已成功刪除一筆資料!')
        setResponse(false)
        props.memberGetEventDataAsync()
      } else {
        SweetAlert.errorAlert(
          props.delEventDataResponse.status,
          props.delEventDataResponse.msg
        )
        setResponse(false)
      }
    }
  }, [response])

  //向伺服器取得新資料
  const getMemberEventData = page => {
    //取得select的值，作為類型、等級的篩選參數
    const sort = document.querySelector('select[name="sort"]').value
    props.memberGetEventDataAsync(sort, page)
  }

  return (
    <>
      <div className="event-select">
        <select
          name="sort"
          className="form-control"
          onChange={() => {
            getMemberEventData()
          }}
        >
          <option value="">選擇排序方式</option>
          <option value="eventStartDate,asc">日期由近到遠</option>
          <option value="eventStartDate,desc">日期由遠到近</option>
          <option value="eventNowPeople,asc">報名人數由少至多</option>
          <option value="eventNowPeople,desc">報名人數由多至少</option>
        </select>
        <div className="eventhistory">
          {hasLoading ? (
            <Loading />
          ) : (
            <>
              {props.memberEventDataSelf.status &&
              props.memberEventDataSelf.status !== 404 ? (
                props.memberEventDataSelf.eventData.map((value, index) => {
                  return (
                    <div className="card mt-3" key={index}>
                      <div
                        className="card-header"
                        style={{ background: '#c4cad1' }}
                      >
                        {'活動編號：' + value.eventId}
                      </div>
                      <div className="row">
                        <div className="col-sm-8">
                          <div className="card-body">
                            <h5 className="card-title">{value.eventName}</h5>
                            <p className="card-text">
                              {'活動類型：' + value.eventType}
                            </p>
                            <p className="card-text">
                              {'徵求人數：' + value.eventNeedPeople}
                            </p>
                            <p className="card-text">
                              {'已報名人數：' + value.eventNowPeople}
                            </p>
                            <p className="card-text">
                              {'活動日期：' + value.eventStartDate}
                            </p>
                            <p className="card-text">
                              {'活動地點：' + value.eventLocation}
                            </p>
                            <Link to="#" className="btn btn-primary">
                              <i
                                className="fas fa-edit"
                                data-id={value.eventId}
                              ></i>
                            </Link>
                            <button
                              className="btn btn-primary"
                              data-id={value.eventId}
                              onClick={event => {
                                const eventId = event.target.getAttribute(
                                  'data-id'
                                )
                                SweetAlert.sendConfirm(
                                  '你確定要刪除這筆活動嗎?',
                                  setResponse,
                                  true,
                                  props.delEventDataAsync,
                                  eventId
                                )
                              }}
                            >
                              <i
                                className="far fa-trash-alt"
                                data-id={value.eventId}
                              ></i>
                            </button>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <img
                            className="eventimg-hs"
                            src={
                              'http://127.0.0.1:5000/images/eventImg/' +
                              value.eventImg
                            }
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  )
                })
              ) : (
                <h2>查無相關資料</h2>
              )}
            </>
          )}
        </div>
        {hasLoading ? (
          ''
        ) : (
          <EventPageButtons
            totalPages={props.memberEventDataSelf.totalPages}
            getDataFromServer={getMemberEventData}
          />
        )}
      </div>
    </>
  )
}

export default ManageMyEventContent
