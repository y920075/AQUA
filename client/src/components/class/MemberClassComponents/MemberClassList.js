import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from '../SellerClassComponents/Sweetalert2'

function MemberClassList(props) {
  const [response, setResponse] = useState(false) //確認是否有收到刪除動作的response資料

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
                className="card-header d-flex justify-content-between"
                style={{ background: '#c4cad1' }}
              >
                <p>{'課程編號：' + value.classId}</p>
                <button
                  type="button"
                  className="btn btn-info"
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
                <div className="col-sm-8">
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
                      to={'class/' + value.classId}
                    >
                      詳細
                    </Link>
                  </div>
                </div>
                <div className="col-sm-4">
                  <img
                    className="classimg-hs"
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
        <h2>查無相關資料</h2>
      )}
    </>
  )
}

export default MemberClassList
