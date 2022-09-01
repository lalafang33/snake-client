const net = require("net");
const { setupInput } = require("./input");
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.50.206', // IP address here,
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  // const encoding = 
  conn.setEncoding("utf8");

  // process.stdin.on('data', (message) => {
  //   conn.write(message);
  // });

  // const connected = 
  conn.on('connect', () => {
    conn.write(`Name: SNK`);
    console.log('Successfully connected to game server');
   });

   const send = (command) => {
    conn.on('connect', () => {
      conn.write(command);
    })
  }

  //  conn.on('connect', () => {
  //   conn.write('I love this game!');
  //  });

   conn.on('connect', () => setupInput(conn));

  // conn.on('connect', () => {
  //   setInterval(()=> {
  //     conn.write("Move: up");
  //   },1000);
  //   setTimeout(() => {

  //   })
  // });

  // conn.on('connect', () => {
  //   setInterval(()=> {
  //     conn.write("Move: left");
  //   },2000);

  // });

  // const endSession = 
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
};

// console.log("Connecting ...");
// connect();

module.exports = {
  connect,
};

