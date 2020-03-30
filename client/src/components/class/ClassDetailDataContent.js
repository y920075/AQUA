import React, { useState, useEffect } from 'react'
import SweetAlert from './SellerClassComponents/Sweetalert2'
/*
  傳入參數
  props.classData = 課程資料列表
  props.classCoachData = 教練資料列表
  memberJoinClassResponse = 會員報名完成之後，後端回傳的資料

  傳入方法
  memberJoinClassAsync = 會員報名用的action
  2020-03-23
*/
function ClassDetailDataContent(props) {
  const [response, setResponse] = useState(false) //確認是否有收到response資料

  //每當response改變時就秀出提示視窗
  useEffect(() => {
    if (response) {
      if (props.memberJoinClassResponse.status === 201) {
        SweetAlert.success('報名成功!')
        setResponse(false)
      } else {
        SweetAlert.errorAlert(
          props.memberJoinClassResponse.status,
          props.memberJoinClassResponse.msg
        )
        setResponse(false)
      }
    }
  }, [response])

  return (
    <>
      {props.classData.length <= 0 ? (
        <h1>查無此筆課程資料</h1>
      ) : (
        <>
          <h1>{props.classData.className}</h1>
          <div className="row d-flex classDataBox">
            <div className="col-xl-6 classImgBox">
              <img
                src={`http://127.0.0.1:5000/images/classImg/${props.classData.classImg}`}
                alt=""
              />
            </div>
            <div className="col-xl-4 classInfoBox">
              <ul className="d-flex">
                <li>
                  <img src="/images/classImg/icons/detail/type.svg" alt="" />
                  {props.classData.classType}
                </li>
                <li>
                  <img src="/images/classImg/icons/detail/level.svg" alt="" />
                  {props.classData.classLevel}
                </li>
              </ul>
              <ul>
                <li>
                  <img src="/images/classImg/icons/detail/date.svg" alt="" />
                  {'開訓日期：' + props.classData.classStartDate}
                </li>
                <li>
                  <img src="/images/classImg/icons/detail/date.svg" alt="" />
                  {'結訓日期：' + props.classData.classEndDate}
                </li>
              </ul>
              <p>
                <img src="/images/classImg/icons/detail/local.svg" alt="" />
                {'開課地點：' + props.classData.classFullLocation}
              </p>
              <ul className="d-flex">
                <li>{'人數上限：' + props.classData.classMAXpeople}</li>
                <li>{'目前人數：' + props.classData.classNOWpeople}</li>
              </ul>
              <h1 className="classPrice">{'$' + props.classData.classPrice}</h1>
              <button
                className="btn-join btn btn-raised btn-warning"
                disabled={
                  props.classData.classNOWpeople >=
                    props.classData.classMAXpeople ||
                  new Date(props.classData.classStartDate).getTime() <
                    new Date().getTime()
                    ? true
                    : false
                }
                onClick={() => {
                  let msgArr = [
                    {
                      title: '輸入備註訊息',
                      text: '輸入你想給賣家的備註 ex: 只吃素食等',
                      input: 'text',
                    },
                    {
                      title: '確認課程資訊',
                      html: `<h2>主題：${props.classData.className}</h2>
                            <p>類型：${props.classData.classType}</p>
                            <p>等級：${props.classData.classLevel}</p>
                            <p>開訓日期：${props.classData.classStartDate}</p>
                            <p>結訓日期：${props.classData.classEndDate}</p>
                            `,
                    },
                  ]
                  SweetAlert.questionAlert(
                    ['1', '2'],
                    msgArr,
                    setResponse,
                    true,
                    props.memberJoinClassAsync,
                    props.classData.classId
                  )
                }}
              >
                {(() => {
                  switch (true) {
                    case props.classData.classNOWpeople >=
                      props.classData.classMAXpeople:
                      return '已額滿'
                    case new Date(props.classData.classStartDate).getTime() <
                      new Date().getTime():
                      return '已過期'
                    default:
                      return '馬上報名'
                  }
                })()}
              </button>
            </div>
          </div>
          <div className="row shopNameBox">
            <div className="col-xl-5">
              <p className="shopName">
                <img src="/images/classImg/icons/shop.svg" alt="" />
                {'本課程由 ' + props.classData.seller_shop + ' 工作室提供'}
              </p>
            </div>
          </div>
          <h2 className="coachTitle">師資陣容</h2>
          <div className="row d-flex coachList">
            {props.classCoachData
              ? props.classCoachData.map(value => {
                  return (
                    <div className=" coachInfo">
                      <div className="avatarBox">
                        <img
                          src={
                            'http://127.0.0.1:5000/images/coachImg/' +
                            value.classCoachImg
                          }
                          alt=""
                        />
                      </div>
                      <div className="coachName">
                        <p>{value.classCoachName}</p>
                        <p>教練</p>
                      </div>
                      <div className="coachEducation">
                        <p>
                          <img
                            src="/images/classImg/icons/detail/coachEducation.svg"
                            alt=""
                          />
                          {value.classCoachLicense1}
                        </p>
                        <p>
                          <img
                            src="/images/classImg/icons/detail/coachEducation.svg"
                            alt=""
                          />
                          {value.classCoachLicense2}
                        </p>
                        <p>
                          <img
                            src="/images/classImg/icons/detail/coachEducation.svg"
                            alt=""
                          />
                          {value.classCoachLicense3}
                        </p>
                      </div>
                    </div>
                  )
                })
              : ''}
          </div>
          <h2 className="coachTitle">課程說明</h2>
          <div className="classDesc">
            <pre>{props.classData.classDesc}</pre>
          </div>
        </>
      )}
    </>
  )
}

export default ClassDetailDataContent
