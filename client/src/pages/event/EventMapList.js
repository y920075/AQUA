import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer'

//引入redux元件
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//引入action
import {
  getEventDataForMapAsync,
  getEventTypeDataAsync,
} from '../../actions/event/event_Actions'

//引入自訂元件
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Loading from '../../components/class/Loading'
import EventMapDataList from '../../components/event/EventMapDataList'
import EventSearchBar from '../../components/event/EventSearchBar'

function EventMapList(props) {
  const [eventDataForMap, setEventDataForMap] = useState([])
  const [hasloading, setHasLoading] = useState(false) //是否正在載入中
  const [isEnable, setIsEnable] = useState(false) //是否按下 "包含已過期資料的按鈕"

  useEffect(() => {
    props.getEventDataForMapAsync()
    props.getEventTypeDataAsync()
  }, [])

  useEffect(() => {
    setHasLoading(true)
    setTimeout(() => {
      if (props.eventDataForMap.status) {
        setHasLoading(false)
        setEventDataForMap(props.eventDataForMap.result)
      }
    }, 500)
  }, [props.eventDataForMap])

  //每次按鈕被點擊時，就取得新資料
  useEffect(() => {
    getEventData()
  }, [isEnable])

  const getEventData = () => {
    const type = document.querySelector('select[name="type"]').value
    const sort = document.querySelector('select[name="sort"]').value
    const q = document.querySelector('input.searchInput').value
    props.getEventDataForMapAsync(type, q, sort, isEnable)
  }

  let ref //建立一個ref

  const onBoundsChanged = () => {
    eventDataForMap.map(value => {
      if (
        ref.getBounds().contains({
          lat: parseFloat(value.eventLocation_lat),
          lng: parseFloat(value.eventLocation_lng),
        })
      ) {
        console.log(value.eventId)
      }
    })
    //console.log(ref.getBounds().contains({ lat: 121, lng: 121 }))
  }

  const MyMapComponent = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap
        defaultZoom={8}
        ref={mapRef => (ref = mapRef)} //綁定ref到我們定義的ref裡，這樣才能參照到地圖物件，然後取得方法
        defaultCenter={{ lat: 23.5, lng: 120.8 }}
        onBoundsChanged={onBoundsChanged}
      >
        <MarkerClusterer gridSize={30}>
          {eventDataForMap
            ? eventDataForMap.map(value => {
                return (
                  <Marker
                    position={{
                      lat: parseFloat(value.eventLocation_lat),
                      lng: parseFloat(value.eventLocation_lng),
                    }}
                  />
                )
              })
            : ''}
        </MarkerClusterer>
      </GoogleMap>
    ))
  )

  return (
    <>
      <Header />
      <Banner BannerImgSrc="./images/ClassBanner.jpg" />
      <div className="container-fluid JY-event-container-maplist">
        <EventSearchBar
          getEventData={getEventData}
          eventTypeData={props.eventTypeData}
          setIsEnable={setIsEnable}
          isEnable={isEnable}
        />
        {hasloading ? (
          <Loading />
        ) : (
          <>
            <div className="row">
              <div className="col-8">
                <MyMapComponent
                  isMarkerShown
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=`}
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={
                    <div style={{ width: `100%`, height: `100%` }} />
                  }
                  mapElement={<div style={{ height: `100%` }} />}
                />
              </div>
              <div className="col-4 eventListBox">
                <EventMapDataList eventData={props.eventDataForMap.result} />
              </div>
            </div>
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
    eventDataForMap: store.eventReducer.eventDataForMap,
    eventTypeData: store.eventReducer.eventTypeData,
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { getEventDataForMapAsync, getEventTypeDataAsync },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(EventMapList)
