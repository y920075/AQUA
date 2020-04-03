import React, { useEffect, useState } from 'react'

//引入redux元件
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//引入action
import {
  getEventDataAsync,
  getEventTypeDataAsync,
  switchButtonisEnable,
} from '../../actions/event/event_Actions'

//引入自訂元件
import Header from '../../components/Header' //導航列
import Banner from '../../components/Banner' //橫幅廣告
import Footer from '../../components/Footer' //頁腳
import Loading from '../../components/class/Loading' //載入中圖示
import EventDataList from '../../components/event/EventDataList' //活動資料列表
import EventSearchBar from '../../components/event/EventSearchBar' //活動搜索框
import EventPageButtons from '../../components/event/EventPageButtons' //活動頁數按鈕
import { Link } from 'react-router-dom'

/*
  store參數 props.eventTypeData = 活動類別資料
  store參數 props.eventData = 活動列表資料
  store方法 props.getEventDataAsync() = 取得活動資料
  store方法 props.getEventTypeDataAsync() = 取得活動類型資料
  2020-03-21
*/
function EventList(props) {
  const [hasloading, setHasLoading] = useState(true) //是否正在載入中

  useEffect(() => {
    props.getEventTypeDataAsync()
  }, [])

  //每次資料有變動就將新資料存進本地state
  useEffect(() => {
    //設定載入中為true
    // setHasLoading(true)
    setTimeout(() => {
      if (props.eventData.status) {
        //確認有收到資料之後設定載入中為false
        setHasLoading(false)
      }
    }, 500)
  }, [props.eventData])

  //每次按鈕被點擊時，就取得新資料
  useEffect(() => {
    getEventData()
  }, [props.isEnable])

  //向伺服器取得新資料
  const getEventData = page => {
    //取得select的值，作為類型、等級的篩選參數
    const type = document.querySelector('select[name="type"]').value
    const sort = document.querySelector('select[name="sort"]').value
    const q = document.querySelector('input.searchInput').value
    props.getEventDataAsync(type, q, sort, page, props.isEnable)
  }

  return (
    <>
      <Header />
      <Banner BannerImgSrc="./images/eventImg/eventBanner1.png" />
      <div className="d-flex justify-content-center">
        <Link
          to="/eventmaplist"
          type="button"
          className="btn btn-outline-primary"
        >
          用地圖查找
        </Link>
      </div>
      <div className="container JY-event-container">
        <EventSearchBar
          eventTypeData={props.eventTypeData}
          getEventData={getEventData}
          setIsEnable={props.switchButtonisEnable}
          isEnable={props.isEnable}
        />
        {hasloading ? (
          <Loading />
        ) : (
          <>
            <EventDataList eventData={props.eventData} />
            <EventPageButtons
              totalPages={props.eventData.totalPages}
              getDataFromServer={getEventData}
            />
          </>
        )}
      </div>
      <Footer />
    </>
  )
}

// 取得Redux中store的值
const mapStateToProps = store => {
  return {
    eventData: store.eventReducer.eventData,
    eventTypeData: store.eventReducer.eventTypeData,
    isEnable: store.eventReducer.isEnable,
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { getEventDataAsync, getEventTypeDataAsync, switchButtonisEnable },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList)
