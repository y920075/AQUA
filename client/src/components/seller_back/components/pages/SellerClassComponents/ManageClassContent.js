import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from './Sweetalert2'

import Loading from '../../../../class/Loading' //載入中圖示
import EventPageButtons from '../../../../event/EventPageButtons'

/*
  傳入參數
  sellerClassData = 此賣家自己擁有的全部課程資料
  delClassDataResponse = 刪除課程資料後，後端回傳的訊息

  傳入方法
  getSellerClassData = 取得賣家的全部課程資料
  delClassDataAsunc = 刪除一筆課程資料

  2020-03-22
*/

function ManageClassContent(props) {
  const [hasLoading, setHasLoading] = useState(false)
  const [response, setResponse] = useState(false) //確認是否有收到刪除動作的response資料

  //每次資料有變動就將新資料存進本地state
  useEffect(() => {
    //設定載入中為true
    setHasLoading(true)
    setTimeout(() => {
      if (props.sellerClassData.status) {
        setHasLoading(false)
      }
    }, 500)
  }, [props.sellerClassData])

  //每當response改變時就秀出提示視窗
  useEffect(() => {
    if (response) {
      if (props.delClassDataResponse.status === 201) {
        SweetAlert.success('已成功刪除一筆資料!')
        setResponse(false)
        props.getSellerClassData()
      } else {
        SweetAlert.errorAlert(
          props.delClassDataResponse.status,
          props.delClassDataResponse.msg
        )
        setResponse(false)
      }
    }
  }, [response])

  const delClassData = classId => {
    SweetAlert.sendConfirm(
      '確定要刪除嗎?',
      props.delClassDataAsunc(classId),
      setResponse,
      true
    )
  }

  return (
    <>
      <div className="row">
        <div className="col-xl-3">
          <div className="sortSelect">
            <select
              name="sort"
              className="form-control"
              onChange={() => {
                props.getSellerClassData()
              }}
            >
              <option value="">排序方式</option>
              <option value="classNOWpeople,desc">報名人數多至少</option>
              <option value="classNOWpeople,asc">報名人數少至多</option>
              <option value="classStartDate,asc">開課日期近至遠</option>
              <option value="classStartDate,desc">開課日期遠至近</option>
            </select>
          </div>
        </div>
      </div>
      {hasLoading ? (
        <Loading />
      ) : (
        <>
          <div className="row">
            {!props.sellerClassData.status ? (
              <h2>查無相關資料</h2>
            ) : (
              props.sellerClassData.result.map((value, index) => {
                return (
                  <>
                    <div className="col-sm-4">
                      <div className="card" key={index}>
                        <div className="classSellerImgBox card-img-top">
                          <img
                            src={
                              'http://127.0.0.1:5000/images/classImg/' +
                              value.classImg
                            }
                            alt=""
                          />
                        </div>
                        <div className="card-body">
                          <h2 className="card-title">{value.className}</h2>
                          <ul className="">
                            <li>
                              <img
                                src="../images/classImg/icons/type.svg"
                                alt=""
                              />
                              {value.classType}
                            </li>
                            <li>
                              <img
                                src="../images/classImg/icons/level.svg"
                                alt=""
                              />
                              {value.classLevel}
                            </li>
                          </ul>
                          <ul className="d-flex">
                            <li>
                              <img
                                src="../images/classImg/icons/date.svg"
                                alt=""
                              />
                              {value.classStartDate}
                            </li>
                            <li>
                              <img
                                src="../images/classImg/icons/local.svg"
                                alt=""
                              />
                              {value.classLocation}
                            </li>
                          </ul>
                          <ul className="d-flex">
                            <li>{'報名費用：' + value.classPrice + '元'}</li>
                            <li>
                              {'現在已報名 ' + value.classNowPeople + ' 人'}
                            </li>
                          </ul>
                          <div className="buttons d-flex">
                            <Link
                              className="btn btn-outline-primary"
                              data-id={value.classId}
                            >
                              <i
                                className="fas fa-edit"
                                data-id={value.classId}
                              ></i>
                            </Link>
                            <button
                              className="btn btn-outline-primary"
                              data-id={value.classId}
                              onClick={event => {
                                const classId = event.target.getAttribute(
                                  'data-id'
                                )
                                delClassData(classId)
                              }}
                            >
                              <i
                                className="far fa-trash-alt"
                                data-id={value.classId}
                              ></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            )}
          </div>
          <EventPageButtons
            totalPages={props.sellerClassData.totalPages}
            getDataFromServer={props.getSellerClassData}
          />
        </>
      )}
    </>
  )
}

export default ManageClassContent
