const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log('Connection is successfully established.');
    conn.write('Name: AZH');
    conn.write('Say: Morning!');
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
};

module.exports = connect;