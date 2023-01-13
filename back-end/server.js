const express = require("express");

const server = express();

server.use("/", require("./routes/routeServer"));

server.listen(5200);
