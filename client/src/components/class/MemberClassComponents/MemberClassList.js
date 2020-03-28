import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from '../SellerClassComponents/Sweetalert2' //自訂提示窗

/*
  傳入參數
  memberClassData = 會員報名的所有課程資料
  memberUnJoinClassResponse = 會員取消報名之後，後端回傳的資料
  傳入方法
  memberUnJoinClassAsync = 會員取消報名的動作
  memberGetClassDataAsync = 取得新資料的動作
  2020-03-25
*/

function MemberClassList(props) {
  const [response, setResponse] = useState(false) //確認是否有收到取消報名動作的response資料

  //每當response改變時就秀出提示視窗
  useEffect(() => {
    if (response) {
      if (props.memberUnJoinClassResponse.status === 201) {
        SweetAlert.success('已成功取消報名!')
        setResponse(false)
        props.memberGetClassDataAsync()
      } else {
        SweetAlert.errorAlert(
          props.memberUnJoinClassResponse.status,
          props.memberUnJoinClassResponse.msg
        )
        setResponse(false)
      }
    }
  }, [response])

  return (
    <>
      {props.memberClassData.status && props.memberClassData.status !== 404 ? (
        props.memberClassData.result.map((value, index) => {
          return (
            <div className="card mt-3" key={index}>
              <div
                className="card-header py-1 d-flex justify-content-between card-header-jy align-items-center"
                style={{ background: '#c4cad1' }}
              >
                <p className="itemId-JY">{'課程編號：' + value.classId}</p>
                <button
                  type="button"
                  className="btn btn-info"
                  disabled={
                    new Date(value.classStartDate).getTime() <
                    new Date().getTime()
                      ? true
                      : false
                  }
                  onClick={() => {
                    const classId = value.classId
                    SweetAlert.sendConfirm(
                      '你確定要取消報名嗎?',
                      setResponse,
                      true,
                      props.memberUnJoinClassAsync,
                      classId
                    )
                  }}
                >
                  取消報名
                </button>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="card-body">
                    <h5 className="card-title">{value.className}</h5>
                    <p className="card-text">
                      {'課程類型：' + value.classType}
                    </p>
                    <p className="card-text">
                      {'課程等級：' + value.classLevel}
                    </p>
                    <p className="card-text">
                      {'上課日期：' + value.classStartDate}{' '}
                    </p>
                    <p className="card-text">
                      {'上課地址：' + value.classLocation}
                    </p>
                    <Link
                      className="btn btn-primary"
                      to={'/class/' + value.classId}
                    >
                      詳細
                    </Link>
                  </div>
                </div>
                <div className="col-sm-6">
                  <img
                    className="eventimg-hs"
                    src={
                      'http://127.0.0.1:5000/images/classImg/' + value.classImg
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
  )
}

export default MemberClassList
