import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

//引入自訂元件
import ManageMyEventContent from '../../components/event/MemberEventComponents/ManageMyEventContent'
import AddEventContent from '../../components/event/MemberEventComponents/AddEventContent'
import '../../style/HS.scss'
import MemberEditEvent from './MemberEditEvent'

function MemberEvent() {
  const [nowClickTag, setNowClickTag] = useState(1)

  const handleNavActive = event => {
    const navButtons = document.querySelectorAll('button.nav-item.nav-link')
    navButtons.forEach(value => {
      value.classList.remove('active')
    })
    event.target.classList.add('active')
  }

  return (
    <>
      <div className="container hsevent jy-member-event">
        <div className="row">
          <div className="col-lg-12">
            <Switch>
              <Route path="/memberuser/event/edit/:eventId">
                <MemberEditEvent />
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
                      return <ManageMyEventContent nowClickTag={nowClickTag} />
                    case 3:
                      return <AddEventContent />
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

export default MemberEvent
