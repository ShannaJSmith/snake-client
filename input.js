const { createConnection } = require("net");
const {keyMappings} = require('./constants');
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
  if (data === "\u0003") {
    process.exit();
  } else if (data in keyMappings) {
    connection.write(keyMappings[data]);
  }
  // } else if (data === 'w') {
  //   console.log("UP");
  //   connection.write("Move: up");
  // } else if (data === 'a') {
  //   console.log("LEFT");
  //   connection.write("Move: left");
  // } else if (data === 's') {
  //   console.log("DOWN");
  //   connection.write("Move: down");
  // } else if (data === 'd') {
  //   console.log("RIGHT");
  //   connection.write("Move: right");
  // } else if (data === 'y') {
  //   connection.write("Say: YOLO");
  // }
};

module.exports = {setupInput};