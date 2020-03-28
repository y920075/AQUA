import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Sidebar from '../../components/member/Sidebar'
import Footer from '../../components/Footer'
import '../../style/HS.scss'
import io from 'socket.io-client'

function MemberHomepage(){
    const [ws, setWs] = useState(null)

    const connectWebSocket = () => {
        //開啟
        setWs(io('http://localhost:5555'))
      }
    
      useEffect(() => {
        if (ws) {
          //連線成功在 console 中打印訊息
          console.log('success connect!')
          //設定監聽
          initWebSocket()
        }
      }, [ws])
    
      const initWebSocket = () => {
        //對 getMessage 設定監聽，如果 server 有透過 getMessage 傳送訊息，將會在此被捕捉
        ws.on('getMessage', message => {
          console.log(message)
        })
        ws.on('getMessageAll', message => {
          console.log(message)
        })
        //增加監聽
        ws.on('addRoom', message => {
          console.log(message)
        })
      }
    
      const sendMessage = () => {
        //以 emit 送訊息，並以 getMessage 為名稱送給 server 捕捉
        ws.emit('getMessage', '只回傳給發送訊息的 client')
      }
    
      const sendMessageAll = () => {
        ws.emit('getMessageAll', '傳給所有人')
      }
    
      //選擇聊天室時觸發，如果有選擇那就將房間 id 送給 Server
      const changeRoom = event => {
        let room = event.target.value
        if (room !== '') {
          ws.emit('addRoom', room)
        }
      }

    return<>
        {/* <Header /> */}
        <Banner BannerImgSrc="./images/member/coralreef.jpg" />
        <div className="container hshomepage">
            <div className="row">
                <div className="col-lg-3">
                    <Sidebar/>
                </div>
                <div className="col-lg-3">

                </div>
            </div>
        </div>
        <Footer/>
    </>
}

export default MemberHomepage