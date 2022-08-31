const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.50.206', // IP address here,
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // process.stdin.on('data', (message) => {
  //   conn.write(message);
  // });

conn.on('connect', () => {
console.log('client is connected to server');
});

conn.on('end', () => {
console.log('you ded cuz you idled');
});
  return conn;
};

console.log("Connecting ...");
connect();