var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('YO~~');
});

io.on('connection', function(socket){
  //console.log(socket)
  console.log('a user connected');
      //監聽透過 connection 傳進來的事件
      socket.on('getMessage', message => {
        //回傳 message 給發送訊息的 Client
        socket.emit('getMessage', message)
      })
      socket.on('getMessageAll', message => {
        io.sockets.emit('getMessageAll', message)
    })
    socket.on('addRoom', room => {
      // console.log(room)
      socket.join(room)
      //(1)發送給在同一個 room 中除了自己外的 Client
      socket.to(room).emit('addRoom', '已有新人加入聊天室！')
      //(2)發送給在 room 中所有的 Client
      io.sockets.in(room).emit('addRoom', '已加入聊天室！')
      console.log(socket.rooms)
  })

});

http.listen(5555, function(){
  console.log('SOCKET.io 伺服器已啟動 *:5555');
});