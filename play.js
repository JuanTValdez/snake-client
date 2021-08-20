const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

// passes movement commands into connect()
setupInput(connect());
