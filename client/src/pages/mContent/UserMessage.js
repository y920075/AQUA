import React, { useState, useEffect } from 'react'
import moment from 'moment-timezone'

//引入redux元件
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//引入action
import { memberGetChatListAsync } from '../../actions/event/event_Actions'

import io from 'socket.io-client'
import Sweetalert from '../../components/class/SellerClassComponents/Sweetalert2'

function UserMessage(props) {
  const [ws, setWs] = useState(null)
  const [chatDataList, setChatDataList] = useState({})
  const [memberId, setMemberId] = useState(localStorage.getItem('memberId'))
  const [loginId, setLoginId] = useState(localStorage.getItem('username'))

  //一進入訊息管理就啟動連線
  useEffect(() => {
    setWs(io('http://localhost:5555'))
    props.memberGetChatListAsync()
    require('../../style/JY-message.css')
  }, [])

  //連線成功就開始監聽socket事件
  useEffect(() => {
    if (ws) {
      console.log('socket連線---已開啟!')
      //設定監聽
      initWebSocket()
    }
  }, [ws])

  //離開訊息管理就斷線
  useEffect(() => {
    return () => {
      if (ws) {
        console.log('socket連線---已關閉!')
        ws.disconnect()
      }
    }
  }, [ws])

  //--------------SOCKER客戶端監聽--------------//
  const initWebSocket = () => {
    ws.on('ServerToClientMsgData', ServerToClientMsgData => {
      setChatDataList(ServerToClientMsgData)
      console.log('客戶端已經收到SOCKET.IO的訊息', ServerToClientMsgData)
      autoScrollButtom()
    })

    // ws.on('ServerToClientMsgData', ServerToClientMsgData => {
    //   setChatDataList(ServerToClientMsgData)
    // })

    ws.on('addRoomResponse', ServerToClientMsgData => {
      console.log('客戶端已經收到加入房間的響應訊息')
      setChatDataList(ServerToClientMsgData)
      console.log('客戶端已經將訊息設定到本地state')
      autoScrollButtom()
    })

    ws.on('ServerToClientWarning', message => {
      Sweetalert.errorAlert('404', message)
      console.log(message)
    })
  }
  //--------------SOCKER客戶端監聽--------------//

  //--------------SOCKER事件-------------------//

  //傳送訊息事件(點擊送出按鈕)
  const sendMessage = () => {
    const message = document.querySelector('input.messageInput').value
    const roomId = document.querySelector('ul.eventChatRoomList li.active')
      ? document
          .querySelector('ul.eventChatRoomList li.active')
          .getAttribute('data-roomId')
      : ''
    const sendMessageRequest = {
      roomId,
      message,
      memberId,
      loginId,
    }
    ws.emit('ClientToServerMsg', sendMessageRequest)
    document.querySelector('input.messageInput').value = ''
    console.log('已發送傳送訊息事件按鈕----', sendMessageRequest)
  }

  //傳送訊息事件(使用Enter)
  const sendMessageUseEnter = event => {
    if (event.key === 'Enter') {
      const message = document.querySelector('input.messageInput').value
      const roomId = document.querySelector('ul.eventChatRoomList li.active')
        ? document
            .querySelector('ul.eventChatRoomList li.active')
            .getAttribute('data-roomId')
        : ''

      const sendMessageRequest = {
        roomId,
        message,
        memberId,
        loginId,
      }
      ws.emit('ClientToServerMsg', sendMessageRequest)
      document.querySelector('input.messageInput').value = ''
      console.log('已發送傳送訊息事件enter----', sendMessageRequest)
    }
  }

  //選擇房間事件
  const changeRoom = event => {
    document.querySelector('div.startChat').style.display = 'none'
    document.querySelector(
      'div.chatEeventTitle'
    ).innerHTML = document
      .querySelector('ul.eventChatRoomList li.active')
      .getAttribute('data-eventName')

    let roomId = event.target.getAttribute('data-roomId')

    if (roomId !== '') {
      const addRoomRequest = {
        roomId,
        memberId,
      }
      ws.emit('addRoomRequest', addRoomRequest)
      console.log('已發送加入房間事件----', addRoomRequest)
    }
  }
  //--------------SOCKER事件-------------------//

  //----------------自訂事件--------------------//

  //點擊聊天列表就加上active效果
  const handleListActive = event => {
    const eventChatRoomList = document.querySelectorAll(
      'ul.eventChatRoomList li'
    )

    eventChatRoomList.forEach((value, index) => {
      value.classList.remove('active')
    })
    event.target.classList.add('active')
  }

  //取得聊天室列表
  const handleChangeChatList = value => {
    props.memberGetChatListAsync(value)
  }

  //自動滾動到聊天區域最底下，讓最新訊息顯示出來
  const autoScrollButtom = () => {
    const msgArea = document.querySelector('div.msgArea')
    const shouldScroll =
      msgArea.scrollTop + msgArea.clientHeight === msgArea.scrollHeight

    if (!shouldScroll) {
      msgArea.scrollTop = msgArea.scrollHeight
    }
  }
  //----------------自訂事件--------------------//

  return (
    <div className="row messageContent">
      <div className="col-3 pl-0 chatRoomList">
        <div className="sticky-top">
          <div className="chatListTitle">
            <p>聊天室列表</p>
          </div>
          <div className="px-3 chatRoomSelect">
            <select
              className="form-control"
              onChange={event => {
                const value = event.target.value
                handleChangeChatList(value)
              }}
            >
              <option value="">全部列表</option>
              <option value="1">我發起的揪團</option>
              <option value="2">我報名的揪團</option>
            </select>
          </div>
        </div>
        <ul className="eventChatRoomList">
          {props.memberChatListData
            ? props.memberChatListData.map((value, index) => {
                return (
                  <>
                    <li
                      data-roomId={value.eventId}
                      data-eventName={value.eventName}
                      onClick={event => {
                        handleListActive(event)
                        changeRoom(event)
                      }}
                    >
                      {value.eventId}
                      <p data-roomId={value.eventId}>{value.eventName}</p>
                    </li>
                  </>
                )
              })
            : ''}
        </ul>
      </div>
      <div className="col-9 viewArea">
        <div className="chatEeventTitle">請選擇一個聊天室</div>
        <div className="msgArea">
          {chatDataList.chatData
            ? chatDataList.chatData.map((value, index) => {
                if (value.memberId === memberId) {
                  return (
                    <>
                      <div class="msgBox d-flex justify-content-end align-items-center">
                        <span className="msgTime">
                          {moment(value.created_at).format('HH:mm')}
                        </span>
                        <div className="mymessage">
                          <p class="msgFromMySelf m-0">{value.message}</p>
                        </div>
                        <figure class="memberAvatar m-0">
                          <img
                            src="http://127.0.0.1:5000/images/memberImg/DefaultImage.jpg"
                            alt=""
                          />
                        </figure>
                      </div>
                    </>
                  )
                } else {
                  return (
                    <>
                      <div class="msgBox d-flex align-items-center">
                        <figure class="memberAvatar m-0">
                          <img
                            src="http://127.0.0.1:5000/images/memberImg/DefaultImage.jpg"
                            alt=""
                          />
                        </figure>
                        <div>
                          <p className="otherName">{value.loginId}</p>
                          <div className="othermessage">
                            <p class="msgFromMySelf m-0">{value.message}</p>
                          </div>
                        </div>
                        <span className="msgTime">
                          {moment(value.created_at).format('HH:mm')}
                        </span>
                      </div>
                    </>
                  )
                }
              })
            : ''}
          <div className="startChat">
            {/* <img
              className="startChatImg"
              src="../images/logo/aquaLogoBig.png"
              alt=""
            /> */}
            <p className="startChatMsg">選擇一個聊天室，開始聊天吧!</p>
          </div>
        </div>
        <div class="d-flex inputArea">
          <div className="col-md-9">
            <input
              type="text"
              className="form-control messageInput"
              placeholder="說點什麼...."
              onKeyPress={event => {
                sendMessageUseEnter(event)
              }}
            />
          </div>
          <div className="col-md-3">
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => {
                document.querySelector('input.messageInput').innerHTML = ''
                sendMessage()
              }}
            >
              送出
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// 取得Redux中store的值
const mapStateToProps = store => {
  return {
    memberChatListData: store.eventReducer.memberChatListData,
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ memberGetChatListAsync }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMessage)
