const net = require("net");
const connect = require("./client");

/**
 * Establishes connection with the game server
 */
const handleUserInput = function () {
  process.stdin.on("data", (key) => {
    process.stdout.write(".");
  });
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  return stdin;
};

handleUserInput();
setupInput();
console.log("Connecting ...");
connect();
