var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', (socket)=> {
      console.log('User Online');

      socket.on('canvas-data', (data)=> {
            socket.broadcast.emit('canvas-data', data);
            
      })
})
PORT=process.env.PORT
http.listen(PORT || 5000, () => {
    console.log("Started on :5000 ");
})