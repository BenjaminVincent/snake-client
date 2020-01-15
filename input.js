
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
      connection.write('Say: GET$$$');
    }

    // Movement
    if (key === "w") {
      connection.write('Move: up');
    }
    if (key === "a") {
      connection.write('Move: left');
    }
    if (key === "s") {
      connection.write('Move: down');
    }
    if (key === "d") {
      connection.write('Move: right');
    }
}



module.exports = {
  setupInput
}