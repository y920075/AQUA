import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

//引入redux元件
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//引入action
import {
  memberGetEventDataAsync,
  delEventDataAsync,
  memberUnJoinEventAsync,
  getEventTypeDataAsync,
  addEventDataAsunc,
  getMemberEventDetailDataAsync,
  editEventDataAsunc,
  memberUnOtherJoinEventAsync,
} from '../../actions/event/event_Actions'
import { getCityDataAsunc, getDistDataAsunc } from '../../actions/seller/index'

//引入自訂元件
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import ManageMyEventContent from '../../components/event/MemberEventComponents/ManageMyEventContent'
import AddEventContent from '../../components/event/MemberEventComponents/AddEventContent'
import Sidebar from '../../components/member/Sidebar'
import Footer from '../../components/Footer'
import '../../style/HS.scss'
import MemberEditEvent from './MemberEditEvent'

function MemberEvent(props) {
  const [nowClickTag, setNowClickTag] = useState(1)

  useEffect(() => {
    props.memberGetEventDataAsync('', '', nowClickTag)
    props.getEventTypeDataAsync()
    props.getCityDataAsunc()
  }, [])

  const handleNavActive = event => {
    const navButtons = document.querySelectorAll('button.nav-item.nav-link')
    navButtons.forEach((value, index) => {
      value.classList.remove('active')
    })
    event.target.classList.add('active')
  }

  return (
    <>
      {/* <Banner BannerImgSrc="/images/member/coralreef.jpg" /> */}

      <div className="container hsevent jy-member-event">
        <div className="row">
          <div className="col-lg-12">
            <Switch>
              <Route path="/memberuser/event/edit/:eventId">
                <MemberEditEvent
                  cityData={props.cityData}
                  distData={props.distData}
                  typeData={props.eventTypeData}
                  memberEventDetailData={props.memberEventDetailData}
                  editEventDataResponse={props.editEventDataResponse}
                  getMemberEventDetailDataAsync={
                    props.getMemberEventDetailDataAsync
                  }
                  editEventDataAsunc={props.editEventDataAsunc}
                  getDistDataAsunc={props.getDistDataAsunc}
                  memberUnOtherJoinEventResponse={
                    props.memberUnOtherJoinEventResponse
                  }
                  memberUnOtherJoinEventAsync={
                    props.memberUnOtherJoinEventAsync
                  }
                />
              </Route>
              <Route path="/memberuser/event">
                <nav className="nav nav-pills nav-justified nav-pills-memberEvent">
                  <button
                    className="nav-item nav-link active"
                    onClick={event => {
                      handleNavActive(event)
                      setNowClickTag(1)
                    }}
                  >
                    我發起的揪團
                  </button>
                  <button
                    className="nav-item nav-link "
                    onClick={event => {
                      handleNavActive(event)
                      setNowClickTag(2)
                    }}
                  >
                    我參加的揪團
                  </button>
                  <button
                    className="nav-item nav-link "
                    onClick={event => {
                      handleNavActive(event)
                      setNowClickTag(3)
                    }}
                  >
                    新增揪團
                  </button>
                </nav>
                {(() => {
                  switch (nowClickTag) {
                    case 1:
                    case 2:
                      return (
                        <ManageMyEventContent
                          memberEventDataSelf={props.memberEventDataSelf}
                          memberGetEventDataAsync={
                            props.memberGetEventDataAsync
                          }
                          delEventDataAsync={props.delEventDataAsync}
                          delEventDataResponse={props.delEventDataResponse}
                          nowClickTag={nowClickTag}
                          memberUnJoinEventAsync={props.memberUnJoinEventAsync}
                          memberUnJoinEventResponse={
                            props.memberUnJoinEventResponse
                          }
                        />
                      )
                    case 3:
                      return (
                        <AddEventContent
                          typeData={props.eventTypeData}
                          cityData={props.cityData}
                          distData={props.distData}
                          handleGetDistData={props.getDistDataAsunc}
                          addEventDataAsunc={props.addEventDataAsunc}
                          addEventDataResponse={props.addEventDataResponse}
                          setNowClickTag={setNowClickTag}
                        />
                      )
                    default:
                  }
                })()}
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  )
}

// 取得Redux中store的值
const mapStateToProps = store => {
  return {
    memberEventDataSelf: store.eventReducer.memberEventDataSelf,
    delEventDataResponse: store.eventReducer.delEventDataResponse,
    memberUnJoinEventResponse: store.eventReducer.memberUnJoinEventResponse,
    eventTypeData: store.eventReducer.eventTypeData,
    cityData: store.sellerReducer.cityData,
    distData: store.sellerReducer.distData,
    addEventDataResponse: store.eventReducer.addEventDataResponse,
    memberEventDetailData: store.eventReducer.memberEventDetailData,
    editEventDataResponse: store.eventReducer.editEventDataResponse,
    memberUnOtherJoinEventResponse:
      store.eventReducer.memberUnOtherJoinEventResponse,
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      memberGetEventDataAsync,
      getEventTypeDataAsync,
      getCityDataAsunc,
      getDistDataAsunc,
      getMemberEventDetailDataAsync,
      memberUnJoinEventAsync,
      delEventDataAsync,
      addEventDataAsunc,
      editEventDataAsunc,
      memberUnOtherJoinEventAsync,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberEvent)
