import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

//引入redux元件
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//引入action
import { getEventDetailDataAsync } from '../../actions/event/event_Actions'

//引入自訂元件
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Loading from '../../components/class/Loading'
import EventDetailDataContent from '../../components/event/EventDetailDataContent'

function EventDetail(props) {
  const [eventData, setEventData] = useState([]) //存放活動詳細資料的state
  const [weatherData, setWeatherData] = useState([]) //存放天氣資料的state
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
        const nowEventData = props.eventDetailData.eventData
          ? props.eventDetailData.eventData[0]
          : ''

        const nowWeatherData = props.eventDetailData.weather_data
          ? props.eventDetailData.weather_data
          : ''
        setHasLoading(false)
        setEventData(nowEventData) //將活動資料設定到本地state
        setWeatherData(nowWeatherData) //將天氣資料設定到本地state
      }
    }, 500)
  }, [props.eventDetailData])

  return (
    <>
      <Header />
      <Banner BannerImgSrc="/images/ClassBanner.jpg" />
      <div className="container JY-event-container-detail">
        {hasloading ? (
          <Loading />
        ) : (
          <EventDetailDataContent
            eventData={eventData}
            weatherData={weatherData}
          />
        )}
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
