const net = require("net");
const connect = require("./client");

/**
 * Establishes connection with the game server
 */
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = process.stdin.on("data", (key) => {
  process.stdout.write(key);
});

setupInput();
console.log("Connecting ...");
connect();
