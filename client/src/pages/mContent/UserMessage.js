import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import Sweetalert from '../../components/class/SellerClassComponents/Sweetalert2'

function UserMessage() {
  const [ws, setWs] = useState(null)

  useEffect(() => {
    setWs(io('http://localhost:5555'))
  }, [])

  useEffect(() => {
    if (ws) {
      //連線成功在 console 中打印訊息
      console.log('success connect!')
      //設定監聽
      initWebSocket()
    }
  }, [ws])

  const handleListActive = event => {
    const eventChatRoomList = document.querySelectorAll(
      'ul.eventChatRoomList li'
    )
    console.log(eventChatRoomList)
    eventChatRoomList.forEach((value, index) => {
      value.classList.remove('active')
    })
    event.target.classList.add('active')
  }

  //--------------SOCKER客戶端監聽--------------//
  const initWebSocket = () => {
    ws.on('ServerToClientMsgForMySelf', message => {
      document.querySelector('div.msgArea').innerHTML += `
      <div class="d-flex justify-content-end align-items-center">
        <p class="msgFromOther m-0">${message}：</p>
        <figure class="memberAvatar m-0">
          <img
            src="http://127.0.0.1:5000/images/memberImg/DefaultImage.jpg"
            alt=""
          />
        </figure>
      </div> `
    })

    ws.on('ServerToClientMsgForAll', message => {
      document.querySelector('div.msgArea').innerHTML += `
      <div class="d-flex align-items-center">
        <figure class="memberAvatar m-0">
          <img
            src="http://127.0.0.1:5000/images/memberImg/DefaultImage.jpg"
            alt=""
          />
        </figure>
        <p class="msgFromOther m-0">：${message}</p>
      </div>`
    })

    ws.on('addRoom', message => {
      console.log(message)
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
      memberId: 'M20010002',
    }
    ws.emit('ClientToServerMsg', sendMessageRequest)
    document.querySelector('input.messageInput').value = ''
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
        memberId: 'M20010002',
      }
      ws.emit('ClientToServerMsg', sendMessageRequest)
      document.querySelector('input.messageInput').value = ''
    }
  }

  //選擇房間事件
  const changeRoom = event => {
    document.querySelector('div.msgArea').innerHTML = ''

    document.querySelector(
      'div.chatEeventTitle'
    ).innerHTML = document
      .querySelector('ul.eventChatRoomList li.active')
      .getAttribute('data-eventName')

    let roomId = event.target.getAttribute('data-roomId')
    if (roomId !== '') {
      const addRoomRequest = {
        roomId,
        memberId: 'M20010002',
      }
      ws.emit('addRoom', addRoomRequest)
    }
  }
  //--------------SOCKER事件-------------------//

  return (
    <div className="row messageContent">
      <div className="col-3 pl-0 chatRoomList">
        <div className="chatListTitle">
          <p>聊天室列表</p>
        </div>
        <ul className="eventChatRoomList">
          <li
            data-roomId="E20040001"
            data-eventName="綠島潛水團"
            onClick={event => {
              handleListActive(event)
              changeRoom(event)
            }}
          >
            E20040001
            <p data-roomId="E20040001">綠島潛水團</p>
          </li>
          <li
            data-roomId="E20040002"
            data-eventName="東北角潛水團"
            onClick={event => {
              handleListActive(event)
              changeRoom(event)
            }}
          >
            E20040002
            <p data-roomId="E20040002">東北角潛水團</p>
          </li>
          <li
            className=""
            data-roomId="E20040003"
            data-eventName="蘭嶼潛水團"
            onClick={event => {
              handleListActive(event)
              changeRoom(event)
            }}
          >
            E20040003
            <p data-roomId="E20040003">蘭嶼潛水團</p>
          </li>
        </ul>
      </div>
      <div className="col-9 viewArea">
        <div className="chatEeventTitle">蘭嶼潛水團</div>
        <div className="msgArea"></div>
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

export default UserMessage
