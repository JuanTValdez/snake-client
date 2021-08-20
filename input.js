const { moveUp, moveDown, moveRight, moveLeft } = require("./constants");

// Message sent to players upon moving.
const saySomething = "Say: I am moving ";
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (key) => {
    handleUserInput(key);
  });

  return stdin;
};

/*         INPUT COMMANDS        */
/*   Sends input to the server   */

const handleUserInput = (key) => {
  // W
  if (key === `\u0077`) {
    connection.write(saySomething + "up");
    return connection.write(moveUp);
  }

  // A
  if (key === `\u0061`) {
    connection.write(saySomething + "left");
    return connection.write(moveLeft);
  }

  //  S
  if (key === `\u0073`) {
    connection.write(saySomething + "down");
    return connection.write(moveDown);
  }

  // D
  if (key === `\u0064`) {
    connection.write(saySomething + "right");
    return connection.write(moveRight);
  }
  // ctrl + c
  if (key === `\u0003`) {
    process.exit();
  }

  /*     END INPUT COMMANDS     */
};

module.exports = { setupInput };
