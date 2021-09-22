const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: '50542'
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log('Connection Established!');
    conn.write('Name: SJS');
    // setTimeout (() => {conn.write('Move: up')}, 500);
    setInterval(() => {
      //conn.write('Move: up');
    }, 500);
    setInterval(() => {
      //conn.write('Move: left');
    }, 600);
  })

  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  })
  conn.on('end', () => {
    console.log('You disconnected!');
  })

  return conn;
};

module.exports = {connect}