import React, { useEffect, useState } from 'react'
import SwitchButton from '../../components/event/MemberEventComponents/SwitchButton'

//引入redux元件
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//引入action
import { memberGetClassDataAsync } from '../../actions/class/class_Actions'

/*
  從store接收的參數
  memberClassData = 會員報名的課程資料
  memberUnJoinClassResponse = 會員取消報名之後，後端回傳的資料

  從store接收的action
  memberGetClassDataAsync = 向伺服器取得資料
  memberUnJoinClassAsync = 會員取消報名的動作
*/

import EventPageButtons from '../../components/event/EventPageButtons' //頁數按鈕
import MemberClassList from '../../components/class/MemberClassComponents/MemberClassList' //會員課程列表
import Loading from '../../components/class/Loading' //載入中圖示
import '../../style/HS.scss'

function MemberClass(props) {
  const [hasLoading, setHasLoading] = useState(true) //是否載入中
  const [isEnable, setIsEnable] = useState(false) //是否按下 "包含已過期資料的按鈕"

  //每次資料有變動就將新資料存進本地state
  useEffect(() => {
    //設定載入中為true
    setHasLoading(true)
    setTimeout(() => {
      if (props.memberClassData.status) {
        setHasLoading(false)
      }
    }, 500)
  }, [props.memberClassData])

  //每次包含過期資料按鈕被點擊時，就取得新資料
  useEffect(() => {
    getMemberClassData()
  }, [isEnable])

  //每次點擊SwitchButton就改變state
  const toggleSwitchButton = () => {
    setIsEnable(!isEnable)
  }

  //向伺服器取得新資料
  const getMemberClassData = page => {
    //取得select的值，作為類型、等級的篩選參數
    const sort = document.querySelector('select[name="sort"]').value
    props.memberGetClassDataAsync(sort, page, isEnable)
  }

  return (
    <>
      {/* <!-- Orger Content --> */}
      <div className="container hsclass">
        <div className="row">
          <div className="col-lg-12">
            <div className="order-select d-flex justify-content-end">
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
                  getMemberClassData()
                }}
              >
                <option value="">排序方式</option>
                <option value="classNOWpeople,desc">報名人數多至少</option>
                <option value="classNOWpeople,asc">報名人數少至多</option>
                <option value="classStartDate,asc">開課日期近至遠</option>
                <option value="classStartDate,desc">開課日期遠至近</option>
              </select>
            </div>
            <div className="order-history">
              {hasLoading ? (
                <Loading />
              ) : (
                <MemberClassList
                  memberClassData={props.memberClassData}
                  memberGetClassDataAsync={props.memberGetClassDataAsync}
                />
              )}
            </div>
            {/* <!-- pagination --> */}
            {hasLoading ? (
              ''
            ) : (
              <EventPageButtons
                totalPages={props.memberClassData.totalPages}
                getDataFromServer={getMemberClassData}
              />
            )}

            {/* <!-- end of pagination --> */}
          </div>
        </div>
      </div>
    </>
  )
}

// 取得Redux中store的值
const mapStateToProps = store => {
  return {
    memberClassData: store.classReducer.memberClassData,
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      memberGetClassDataAsync,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberClass)
