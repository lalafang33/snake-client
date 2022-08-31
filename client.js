const net = require("net");
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

// const connected = c
conn.on('connect', () => {
console.log('client is connected to server');
});

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
