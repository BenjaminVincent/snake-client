const net = require('net');


/*
  Estabilishes connection with the game server

*/

const connect = function() {
  const conn = net.createConnection({
    host: '10.0.13.4',
    port: 50541
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });

  conn.on('connect', () =>{
    conn.write('Name: BEN');
  });

  conn.setEncoding('utf8');

  return conn;
}



module.exports = {
  connect
}