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
import EventSearchBar from '../../components/event/EventSearchBar'

function EventMapList(props) {
  const [eventDataForMap, setEventDataForMap] = useState([])
  const [hasloading, setHasLoading] = useState(false) //是否正在載入中

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

  const getEventData = () => {
    const type = document.querySelector('select[name="type"]').value
    const sort = document.querySelector('select[name="sort"]').value
    const q = document.querySelector('input.searchInput').value
    props.getEventDataForMapAsync(type, q, sort)
  }

  const MyMapComponent = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: 23.5, lng: 120.8 }}>
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
      <div className="container JY-event-container-maplist">
        <EventSearchBar
          getEventData={getEventData}
          eventTypeData={props.eventTypeData}
        />
        {hasloading ? (
          <Loading />
        ) : (
          <>
            <div className="row">
              <div className="col-9">
                <MyMapComponent
                  isMarkerShown
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=`}
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={
                    <div style={{ width: `100%`, height: `800px` }} />
                  }
                  mapElement={<div style={{ height: `100%` }} />}
                />
              </div>
              <div className="col-3 eventListBox">
                {props.eventDataForMap.status && eventDataForMap ? (
                  eventDataForMap.map((value, index) => {
                    let status = '火熱揪團中'
                    let progress =
                      (value.eventNowPeople / value.eventNeedPeople) * 100

                    if (value.eventNeedPeople === value.eventNowPeople)
                      status = '已額滿'

                    if (
                      new Date(value.eventEndDate).getTime() <
                      new Date().getTime()
                    )
                      status = '已過期'

                    return (
                      <div className="eventInfoBox" key={index}>
                        <div className="eventContentBox">
                          <div className="eventImgBox">
                            <img
                              src={
                                'http://127.0.0.1:5000/images/eventImg/' +
                                value.eventImg
                              }
                              alt=""
                            />
                          </div>
                          <div className="eventDetailBox">
                            <h2 className="eventTitle">{value.eventName}</h2>
                            <ul className="d-flex">
                              <li>
                                <img
                                  src="/images/eventImg/icons/type.svg"
                                  alt=""
                                />
                                {value.eventType}
                              </li>
                              <li>
                                <img
                                  src="/images/eventImg/icons/local.svg"
                                  alt=""
                                />
                                {value.eventLocation}
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <img
                                  src="/images/eventImg/icons/member.svg"
                                  alt=""
                                />
                                {value.loginId}
                              </li>
                              <li>
                                <img
                                  src="/images/eventImg/icons/date.svg"
                                  alt=""
                                />
                                報名期限：{value.eventEndDate} 止
                              </li>
                              <li>
                                <img
                                  src="/images/eventImg/icons/date.svg"
                                  alt=""
                                />
                                活動日期：{value.eventStartDate}
                              </li>
                            </ul>
                            <p className="status">{status}</p>
                            <p className="quota">
                              徵求 <span>{value.eventNeedPeople}</span> 人 還剩{' '}
                              <span>
                                {value.eventNeedPeople - value.eventNowPeople}
                              </span>{' '}
                              名額
                            </p>
                            <div
                              className="progress_container"
                              data-progress={parseInt(progress) + '%'}
                            >
                              <div className="progress progress-danger progress-striped active">
                                <div
                                  className="bar"
                                  style={{ width: progress + '%' }}
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-center">
                            <Link
                              className="btn-more btn btn-raised btn-warning"
                              to={'/event/' + value.eventId}
                            >
                              了解詳情
                            </Link>
                          </div>
                        </div>
                      </div>
                    )
                  })
                ) : (
                  <h2 class="eventMapListNoDataTtile">查無相關資料</h2>
                )}
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
