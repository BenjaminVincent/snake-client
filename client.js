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

  conn.on('connect', () => {
    conn.write('Name: BEN');
  });

  setupInput();
  


  conn.setEncoding('utf8');

  return conn;
}


const setupInput = function() {

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  stdin.resume();
  


  return stdin;
}

const handleUserInput = function (key) {
    if (key === '\u0003') {
      console.log("*****Process ended*****");
      process.exit(); 
    }
}





module.exports = {
  connect
}