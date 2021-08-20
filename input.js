let connection;
const saySomething = "Say: I am moving ";
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // conn.on("connect", (data) => {
  stdin.on("data", (key) => {
    handleUserInput(key);
  });
  // });

  // stdin.on("data", (key) => {
  //   handleUserInput(key);
  // });
  return stdin;
};

const handleUserInput = (key) => {
  // // W
  if (key === `\u0077`) {
    // console.log("W has been pressed");
    connection.write(saySomething + "up");
    return connection.write("Move: up");
  }

  // A
  if (key === `\u0061`) {
    // console.log("A has been pressed!");
    connection.write(saySomething + "left");
    return connection.write("Move: left");
  }

  //  S
  if (key === `\u0073`) {
    // console.log("S has been pressed!");
    connection.write(saySomething + "down");
    return connection.write("Move: down");
  }

  // D
  if (key === `\u0064`) {
    // console.log("D has been pressed!");
    connection.write(saySomething + "right");
    return connection.write("Move: right");
  }
  // ctrl + c
  if (key === `\u0003`) {
    console.log("ctrl + c has been pressed");
    process.exit();
  }
};

module.exports = { setupInput };

// const handleUserInput = function (key) {
//   const stdin = process.stdin;

//   stdin.on("data", (key) => {
//     if (key === "\u0003") {
//       process.exit();
//     }
//   });
// };

// const setupInput = function (conn) {
//   connection = conn;

//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   // stdin.on("data", (key) => {
//   //   handleUserInput(key);
//   // });
//   return stdin;
// };
