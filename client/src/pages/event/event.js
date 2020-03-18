import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//引入redux元件
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//引入action
import {
  getEventDataAsync,
  getEventTypeDataAsync,
} from '../../actions/event/event_Actions'

//引入自訂元件
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Loading from '../../components/class/Loading'
import EventContent from '../../components/event/EventContent'
import EventSearchBar from '../../components/event/EventSearchBar'
import EventPageButtons from '../../components/event/EventPageButtons'

function EventList(props) {
  const [eventData, serEventData] = useState([]) //存放活動資料的陣列
  const [hasloading, setHasLoading] = useState(false) //是否正在載入中

  useEffect(() => {
    props.getEventDataAsync()
    props.getEventTypeDataAsync()
  }, [])

  //每次資料有變動就將新資料存進本地state
  useEffect(() => {
    setHasLoading(true)
    setTimeout(() => {
      if (props.eventData.status) {
        setHasLoading(false)
        serEventData(props.eventData.result)
      }
    }, 500)
  }, [props.eventData])

  const getEventData = page => {
    const type = document.querySelector('select[name="type"]').value
    const sort = document.querySelector('select[name="sort"]').value
    const q = document.querySelector('input.searchInput').value
    props.getEventDataAsync(type, q, sort, page)
  }

  return (
    <>
      <Header />
      <Banner BannerImgSrc="./images/ClassBanner.jpg" />
      <div className="container JY-event-container">
        <EventSearchBar
          eventTypeData={props.eventTypeData}
          getEventData={getEventData}
        />
        {hasloading ? (
          <Loading />
        ) : (
          <>
            <EventContent eventData={eventData} />
            <EventPageButtons
              totalPages={props.eventData.totalPages}
              getEventData={getEventData}
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
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { getEventDataAsync, getEventTypeDataAsync },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList)
