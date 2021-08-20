// const net = require("net");
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
setupInput(connect());
// connect();

/* BEFORE EXPORTING TO INPUT */

/**
 * Establishes connection with the game server
 */

// handleUserInput();

// const handleUserInput = (key) => {
//   if (key === `\u0003`) {
//     process.exit();
//   }
// };

// /**
//  * Setup User Interface
//  * Specifically, so that we can handle user input via stdin
//  */
// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on("data", (key) => {
//     handleUserInput(key);
//   });
//   return stdin;
// };

/* AFTER EXPORTING TO INPUT */
