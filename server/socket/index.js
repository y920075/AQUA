const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const db = require('../src/db_connect')

app.get('/', function(req, res){
  res.send('HOME');
});

io.on('connection', async function(socket){
      console.log('a user connected');

      //socket監聽客戶端傳送到服務器訊息事件
      socket.on('ClientToServerMsg', async sendMessageRequest => {
        console.log('SOCKET.IO已接收到客戶端的訊息',sendMessageRequest)
        

        //取得 rooms 物件，查詢用戶是不是在room裡面發送訊息
        const rooms = socket.rooms

        //將值取出來，尋找預設 id 外的值就能取到 join 的 id
        if( Object.keys(rooms).length <= 1 ){
          socket.emit('ServerToClientWarning','先選擇房間，才能發送訊息!')
          console.log('SOCKET.IO已提示客戶必須選擇房間才能發送訊息，並中斷本次溝通')
        } else {

          const message = sendMessageRequest.message
          const roomId = sendMessageRequest.roomId
          // const memberId = sendMessageRequest.memberId 

          const insertChatDataSql = `INSERT INTO \`chat_data\`( \`roomId\`, \`memberId\`, \`message\`) VALUES (?,?,?)`
          await db.queryAsync(insertChatDataSql,[roomId,'M20010002',message])

          const chatDataSql = `SELECT * FROM \`chat_data\` WHERE \`roomId\` = '${roomId}'`
          const chatData = await db.queryAsync(chatDataSql)

          console.log(`SOCKET.IO已取得房間編號${roomId}的訊息列表`)

          const ServerToClientMsgData = {
            roomId,
            memberId:'M20010002',
            chatData,
          }

          socket.emit('ServerToClientMsgData', ServerToClientMsgData)
          // io.sockets.in(room).emit('ServerToClientMsgData', ServerToClientMsgData)
          socket.to(roomId).emit('ServerToClientMsgData', ServerToClientMsgData)
          console.log(`SOCKET.IO已經發送訊息到客戶端`)
        }
      })
      
      socket.on('addRoomRequest', async addRoomRequest => {
        console.log('SOCKET.IO已接收到加入房間請求',addRoomRequest)
        const roomId = addRoomRequest.roomId
        const memberId = addRoomRequest.memberId

        //去資料庫查詢歷史訊息
        const chatDataSql = `SELECT * FROM \`chat_data\` WHERE \`roomId\` = '${roomId}'`
        const chatData = await db.queryAsync(chatDataSql)

        console.log('SOCKET.IO正在檢查是不是有其他房間',addRoomRequest)
        //檢查是不是還有進入其他房間
        const nowRoom = Object.keys(socket.rooms).find(room =>{
          return room !== socket.id
        })
        //有的話要先離開
        if(nowRoom){
            socket.leave(nowRoom)
          console.log('SOCKET.IO已將客戶強制離開房間號碼：'+nowRoom)
        } else {
          console.log('沒有其他房間，SOCKET.IO將客戶加入申請的房間')
        }

        const ServerToClientMsgData = {
          roomId,
          memberId:'M20010002',
          chatData,
        }
        
        socket.join(roomId)
        //(1)發送給在同一個 room 中除了自己外的 Client
        // socket.to(roomId).emit('addRoomResponse', `${memberId}已加入聊天室！`)
        //(2)發送給在 room 中所有的 Client
        io.sockets.in(roomId).emit('addRoomResponse', ServerToClientMsgData)
        console.log('SOCKET.IO已傳送該房間的歷史訊息給客戶端')
        
    })

    socket.on("disconnect", function (data) {
      console.log('a user disconnect')
      socket.disconnect();
    })
});

http.listen(5555, function(){
  console.log('SOCKET.io 伺服器已啟動 *:5555');
});