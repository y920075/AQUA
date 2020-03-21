import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Loading from '../../../../class/Loading' //載入中圖示
import EventPageButtons from '../../../../event/EventPageButtons'

function ManageClassContent(props) {
  const [hasLoading, setHasLoading] = useState(false)

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
          <div class="row">
            {!props.sellerClassData.status ? (
              <h2>查無相關資料</h2>
            ) : (
              props.sellerClassData.result.map((value, index) => {
                return (
                  <>
                    <div class="col-sm-4">
                      <div class="card">
                        <div className="classSellerImgBox card-img-top">
                          <img
                            src="http://127.0.0.1:5000/images/classImg/noImg.jpg"
                            alt=""
                          />
                        </div>
                        <div class="card-body">
                          <h2 class="card-title">{value.className}</h2>
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
                            <Link class="btn btn-outline-primary">
                              <i class="fas fa-edit"></i>
                            </Link>
                            <Link class="btn btn-outline-primary">
                              <i class="far fa-trash-alt"></i>
                            </Link>
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
