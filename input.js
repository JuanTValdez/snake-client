let connection;

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
    console.log("W has been pressed");
    return connection.write("Move: up");
  }

  // A
  if (key === `\u0061`) {
    console.log("A has been pressed!");
    return connection.write("Move: left");
  }

  //  S
  if (key === `\u0064`) {
    console.log("S has been pressed!");
    return connection.write("Move: right");
  }

  // D
  if (key === `\u0073`) {
    console.log("D has been pressed!");
    return connection.write("Move: down");
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
