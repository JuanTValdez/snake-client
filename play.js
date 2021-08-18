// const net = require("net");
const connect = require("./client");
const setupInput = require("./input");
/**
 * Establishes connection with the game server
 */

// handleUserInput();

console.log("Connecting ...");
connect();
setupInput();
