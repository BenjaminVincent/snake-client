const net = require('net');
const { IP, PORT, NAME } = require('./constants');


/*
  Estabilishes connection with the game server

*/

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });

  conn.on('connect', () => {
    conn.write('Name: ' + NAME);
  });


  conn.setEncoding('utf8');

  return conn;
}



module.exports = {
  connect
}