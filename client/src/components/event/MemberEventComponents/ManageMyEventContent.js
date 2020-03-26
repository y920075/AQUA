import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from '../../class/SellerClassComponents/Sweetalert2' //自訂提示窗

import Loading from '../../class/Loading' //載入中圖示
import EventPageButtons from '../EventPageButtons' //頁面按鈕
import SwitchButton from './SwitchButton' //切換過期資料按鈕

/*
  傳入參數
    nowClickTag = 現在點擊的頁籤
    memberEventDataSelf = 會員自己發起的所有活動資料/會員報名的所有活動資料 依據nowClickTag而有不同
    delEventDataResponse = 會員刪除活動之後，後端回傳的資料
    memberUnJoinEventResponse = 會員取消報名資後，後端回傳的資料
    
    傳入方法
    delEventDataAsync = 刪除活動的action
    memberGetEventDataAsync = 取得資料的action
    memberUnJoinEventAsync = 取消報名的action
  
    2020-03-24
*/

function ManageMyEventContent(props) {
  const [hasLoading, setHasLoading] = useState(true) //是否載入中
  const [response, setResponse] = useState(false) //確認是否有收到刪除動作的response資料
  const [unJoinResponse, setUnJoinResponse] = useState(false) //確認是否有收到取消報名動作的response資料
  const [isEnable, setIsEnable] = useState(false) //是否按下 "包含已過期資料的按鈕"

  //每次點擊頁籤就提示載入中並取得新資料
  useEffect(() => {
    setHasLoading(true)
    props.memberGetEventDataAsync('', '', props.nowClickTag, isEnable)
  }, [props.nowClickTag])

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
        props.memberGetEventDataAsync('', '', props.nowClickTag, isEnable) //刪除完成的時候刷新一次資料
      } else {
        SweetAlert.errorAlert(
          props.delEventDataResponse.status,
          props.delEventDataResponse.msg
        )
        setResponse(false)
      }
    }
  }, [response])

  //每當unJoinResponse改變時就秀出提示視窗
  useEffect(() => {
    if (unJoinResponse) {
      if (props.memberUnJoinEventResponse.status === 201) {
        SweetAlert.success('已成功取消報名!')
        setUnJoinResponse(false)
        props.memberGetEventDataAsync('', '', props.nowClickTag, isEnable) //取消報名完成的時候刷新一次資料
      } else {
        SweetAlert.errorAlert(
          props.memberUnJoinEventResponse.status,
          props.memberUnJoinEventResponse.msg
        )
        setUnJoinResponse(false)
      }
    }
  }, [unJoinResponse])

  //每次按鈕被點擊時，就取得新資料
  useEffect(() => {
    getMemberEventData()
  }, [isEnable])

  //向伺服器取得新資料
  const getMemberEventData = page => {
    //取得select的值，作為類型、等級的篩選參數
    const sort = document.querySelector('select[name="sort"]').value
    props.memberGetEventDataAsync(sort, page, props.nowClickTag, isEnable)
  }

  //每次點擊SwitchButton就改變state
  const toggleSwitchButton = () => {
    setIsEnable(!isEnable)
  }

  return (
    <>
      <div className="event-select">
        <div className="d-flex justify-content-end align-items-center">
          <div className="d-flex switchbutton-jy align-items-center">
            <p>包含已過期資料</p>
            <SwitchButton
              type="button"
              active={isEnable}
              clicked={toggleSwitchButton}
            />
          </div>

          <select
            name="sort"
            className="form-control col-sm-2 select-jy"
            onChange={() => {
              getMemberEventData()
            }}
          >
            <option value="">排序方式</option>
            <option value="eventStartDate,asc">日期由近到遠</option>
            <option value="eventStartDate,desc">日期由遠到近</option>
            <option value="eventNowPeople,asc">報名人數由少至多</option>
            <option value="eventNowPeople,desc">報名人數由多至少</option>
          </select>
        </div>
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
                        className="card-header  py-1 d-flex justify-content-between align-items-center card-header-jy"
                        style={{ background: '#c4cad1' }}
                      >
                        <p className="itemId-JY">
                          {'活動編號：' + value.eventId}
                        </p>
                        {props.nowClickTag === 2 ? (
                          <button
                            type="button"
                            className="btn btn-info"
                            disabled={
                              new Date(value.eventStartDate).getTime() <
                              new Date().getTime()
                                ? true
                                : false
                            }
                            onClick={() => {
                              const eventId = value.eventId
                              SweetAlert.sendConfirm(
                                '你確定要取消報名嗎?',
                                setUnJoinResponse,
                                true,
                                props.memberUnJoinEventAsync,
                                eventId
                              )
                            }}
                          >
                            取消報名
                          </button>
                        ) : (
                          ''
                        )}
                      </div>
                      <div className="row eventContent-MEMBER-JY">
                        <div className="col-sm-5">
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
                            {props.nowClickTag === 2 ? (
                              <p className="card-text">
                                {'主辦者：' + value.loginId}
                              </p>
                            ) : (
                              ''
                            )}
                            {props.nowClickTag === 2 ? (
                              <Link
                                to={'/event/' + value.eventId}
                                className="btn btn-primary"
                              >
                                詳情
                              </Link>
                            ) : (
                              <div>
                                <Link
                                  to={'/memberuser/event/edit/' + value.eventId}
                                  className="btn btn-primary"
                                >
                                  <i
                                    className="fas fa-edit"
                                    data-id={value.eventId}
                                  ></i>
                                </Link>
                                <button
                                  className="btn btn-primary"
                                  disabled={
                                    new Date(value.eventStartDate).getTime() <
                                    new Date().getTime()
                                      ? true
                                      : false
                                  }
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
                            )}
                          </div>
                        </div>
                        <div className="col-sm-7">
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
                <h2 className="text-white">查無相關資料</h2>
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
