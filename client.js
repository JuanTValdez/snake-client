const net = require("net");
const name = "Name: JTV";

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    console.log("Succesfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write("Name:" + name);
  });

  return conn;
};

module.exports = connect;
