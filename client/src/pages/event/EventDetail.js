import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router'

//引入redux元件
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//引入action
import { getEventDetailDataAsync } from '../../actions/event/event_Actions'

//引入自訂元件
import Header from '../../components/Header' //導航列
import Banner from '../../components/Banner' //橫幅廣告
import Footer from '../../components/Footer' //頁腳
import Loading from '../../components/class/Loading' //載入中圖示
import EventDetailDataContent from '../../components/event/EventDetailDataContent' //活動詳細資料框

//store參數 props.eventDetailData = 活動詳細資料
//2020-03-21
function EventDetail(props) {
  const [hasloading, setHasLoading] = useState(false) //是否正在載入中

  //取得資料
  useEffect(() => {
    const eventId = props.match.params.eventId
    props.getEventDetailDataAsync(eventId)
  }, [])

  //將從資料庫取得的資料存放到本地的state
  useEffect(() => {
    setHasLoading(true)

    //0.5秒後判斷是否有成功載入資料
    setTimeout(() => {
      if (props.eventDetailData.status) {
        setHasLoading(false)
      }
    }, 500)
  }, [props.eventDetailData])

  return (
    <>
      <Header />
      <Banner BannerImgSrc="/images/eventImg/eventBanner1.png" />
      <div className="container JY-event-container-detail">
        {hasloading ? (
          <Loading />
        ) : (
          <EventDetailDataContent
            eventData={
              props.eventDetailData.eventData
                ? props.eventDetailData.eventData[0]
                : ''
            }
            weatherData={
              props.eventDetailData.weather_data
                ? props.eventDetailData.weather_data
                : ''
            }
          />
        )}
        <Footer />
      </div>
    </>
  )
}

// 取得Redux中store的值
const mapStateToProps = store => {
  return {
    eventDetailData: store.eventReducer.eventDetailData,
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getEventDetailDataAsync }, dispatch)
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EventDetail)
)
