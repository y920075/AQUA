import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//引入redux元件
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//引入action
import {
  memberGetEventDataAsync,
  delEventDataAsync,
} from '../../actions/event/event_Actions'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import ManageMyEventContent from '../../components/event/MemberEventComponents/ManageMyEventContent'
import AddEventContent from '../../components/event/MemberEventComponents/AddEventContent'
import ManageMyJoinEventContent from '../../components/event/MemberEventComponents/ManageMyJoinEventContent'
import Sidebar from '../../components/member/Sidebar'
import Footer from '../../components/Footer'
import '../../style/HS.scss'

function MemberEvent(props) {
  const [nowClickTag, setNowClickTag] = useState(1)

  useEffect(() => {
    props.memberGetEventDataAsync()
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
      <Header />
      <Banner BannerImgSrc="./images/member/coralreef.jpg" />

      <div className="container hsevent jy-member-event">
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">
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
                case 2:
                  return <ManageMyJoinEventContent />
                case 3:
                  return <AddEventContent />
                default:
                  return (
                    <ManageMyEventContent
                      memberEventDataSelf={props.memberEventDataSelf}
                      memberGetEventDataAsync={props.memberGetEventDataAsync}
                      delEventDataAsync={props.delEventDataAsync}
                      delEventDataResponse={props.delEventDataResponse}
                    />
                  )
              }
            })()}
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
    memberEventDataSelf: store.eventReducer.memberEventDataSelf,
    delEventDataResponse: store.eventReducer.delEventDataResponse,
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      memberGetEventDataAsync,
      delEventDataAsync,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberEvent)
