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

  // conn.on("data", (data) => {
  // conn.write("Move: up", data);

  // });
  conn.on("connect", (data) => {
    console.log("Succesfully connected to game server");
    conn.write(name);

    // setInterval(() => {
    //   conn.write("Move: up", data);
    // }, 500);
  });

  return conn;
};

module.exports = { connect };
