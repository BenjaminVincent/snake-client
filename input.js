

// const { MOVE_UP_KEY, 
//         MOVE_LEFT_KEY, 
//         MOVE_DOWN_KEY, 
//         MOVE_RIGHT_KEY } = require('./constants');

const { DIR } = require('./constants');
console.log(DIR.MOVE_DOWN_KEY);

let connection;

const setupInput = function(conn) {

  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);
  

}

const handleUserInput = function (key) {

    // exit program
    if (key === '\u0003') {
      
      console.log("*****Process ended*****");
      process.exit(); 
    }


    // Messages
    if (key === "c") {
      connection.write('Say: WEEOOU');
    }
    if (key === "v") {
      connection.write('Say: GET $$$');
    }

    // Movement
    if (key === DIR.MOVE_UP_KEY) {
      connection.write('Move: up');
    }
    if (key === DIR.MOVE_LEFT_KEY) {
      connection.write('Move: left');
    }
    if (key === DIR.MOVE_DOWN_KEY) {
      connection.write('Move: down');
    }
    if (key === DIR.MOVE_RIGHT_KEY) {
      connection.write('Move: right');
    }
}



module.exports = {
  setupInput
}