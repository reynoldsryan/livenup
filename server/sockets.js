const io = require('./index');

console.log('io in sockets: ', io);

module.exports = function(server, email) {

  io.sockets.on('connection', (socket) => {
    console.log('inside connection on server')
    socket.on('connect', () => {
      io.emit('new user connection', email)
    })
    socket.on('new data', (data) => {
      console.log('data from client-server: ', data);
      io.emit('client side data', data)
    })
  })
}

module.exports = function(somthing){
  console.log(somthing);
}
