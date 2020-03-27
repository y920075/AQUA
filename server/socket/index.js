const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('YO~~');
});

let nowRooms = []

io.on('connection', function(socket){
      console.log('a user connected');

      //socket監聽客戶端傳送到服務器訊息事件
      socket.on('ClientToServerMsg', sendMessageRequest => {

        //取得 rooms 物件，查詢用戶是不是在room裡面發送訊息
        const rooms = socket.rooms

        //將值取出來，尋找預設 id 外的值就能取到 join 的 id
        if( Object.keys(rooms).length <= 1 ){
          socket.emit('ServerToClientWarning','先選擇房間，才能發送訊息!')
        } else {
          const message = sendMessageRequest.message
          const roomId = sendMessageRequest.roomId
          socket.emit('ServerToClientMsgForMySelf', message)
          socket.to(roomId).emit('ServerToClientMsgForAll', message)
        }
      })
      
      socket.on('addRoom', addRoomRequest => {

        const roomId = addRoomRequest.roomId
        const memberId = addRoomRequest.memberId


        if ( roomId === '' ){
          console.log('沒有房間ID')
        }
        if ( memberId === '' ) {
          console.log('沒有會員ID')
        }
        const nowRoom = Object.keys(socket.rooms).find(room =>{
          return room !== socket.id
        })
        //有的話要先離開
        if(nowRoom){
            socket.leave(nowRoom)
        }
        socket.join(roomId)
        //(1)發送給在同一個 room 中除了自己外的 Client
        socket.to(roomId).emit('addRoom', `${memberId}已加入聊天室！`)
        //(2)發送給在 room 中所有的 Client
        // io.sockets.in(roomId).emit('addRoom', '您已加入聊天室！')
        
    })

});

http.listen(5555, function(){
  console.log('SOCKET.io 伺服器已啟動 *:5555');
});