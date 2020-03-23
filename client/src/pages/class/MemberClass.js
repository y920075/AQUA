import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//引入redux元件
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//引入action
import {
  memberGetClassDataAsync,
  memberUnJoinClassAsync,
} from '../../actions/class/class_Actions'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Sidebar from '../../components/member/Sidebar'
import Footer from '../../components/Footer'
import EventPageButtons from '../../components/event/EventPageButtons'
import MemberClassList from '../../components/class/MemberClassComponents/MemberClassList'
import Loading from '../../components/class/Loading' //載入中圖示
import '../../style/HS.scss'

function MemberClass(props) {
  const [hasLoading, setHasLoading] = useState(false)

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

  useEffect(() => {
    props.memberGetClassDataAsync()
  }, [])

  //向伺服器取得新資料
  const getMemberClassData = page => {
    //取得select的值，作為類型、等級的篩選參數
    const sort = document.querySelector('select[name="sort"]').value
    console.log(sort)
    console.log(page)
    props.memberGetClassDataAsync(sort, page)
  }

  return (
    <>
      <Header />
      <Banner BannerImgSrc="./images/member/coralreef.jpg" />
      {/* <!-- Orger Content --> */}
      <div className="container hsclass">
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <div className="order-select">
              <select
                name="sort"
                className="form-control"
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
            <br />
            <div className="order-history">
              {hasLoading ? (
                <Loading />
              ) : (
                <MemberClassList
                  memberClassData={props.memberClassData}
                  memberUnJoinClassAsync={props.memberUnJoinClassAsync}
                  memberUnJoinClassResponse={props.memberUnJoinClassResponse}
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
      <Footer />
    </>
  )
}

// 取得Redux中store的值
const mapStateToProps = store => {
  return {
    memberClassData: store.classReducer.memberClassData,
    memberUnJoinClassResponse: store.classReducer.memberUnJoinClassResponse,
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      memberGetClassDataAsync,
      memberUnJoinClassAsync,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberClass)
