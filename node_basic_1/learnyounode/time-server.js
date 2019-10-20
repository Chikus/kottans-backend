const net = require('net');
let port = 800;

//"2013-07-06 17:42"
const server = net.createServer(function (socket){
  var date = new Date();
  let str = date.getFullYear();
  str += '-'+date.getMonth();
  str += '-'+date.getDate();
  str += ' '+date.getHours();
  str += ':'+date.getMinutes();
  socket.end(str);
});
server.listen(port);

/*

'use strict'
const net = require('net')

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  const d = new Date()
  return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}

const server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
 */
