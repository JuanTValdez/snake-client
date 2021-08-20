const net = require("net");
const { IP, PORT } = require("./constants");
const name = "Name: JTV";

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", (data) => {
    console.log("Succesfully connected to game server");

    // Displays name to on server
    conn.write(name);
  });

  return conn;
};

module.exports = { connect };
